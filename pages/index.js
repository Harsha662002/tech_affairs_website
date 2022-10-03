import HomeIntro from "../components/home/HomeIntro";
import HomeVision from "../components/home/HomeVision";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeIntro></HomeIntro>
      <HomeVision></HomeVision>
    </div>
  );
}