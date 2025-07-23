import { useEffect, useRef, useState } from "react";

export default function TypingEffect({ text, delay }) {
  const [displayText, setDisplayText] = useState(text);
  const velocityRef = useRef({
    speed: 1,
    endIndex: 0,
  });

  const handleUpdateText = () => {
    if (velocityRef.current.endIndex === text.length) {
      velocityRef.current.speed = -1;
    } else if (velocityRef.current.endIndex === 0) {
      velocityRef.current.speed = 1;
    }
    velocityRef.current.endIndex += velocityRef.current.speed;
    setDisplayText(text.slice(0, velocityRef.current.endIndex));
  };

  useEffect(() => {
    const id = setInterval(handleUpdateText, delay);
    return () => clearInterval(id);
  }, [text, delay]);
  return (
    <h2>
      {displayText}
      <span>|</span>{" "}
    </h2>
  );
}
