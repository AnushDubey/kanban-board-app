import React, { useEffect, useRef, useState } from "react";
import "./styles/Status.css";
import optionsimg from "./assets/options.png";
import Dropdown from "./Dropdown.js";
import "./styles/Dropdown.css";
import dropdownimg from "./assets/dropdownIcon.png";

function Navbar(props) {
  const [Opendrop, setOpendrop] = useState(false);
  const dropdownButtonRef = useRef(null);

  function onClickHandler() {
    setOpendrop(!Opendrop);
  }

  const closeDropdown = (event) => {
    if (Opendrop && !dropdownButtonRef.current.contains(event.target)) {
      setOpendrop(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdown);
    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, [Opendrop]);

  return (
    <div className="randombar">
      <div className="topBar" onClick={onClickHandler}>
        <img src={optionsimg} className="optionsImg" alt=""></img>
        <button className="button">Display</button>
        <img src={dropdownimg} className="optionsImg2" alt=""></img>
      </div>
      {Opendrop && (
        <div ref={dropdownButtonRef}>
          <Dropdown
            order={props.order}
            grouping={props.grouping}
            setGroupingValue={props.setGroupingValue}
            setOrderingValue={props.setOrderingValue}
          />
        </div>
      )}
    </div>
  );
}

export default Navbar;
