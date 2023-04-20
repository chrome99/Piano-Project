import React, { useEffect, useState } from "react";
import "./Key.css";
interface KeyProps {
  note: string;
  onKey: string;
  sharp?: boolean;
}

function Key({ note, onKey, sharp = false }: KeyProps) {
  const [pressed, setPressed] = useState(false);
  const file = require(`./Sound/${note}.mp3`);

  function playNote() {
    const audio = new Audio(file);
    audio.play();
  }

  function keyPressHandler(event: KeyboardEvent) {
    event.preventDefault();
    if (event.repeat) {
      return;
    }
    if (event.key === onKey) {
      setPressed(true);
      playNote();
    }
  }
  function keyUpHandler(event: KeyboardEvent) {
    event.preventDefault();
    if (event.repeat) {
      return;
    }
    if (event.key === onKey) {
      setPressed(false);
    }
  }

  useEffect(() => {
    document.addEventListener("keypress", keyPressHandler);
    document.addEventListener("keyup", keyUpHandler);

    return () => {
      document.removeEventListener("keypress", keyPressHandler);
      document.removeEventListener("keyup", keyUpHandler);
    };
  }, []);

  return (
    <div
      className={`key ${sharp && "sharp"} ${pressed && "pressed"}`}
      onClick={playNote}
    >
      {note} ({onKey})
    </div>
  );
}

export default Key;
