import { Link } from 'react-router-dom';
import GenderCheckbox from './GenderCheckbox';
import { useState } from 'react';
import useSignup from '../../hooks/useSignup';

function SignUp() {
  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: '',
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center mx-auto min-w-96">
      <div className="w-full p-6 bg-gray-400 bg-opacity-0 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg">
        <h1 className="text-3xl font-semibold text-center text-pink-100">
          Sign Up
          <span className="text-pink-800"> Chat App</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className=" label">
              <span className="text-base text-pink-50 label-text">
                Full Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Jane Doe"
              className="w-full h-10 input input-bordered"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>

          <div>
            <label className=" label">
              <span className="text-base text-pink-50 label-text">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="janedoe"
              className="w-full h-10 input input-bordered"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>

          <div>
            <label className=" label">
              <span className="text-base text-pink-50 label-text">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full h-10 input input-bordered"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base text-pink-50 label-text">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full h-10 input input-bordered"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          <GenderCheckbox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />

          <Link
            to="/login"
            className="inline-block mt-2 text-sm text-pink-100 hover:underline hover:text-pink-50"
          >
            Already have an account?
          </Link>

          <div>
            <button
              className="mt-2 border btn btn-block btn-sm border-slate-700"
              disabled={loading}
            >
              {loading ? (
                <span className="lodaing loading-spinner"></span>
              ) : (
                'Sign Up'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
