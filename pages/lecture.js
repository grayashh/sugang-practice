import { stopWatchState } from "@/states";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";

export default function Lecture() {
  const router = useRouter();

  const setPause = useSetRecoilState(stopWatchState);

  //Logout 버튼 클릭시...
  const outPage = () => {
    alert("로그아웃 되었습니다.");
    router.push("/");
  };
  // 캠퍼스별 검색 선택버튼 클릭시
  const nextPage = () => {
    alert("테스트 페이지로 검색을 지원하지 않습니다.");
  };

  const openWindowLecture = () => {
    alert("테스트 페이지로 검색을 지원하지 않습니다.");
  };

  // 책가방 버튼 클릭시 새창으로 책가방 페이지 띄우기
  function openWindowBag() {
    let LeftPosition = screen.width ? (screen.width - 1020) / 2 : 0;
    let TopPosition = screen.height ? (screen.height - 707) / 2 : 0;

    window.open(
      "/bag",
      "lectureBag",
      "toolbar=no,scrollbars=yes,resizable=yes, height=800, width=900,left=" +
        LeftPosition +
        ",top=" +
        TopPosition
    );

    // window 객체에 handlePause 함수를 추가
    window.handlePause = () => {
      setPause("pause");
    };
  }

  return (
    <>
      <div
        bgcolor="#FFFFFF"
        onContextMenu={() => {
          return false;
        }}
        text="#000000"
        style={{ marginLeft: "30px", marginTop: "20px" }}
      >
        <form name="form1" method="post">
          <table width="780" border="0" cellPadding="0" cellSpacing="0">
            <tbody>
              <tr>
                <td>
                  <table width="780" border="0" cellPadding="0" cellSpacing="0">
                    <tbody>
                      <tr>
                        <td align="center" height="20" width="110">
                          <a
                            onClick={() => {
                              openWindowBag();
                            }}
                          >
                            [책가방/수강내역]
                          </a>
                        </td>
                        <td align="center" height="20" width="150">
                          <font color="red">[강좌검색(서울9교시까지)]</font>
                        </td>
                        <td align="center" height="20" width="170">
                          <a onClick={nextPage}>[강좌검색(서울10교시이후)]</a>
                        </td>
                        <td align="center" height="20" width="150">
                          <a onClick={nextPage}>[강좌검색(용인8교시까지)]</a>
                        </td>
                        <td align="center" height="20" width="150">
                          <a onClick={nextPage}>[강좌검색(용인9교시이후)]</a>
                        </td>
                        <td align="center" height="20" width="*">
                          <a onClick={outPage}>[Logout]</a>
                        </td>
                      </tr>
                      <tr></tr>
                    </tbody>
                  </table>
                </td>
              </tr>

              <tr>
                <td>
                  <hr align="left" width="780" />
                </td>
              </tr>

              <tr></tr>
            </tbody>
          </table>
          <table width="780" border="0" cellPadding="0" cellSpacing="0">
            <tbody>
              <tr>
                <td height="20" width="780" bgcolor="#5384AF">
                  <table width="780" border="0" cellPadding="0" cellSpacing="1">
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
                        <td bgcolor="white" width="100">
                          서울캠퍼스
                        </td>
                        <td bgcolor="#CEE1EC" width="80">
                          주야구분
                        </td>
                        <td bgcolor="white" width="60">
                          주간
                        </td>
                        <td bgcolor="#CEE1EC" width="80">
                          소&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;속
                        </td>
                        <td bgcolor="white">융합소프트웨어학부</td>
                        <td bgcolor="#CEE1EC">이&nbsp;&nbsp;름</td>
                        <td bgcolor="white">김태강</td>
                      </tr>
                      <tr align="center" height="20">
                        <td bgcolor="#CEE1EC" width="80">
                          현재학년
                        </td>
                        <td colSpan="3" bgcolor="white">
                          1 학년
                        </td>
                        <td bgcolor="#CEE1EC" width="90">
                          수강신청학년
                        </td>
                        <td colSpan="3" bgcolor="white">
                          2 학년
                        </td>
                      </tr>

                      <tr align="left" height="20">
                        <td bgcolor="white" colSpan="8">
                          <font size="2" color="red">
                            &nbsp;&nbsp;* "영어"와 "미적분학"은 본인의
                            <b>단계</b>에 해당하는 교과목을 신청하기 바랍니다.
                          </font>
                        </td>
                      </tr>

                      <tr align="center" height="20">
                        <td bgcolor="#CEE1EC">영어 단계</td>
                        <td bgcolor="white" colSpan="2">
                          이수
                        </td>
                        <td colSpan="5" align="left" bgcolor="white">
                          &nbsp;&nbsp;* R1 : 기초영어, R2 : 영어1, R3 : 영어2,
                          R4 : 영어3, R5 : 영어4
                        </td>
                      </tr>

                      <tr align="center" height="20">
                        <td bgcolor="#CEE1EC">영어회화 단계</td>
                        <td bgcolor="white" colSpan="2">
                          이수
                        </td>
                        <td colSpan="5" align="left" bgcolor="white">
                          &nbsp;&nbsp;* L1 : 기초영어, L2 : 영어회화1, L3 :
                          영어회화2, L4 : 영어회화3, L5 : 영어회화4
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>

          <br />

          {/* <!-- 교양필수 대분류 시작 --> */}
          <table width="780" border="0" cellPadding="0" cellSpacing="0">
            <tbody>
              <tr>
                <td height="20" width="780" bgcolor="#5384AF">
                  <table width="780" border="0" cellPadding="0" cellSpacing="1">
                    <tbody>
                      <tr bgcolor="#8BAFC9" align="left" height="20">
                        <td colSpan="8">
                          <font color="white">
                            <b>&nbsp;&nbsp;공통교양(구. 필수교양) </b>
                          </font>
                        </td>
                      </tr>
                      <tr bgcolor="white" align="left" height="20">
                        <td width="156">
                          &nbsp;
                          <a onClick={openWindowLecture}>[성서와인간이해]</a>
                        </td>
                        <td width="156">
                          &nbsp;
                          <a onClick={openWindowLecture}>[채&nbsp;&nbsp;플]</a>
                        </td>
                        <td width="156">
                          &nbsp;
                          <a onClick={openWindowLecture}>[영&nbsp;&nbsp;어]</a>
                        </td>
                        <td width="156">
                          &nbsp;
                          <a onClick={openWindowLecture}>[영어회화]</a>
                        </td>
                        <td width="156">
                          &nbsp;
                          <a onClick={openWindowLecture}>[기타교양필수]</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          {/* <!-- 공통교양 대분류 끝 --> */}

          <br />

          {/* <!-- 선택교양 대분류 시작 --> */}
          <table width="780" border="0" cellPadding="0" cellSpacing="0">
            <tbody>
              <tr>
                <td height="20" width="780" bgcolor="#5384AF">
                  <table width="780" border="0" cellPadding="0" cellSpacing="1">
                    <tbody>
                      <tr bgcolor="#8BAFC9" align="left" height="20">
                        <td colSpan="8">
                          <font color="white">
                            <b>&nbsp;&nbsp;핵심교양(구. 선택교양)</b>
                          </font>
                        </td>
                      </tr>
                      <tr bgcolor="white" align="left" height="20">
                        <td width="156">
                          &nbsp;
                          <a onClick={openWindowLecture}>[핵심교양과목]</a>
                        </td>
                        <td width="156">&nbsp;</td>
                        <td width="156">&nbsp;</td>
                        <td width="156">&nbsp;</td>
                        <td width="156">&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          {/* <!-- 선택교양 대분류 끝 --> */}

          <br />

          {/* <!-- 기초교양 대분류 시작 --> */}
          <table width="780" border="0" cellPadding="0" cellSpacing="0">
            <tbody>
              <tr>
                <td height="20" width="780" bgcolor="#5384AF">
                  <table width="780" border="0" cellPadding="0" cellSpacing="1">
                    <tbody>
                      <tr bgcolor="#8BAFC9" align="left" height="20">
                        <td colSpan="8">
                          <font color="white">
                            <b>&nbsp;&nbsp;일반교양(구. 기초교양, 균형교양)</b>
                          </font>
                        </td>
                      </tr>
                      <tr bgcolor="white" align="left" height="20">
                        <td width="156">
                          &nbsp;
                          <a onClick={openWindowLecture}>[기독교의이해와삶]</a>
                        </td>
                        <td width="156">
                          &nbsp;
                          <a onClick={openWindowLecture}>[인문과학]</a>
                        </td>
                        <td width="156">
                          &nbsp;
                          <a onClick={openWindowLecture}>[문화와예술]</a>
                        </td>
                        <td width="156">
                          &nbsp;
                          <a onClick={openWindowLecture}>[사회과학]</a>
                        </td>
                        <td width="156">
                          &nbsp;
                          <a onClick={openWindowLecture}>[자연과학]</a>
                        </td>
                      </tr>
                      <tr bgcolor="white" align="left" height="20">
                        <td width="156">
                          &nbsp;
                          <a onClick={openWindowLecture}>[공학]</a>
                        </td>
                        <td width="156">
                          &nbsp;
                          <a onClick={openWindowLecture}>[건강과생활]</a>
                        </td>
                        <td width="156">
                          &nbsp;
                          <a onClick={openWindowLecture}>[외국어]</a>
                        </td>
                        <td width="156">
                          &nbsp;
                          <a onClick={openWindowLecture}>[컴퓨터]</a>
                        </td>
                        <td width="156">
                          &nbsp;
                          <a onClick={openWindowLecture}>
                            [특별주제명사초대강좌]
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>

          <br />

          {/* <!-- 균형교양/교직/자유선택 대분류 시작 --> */}
          <table width="780" border="0" cellPadding="0" cellSpacing="0">
            <tbody>
              <tr>
                <td height="20" width="780" bgcolor="#5384AF">
                  <table width="780" border="0" cellPadding="0" cellSpacing="1">
                    <tbody>
                      <tr bgcolor="#8BAFC9" align="left" height="20">
                        <td colSpan="8">
                          <font color="white">
                            <b>&nbsp;&nbsp;교직</b>
                          </font>
                        </td>
                      </tr>

                      <tr bgcolor="white" align="left" height="20">
                        <td width="156">
                          &nbsp;
                          <a onClick={openWindowLecture}>[교직]</a>
                        </td>
                        <td width="156">&nbsp;</td>
                        <td width="156">&nbsp;</td>
                        <td width="156">&nbsp;</td>
                        <td width="156">&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>

          {/* <!-- 교양선택/교직/군사학 대분류 끝 --> */}

          <br />

          {/* <!-- 인문대학 대분류 시작 --> */}
          <table width="780" border="0" cellPadding="0" cellSpacing="0">
            <tbody>
              <tr>
                <td height="20" width="780" bgcolor="#5384AF">
                  <table width="780" border="0" cellPadding="0" cellSpacing="1">
                    <tbody>
                      <tr bgcolor="#8BAFC9" align="left" height="20">
                        <td colSpan="8">
                          <font color="white">
                            <b>&nbsp;&nbsp;인 문 대 학</b>
                          </font>
                        </td>
                      </tr>
                      <tr bgcolor="white" align="left" height="20">
                        <td width="156">
                          &nbsp;
                          <a onClick={openWindowLecture}>[인문대학]</a>
                        </td>
                        <td width="156">
                          &nbsp;
                          <a onClick={openWindowLecture}>[국어국문학과]</a>
                        </td>
                        <td width="156">
                          &nbsp;
                          <a onClick={openWindowLecture}>[영어영문학과]</a>
                        </td>
                        <td width="156">
                          &nbsp;
                          <a onClick={openWindowLecture}>[중어중문학과]</a>
                        </td>
                        <td width="156">
                          &nbsp;
                          <a onClick={openWindowLecture}>[일어일문학과]</a>
                        </td>
                      </tr>
                      <tr bgcolor="white" align="left" height="20">
                        <td width="156">
                          &nbsp;
                          <a onClick={openWindowLecture}>[글로벌한국어학과]</a>
                        </td>
                        <td width="156">
                          &nbsp;
                          <a onClick={openWindowLecture}>[사학과]</a>
                        </td>
                        <td width="156">
                          &nbsp;
                          <a onClick={openWindowLecture}>[문헌정보학과]</a>
                        </td>
                        <td width="156">
                          &nbsp;
                          <a onClick={openWindowLecture}>[아랍지역학과]</a>
                        </td>
                        <td width="156">
                          &nbsp;
                          <a onClick={openWindowLecture}>[미술사학과]</a>
                        </td>
                      </tr>

                      <tr bgcolor="white" align="left" height="20">
                        <td width="156">
                          &nbsp;
                          <a onClick={openWindowLecture}>
                            [글로벌아시아문화학과]
                          </a>
                        </td>
                        <td width="156">
                          &nbsp;
                          <a onClick={openWindowLecture}>[철학과]</a>
                        </td>
                        <td width="156">
                          &nbsp;
                          <a onClick={openWindowLecture}>[문예창작학과]</a>
                        </td>
                        <td width="156">&nbsp;</td>
                        <td width="156">&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          {/* <!-- 인문대학 대분류 끝 --> */}

          <br />

          {/* <!-- 사회과학대학 대분류 시작 --> */}
          <table width="780" border="0" cellPadding="0" cellSpacing="0">
            <tbody>
              <tr>
                <td height="20" width="780" bgcolor="#5384AF">
                  <table width="780" border="0" cellPadding="0" cellSpacing="1">
                    <tbody>
                      <tr bgcolor="#8BAFC9" align="left" height="20">
                        <td colSpan="8">
                          <font color="white">
                            <b>&nbsp;&nbsp;사 회 과 학 대 학</b>
                          </font>
                        </td>
                      </tr>
                      <tr bgcolor="white" align="left" height="20">
                        <td width="156">
                          &nbsp;
                          <a onClick={openWindowLecture}>[행정학과]</a>
                        </td>
                        <td width="156">
                          &nbsp;
                          <a onClick={openWindowLecture}>[정치외교학과]</a>
                        </td>
                        <td width="156">
                          &nbsp;
                          <a onClick={openWindowLecture}>[경제학과]</a>
                        </td>
                        <td width="156">
                          &nbsp;
                          <a onClick={openWindowLecture}>[디지털미디어학과]</a>
                        </td>
                        <td width="156">
                          &nbsp;
                          <a onClick={openWindowLecture}>[아동학과]</a>
                        </td>
                      </tr>
                      <tr bgcolor="white" align="left" height="20">
                        <td width="156">
                          &nbsp;
                          <a onClick={openWindowLecture}>[청소년지도학과]</a>
                        </td>
                        <td width="156">&nbsp;</td>
                        <td width="156">&nbsp;</td>
                        <td width="156">&nbsp;</td>
                        <td width="156">&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          {/* <!-- 사회과학대학 대분류 끝 --> */}

          {/* <!-- 법과대학 대분류 시작 --> */}
          <table width="780" border="0" cellPadding="0" cellSpacing="0">
            <tbody>
              <tr>
                <td height="20" width="780" bgcolor="#5384AF">
                  <table width="780" border="0" cellPadding="0" cellSpacing="1">
                    <tbody>
                      <tr bgcolor="#8BAFC9" align="left" height="20">
                        <td colSpan="8">
                          <font color="white">
                            <b>&nbsp;&nbsp;법 과 대 학</b>
                          </font>
                        </td>
                      </tr>
                      <tr bgcolor="white" align="left" height="20">
                        <td width="156">
                          &nbsp;
                          <a onClick={openWindowLecture}>[법학과]</a>
                        </td>
                        <td width="156">&nbsp;</td>
                        <td width="156">&nbsp;</td>
                        <td width="156">&nbsp;</td>
                        <td width="156">&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          {/* <!-- 법과대학 대분류 끝 --> */}

          <br />

          {/* <!-- 경상대학 대분류 시작 --> */}
          <table width="780" border="0" cellPadding="0" cellSpacing="0">
            <tbody>
              <tr>
                <td height="20" width="780" bgcolor="#5384AF">
                  <table width="780" border="0" cellPadding="0" cellSpacing="1">
                    <tbody>
                      <tr bgcolor="#8BAFC9" align="left" height="20">
                        <td colSpan="8">
                          <font color="white">
                            <b>&nbsp;&nbsp;경 영 대 학</b>
                          </font>
                        </td>
                      </tr>
                      <tr bgcolor="white" align="left" height="20">
                        <td width="156">
                          &nbsp;
                          <a onClick={openWindowLecture}>[경영학과]</a>
                        </td>
                        <td width="156">
                          &nbsp;
                          <a onClick={openWindowLecture}>[경영정보학과]</a>
                        </td>
                        <td width="156">
                          &nbsp;
                          <a onClick={openWindowLecture}>[국제통상학과]</a>
                        </td>
                        <td width="156">
                          &nbsp;
                          <a onClick={openWindowLecture}>[경영대학공통전공]</a>
                        </td>
                        <td width="156">&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          {/* <!-- 경상대학 대분류 끝 --> */}

          <br />

          {/* <!-- 미래대학 대분류 시작 --> */}
          <table width="780" border="0" cellPadding="0" cellSpacing="0">
            <tbody>
              <tr>
                <td height="20" width="780" bgcolor="#5384AF">
                  <table width="780" border="0" cellPadding="0" cellSpacing="1">
                    <tbody>
                      <tr bgcolor="#8BAFC9" align="left" height="20">
                        <td colSpan="8">
                          <font color="white">
                            <b>&nbsp;&nbsp;미 래 융 합 대 학</b>
                          </font>
                        </td>
                      </tr>
                      <tr bgcolor="white" align="left" height="20">
                        <td width="156">
                          &nbsp;
                          <a onClick={openWindowLecture}>[미래융합대학]</a>
                        </td>
                        <td width="156">
                          &nbsp;
                          <a onClick={openWindowLecture}>[사회복지학과]</a>
                        </td>
                        <td width="156">
                          &nbsp;
                          <a onClick={openWindowLecture}>[부동산학과]</a>
                        </td>
                        <td width="156">
                          &nbsp;
                          <a onClick={openWindowLecture}>[법무정책학과]</a>
                        </td>
                        <td width="156">
                          &nbsp;
                          <a onClick={openWindowLecture}>[심리치료학과]</a>
                        </td>
                      </tr>
                      <tr bgcolor="white" align="left" height="20">
                        <td width="156">
                          &nbsp;
                          <a onClick={openWindowLecture}>[미래융합경영학과]</a>
                        </td>
                        <td width="156">
                          &nbsp;
                          <a onClick={openWindowLecture}>[법무행정학과]</a>
                        </td>
                        <td width="156">
                          &nbsp;
                          <a onClick={openWindowLecture}>[멀티디자인학과]</a>
                        </td>
                        <td width="156">&nbsp;</td>
                        <td width="156">&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          {/* <!-- 미래융합대학 대분류 끝 --> */}

          <br />

          {/* <!-- ICT융합대학 대분류 시작 --> */}
          <table width="780" border="0" cellPadding="0" cellSpacing="0">
            <tbody>
              <tr>
                <td height="20" width="780" bgcolor="#5384AF">
                  <table width="780" border="0" cellPadding="0" cellSpacing="1">
                    <tbody>
                      <tr bgcolor="#8BAFC9" align="left" height="20">
                        <td colSpan="8">
                          <font color="white">
                            <b>&nbsp;&nbsp;ICT 융 합 대 학</b>
                          </font>
                        </td>
                      </tr>
                      <tr bgcolor="white" align="left" height="20">
                        <td width="156">
                          &nbsp;
                          <a onClick={openWindowLecture}>[ICT융합대학]</a>
                        </td>
                        <td width="156">
                          &nbsp;
                          <a onClick={openWindowLecture}>
                            [디지털콘텐츠 디자인학과]
                          </a>
                        </td>
                        <td width="156">
                          &nbsp;
                          <a onClick={openWindowLecture}>
                            [융합소프트웨어학부]
                          </a>
                        </td>
                        <td width="156">&nbsp;</td>
                        <td width="156">&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          {/* <!-- ICT융합대학 대분류 끝 --> */}

          <br />
        </form>
      </div>
    </>
  );
}
