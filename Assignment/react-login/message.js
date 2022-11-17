import { useEffect } from "react";

function Message(props) {
  return (
    <div className="message">
      <span className="message">{props}</span>
    </div>
  );
}

export default Message;