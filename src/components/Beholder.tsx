import { useState, useEffect } from "react";
import BeholderGif from '../../public/assets/images/Bonelord.gif'
import DisapearGreen from '../../public/assets/images/green_invisible.gif'

const Beholder = () => {
  const [position, setPosition] = useState({ x: window.innerWidth - 100, y: 50 });
  const [isDisappearing, setIsDisappearing] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Faz o Beholder seguir o mouse lentamente
    const handleMouseMove = (event: MouseEvent) => {
      setPosition((prev) => ({
        x: prev.x + (event.clientX - prev.x) * 0.02, // Movimenta lentamente
        y: prev.y + (event.clientY - prev.y) * 0.02,
      }));
    };

    // Inicia o desaparecimento após 7 segundos
    const timer = setTimeout(() => {
      setIsDisappearing(true); // Troca para GIF de desaparecimento

      // Remove o Beholder completamente após o tempo do efeito
      setTimeout(() => {
        setIsVisible(false);
      }, 2000); // Tempo de exibição do `green_invisible.gif`
    }, 7000);

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  if (!isVisible) return null; // Não renderiza nada se já desapareceu

  return (
    <img
      src={isDisappearing ? DisapearGreen : BeholderGif}
      alt="Beholder"
      style={{
        position: "fixed",
        width: "80px",
        height: "80px",
        left: `${position.x}px`,
        top: `${position.y}px`,
        transition: "transform 0.2s ease-out",
        zIndex: 1000,
      }}
    />
  );
};

export default Beholder;
