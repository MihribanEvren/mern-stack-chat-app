function Message({ message }) {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src={
              'https://cdn0.iconfinder.com/data/icons/communication-456/24/account_profile_user_contact_person_avatar_placeholder-512.png'
            }
            alt="Tailwind CSS chat bubble component"
          />
        </div>
      </div>
      <div className="text-white bg-indigo-500 chat-bubble">
        Hi! What is upp?
      </div>
      <div className="items-center gap-1 text-xs text-white opacity-50 chat-footer">
        12.42
      </div>
    </div>
  );
}

export default Message;
