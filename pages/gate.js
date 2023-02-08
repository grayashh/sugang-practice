import Link from "next/link";

export default function Gate() {
  return (
    <div
      bgcolor="white"
      onContextMenu={() => {
        return false;
      }}
      text="black"
      topmargin="0"
      leftmargin="0"
    >
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
              style={{ paddingBottom: 45 }}
              width="100%"
              align="center"
            >
              <table
                width="600"
                border="0"
                cellSpacing="0"
                cellPadding="0"
                style={{ marginRight: 0, marginLeft: 0 }}
              >
                <tbody>
                  <tr>
                    <td>
                      <Link href={"/lecture"}>
                        <img
                          src="/images/stanby.gif"
                          border="0"
                          name="stanby"
                        />
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td height="20"></td>
                  </tr>

                  <tr valign="top">
                    <td align="right" valign="top">
                      <p align="left">
                        <span style={{ fontSize: 10 }}>
                          <br />
                          <font face="굴림" color="#666666"></font>
                        </span>
                      </p>
                      <p align="left">
                        <font face="굴림" color="#666666">
                          <font face="굴림" color="#666666">
                            &nbsp;&nbsp;&nbsp;&nbsp;※{" "}
                            <b>
                              <font color="red"></font>수강신청 진입 안내
                            </b>
                            <br />
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;※ 수강신청 진입 가능 시간 :
                            <font color="red"> 10:00 ~ 17:00</font>
                            <br />
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;※ 진입 방법 : 수강신청 진입
                            버튼을 눌러 수강신청 화면으로 이동하시기 바랍니다.
                            <br />
                            &nbsp;
                            <br />
                          </font>
                        </font>
                      </p>
                      <font face="굴림" color="#666666">
                        <font face="굴림" color="#666666"></font>
                      </font>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
