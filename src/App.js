import React from "react";
import "./App.css";
import gptLogo from "./assets/chatgpt.svg";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import sendBtn from "./assets/send.svg";
import userIcon from './assets/user-icon.png'
import gptImgLogo from './assets/chatgptLogo.svg'

function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="Logo" className="logo" />
            <span className="brand">ChatGPT</span>
          </div>
          <button className="midBtn">
            <img src={addBtn} alt="" className="addBtn" /> New Chat{" "}
          </button>
          <div className="upperSideButtom">
            <button className="query">
              <img src={msgIcon} alt="" className="Query" /> What is Programming
              ?{" "}
            </button>
            <button className="query">
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
          <div className="chat">
            <img className="chatImg" src={userIcon} alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing alit.Obcaecati sint nobis excepturi optio voluptas nemo ex officlis eos quam illo?</p>
          </div>
          <div className="chat">
            <img className="chatImg" src={gptImgLogo} alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, officia laborum provident tempore quisquam pariatur. Unde impedit libero, officiis vero pariatur minima iure. Rerum numquam sed laboriosam! Earum, dignissimos! Quaerat repellendus temporibus voluptas obcaecati consequatur repudiandae modi, mollitia qui molestias ex similique praesentium perspiciatis deserunt! Eveniet itaque culpa consequuntur eius exercitationem ipsum perferendis libero beatae somnis expedita? Magnam similique libero in ducimus omnis ratione inventore quia quae, aliquam consequuntur commodi distinctio minus recusandae consectetur quibusdam ad officiis officia tenetur maiores dolorum? Quae repudiandae, excepturi soluta mollitia facere cum. Repudiandae doloribus provident animi fugiat a sunt porro maiores, modi odit quis.</p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" name="" id="" placeholder="Send a message" />
            <button className="send">
              <img src={sendBtn} alt="Send" />
            </button>
          </div>
          <p>ChatGPT may produce inaccurate information about people, places, or facts. ChatGPT August 20 version.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
