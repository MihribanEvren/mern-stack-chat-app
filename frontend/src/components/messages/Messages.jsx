import { useEffect, useRef } from 'react';
import useGetMessages from '../../hooks/useGetMessages';
import MessageSkeleton from '../skeletons/MessageSkeleton';
import Message from './Message';
import useListenMessages from '../../hooks/useListenMessages';

function Messages() {
  const { messages, loading } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, [messages]);

  return (
    <div className="flex-1 px-4 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}

      {loading &&
        [...Array(4)].map((_, index) => (
          <MessageSkeleton key={`skeleton-${index}`} />
        ))}

      {!loading && messages.length === 0 && (
        <p className="text-center text-gray-200">
          Send a message to start the chat
        </p>
      )}
    </div>
  );
}

export default Messages;
