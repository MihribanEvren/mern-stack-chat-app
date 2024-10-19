import useGetMessages from '../../hooks/useGetMessages';
import MessageSkeleton from '../skeletons/MessageSkeleton';
import Message from './Message';

function Messages() {
  const { messages, loading } = useGetMessages();
  console.log(messages);
  return (
    <div className="flex-1 px-4 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <Message key={message._id} message={message} />
        ))}

      {loading && [...Array(4)].map((item) => <MessageSkeleton key={item} />)}

      {!loading && messages.length === 0 && (
        <p className="text-center text-gray-200">
          Send a message to start the chat
        </p>
      )}
    </div>
  );
}

export default Messages;
