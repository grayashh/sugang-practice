import React, { useEffect, useRef, useState } from "react";

export default function Home() {
  const [imageSrc, setImageSrc] = useState("/images/log_butt_01.gif");
  const [imageSrc2, setImageSrc2] = useState("/images/log_butt_04.gif");

  const handleMouseOver = () => {
    setImageSrc("/images/log_butt_01_o.gif");
  };

  const handleMouseOut = () => {
    setImageSrc("/images/log_butt_01.gif");
  };

  const handleMouseOver2 = () => {
    setImageSrc2("/images/log_butt_04_o.gif");
  };

  const handleMouseOut2 = () => {
    setImageSrc2("/images/log_butt_04.gif");
  };

  const idRef = useRef();
  const pwRef = useRef();

  useEffect(() => {
    idRef.current.focus();
  }, []);

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  // react에서 form1.user_id.focus() 하기

  const alertPw = () => {
    alert("본 사이트는 비밀번호 찾기를 지원하지 않습니다.");
  };

  //분기 페이지로 이동
  const nextPage = () => {
    if (!checkData()) {
      return;
    }
    location.href = "/lecture";
  };

  // Form안의 데이타 체크
  const checkData = () => {
    if (userId == null || userId === "") {
      alert("사용자 ID를 입력해 주십시오");
      idRef.current.focus();
      return false;
    }

    if (password == null || password === "") {
      alert("비밀번호를 입력해 주십시오");
      pwRef.current.focus();
      return false;
    }

    // id , pw 가 둘 다 test가 아닐 경우 로그인 실패
    if (userId !== "test" || password !== "test") {
      alert("사용자 ID 또는 비밀번호가 잘못되었습니다.");
      idRef.current.focus();
      return false;
    }

    return true;
  };

  return (
    <>
      <div
        bgcolor="white"
        text="black"
        style={{ marginTop: 30, marginLeft: 0 }}
      >
        <form name="form2" method="post"></form>
        <form name="form1" method="post" autoComplete="off">
          <input type="hidden" name="attribute" value="login_standby" />
          <table
            width="100%"
            border="0"
            cellSpacing="0"
            cellPadding="0"
            height="100%"
          >
            <tbody>
              <tr>
                <td
                  height="100%"
                  valign="middle"
                  width="100%"
                  align="center"
                  style={{ pb: "45px" }}
                >
                  <table
                    width="465"
                    border="0"
                    cellSpacing="0"
                    cellPadding="0"
                    style={{ mr: "0px", ml: "0px" }}
                  >
                    <tbody>
                      <tr>
                        <td rowSpan="2" width="169" height="308">
                          <img
                            alt="수강신청1"
                            src="/images/left.jpg"
                            width="169"
                            height="308"
                          />
                        </td>
                        <td width="465" height="107">
                          <img
                            alt="수강신청2"
                            src="/images/top_sugang.jpg"
                            width="465"
                            height="107"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td
                          width="465"
                          height="201"
                          align="right"
                          valign="top"
                          background="/images/body.jpg"
                          style={{ pt: "9px", pl: "330px" }}
                        >
                          <table
                            width="132"
                            border="0"
                            cellSpacing="0"
                            cellPadding="0"
                          >
                            <tbody>
                              <tr>
                                <td height="37" width="110" colSpan="2">
                                  <input
                                    size={12}
                                    type="text"
                                    value={userId}
                                    onChange={(e) => setUserId(e.target.value)}
                                    ref={idRef}
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td height="20" width="110" colSpan="2">
                                  <input
                                    size={12}
                                    type="password"
                                    value={password}
                                    onChange={(e) =>
                                      setPassword(e.target.value)
                                    }
                                    ref={pwRef}
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <p align="right">
                                    <img
                                      style={{ cursor: "pointer" }}
                                      src={imageSrc}
                                      onMouseOver={handleMouseOver}
                                      onMouseOut={handleMouseOut}
                                      onClick={nextPage}
                                      width="42"
                                      height="20"
                                      border="0"
                                      name="image1"
                                      alt="수강신청3"
                                    />
                                  </p>
                                </td>

                                <td>
                                  <p align="right">
                                    <img
                                      style={{ cursor: "pointer" }}
                                      src={imageSrc2}
                                      onMouseOver={handleMouseOver2}
                                      onMouseOut={handleMouseOut2}
                                      onClick={alertPw}
                                      width="87"
                                      height="20"
                                      border="0"
                                      name="image2"
                                      alt="수강신청4"
                                    />
                                  </p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr valign="top">
                        <td colSpan="2">
                          <ul id="information">
                            <li>
                              <b>
                                <font color="red">[필독] </font>
                              </b>
                              <b>
                                해당 사이트는 수강신청 연습을 위한 사이트입니다.
                              </b>
                            </li>
                            <li>
                              수강연습 가능시간 : 24시간
                              <br />- 수강신청 시스템은 PC용 브라우저 사용을
                              권장합니다.
                            </li>
                            <li
                              className="red"
                              style={{ fontSize: "15px", fontWeight: "bold" }}
                            >
                              학생 아이디는 test, 비밀번호는 test 입니다.
                            </li>
                          </ul>
                          <ul id="warning">
                            <li>
                              매크로프로그램이용 수강신청 제한
                              <br />
                              수강신청시 매크로프로그램 등을 비롯한 유해
                              프로그램을 이용하여 수강신청 할 경우,
                              <br />
                              학교 수강신청 서버의 속도 저하 또는 장애를
                              유발시켜 대다수의 많은 학생들게 피해를 주는 관계로
                              <br />
                              매크로 프로그램을 이용하여 수강신청하는 학생이
                              발견될 경우,
                              <br />
                              해당 학생의 수강신청 내역 전체를 삭제 예정이니
                              유의 하시기 바랍니다.
                            </li>
                          </ul>
                          <br />
                          <ul id="ads">
                            <li>
                              <b>
                                <font color="blue">[광고] </font>
                              </b>
                              <b>
                                학생식당 식단 메뉴 확인은 명지대가 준비한 식사
                                명준식에서!
                              </b>
                            </li>
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <a
                                href="https://apps.apple.com/kr/app/%EB%AA%85%EC%A4%80%EC%8B%9D-%EB%AA%85%EC%A7%80%EB%8C%80%ED%95%99%EA%B5%90-%EC%8B%9D%EB%8B%A8-%EC%95%B1/id6443898659"
                                target="_blank"
                              >
                                <img
                                  alt="appstore_logo"
                                  src="/images/appstore_logo.png"
                                  width="150"
                                  border="0"
                                  name="appstore_logo"
                                />
                              </a>
                              <a
                                href="https://play.google.com/store/apps/details?id=com.myongjunsickfe"
                                target="_blank"
                              >
                                <img
                                  alt="playstore_logo"
                                  src="/images/playstore_logo.png"
                                  width="150"
                                  border="0"
                                  name="playstore_logo"
                                />
                              </a>
                            </div>
                          </ul>
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
    </>
  );
}
