import HomeIntro from "../components/home/homeintro";
import Navbar from "../components/navbar";
import Head from "next/head";
import HomeVision from "../components/home/homevision";
import Ticks from "../components/home/ticks";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Tech Affairs IIITDM</title>
        <link rel="shortcut icon" href="/assests/images/techaffairslogo.ico" />
      </Head>
      <Navbar />
      <HomeIntro></HomeIntro>
      <Ticks></Ticks>
      <HomeVision></HomeVision>
    </div>
  );
}
