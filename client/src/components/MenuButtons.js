import React from "react";
import KeyHandler, { KEYDOWN, KEYUP } from "react-key-handler";

function MenuButtons(props) {
  function handleToggles(event, value, toggle) {
    return <KeyHandler keyEventName={event} keyValue={value} onKeyHandle={toggle} />;
  }

  return (
    <div className="container menu-buttons-container">
      <div className="menu-buttons">
        {handleToggles(KEYDOWN, " ", props.toggleTextBox)}
        {handleToggles(KEYDOWN, "Control", props.setNextFrame)}
        {handleToggles(KEYUP, "Enter", props.setNextFrame)}
       

        
      </div>
    </div>
  );
}

export default MenuButtons;
