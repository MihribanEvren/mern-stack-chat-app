import { useEffect } from 'react';
import useConversation from '../../zustand/useConversation';
import MessageInput from './MessageInput';
import Messages from './Messages';
import { TiMessages } from 'react-icons/ti';
import { IoArrowBack } from 'react-icons/io5';
import { useAuthContext } from '../../context/AuthContext';

function MessageContainer() {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div
      className={`md:min-w-[450px] flex flex-col ${
        selectedConversation ? 'fixed inset-0 bg-violet-400 md:relative' : ''
      } md:flex`}
    >
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="flex items-center px-4 py-2 mb-2 bg-slate-800">
            <button
              onClick={() => setSelectedConversation(null)}
              className="mr-2 text-gray-200 md:hidden"
            >
              <IoArrowBack size={24} />
            </button>
            <div>
              <span className="text-gray-400 label-text">To:</span>{' '}
              <span className="font-bold text-gray-200">
                {selectedConversation.fullName}
              </span>
            </div>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}

export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex flex-col items-center gap-2 px-4 font-semibold text-center text-gray-200 sm:text-lg md:text-xl">
        <p>Welcome 🌞 {authUser.fullName} 🫧</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl text-center md:text-6xl" />
      </div>
    </div>
  );
};
