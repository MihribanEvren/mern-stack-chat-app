function Conversation() {
  return (
    <>
      <div className="flex items-center gap-2 p-2 py-1 rounded cursor-pointer hover:bg-violet-500">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src="https://cdn1.iconfinder.com/data/icons/user-interface-2311/24/picture_photo_image_image_placeholder_thumbnail-512.png"
              alt="user avatar"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between gap-3">
            <p className="font-bold text-gray-200">Jane Doe</p>
            <span className="text-xl">✨</span>
          </div>
        </div>
      </div>

      <div className="h-1 py-0 my-0 divider"></div>
    </>
  );
}

export default Conversation;
