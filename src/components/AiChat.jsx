import { useState } from "react";
import axios from "axios";

const AiChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input.trim() };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await axios.post("http://localhost:4000//api/chat", {
        message: input,
      });
      const botResponse = { sender: "bot", text: response.data.reply };
      setMessages((prev) => [...prev, botResponse]);
    } catch {
      const errorResponse = { sender: "bot", text: "Something went wrong!" };
      setMessages((prev) => [...prev, errorResponse]);
    }

    setInput("");
  };

  return (
    <>
      <button
        type="button"
        className="fixed right-[-5px] bottom-32 z-40 text-white"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="hs-offcanvas-example"
        data-hs-overlay="#hs-offcanvas-example"
      >
        <div className="p-3 rounded-[50%_0%_0%_50%] border-4 border-white bg-[#4f9451]">
          <svg
            className="w-5 h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </button>

      <div
        id="hs-offcanvas-example"
        className="hs-overlay hs-overlay-open:translate-x-0 hidden -translate-x-full fixed top-0 start-0 transition-all duration-300 transform h-full sm:max-w-xs w-[80%] z-[80] bg-white border-e   hs-overlay-open:flex flex-col justify-between"
        role="dialog"
        tabIndex="-1"
        aria-labelledby="hs-offcanvas-example-label"
      >
        <div>
          <div className="flex justify-between items-center py-3 px-4 border-b ">
            <h3
              id="hs-offcanvas-example-label"
              className="font-bold text-gray-800 "
            >
              Chat with HealthBot
            </h3>
          </div>
          <div className="p-4 overflow-auto">
            <ul className="space-y-5 max-h-[75vh] my-chat">
              {messages.map((msg, index) => (
                <li
                  key={index}
                  className={`max-w-lg ${
                    msg.sender === "user" ? "ms-auto flex justify-end" : "flex"
                  } gap-x-2`}
                >
                  <div
                    className={`p-4 rounded-2xl ${
                      msg.sender === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-white border border-gray-200 "
                    }`}
                  >
                    {msg.text}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <form
          onSubmit={sendMessage}
          className="flex items-center px-3 py-2 rounded-lg bg-gray-50  mt-3 gap-1"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Your Message..."
            className="peer py-2 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-[#4f9451] focus:ring-0"
            required
          />
          <button
            type="submit"
            className="inline-flex justify-center p-2 text-[#4f9451] rounded-full cursor-pointer hover:bg-[#4f94512c]"
          >
            <svg
              className="w-5 h-5 rotate-90"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
            </svg>
          </button>
        </form>
      </div>
    </>
  );
};

export default AiChat;
