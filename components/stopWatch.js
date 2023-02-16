import React, { useEffect } from "react";
import { useStopwatch } from "react-timer-hook";
import { useRecoilValue } from "recoil";
import { stopWatchSelector } from "@/states";

export default function Stopwatch() {
  const button_State = useRecoilValue(stopWatchSelector);

  const { seconds, minutes, start, pause, reset } = useStopwatch({
    autoStart: false,
  });

  useEffect(() => {
    if (button_State === "start") {
      start();
    }

    if (button_State === "pause") {
      pause();
    }

    if (button_State === "reset") {
      reset();
    }
    console.log(button_State);
  }, [button_State]);

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
