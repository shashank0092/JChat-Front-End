import "./Typing.css"
const Typing = () => {
  return (
    <>
      <div className="bg-chat-child-container w-fit p-4 px-8 rounded-lg text-white flex items-center justify-center gap-3 py-6">
        <div className="w-2.5 h-2.5 bg-white rounded-full animate-dot1"></div>
        <div className="w-2.5 h-2.5 bg-white rounded-full animate-dot2 mx-1"></div>
        <div className="w-2.5 h-2.5 bg-white rounded-full animate-dot3"></div>
      </div>
    </>
  );
};

export default Typing;
