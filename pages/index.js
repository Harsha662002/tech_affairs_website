import HomeIntro from "../components/home/homeIntro";
import HomeVision from "../components/home/homeVision";
import Navbar from "../components/navbar";
import Head from "next/head";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Tech Affairs IIITDM</title>
        <link rel="shortcut icon" href="/assests/images/techaffairslogo.ico" />
      </Head>
      <Navbar />
      <HomeIntro></HomeIntro>
      <HomeVision></HomeVision>
    </div>
  );
}
