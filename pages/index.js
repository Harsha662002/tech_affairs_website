import HomeIntro from "../components/home/homentro";
import HomeVision from "../components/home/homevision";
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
