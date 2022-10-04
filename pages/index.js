import HomeIntro from "../components/home/HomeIntro";
import HomeVision from "../components/home/HomeVision";
import Navbar from "../components/navbar";
import Head from "next/head";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Tech Affairs IIITDM</title>
      </Head>
      <Navbar />
      <HomeIntro></HomeIntro>
      <HomeVision></HomeVision>
    </div>
  );
}
