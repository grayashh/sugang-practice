import React, { useState } from "react";

export default function CourseGenerator() {
  const [numMajorCourses, setNumMajorCourses] = useState(0);
  const [numGeneralCourses, setNumGeneralCourses] = useState(0);

  const handleMajorChange = (event) => {
    setNumMajorCourses(Number(event.target.value));
  };

  const handleGeneralChange = (event) => {
    setNumGeneralCourses(Number(event.target.value));
  };

  //요일 계산 함수
  const getDay = (num) => {
    switch (num) {
      case 1:
        return "월";
      case 2:
        return "화";
      case 3:
        return "수";
      case 4:
        return "목";
      case 5:
        return "금";
      case 6:
        return "토";
      case 7:
        return "일";
      default:
        return "";
    }
  };

  const generateMajorCourses = (number) => {
    let courses = [];
    for (let i = 0; i < number; i++) {
      courses.push({
        학년: Math.floor(Math.random() * 4) + 1,
        강좌번호: Math.floor(Math.random() * 9000) + 1000,
        교과목명: `전공${i + 1}`,
        교과목번호: `전공${Math.floor(Math.random() * 9000) + 1000}`,
        학점: 3,
        시간: `${getDay(Math.floor(Math.random() * 5) + 1)} ${Math.floor(
          Math.random() * 15
        )}:00-${Math.floor(Math.random() * 9) + 15}:00`,
        담당교수: "아무개",
        신청: 0,
        제한: Math.floor(Math.random() * 100),
        단계: "&nbsp;",
        강의시간: Math.floor(Math.random() * 3) + 1,
      });
    }
    return courses;
  };

  const generateGeneralCourses = (number) => {
    let courses = [];
    for (let i = 0; i < number; i++) {
      courses.push({
        학년: Math.floor(Math.random() * 4) + 1,
        강좌번호: Math.floor(Math.random() * 9000) + 1000,
        교과목명: `교양${i + 1}`,
        교과목번호: `교양${Math.floor(Math.random() * 9000) + 1000}`,
        학점: 3,
        시간: `${getDay(Math.floor(Math.random() * 5) + 1)} ${Math.floor(
          Math.random() * 15
        )}:00-${Math.floor(Math.random() * 9) + 15}:00`,
        담당교수: "아무개",
        신청: 0,
        제한: Math.floor(Math.random() * 100),
        단계: "&nbsp;",
        강의시간: Math.floor(Math.random() * 3) + 1,
      });
    }
    return courses;
  };

  const generateCourses = (n1, n2) => {
    let majorCourses = generateMajorCourses(n1);
    let generalCourses = generateGeneralCourses(n2);
    console.log([...majorCourses, ...generalCourses]);
    return [...majorCourses, ...generalCourses];
  };

  return (
    <div className="course_generator">
      <h2>책가방 과목 생성</h2>
      <label>
        전공 과목 수:
        <select value={numMajorCourses} onChange={handleMajorChange}>
          {[0, 1, 2, 3, 4].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        교양 과목 수:
        <select value={numGeneralCourses} onChange={handleGeneralChange}>
          {[0, 1, 2, 3, 4].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </label>
      <br />
      <button
        onClick={() => {
          generateCourses(numMajorCourses, numGeneralCourses);
        }}
      >
        생성
      </button>
    </div>
  );
}
