
import React, { useEffect, useState } from 'react';
import { Dice5 } from 'lucide-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceD20 } from "@fortawesome/free-solid-svg-icons";
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
interface D20AnimationProps {
  size?: SizeProp;
  color?: string;
  animationDelay?: number;
  className?: string;
  isRolling?: boolean;
  onRollComplete?: (result: number) => void;
  result?: number | null;
}

const D20Animation: React.FC<D20AnimationProps> = ({
  size = "2x",
  animationDelay = 0,
  className = '',
  isRolling = false,
  onRollComplete,
  result = null,
}) => {
  const [rolling, setRolling] = useState(false);
  const [diceResult, setDiceResult] = useState<number | null>(result);

  useEffect(() => {
    if (isRolling && !rolling) {
      setRolling(true);

      // Generate a random number between 1 and 20 after the animation
      setTimeout(() => {
        const newResult = Math.floor(Math.random() * 20) + 1;
        setDiceResult(newResult);
        setRolling(false);
        if (onRollComplete) {
          onRollComplete(newResult);
        }
      }, 1500);
    } else if (!isRolling && result !== null) {
      setDiceResult(result);
    }
  }, [isRolling, onRollComplete, rolling, result]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isRolling) {
        setRolling(true);

        setTimeout(() => {
          setRolling(false);
        }, 1500);
      }
    }, animationDelay);

    return () => clearTimeout(timer);
  }, [animationDelay, isRolling]);

  return (
    <div className={`relative inline-block ${className}`}>

      <FontAwesomeIcon className={`transform transition-all duration-300 ${rolling ? 'animate-dice-roll' : 'hover:rotate-12'
        }`} icon={faDiceD20} size={size} style={{ color: "#285495" }} />

      {diceResult !== null && !rolling && (
        <div className="mt-0.5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-display text-white text-xs font-bold">
          {diceResult}
        </div>
      )}
    </div>
  );
};

export default D20Animation;
