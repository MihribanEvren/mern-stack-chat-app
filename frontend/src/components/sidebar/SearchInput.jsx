import { IoSearchSharp } from 'react-icons/io5';

function SearchInput() {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="rounded-full input input-bordered"
      />
      <button type="submit" className="text-white bg-violet-400 btn btn-circle">
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
}

export default SearchInput;
