export default function Chat() {
  return (
    <div className="flex flex-col h-full max-w-md mx-auto bg-slate-800 rounded-lg shadow-lg">
      {/* Chat Header */}
      <div className="flex items-center justify-between p-4 bg-slate-700 rounded-t-lg">
        <h2 className="text-lg font-semibold text-white">Chat</h2>
        <button className="text-gray-400 hover:text-white">
          {/* Icon for closing or additional options */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 p-4 overflow-y-auto bg-slate-900">
        <div className="space-y-4">
          {/* Example of incoming message */}
          <div className="flex items-start">
            <div className="bg-slate-700 text-white p-3 rounded-lg max-w-xs">
              Hello! How can I help you today?
            </div>
          </div>

          {/* Example of outgoing message */}
          <div className="flex justify-end items-start">
            <div className="bg-blue-600 text-white p-3 rounded-lg max-w-xs">
              Hi! I have a question about my order.
            </div>
          </div>

          {/* Add more messages here */}
        </div>
      </div>

      {/* Input Area */}
      <div className="p-4 bg-slate-700 rounded-b-lg">
        <form className="flex">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 text-white bg-slate-800 rounded-lg focus:outline-none"
          />
          <button
            type="submit"
            className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
