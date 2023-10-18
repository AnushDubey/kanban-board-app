import React, { useEffect, useState } from "react";
import "./styles/Card.css";
import tag from "./assets/tag.png";
import img0 from "./assets/nopriority.png";
import img4 from "./assets/urgent.png";
import img3 from "./assets/high.png";
import img2 from "./assets/medium.png";
import img1 from "./assets/low.png";
import done from "./assets/doneIcon.png";
import Cancelled from "./assets/cancelIcon.png";
import backlogimg from "./assets/backlogIcon.png";
import inprogressimg from "./assets/progressIcon.png";
import todo from "./assets/todoIcon.png";
import user1 from "./userImage/user-1.png";
import user2 from "./userImage/user-2.png";
import user3 from "./userImage/user-3.png";
import user4 from "./userImage/user-4.png";
import user5 from "./userImage/user-5.png";

const url = "https://api.quicksell.co/v1/internal/frontend-assignment";

const CardPriority = (props) => {
  const [available, setavailable] = useState(false);
  let dotuser;
  const [users, setusers] = useState([]);
  const [tick, setTick] = useState([]);

  useEffect(() => {
    hello();
  }, []);

  async function hello() {
    try {
      const res = await fetch(url);

      const result = await res.json();

      setTick(result.tickets);
      setusers(result.users);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  const priorityImageMap = {
    0: img0,
    1: img1,
    2: img2,
    3: img3,
    4: img4,
  };
  const statusImageMap = {
    Todo: todo,
    "In progress": inprogressimg,
    Backlog: backlogimg,
    Done: done,
    Cancelled: Cancelled,
  };
  const usrImageMap = {
    "usr-1": user1,
    "usr-2": user2,
    "usr-3": user3,
    "usr-4": user4,
    "usr-5": user5,
  };
  useEffect(() => {
    users.map((user) => {
      if (props.ticket && user.id === props.ticket.userId) {
        setavailable(user.available);
      }
    });
  }, [users]);

  const usrImage = usrImageMap[props.ticket.userId] || user1;
  const imgSrc = priorityImageMap[props.ticket.priority] || img0;
  const statusImgSrc = statusImageMap[props.ticket.status] || todo;
  if (available === true) {
    dotuser = <div className="availableUser" />;
  } else {
    dotuser = <div className="notavailableUser" />;
  }

  return (
    <div className="cardBox">
      <div className="cardBoxrow">
        <div className="cardBoxin">
          <text className="cardId">{props.ticket.id}</text>
          <text className="cardTitle">
            <img src={statusImgSrc}></img>
            {props.ticket.title}
          </text>
        </div>
        <div style={{ height: "38px" }}>
          <img className="userImg" src={usrImage} alt="" />
          {dotuser}
        </div>
      </div>

      <div className="lowerBox">
        <div className="tagBox">
          <img className="tagImg" src={tag} alt="logo" />
          <tag className="tagText">{props.ticket.tag}</tag>
        </div>
      </div>
    </div>
  );
};

export default CardPriority;
