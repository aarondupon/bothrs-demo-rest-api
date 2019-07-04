import React, { useState, useRef, useEffect } from "react";

const useTimer = (delay = 1400,next=()=>{}) => {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);
  const countRef = useRef(count);
  countRef.current = count;

  const start = () => {
    const timer = setTimeout(() => {      
      setCount(countRef.current + 1);
      next(countRef.current + 1)
      start();
    }, delay);

    setTimer(timer);
  };

  const reset = () => {
    clearTimeout(timer);
    start();
  };

  const stop = () => {
    clearTimeout(timer);
  };

  useEffect(() => {
    reset()
    return () => clearTimeout(timer);
  }, []);
  return [stop, start, count];
};

export default useTimer;
