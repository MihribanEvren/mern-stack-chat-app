import { useState } from 'react';
import { BsSend } from 'react-icons/bs';
import { MdOutlineEmojiEmotions } from 'react-icons/md';
import useSendMessage from '../../hooks/useSendMessage';

function MessageInput() {
  const [message, setMessage] = useState('');
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage('');
  };
  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="relative w-full">
        <input
          type="text"
          className="block w-full p-3 pl-12 text-sm text-white border border-gray-600 rounded-full bg-slate-800 "
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
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
          {loading ? (
            <div className="loading loading-spinner"></div>
          ) : (
            <BsSend />
          )}
        </button>
      </div>
    </form>
  );
}

export default MessageInput;
