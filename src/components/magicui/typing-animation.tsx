import React, { useState, useEffect } from 'react';

interface TypingAnimationProps {
  className?: string;
  textArray: string[];
  typingSpeed?: number;
  pauseTime?: number;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  className,
  textArray,
  typingSpeed = 150,
  pauseTime = 1500,
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = textArray[currentIndex];
      if (isDeleting) {
        setDisplayedText(currentText.substring(0, displayedText.length - 1));
      } else {
        setDisplayedText(currentText.substring(0, displayedText.length + 1));
      }

      if (!isDeleting && displayedText === currentText) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
      }
    };

    const typingTimeout = setTimeout(handleTyping, isDeleting ? typingSpeed / 2 : typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, currentIndex, textArray, typingSpeed, pauseTime]);

  return <span className={className}>{displayedText}</span>;
};

export default TypingAnimation;