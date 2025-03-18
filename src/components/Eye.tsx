import React, { useState, useEffect } from "react";
import styled from "styled-components";

const EyeContainer = styled.div`
  width: 30px;
  height: 30px;
  background: white;
  border-radius: 50%;
  border: 3px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.3);
`;

const Iris = styled.div`
  width: 20px;
  height: 20px;
  background: radial-gradient(circle, green 30%, #444 70%);
  border-radius: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
`;

const Eye = () => {
  const [irisPosition, setIrisPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const eye = document.getElementById("eye");
      if (!eye) return;

      const eyeRect = eye.getBoundingClientRect();
      const eyeCenterX = eyeRect.left + eyeRect.width / 2;
      const eyeCenterY = eyeRect.top + eyeRect.height / 2;

      const deltaX = event.clientX - eyeCenterX;
      const deltaY = event.clientY - eyeCenterY;

      const distance = Math.min(15, Math.sqrt(deltaX ** 2 + deltaY ** 2)); // Máximo de deslocamento
      const angle = Math.atan2(deltaY, deltaX);

      setIrisPosition({
        x: distance * Math.cos(angle),
        y: distance * Math.sin(angle),
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <EyeContainer id="eye">
      <Iris
        style={{
          left: `calc(50% + ${irisPosition.x}px)`,
          top: `calc(50% + ${irisPosition.y}px)`,
        }}
      />
    </EyeContainer>
  );
};

export default Eye;
