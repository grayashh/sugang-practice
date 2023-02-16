import React, { useEffect } from "react";
import { useStopwatch } from "react-timer-hook";
import { useRecoilValue } from "recoil";
import { stopWatchState } from "@/states/stopWatchState";

export default function Stopwatch({ start_stop }) {
  const stopState = useRecoilValue(stopWatchState);

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
      <div className="btn_wrapper">
        <button className="timer_btn" onClick={start}>
          시작
        </button>
        <button className="timer_btn" onClick={pause}>
          일시정지
        </button>
        <button className="timer_btn" onClick={reset}>
          초기화
        </button>
      </div>
    </div>
  );
}
