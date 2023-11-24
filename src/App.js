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
// import { sendMsgToOpenAI } from "./openai";

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
    setMessages([...messages, { text, isBot: true }]);
    const res = "Hello! How can I assist you today?";
    setMessages([
      ...messages,
      // "when is the next full moon"
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
    const res =
      "Programming is the process of designing and building executable computer code to accomplish a specific task or solve a particular problem. It involves creating a set of instructions that a computer can interpret and execute. Programmers use programming languages to write these instructions, which are then translated into machine code that the computer can understand and execute. Programming can be broadly categorized into various types, including: Procedural Programming: Involves writing a list of instructions for the computer to follow. C and Pascal are examples of procedural programming languages. Object-Oriented Programming (OOP): Organizes code into objects, which encapsulate data and behavior. Java and Python are examples of object-oriented programming languages. Functional Programming: Focuses on the use of functions and avoids changing state and mutable data. Languages like Haskell and Lisp are associated with functional programming. Scripting Languages: Interpreted languages often used for automating tasks or writing quick programs. Examples include Python, Ruby, and JavaScript. Low-Level Programming: Involves writing code that is closer to the machine code and hardware. Assembly language is an example of a low-level programming language. High-Level Programming: Provides abstractions that make it easier to write complex programs. Languages like Python, Java, and C++ are considered high-level languages. The process of programming typically involves the following steps: Problem Definition: Clearly understanding the problem that needs to be solved. Algorithm Design: Planning the logical steps to solve the problem. Coding: Writing the actual code based on the chosen algorithm. Testing: Ensuring the code works as expected by running it with different inputs.  Debugging: Identifying and fixing errors in the code. Documentation: Writing documentation to explain how the code works and how to use it. Programming is a fundamental skill in computer science and is used in various fields, including software development, data science, artificial intelligence, web development, and more. As technology continues to advance, programming remains a crucial skill for individuals looking to work in the rapidly evolving world of computing";
    setMessages([
      ...messages,
      { text, isBot: false },
      { text: res, isBot: true },
    ]);
  };
  const queryHandle = async (e) => {
    const text = e.target.value;
    setMessages([...messages, { text, isBot: false }]);
    const res =
      "Using an API (Application Programming Interface) involves making requests to a server to access its functionality and retrieve or send data. Here are the general steps to use an API: Understand the API Documentation: API providers usually offer documentation that explains the available endpoints, request methods, authentication methods, and response formats.";
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
              onClick={queryHandle}
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
