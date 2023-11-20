import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import gptLogo from "./assets/chatgpt.svg";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import sendBtn from "./assets/send.svg";
import userIcon from "./assets/user-icon.png";
import gptImgLogo from "./assets/chatgptLogo.svg";
import { sendMsgToOpenAI } from "./openai";

function App() {
  const msgEnd = useRef(null);

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "Hi, I am ChatGPT, a state-of-the-art language model developed by OpenAl. I'm designed to understand and generate human-like text based on the input I receive. You can ask me questions, have conversations, seek information, or even request assistance with various tasks. Just let me know how I can help you!",
      isBot: true,
    },
  ]);

  useEffect(() => {
    msgEnd.current.scrollIntoView();
  }, [messages]);

  const handleSend = async () => {
    const text = input;
    setInput("");
    setMessages([...messages, { text, isBot: false }]);
    const res = await sendMsgToOpenAI(input);
    setMessages([
      ...messages,
      { text, isBot: false },
      { text: res, isBot: true },
    ]);
  };

  const handleEnter = async (e) => {
    if (e.key === "Enter") await handleSend();
  };

  const handleQuery = async (e) => {
    const text = e.target.value;
    setMessages([...messages, { text, isBot: false }]);
    const res = await sendMsgToOpenAI(input);
    setMessages([
      ...messages,
      { text, isBot: false },
      { text: res, isBot: true },
    ]);
  };

  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="Logo" className="logo" />
            <span className="brand">ChatGPT</span>
          </div>
          <button
            className="midBtn"
            onClick={() => {
              window.location.reload();
            }}
          >
            <img src={addBtn} alt="" className="addBtn" /> New Chat{" "}
          </button>
          <div className="upperSideButtom">
            <button
              className="query"
              onClick={handleQuery}
              value={"What is Programming ?"}
            >
              <img src={msgIcon} alt="" className="Query" /> What is Programming
              ?{" "}
            </button>
            <button
              className="query"
              onClick={handleQuery}
              value={"How to use an API ?"}
            >
              <img src={msgIcon} alt="" className="Query" /> How to use an API ?{" "}
            </button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt="" className="listitemImg" />
            Home
          </div>
          <div className="listItems">
            <img src={saved} alt="" className="listitemImg" />
            Saved
          </div>
          <div className="listItems">
            <img src={rocket} alt="" className="listitemImg" />
            Upgrade to Pro
          </div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          {messages.map((message, i) => (
            <div key={i} className={message.isBot ? "chat bot" : "chat"}>
              <img
                className="chatImg"
                src={message.isBot ? gptImgLogo : userIcon}
                alt=""
              />
              {message.text}
              <p className="txt"></p>
            </div>
          ))}
          <div ref={msgEnd}></div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input
              type="text"
              placeholder="Send a message"
              value={input}
              onKeyDown={handleEnter}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <button className="send">
              <img src={sendBtn} alt="Send" onClick={handleSend} />
            </button>
          </div>
          <p>
            ChatGPT may produce inaccurate information about people, places, or
            facts. ChatGPT August 20 version.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
