import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Please Pookie :(",
  "Don't do this to me",
  "Im gonna cry ;(",
  "I hate valentines now",
];

function App() {
  const [noCount, setCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNOClick() {
    setCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <div>
          <img
            alt="bears kissing"
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ftenor.com%2Fsearch%2Fgiving-flowers-gifs&psig=AOvVaw2QWih4rLC7n8qrtmFkWZhR&ust=1707040064160000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJj4wvjxjoQDFQAAAAAdAAAAABAD"
          />
        </div>
      ) : (
        <div>
          <img
            src="https://tenor.com/view/bear-blow-a-kiss-love-hearts-kissing-gif-8536880667384604096"
            alt="bear with hearts"
          />

          <div>Will you be my valentine?</div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button onClick={handleNOClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
