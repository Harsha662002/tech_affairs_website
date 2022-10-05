import HomeIntro from "../components/home/HomeIntro";
import HomeVision from "../components/home/HomeVision";
import Navbar from "../components/Navbar";
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
