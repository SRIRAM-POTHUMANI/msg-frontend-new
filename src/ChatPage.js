import React, {useState} from "react";
import "./ChatPage.css";
import SpeakerNotesIcon from "@material-ui/icons/SpeakerNotes";
import { InsertEmoticon, MicNone } from "@material-ui/icons";
import SimpleDialogDemo from "./SimpleDialogDemo";
// import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function ChatPage() {
  // const [input, setinput] = useState([]);
  // const sendMessage = async (e) => {
  //   e.preventDefault();
    // await axios.post("/messages/new", {
    // message: input,
    // name: name,
    // toname: toName,
    // timestamp: Date(),
    // recieved: true,
    // });
    // setinput("");
    // scrollToBottom();
  // };

  return (
    <div class="card" style={{ height: "100vh", overflow: "hidden" }}>
      {/* header */}
      <div
        class="card-header fixed-top d-block p-2 bg-primary text-white"
        style={{ height: "5vh", backgroundColor: "blue" }}
      >
        <div class="d-flex flex-row bd-highlight mb-3">
          <div class="p-0 bd-highlight">
            {/* <SpeakerNotesIcon> */}
              <SimpleDialogDemo/>
              {/* </SpeakerNotesIcon> */}
          </div>
          <div class="p-0 bd-highlight mx-auto fw-bold user-select-none">
            Chat Name
          </div>
        </div>
      </div>
      {/* body */}
      <div
        class="card-body overflow-auto user-select-none"
        style={{
          height: "90vh",
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
      >
        {/* recieved message */}
        <div
          class="card float-start col-8"
          style={{
            marginBottom: "0.5rem",
            marginTop: "0.5rem",
            textAlign: "left",
          }}
        >
          <div class="card-header">Reciever name</div>
          <div class="card-body" style={{ padding: ".2rem .5rem" }}>
            <blockquote class="blockquote mb-0">
              <p>A well-known quote, contained in a blockquote element.</p>
              <footer class="blockquote-footer" style={{ textAlign: "right" }}>
                <cite title="Source Title">8:40am</cite>
              </footer>
            </blockquote>
          </div>
        </div>
        {/* sent message */}
        <div
          class="card float-end col-8"
          style={{
            marginBottom: "0.5rem",
            marginTop: "0.5rem",
            textAlign: "left",
          }}
        >
          <div class="card-header">Sender name</div>
          <div class="card-body" style={{ padding: ".2rem .5rem" }}>
            <blockquote class="blockquote mb-0">
              <p>A well-known quote, contained in a blockquote element.</p>
              <footer class="blockquote-footer" style={{ textAlign: "right" }}>
                <cite title="time">6:50pm</cite>
              </footer>
            </blockquote>
          </div>
        </div>
        {/* recieved message */}
        <div
          class="card float-start col-8"
          style={{
            marginBottom: "0.5rem",
            marginTop: "0.5rem",
            textAlign: "left",
          }}
        >
          <div class="card-header">Reciever name</div>
          <div class="card-body" style={{ padding: ".2rem .5rem" }}>
            <blockquote class="blockquote mb-0">
              <p>A well-known quote, contained in a blockquote element.</p>
              <footer class="blockquote-footer" style={{ textAlign: "right" }}>
                <cite title="Source Title">8:40am</cite>
              </footer>
            </blockquote>
          </div>
        </div>
        {/* sent message */}
        <div
          class="card float-end col-8"
          style={{
            marginBottom: "0.5rem",
            marginTop: "0.5rem",
            textAlign: "left",
          }}
        >
          <div class="card-header">Sender name</div>
          <div class="card-body" style={{ padding: ".2rem .5rem" }}>
            <blockquote class="blockquote mb-0">
              <p>A well-known quote, contained in a blockquote element.</p>
              <footer class="blockquote-footer" style={{ textAlign: "right" }}>
                <cite title="time">6:50pm</cite>
              </footer>
            </blockquote>
          </div>
        </div>
        {/* recieved message */}
        <div
          class="card float-start col-8"
          style={{
            marginBottom: "0.5rem",
            marginTop: "0.5rem",
            textAlign: "left",
          }}
        >
          <div class="card-header">Reciever name</div>
          <div class="card-body" style={{ padding: ".2rem .5rem" }}>
            <blockquote class="blockquote mb-0">
              <p>A well-known quote, contained in a blockquote element.</p>
              <footer class="blockquote-footer" style={{ textAlign: "right" }}>
                <cite title="Source Title">8:40am</cite>
              </footer>
            </blockquote>
          </div>
        </div>
        {/* sent message */}
        <div
          class="card float-end col-8"
          style={{
            marginBottom: "0.5rem",
            marginTop: "0.5rem",
            textAlign: "left",
          }}
        >
          <div class="card-header">Sender name</div>
          <div class="card-body" style={{ padding: ".2rem .5rem" }}>
            <blockquote class="blockquote mb-0">
              <p>A well-known quote, contained in a blockquote element.</p>
              <footer class="blockquote-footer" style={{ textAlign: "right" }}>
                <cite title="time">6:50pm</cite>
              </footer>
            </blockquote>
          </div>
        </div>
        {/* recieved message */}
        <div
          class="card float-start col-8"
          style={{
            marginBottom: "0.5rem",
            marginTop: "0.5rem",
            textAlign: "left",
          }}
        >
          <div class="card-header">Reciever name</div>
          <div class="card-body" style={{ padding: ".2rem .5rem" }}>
            <blockquote class="blockquote mb-0">
              <p>A well-known quote, contained in a blockquote element.</p>
              <footer class="blockquote-footer" style={{ textAlign: "right" }}>
                <cite title="Source Title">8:40am</cite>
              </footer>
            </blockquote>
          </div>
        </div>
        {/* sent message */}
        <div
          class="card float-end col-8"
          style={{
            marginBottom: "0.5rem",
            marginTop: "0.5rem",
            textAlign: "left",
          }}
        >
          <div class="card-header">Sender name</div>
          <div class="card-body" style={{ padding: ".2rem .5rem" }}>
            <blockquote class="blockquote mb-0">
              <p>A well-known quote, contained in a blockquote element.</p>
              <footer class="blockquote-footer" style={{ textAlign: "right" }}>
                <cite title="time">6:50pm</cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
      <div
        class="card-footer fixed-bottom d-flex justify-content-between p-2 bd-highlight bg-primary text-white"
        style={{ height: "5vh", backgroundColor: "blue" }}
      >
        <InsertEmoticon style={{ marginRight: "5px" }} />
        <div
          className="input-group flex-nowrap"
          style={{ margin: "0px", border: "0px" }}
        >
          <input
            type="text"
            class="form-control"
            placeholder="Enter a new message"
            aria-label="newmessage"
            aria-describedby="newmessage"
            style={{ paddingLeft: "3px", margin: "0px", border: "0px" }}
          />
        </div>
        <MicNone style={{ marginLeft: "5px" }} />
      </div>
    </div>
  );
}




export default ChatPage;
