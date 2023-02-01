const bag = () => {
  return (
    <frames rows="480,*,0%" border="0">
      <frame name="up" scrolling="AUTO" marginheight="" marginwidth="">
        <body
          style={{ marginLeft: "30px", marginTop: "20px" }}
          onKeyDown="ctlKeyEsc();"
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
                  <td classNameName="MAINTITLE" width="600" height="20">
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
                        {/* <!---------------------------------------------------------------------------------------> */}
                        {/* <!-- bagRequestSt01Arr                                                                 --> */}
                        {/* <!--  해당 건수만큼 LOOP : bagRequestSt01Arr.length                                    --> */}
                        {/* <!---------------------------------------------------------------------------------------> */}

                        <tr height="20" bgcolor="white">
                          {/* <!--학년--> */}
                          <td align="center">2</td>
                          {/* <!--강좌번호--> */}
                          <td align="center">6079</td>
                          {/* <!--교과목명--> */}
                          <td align="left">&nbsp;R통계분석</td>
                          {/* <!--교과목번호--> */}
                          <td align="center">데테202</td>
                          {/* <!--학점--> */}
                          <td align="center">3</td>
                          {/* <!--시간--> */}
                          <td align="center">3</td>
                          {/* <!--담당교수--> */}
                          <td align="center">이강선</td>

                          {/* <!--신청인원--> */}
                          <td align="center">0</td>
                          {/* <!--제한인원--> */}
                          <td align="center">30</td>
                          <td align="center">&nbsp;</td>
                          {/* <!--강의시간--> */}
                          <td align="left">
                            &nbsp;월13:30-14:45(S1353), 수13:30-14:45(S1353)
                          </td>
                          {/* <!--수강신청버튼--> */}
                          <td align="center">
                            <a href="javascript:insertNextPage('2023','10','6079','HED01202','3');">
                              <b>[신&nbsp;청]</b>
                            </a>

                            {/* <!-- <input type="button" name="butt" value="신청"  onClick="funButton('1')"> --> */}
                          </td>

                          {/* <!--삭제버튼--> */}
                          <td align="center">
                            <a href="javascript:nextPage('2023','10','6079');">
                              [삭제]
                            </a>
                          </td>
                        </tr>
                        {/* <!---------------------------------------------------------------------------------------> */}
                        {/* <!--  Loop End : 건수별 처리의 끝 													   --> */}
                        {/* <!---------------------------------------------------------------------------------------> */}

                        <tr height="20" bgcolor="#EFF7FD">
                          {/* <!--학년--> */}
                          <td align="center"></td>
                          {/* <!--강좌번호--> */}
                          <td align="center">5420</td>
                          {/* <!--교과목명--> */}
                          <td align="left">&nbsp;마케팅과ICT융합기술</td>
                          {/* <!--교과목번호--> */}
                          <td align="center">기사134</td>
                          {/* <!--학점--> */}
                          <td align="center">3</td>
                          {/* <!--시간--> */}
                          <td align="center">3</td>
                          {/* <!--담당교수--> */}
                          <td align="center">김찬기</td>

                          {/* <!--신청인원--> */}
                          <td align="center">0</td>
                          {/* <!--제한인원--> */}
                          <td align="center">55</td>
                          <td align="center">&nbsp;</td>
                          {/* <!--강의시간--> */}
                          <td align="left">&nbsp;월09:00-11:45(미배정)</td>
                          {/* <!--수강신청버튼--> */}
                          <td align="center">
                            <a href="javascript:insertNextPage('2023','10','5420','KMD02134','3');">
                              <b>[신&nbsp;청]</b>
                            </a>

                            {/* <!-- <input type="button" name="butt" value="신청"  onClick="funButton('1')"> --> */}
                          </td>

                          {/* <!--삭제버튼--> */}
                          <td align="center">
                            <a href="javascript:nextPage('2023','10','5420');">
                              [삭제]
                            </a>
                          </td>
                        </tr>
                        {/* <!---------------------------------------------------------------------------------------> */}
                        {/* <!--  Loop End : 건수별 처리의 끝 													   --> */}
                        {/* <!---------------------------------------------------------------------------------------> */}

                        <tr height="20" bgcolor="white">
                          {/* <!--학년--> */}
                          <td align="center"></td>
                          {/* <!--강좌번호--> */}
                          <td align="center">5462</td>
                          {/* <!--교과목명--> */}
                          <td align="left">&nbsp;생활속의스마트IT(KCU)</td>
                          {/* <!--교과목번호--> */}
                          <td align="center">기컴125</td>
                          {/* <!--학점--> */}
                          <td align="center">3</td>
                          {/* <!--시간--> */}
                          <td align="center">3</td>
                          {/* <!--담당교수--> */}
                          <td align="center">신동배</td>

                          {/* <!--신청인원--> */}
                          <td align="center">0</td>
                          {/* <!--제한인원--> */}
                          <td align="center">200</td>
                          <td align="center">&nbsp;</td>
                          {/* <!--강의시간--> */}
                          <td align="left">&nbsp;</td>
                          {/* <!--수강신청버튼--> */}
                          <td align="center">
                            <a href="javascript:insertNextPage('2023','10','5462','KMI02125','3');">
                              <b>[신&nbsp;청]</b>
                            </a>

                            {/* <!-- <input type="button" name="butt" value="신청"  onClick="funButton('1')"> --> */}
                          </td>

                          {/* <!--삭제버튼--> */}
                          <td align="center">
                            <a href="javascript:nextPage('2023','10','5462');">
                              [삭제]
                            </a>
                          </td>
                        </tr>
                        {/* <!---------------------------------------------------------------------------------------> */}
                        {/* <!--  Loop End : 건수별 처리의 끝 													   --> */}
                        {/* <!---------------------------------------------------------------------------------------> */}

                        <tr height="20" bgcolor="#EFF7FD">
                          {/* <!--학년--> */}
                          <td align="center"></td>
                          {/* <!--강좌번호--> */}
                          <td align="center">5267</td>
                          {/* <!--교과목명--> */}
                          <td align="left">&nbsp;인공지능의세계</td>
                          {/* <!--교과목번호--> */}
                          <td align="center">교선138</td>
                          {/* <!--학점--> */}
                          <td align="center">3</td>
                          {/* <!--시간--> */}
                          <td align="center">3</td>
                          {/* <!--담당교수--> */}
                          <td align="center">김제민</td>

                          {/* <!--신청인원--> */}
                          <td align="center">0</td>
                          {/* <!--제한인원--> */}
                          <td align="center">35</td>
                          <td align="center">&nbsp;</td>
                          {/* <!--강의시간--> */}
                          <td align="left">&nbsp;수15:00-17:45(S1150)</td>
                          {/* <!--수강신청버튼--> */}
                          <td align="center">
                            <a href="javascript:insertNextPage('2023','10','5267','KMA02138','3');">
                              <b>[신&nbsp;청]</b>
                            </a>

                            {/* <!-- <input type="button" name="butt" value="신청"  onClick="funButton('1')"> --> */}
                          </td>

                          {/* <!--삭제버튼--> */}
                          <td align="center">
                            <a href="javascript:nextPage('2023','10','5267');">
                              [삭제]
                            </a>
                          </td>
                        </tr>
                        {/* <!---------------------------------------------------------------------------------------> */}
                        {/* <!--  Loop End : 건수별 처리의 끝 													   --> */}
                        {/* <!---------------------------------------------------------------------------------------> */}

                        <tr height="20" bgcolor="white">
                          {/* <!--학년--> */}
                          <td align="center">2</td>
                          {/* <!--강좌번호--> */}
                          <td align="center">6077</td>
                          {/* <!--교과목명--> */}
                          <td align="left">&nbsp;자료구조</td>
                          {/* <!--교과목번호--> */}
                          <td align="center">데테201</td>
                          {/* <!--학점--> */}
                          <td align="center">3</td>
                          {/* <!--시간--> */}
                          <td align="center">3</td>
                          {/* <!--담당교수--> */}
                          <td align="center">박주영</td>

                          {/* <!--신청인원--> */}
                          <td align="center">0</td>
                          {/* <!--제한인원--> */}
                          <td align="center">25</td>
                          <td align="center">&nbsp;</td>
                          {/* <!--강의시간--> */}
                          <td align="left">
                            &nbsp;화13:30-14:45(S10219), 목13:30-14:45(S10219)
                          </td>
                          {/* <!--수강신청버튼--> */}
                          <td align="center">
                            <a href="javascript:insertNextPage('2023','10','6077','HED01201','3');">
                              <b>[신&nbsp;청]</b>
                            </a>

                            {/* <!-- <input type="button" name="butt" value="신청"  onClick="funButton('1')"> --> */}
                          </td>

                          {/* <!--삭제버튼--> */}
                          <td align="center">
                            <a href="javascript:nextPage('2023','10','6077');">
                              [삭제]
                            </a>
                          </td>
                        </tr>
                        {/* <!---------------------------------------------------------------------------------------> */}
                        {/* <!--  Loop End : 건수별 처리의 끝 													   --> */}
                        {/* <!---------------------------------------------------------------------------------------> */}

                        <tr height="20" bgcolor="#EFF7FD">
                          {/* <!--학년--> */}
                          <td align="center"></td>
                          {/* <!--강좌번호--> */}
                          <td align="center">5017</td>
                          {/* <!--교과목명--> */}
                          <td align="left">&nbsp;채플</td>
                          {/* <!--교과목번호--> */}
                          <td align="center">교필101</td>
                          {/* <!--학점--> */}
                          <td align="center">0</td>
                          {/* <!--시간--> */}
                          <td align="center">1</td>
                          {/* <!--담당교수--> */}
                          <td align="center">교목실S</td>

                          {/* <!--신청인원--> */}
                          <td align="center">0</td>
                          {/* <!--제한인원--> */}
                          <td align="center">400</td>
                          <td align="center">&nbsp;</td>
                          {/* <!--강의시간--> */}
                          <td align="left">&nbsp;화11:00-11:50(S11001)</td>
                          {/* <!--수강신청버튼--> */}
                          <td align="center">
                            <a href="javascript:insertNextPage('2023','10','5017','KMA02101','0');">
                              <b>[신&nbsp;청]</b>
                            </a>

                            {/* <!-- <input type="button" name="butt" value="신청"  onClick="funButton('1')"> --> */}
                          </td>

                          {/* <!--삭제버튼--> */}
                          <td align="center">
                            <a href="javascript:nextPage('2023','10','5017');">
                              [삭제]
                            </a>
                          </td>
                        </tr>
                        {/* <!---------------------------------------------------------------------------------------> */}
                        {/* <!--  Loop End : 건수별 처리의 끝 													   --> */}
                        {/* <!---------------------------------------------------------------------------------------> */}

                        <tr height="20" bgcolor="white">
                          {/* <!--학년--> */}
                          <td align="center"></td>
                          {/* <!--강좌번호--> */}
                          <td align="center">5454</td>
                          {/* <!--교과목명--> */}
                          <td align="left">&nbsp;컴퓨터논리의이해</td>
                          {/* <!--교과목번호--> */}
                          <td align="center">기컴112</td>
                          {/* <!--학점--> */}
                          <td align="center">3</td>
                          {/* <!--시간--> */}
                          <td align="center">3</td>
                          {/* <!--담당교수--> */}
                          <td align="center">김준성</td>

                          {/* <!--신청인원--> */}
                          <td align="center">0</td>
                          {/* <!--제한인원--> */}
                          <td align="center">50</td>
                          <td align="center">&nbsp;</td>
                          {/* <!--강의시간--> */}
                          <td align="left">
                            &nbsp;화16:30-17:45(S1241), 목16:30-17:45(S1241)
                          </td>
                          {/* <!--수강신청버튼--> */}
                          <td align="center">
                            <a href="javascript:insertNextPage('2023','10','5454','KMI02112','3');">
                              <b>[신&nbsp;청]</b>
                            </a>

                            {/* <!-- <input type="button" name="butt" value="신청"  onClick="funButton('1')"> --> */}
                          </td>

                          {/* <!--삭제버튼--> */}
                          <td align="center">
                            <a href="javascript:nextPage('2023','10','5454');">
                              [삭제]
                            </a>
                          </td>
                        </tr>
                        {/* <!---------------------------------------------------------------------------------------> */}
                        {/* <!--  Loop End : 건수별 처리의 끝 													   --> */}
                        {/* <!---------------------------------------------------------------------------------------> */}

                        {/* <!---------------------------------------------------------------------------------------> */}
                        {/* <!--보여줄 데이터 영역의 끝															   --> */}
                        {/* <!---------------------------------------------------------------------------------------> */}
                        {/* <!---------------------------------------------------------------------------------------> */}
                        {/* <!--합계															   --> */}
                        {/* <!---------------------------------------------------------------------------------------> */}
                        <tr height="21" bgcolor="#CEE1EC" align="center">
                          <td colSpan="14">
                            <font color="blue">
                              * 총 책가방 교과목수 : 7 과목
                              (폐강강좌포함)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * 총
                              책가방 학점수 : 18 학점 (폐강강좌포함)
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
        </body>
      </frame>

      {/* 수강신청 완료  */}

      <frame name="down" scrolling="AUTO" marginheight="" marginwidth="">
        <body
          bgcolor="#FFFFFF"
          oncontextmenu="return false"
          text="#000000"
          style={{ marginLeft: "30px", marginTop: "20px" }}
          marginwidth="0"
          marginheight="0"
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
                      * 총 0 건이 신청되었습니다{" "}
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
                        {/* <!--------------------------------------------------------------------------------------->
              <!-- lectRequestSt01Arr                                                                 -->
              <!--  해당 건수만큼 LOOP : lectRequestSt01Arr.length                                    -->
              <!--------------------------------------------------------------------------------------->
              
              <!--------------------------------------------------------------------------------------->
              <!--보여줄 데이터 영역의 끝															   -->
              <!--------------------------------------------------------------------------------------->
              <!--------------------------------------------------------------------------------------->
              <!--합계															   -->
              <!---------------------------------------------------------------------------------------> */}
                        <tr height="21" bgcolor="#CEE1EC" align="center">
                          <td colSpan="12">
                            {" "}
                            <font color="blue">
                              * 수강가능학점 : 18
                              학점&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* 총 수강신청
                              교과목수 : 0 과목
                              (폐강강좌포함)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * 총
                              수강신청 학점수 : 0 학점 (폐강강좌포함)
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
        </body>
      </frame>
    </frames>
  );
};

export default bag;
