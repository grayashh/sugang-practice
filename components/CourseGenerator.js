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
      <button>생성</button>
    </div>
  );
}
