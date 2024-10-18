import { BsSend } from 'react-icons/bs';
import { MdOutlineEmojiEmotions } from 'react-icons/md';

function MessageInput() {
  return (
    <form className="px-4 my-3">
      <div className="relative w-full">
        <input
          type="text"
          className="block w-full p-3 pl-12 text-sm text-white bg-gray-700 border border-gray-600 rounded-full "
          placeholder="Send a message"
        />
        <button
          type="button"
          className="absolute inset-y-0 flex items-center pl-3 text-white start-0"
        >
          <MdOutlineEmojiEmotions className="w-6 h-6" />
        </button>
        <button
          type="submit"
          className="absolute inset-y-0 flex items-center text-white end-0 pe-3"
        >
          <BsSend />
        </button>
      </div>
    </form>
  );
}

export default MessageInput;