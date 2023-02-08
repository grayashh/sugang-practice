import { useEffect, useState } from "react";

export default function Bag() {
  const [mounted, setMounted] = useState(false);
  const 수강가능학점 = 18;

  const 책가방학점수계산 = () => {
    let 합계 = 0;
    for (let i = 0; i < applyData.length; i++) {
      합계 += parseInt(applyData[i].학점);
    }
    return 합계;
  };

  const 수강신청학점수계산 = () => {
    let 합계 = 0;
    for (let i = 0; i < completeData.length; i++) {
      합계 += parseInt(completeData[i].학점);
    }
    return 합계;
  };

  // 수강신청 데이터
  const [applyData, setApplyData] = useState([]);
  const [completeData, setCompleteData] = useState([]);

  // 더미 데이터 설정
  const applyDummyData = [
    {
      학년: "2",
      강좌번호: "6079",
      교과목명: "R통계분석",
      교과목번호: "데테202",
      학점: "3",
      시간: "3",
      담당교수: "이강선",
      신청: "0",
      제한: "30",
      단계: "&nbsp;",
      강의시간: "월13:30-14:45(S1353), 수13:30-14:45(S1353)",
    },
    {
      학년: "",
      강좌번호: "5420",
      교과목명: "마케팅과ICT융합기술",
      교과목번호: "기사134",
      학점: "3",
      시간: "3",
      담당교수: "김찬기",
      신청: "0",
      제한: "55",
      단계: "&nbsp;",
      강의시간: "월09:00-11:45(미배정)",
    },
    {
      학년: "",
      강좌번호: "5462",
      교과목명: "생활속의스마트IT(KCU)	",
      교과목번호: "기컴125",
      학점: "3",
      시간: "3",
      담당교수: "신동배",
      신청: "0",
      제한: "200",
      단계: "&nbsp;",
      강의시간: "",
    },
    {
      학년: "",
      강좌번호: "5267",
      교과목명: "인공지능의세계",
      교과목번호: "교선138",
      학점: "3",
      시간: "3",
      담당교수: "김제민",
      신청: "0",
      제한: "35",
      단계: "&nbsp;",
      강의시간: "수15:00-17:45(S1150)",
    },
    {
      학년: "2",
      강좌번호: "6077",
      교과목명: "자료구조",
      교과목번호: "데테201",
      학점: "3",
      시간: "3",
      담당교수: "박주영",
      신청: "0",
      제한: "25",
      단계: "&nbsp;",
      강의시간: "화13:30-14:45(S10219), 목13:30-14:45(S10219)",
    },
    {
      학년: "",
      강좌번호: "5017",
      교과목명: "채플",
      교과목번호: "교필101",
      학점: "0",
      시간: "1",
      담당교수: "교목실S",
      신청: "0",
      제한: "400",
      단계: "&nbsp;",
      강의시간: "화11:00-11:50(S11001)",
    },
    {
      학년: "",
      강좌번호: "5454",
      교과목명: "컴퓨터논리의이해",
      교과목번호: "기컴112",
      학점: "3",
      시간: "3",
      담당교수: "김준성",
      신청: "0",
      제한: "50",
      단계: "&nbsp;",
      강의시간: "화16:30-17:45(S1241), 목16:30-17:45(S1241)",
    },
  ];

  const completeDummyData = [];

  // 책가방 데이터 교과목명으로 정렬
  applyData.sort((a, b) => {
    if (a.교과목명 < b.교과목명) {
      return -1;
    }
    if (a.교과목명 > b.교과목명) {
      return 1;
    }
    return 0;
  });

  // 수강신청내역 데이터 교과목명으로 정렬
  completeData.sort((a, b) => {
    if (a.교과목명 < b.교과목명) {
      return -1;
    }
    if (a.교과목명 > b.교과목명) {
      return 1;
    }
    return 0;
  });

  // 마운트 시 실행
  useEffect(() => {
    setMounted(true);

    // 더미 데이터 기본값 설정
    setApplyData(applyDummyData);
    setCompleteData(completeDummyData);
  }, []);

  return (
    mounted && (
      <div rows="480,*,0%" border="0">
        <div name="up" scrolling="AUTO">
          <div style={{ marginLeft: "30px", marginTop: "20px" }}>
            <form name="form1" method="post">
              <table width="780" border="0" cellPadding="0" cellSpacing="0">
                <tbody>
                  <tr></tr>
                </tbody>
              </table>
              <table width="780" border="0" cellPadding="0" cellSpacing="0">
                <tbody>
                  <tr>
                    <td height="20" width="780" bgcolor="#5384AF">
                      <table
                        width="780"
                        border="0"
                        cellPadding="0"
                        cellSpacing="1"
                      >
                        <tbody>
                          <tr bgcolor="#8BAFC9" align="left" height="20">
                            <td colSpan="8">
                              <font color="white">
                                <b>&nbsp;&nbsp;개인신상정보</b>
                              </font>
                            </td>
                          </tr>
                          <tr align="center" height="20">
                            <td bgcolor="#CEE1EC" width="80">
                              캠&nbsp;퍼&nbsp;스
                            </td>
                            <td bgcolor="white" width="150">
                              서울캠퍼스
                            </td>
                            <td bgcolor="#CEE1EC" width="80">
                              주야구분
                            </td>
                            <td bgcolor="white" width="150">
                              주간
                            </td>
                            <td bgcolor="#CEE1EC" width="80">
                              소&nbsp;&nbsp;속
                            </td>
                            <td bgcolor="white">융합소프트웨어학부</td>
                          </tr>
                          <tr align="center" height="20">
                            <td bgcolor="#CEE1EC" width="80">
                              현재학년
                            </td>
                            <td bgcolor="white">1 학년</td>
                            <td bgcolor="#CEE1EC" width="90">
                              수강신청학년
                            </td>
                            <td bgcolor="white">2 학년</td>
                            <td bgcolor="#CEE1EC">이&nbsp;&nbsp;름</td>
                            <td bgcolor="white">김태강</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>

              <hr align="left" width="780" />

              <table width="780" border="0" cellPadding="0" cellSpacing="0">
                <tbody>
                  <tr>
                    <td className="MAINTITLE" width="600" height="20">
                      <img src="images/bag.jpg" border="0" />
                    </td>
                    {/* <!---------------------------------------------------------------------------------------> */}
                    {/* <!------------검색건수  -----------------------------------------------------------------> */}
                    {/* <!---------------------------------------------------------------------------------------> */}
                  </tr>
                  <tr>
                    <td align="left" bgcolor="white">
                      <font face="돋움" color="blue">
                        * 총 7 건이 책가방에 있습니다
                      </font>
                      <font face="돋움" color="red">
                        (선택의 붉은색은 폐강된 강좌입니다).
                      </font>
                      <br />
                    </td>
                  </tr>

                  <tr>
                    <td height="21" width="780" bgcolor="#5384AF" colSpan="2">
                      <table
                        width="780"
                        border="0"
                        cellPadding="0"
                        cellSpacing="1"
                      >
                        <tbody>
                          <tr height="21" bgcolor="#CEE1EC" align="center">
                            <td>학년</td>
                            <td>강좌번호</td>
                            <td>교과목명</td>
                            <td>교과목번호</td>
                            <td>학점</td>
                            <td>시간</td>
                            <td>담당교수</td>
                            <td>신청</td>
                            <td>제한</td>
                            <td>단계</td>
                            <td>강의시간</td>
                            <td align="center" width="50">
                              수강신청
                            </td>
                            <td width="50">선택</td>
                          </tr>
                          {/* <!------------------------------강좌목록 렌더링----------------------------------> */}
                          {/* <!-------------------------------------------------------------------------------> */}
                          {/* 수강신청 강좌목록이 비었는지 확인 후 렌더링 */}
                          {applyData.length !== 0 ? (
                            applyData.map((item, index) => {
                              return (
                                <tr height="20" bgcolor="white" key={index}>
                                  {/* <!--학년--> */}
                                  <td align="center">{item.학년}</td>
                                  {/* <!--강좌번호--> */}
                                  <td align="center">{item.강좌번호}</td>
                                  {/* <!--교과목명--> */}
                                  <td align="left">&nbsp;{item.교과목명}</td>
                                  {/* <!--교과목번호--> */}
                                  <td align="center">{item.교과목번호}</td>
                                  {/* <!--학점--> */}
                                  <td align="center">{item.학점}</td>
                                  {/* <!--시간--> */}
                                  <td align="center">{item.시간}</td>
                                  {/* <!--담당교수--> */}
                                  <td align="center">{item.담당교수}</td>

                                  {/* <!--신청인원--> */}
                                  <td align="center">{item.신청}</td>
                                  {/* <!--제한인원--> */}
                                  <td align="center">{item.제한}</td>
                                  <td align="center">&nbsp;</td>
                                  {/* <!--강의시간--> */}
                                  <td align="left">&nbsp;{item.강의시간}</td>
                                  {/* <!--수강신청버튼--> */}
                                  <td align="center">
                                    <a
                                      onClick={() => {
                                        const apply = confirm(
                                          `${item.강좌번호} 강좌를 신청하시겠습니까?`
                                        );
                                        if (!apply) return;

                                        // 신청완료 목록에 추가 후 교과목 명으로정렬
                                        setCompleteData(
                                          [...completeData, item].sort(
                                            (a, b) => {
                                              if (a.교과목명 > b.교과목명) {
                                                return 1;
                                              }
                                              if (a.교과목명 < b.교과목명) {
                                                return -1;
                                              }
                                              return 0;
                                            }
                                          )
                                        );
                                        alert("저장 되었습니다!");
                                      }}
                                    >
                                      <b>[신&nbsp;청]</b>
                                    </a>
                                  </td>

                                  {/* <!--삭제버튼--> */}
                                  <td align="center">
                                    <a
                                      onClick={() => {
                                        // 삭제할건지 물어보기
                                        const del = confirm(
                                          `${item.강좌번호} 강좌를 삭제하시겠습니까?`
                                        );
                                        // 확인 누르면 삭제
                                        if (!del) return;
                                        setApplyData(
                                          applyData.filter(
                                            (data) =>
                                              data.강좌번호 !== item.강좌번호
                                          )
                                        );
                                        alert(
                                          "책가방에서 삭제처리 되었습니다!"
                                        );
                                      }}
                                    >
                                      [삭제]
                                    </a>
                                  </td>
                                </tr>
                              );
                            })
                          ) : (
                            <></>
                          )}
                          {/* <!--보여줄 데이터 영역의 끝															   --> */}
                          {/* <!---------------------------------------------------------------------------------------> */}
                          {/* <!---------------------------------------------------------------------------------------> */}
                          {/* <!--합계															   --> */}
                          {/* <!---------------------------------------------------------------------------------------> */}
                          <tr height="21" bgcolor="#CEE1EC" align="center">
                            <td colSpan="14">
                              <font color="blue">
                                * 총 책가방 교과목수 : {applyData.length} 과목
                                (폐강강좌포함)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *
                                총 책가방 학점수 :{책가방학점수계산()}
                                학점 (폐강강좌포함)
                              </font>
                            </td>
                          </tr>
                          <tr height="21" bgcolor="white" align="left">
                            <td colSpan="14">
                              <font color="red">
                                &nbsp;&nbsp;* 폐강강좌는 삭제하시고 변경하시기
                                바랍니다.
                              </font>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
        </div>

        {/* 수강신청 완료  */}

        <div name="down" scrolling="AUTO" marginHeight="" marginWidth="">
          <div
            bgcolor="#FFFFFF"
            onContextMenu={() => {
              return false;
            }}
            text="#000000"
            style={{ marginLeft: "30px", marginTop: "20px" }}
            marginWidth="0"
            marginHeight="0"
          >
            <form name="form1" method="post">
              <table width="780" border="0" cellPadding="0" cellSpacing="0">
                <tbody>
                  <tr></tr>
                </tbody>
              </table>
              <table width="780" border="0" cellPadding="0" cellSpacing="0">
                <tbody>
                  <tr>
                    <td className="MAINTITLE" width="600" height="20">
                      <img src="images/sugang.jpg" border="0" />
                    </td>

                    {/* <!--------------------------------------------------------------------------------------->
          <!------------검색건수  ----------------------------------------------------------------->
          <!---------------------------------------------------------------------------------------> */}
                  </tr>
                  <tr>
                    <td align="left" bgcolor="white">
                      <font face="돋움" color="blue">
                        * 총 0 건이 신청되었습니다
                      </font>
                      <font face="돋움" color="red">
                        (선택의 붉은색은 폐강된 강좌입니다).
                      </font>
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td height="21" width="780" bgcolor="#5384AF" colSpan="2">
                      <table
                        width="780"
                        border="0"
                        cellPadding="0"
                        cellSpacing="1"
                      >
                        <tbody>
                          <tr height="21" bgcolor="#CEE1EC" align="center">
                            <td>학년</td>
                            <td>강좌번호</td>
                            <td>교과목명</td>
                            <td>교과목번호</td>
                            <td>학점</td>
                            <td>시간</td>
                            <td>담당교수</td>
                            <td>신청</td>
                            <td>제한</td>
                            <td>단계</td>
                            <td>강의시간</td>
                            <td width="50">선택</td>
                          </tr>
                          {/* <!------------------------------강좌목록 렌더링----------------------------------> */}
                          {/* <!-------------------------------------------------------------------------------> */}
                          {completeData.length !== 0 ? (
                            completeData.map((item, index) => {
                              return (
                                <tr height="20" bgcolor="white" key={index}>
                                  {/* <!--학년--> */}
                                  <td align="center">{item.학년}</td>
                                  {/* <!--강좌번호--> */}
                                  <td align="center">{item.강좌번호}</td>
                                  {/* <!--교과목명--> */}
                                  <td align="left">&nbsp;{item.교과목명}</td>
                                  {/* <!--교과목번호--> */}
                                  <td align="center">{item.교과목번호}</td>
                                  {/* <!--학점--> */}
                                  <td align="center">{item.학점}</td>
                                  {/* <!--시간--> */}
                                  <td align="center">{item.시간}</td>
                                  {/* <!--담당교수--> */}
                                  <td align="center">{item.담당교수}</td>

                                  {/* <!--신청인원--> */}
                                  <td align="center">{item.신청}</td>
                                  {/* <!--제한인원--> */}
                                  <td align="center">{item.제한}</td>
                                  <td align="center">&nbsp;</td>
                                  {/* <!--강의시간--> */}
                                  <td align="left">&nbsp;{item.강의시간}</td>

                                  {/* <!--삭제버튼--> */}
                                  <td align="center">
                                    <a
                                      onClick={() => {
                                        // 삭제할건지 물어보기
                                        const del = confirm(
                                          `${item.강좌번호} 강좌를 삭제하시겠습니까?`
                                        );
                                        // 확인 누르면 삭제
                                        if (!del) return;
                                        setCompleteData(
                                          completeData.filter(
                                            (data) =>
                                              data.강좌번호 !== item.강좌번호
                                          )
                                        );
                                        alert("삭제처리 되었습니다!");
                                      }}
                                    >
                                      [삭제]
                                    </a>
                                  </td>
                                </tr>
                              );
                            })
                          ) : (
                            <></>
                          )}
                          {/* <!--------------------------------------------------------------------------------------->
              <!--보여줄 데이터 영역의 끝															   -->
              <!--------------------------------------------------------------------------------------->
              <!--------------------------------------------------------------------------------------->
              <!--합계															   -->
              <!---------------------------------------------------------------------------------------> */}
                          <tr height="21" bgcolor="#CEE1EC" align="center">
                            <td colSpan="12">
                              <font color="blue">
                                * 수강가능학점 : {수강가능학점}
                                학점&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* 총 수강신청
                                교과목수 : {completeData.length} 과목
                                (폐강강좌포함)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *
                                총 수강신청 학점수 : {수강신청학점수계산()}
                                학점 (폐강강좌포함)
                              </font>
                            </td>
                          </tr>
                          <tr height="21" bgcolor="white" align="left">
                            <td colSpan="12">
                              <font color="red">
                                &nbsp;&nbsp;* 폐강강좌는 삭제하시고 변경하시기
                                바랍니다.
                              </font>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
        </div>
      </div>
    )
  );
}
