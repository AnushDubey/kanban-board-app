import React from "react";
import { useEffect, useState } from "react";
import "./styles/Status.css";
import plusmore from "./assets/plusmore.png";
import CardUser from "./CardUser.js";
import availableimg from "./assets/availableIcon.png";
import notavailableimg from "./assets/notavailableIcon.png";

import user1 from "./userImage/user-1.png";
import user2 from "./userImage/user-2.png";
import user3 from "./userImage/user-3.png";
import user4 from "./userImage/user-4.png";
import user5 from "./userImage/user-5.png";

const url = "https://api.quicksell.co/v1/internal/frontend-assignment";

const Byuser = (props) => {
  let available = true;
  const [tick, setTick] = useState([{ id: "CAM" }]);
  const [users, setusers] = useState([{ id: "CAM" }]);

  const [usermass, setusermass] = useState([]);
  const [Order, setOrder] = useState(localStorage.getItem("order"));

  useEffect(() => {
    hello();
  }, []);

  useEffect(() => {
    count();
  }, [tick, users, props.order]);

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

  function count() {
    let masspre = [];
    users.forEach((user) => {
      let temp = [];
      tick.forEach((ticket) => {
        if (ticket.userId === user.id) {
          temp.push(ticket);
        }
      });
      if (props.order === "Title") {
        temp.sort((a, b) => a.title.localeCompare(b.title));
      } else {
        temp.sort((b, a) => parseInt(a.priority) - parseInt(b.priority));
      }
      masspre.push(temp);
    });
    setusermass(masspre);
    console.log("hello this is by user");
  }
  const usrImageMap = {
    "usr-1": user1,
    "usr-2": user2,
    "usr-3": user3,
    "usr-4": user4,
    "usr-5": user5,
  };

  return (
    <div className="Boards">
      {usermass.map((user) => {
        return (
          <div className="Board">
            <div className="boardHeading">
              <img
                src={(user[0] && usrImageMap[user[0].userId]) || user1}
                className="headingImg2"
                alt=""
              ></img>

              {users.map((item) => {
                if (user[0] && item.id === user[0].userId) {
                  available = item.available;
                  return (
                    <p className="cText" style={{ width: "500px" }}>
                      {item.name}
                    </p>
                  );
                }
                return null;
              })}

              <p className="cText">{user.length}</p>
              {available && <img src={availableimg} className="dot" />}
              {!available && <img src={notavailableimg} className="dot" />}
              <div className="boardHeading" id="pluske">
                <img src={plusmore} className="headingImg" alt=""></img>
              </div>
            </div>

            <div className="Cards">
              {user.length > 0 &&
                user.map((ticket) => {
                  return (
                    <CardUser ticket={ticket} available={available}></CardUser>
                  );
                })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Byuser;
