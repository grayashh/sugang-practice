import React, { useState } from "react";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

export default function CourseGenerator() {
  const router = useRouter();
  const [numMajorCourses, setNumMajorCourses] = useState(1);
  const [numGeneralCourses, setNumGeneralCourses] = useState(1);

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

  //전공과목 생성 함수
  const generateMajorCourses = (number) => {
    let courses = [];
    for (let i = 0; i < number; i++) {
      courses.push({
        학년: Math.floor(Math.random() * 4) + 1,
        강좌번호: Math.floor(Math.random() * 9000) + 1000,
        교과목명: `전공${i + 1}`,
        교과목번호: `전공${Math.floor(Math.random() * 9000) + 1000}`,
        학점: 3,
        시간: Math.floor(Math.random() * 3) + 1,
        담당교수: `${getRandomProfessorName()}`,
        신청: 0,
        제한: Math.floor(Math.random() * 100),
        단계: "&nbsp;",
        강의시간: `${getDay(Math.floor(Math.random() * 5) + 1)} ${Math.floor(
          Math.random() * 15
        )}:00-${Math.floor(Math.random() * 9) + 15}:00`,
      });
    }
    return courses;
  };

  //교양과목 생성 함수
  const generateGeneralCourses = (number) => {
    let courses = [];
    for (let i = 0; i < number; i++) {
      courses.push({
        학년: Math.floor(Math.random() * 4) + 1,
        강좌번호: Math.floor(Math.random() * 9000) + 1000,
        교과목명: `교양${i + 1}`,
        교과목번호: `교양${Math.floor(Math.random() * 9000) + 1000}`,
        학점: 3,
        시간: Math.floor(Math.random() * 3) + 1,
        담당교수: `${getRandomProfessorName()}`,
        신청: 0,
        제한: Math.floor(Math.random() * 100),
        단계: "&nbsp;",
        강의시간: `${getDay(Math.floor(Math.random() * 5) + 1)} ${Math.floor(
          Math.random() * 15
        )}:00-${Math.floor(Math.random() * 9) + 15}:00`,
      });
    }
    return courses;
  };

  //교수명 생성 함수
  const getRandomProfessorName = () => {
    const firstNames = [
      "김",
      "이",
      "박",
      "최",
      "정",
      "조",
      "강",
      "윤",
      "장",
      "임",
    ];
    const lastNames = [
      "수",
      "영",
      "종",
      "은",
      "진",
      "석",
      "미",
      "환",
      "지",
      "희",
    ];
    const middleNames = [
      "철",
      "민",
      "훈",
      "성",
      "은",
      "지",
      "영",
      "기",
      "호",
      "상",
    ];

    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const middleName =
      middleNames[Math.floor(Math.random() * middleNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

    return `${lastName}${middleName}${firstName}`;
  };

  //과목 생성 함수
  const generateCourses = (n1, n2) => {
    let majorCourses = generateMajorCourses(n1);
    let generalCourses = generateGeneralCourses(n2);
    // 세션스토리지에 저장
    localStorage.setItem(
      "courses",
      JSON.stringify([...generalCourses, ...majorCourses])
    );
    return;
  };

  return (
    <div className="course_generator">
      <div className="course_generator_container">
        <h1>책가방 과목 생성</h1>
        <label>
          전공 과목 수:
          <select value={numMajorCourses} onChange={handleMajorChange}>
            {[0, 1, 2, 3, 4, 5, 6].map((num) => (
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
            {[0, 1, 2, 3, 4, 5, 6].map((num) => (
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
            Swal.fire({
              title: "과목 생성 완료",
              text: "책가방에 과목이 생성되었습니다.",
              icon: "success",
              confirmButtonText: "확인",
            });
            router.push("/login");
          }}
        >
          생성
        </button>
      </div>
    </div>
  );
}
