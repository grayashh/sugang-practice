import React, { useEffect } from "react";
import { useStopwatch } from "react-timer-hook";

export default function Stopwatch({ start_stop }) {
  const { seconds, minutes, start, pause, reset } = useStopwatch({
    autoStart: false,
  });

  useEffect(() => {
    if (start_stop === "/lecture") {
      start();
    }
  }, [start_stop]);

  return (
    <div className="stopwatch">
      <div className="numbers">
        <span>{minutes}</span>분<span>{seconds}초</span>
      </div>
      <p>수강신청 진입 버튼 클릭시 자동 시작됩니다.</p>
    </div>
  );
}
