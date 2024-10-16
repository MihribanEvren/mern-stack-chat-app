function Login() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto min-w-96">
      <div className="w-full p-6 bg-gray-400 bg-opacity-0 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg">
        <h1 className="text-3xl font-semibold text-center text-pink-100">
          Login
          <span className="text-pink-800"> Chat App</span>
        </h1>

        <form>
          <div>
            <label className=" label">
              <span className="text-base text-pink-50 label-text">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full h-10 input input-bordered"
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
            />
          </div>
          <a
            href="#"
            className="inline-block px-2 mt-2 text-sm text-pink-100 hover:underline hover:text-pink-50"
          >
            {"Don't"} have an account?
          </a>

          <div>
            <button className="mt-2 btn btn-block btn-sm">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
