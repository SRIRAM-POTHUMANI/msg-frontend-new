import React, { useState, useEffect, useRef } from "react";
import "./ChatPage.css";
import CachedIcon from "@material-ui/icons/Cached";
import SendIcon from "@material-ui/icons/Send";
import { InsertEmoticon } from "@material-ui/icons";
import SimpleDialogDemo from "./SimpleDialogDemo";
import axios from "./axios";
import jwt_decode from "jwt-decode";

const token = localStorage.getItem("token");
const decoded = jwt_decode(token);

const existingUser = decoded.existUser.name;

function ChatPage() {
  //chat names
  const [username, setUsername] = useState("");
  const [recievername, setrecievername] = useState("");
  const [messages, setMessages] = useState([]);
  // const [userList, setuserList] = useState([]);
  // setUsername(existingUser);
  //set username
  // useEffect(async () => {
  //   await setUsername(existingUser);
  //   // setrecievername(prompt("Please enter to name"));
  // }, []);

  // msg card class
  const [input, setinput] = useState([]);
  const msgsender = "card chat_reciever chat_message ";
  const msgreciever = "card chat_message";
  //sync msg
  const sync = async () => {
    await axios.get("/messages/sync").then((res) => {
      setMessages(res.data);
      //  secs += 99999;
    });
  };
  useEffect(async () => {
    await sync()
    scrollToBottom();
  }, []);


  //fetch user list
  // const userlist = async () => {
  //   await axios.get("/users/userlist").then((res) => {
  //     setuserList(res.data);
  //   });
  // };

  //scroll to bottom
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    await axios.post("/messages/new", {
      message: input,
      name: username,
      toname: recievername,
      timestamp: Date(),
      recieved: true,
    });
    setinput("");
    scrollToBottom();
  };
  // sync();

  // const privateMessages1 = messages.filter(
  //   (msg) =>
  //     (username === msg.name && recievername === msg.toname) ||
  //     (username === msg.toname && recievername === msg.name)
  // );
  console.log(messages);
  return (
    <div className="card" style={{ height: "100vh", overflow: "hidden" }}>
      {/* header */}
      <div
        className="card-header fixed-top d-block p-2 bg-primary text-white"
        style={{ height: "5vh", backgroundColor: "blue" }}
      >
        <div className="d-flex flex-row bd-highlight mb-3">
          <div className="p-0 bd-highlight fw-bold col-1 order-first ">
            {/* <SpeakerNotesIcon> */}
            <SimpleDialogDemo />
            {/* </SpeakerNotesIcon>  */}
          </div>
          <div className="p-0 bd-highlight fw-bold col-10 user-select-none">
            {existingUser}
          </div>
          <div className="p-0 bd-highlight fw-bold col-1 order-last">
            <CachedIcon onClick={sync} />
          </div>
        </div>
      </div>
      {/* body */}
      <div
        className="card-body overflow-auto user-select-none d-flex flex-column"
        style={{
          height: "90vh",
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
      >
        {/* recieved message */}
        {messages.map((mes) => {
          return (
            <div
              className={existingUser === mes.name ? msgsender : msgreciever}
              style={{
                marginBottom: "0.5rem",
                marginTop: "0.5rem",
                textAlign: "left",
              }}
            >
              <div className="card-header">{mes.name}</div>
              <div className="card-body" style={{ padding: ".2rem .5rem" }}>
                <blockquote className="blockquote mb-0">
                  <p>{mes.message}</p>
                  <footer
                    className="footer d-flex justify-content-between"
                    style={{ fontSize: "small" }}
                  >
                    <div>day</div>
                    <div ref={messagesEndRef}>
                      {mes.timestamp.split(" ")[4].slice(0, -3)}
                    </div>
                    {/* console.log(mytime.split(' ')[4]) */}
                  </footer>
                </blockquote>
              </div>
            </div>
          );
        })}

        {/* sent message */}
        {/* <div
          className="card float-end chat_reciever chat_message"
          style={{
            marginBottom: "0.5rem",
            marginTop: "0.5rem",
            textAlign: "left",
          }}
        >
          <div className="card-header">Sender name</div>
          <div className="card-body" style={{ padding: ".2rem .5rem" }}>
            <blockquote className="blockquote mb-0">
              <p>A well-known quote, contained in a blockquote element.</p>
              <footer
                className="blockquote-footer"
                style={{ textAlign: "right" }}
              >
                <cite title="time">6:50pm</cite>
              </footer>
            </blockquote>
          </div>
        </div  ref={messagesEndRef} > */}
      </div>

      {/* footer */}
      <div
        className="card-footer fixed-bottom d-flex justify-content-between p-2 bd-highlight bg-primary text-white"
        style={{ height: "5vh", backgroundColor: "blue" }}
      >
        <InsertEmoticon style={{ marginRight: "5px" }} />
        <div
          className="input-group flex-nowrap"
          style={{ margin: "0px", border: "0px" }}
        >
          <input
            type="text"
            className="form-control"
            placeholder="Enter a new message"
            onChange={(e) => setinput(e.target.value)}
            aria-label="newmessage"
            aria-describedby="newmessage"
            style={{ paddingLeft: "3px", margin: "0px", border: "0px" }}
          />
          <button
            onClick={sendMessage}
            style={{ display: "none" }}
            type="submit"
          ></button>
        </div>
        <SendIcon style={{ marginLeft: "5px" }} />
      </div>
    </div>
  );
}

export default ChatPage;
