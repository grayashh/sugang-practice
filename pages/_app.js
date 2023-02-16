import SetTimer from "@/components/stopWatch";
import "@/styles/globals.css";
import Head from "next/head";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>명지대학교 수강신청시스템 테스트</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RecoilRoot>
        <SetTimer />
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}
