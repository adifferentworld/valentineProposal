import { useState } from "react";
import "./App.css";
export default function App() {
  const valentinesArray = [
    "Will you be my Valentine? ❤️",
    "Can you please be my Valentine? 🥺💕",
    "No one loves me... Please be my Valentine! 😢💖",
    "I will kiss you if you be my Valentine! 😘❤️",
    "I will give you a mini version of us to play with... Please be my Valentine! 🧸💞",
    "I will love you like no other... 💘✨",
    "I can do this all day, my love... Please be my Valentine! 😍💓",
  ];

  const [showMessage, setShowMessage] = useState(false);
  const [noButtonVisible, setNoButtonVisible] = useState(true);
  const [clickCount, setClickCount] = useState(0);
  const [noButtonStyle, setNoButtonStyle] = useState({
    position: "relative",
    marginLeft: "10px",
  });

  const moveNoButton = () => {
    const randomX = Math.random() * (window.innerWidth - 100);
    const randomY = Math.random() * (window.innerHeight - 50);
    setNoButtonStyle({
      position: "absolute",
      top: `${randomY}px`,
      left: `${randomX}px`,
    });
    setClickCount(clickCount + 1);
  };

  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1>{valentinesArray[clickCount % valentinesArray.length]}</h1>
      <div>
        <button
          onClick={() => {
            setShowMessage(true);
            setNoButtonVisible(false);
          }}
        >
          Yes ❤️
        </button>
        {noButtonVisible && (
          <button
            style={noButtonStyle}
            onMouseEnter={moveNoButton}
            onClick={moveNoButton}
          >
            No 💔
          </button>
        )}
      </div>
      {showMessage && <Message />}
    </div>
  );
}

function Message() {
  return (
    <h2 style={{ color: "red", marginTop: "20px" }}>
      I knew you are madly in love with mr heheheheheheheheehe. I LOVE YOU TOO!
      🎉💖
    </h2>
  );
}
