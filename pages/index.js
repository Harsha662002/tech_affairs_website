import HomeIntro from "../components/home/homeintro";
import Navbar from "../components/navbar";
import Head from "next/head";
import HomeVision from "../components/home/homevision";
import Ticks from "../components/home/ticks";
import Circles from "../components/home/circles";
import Footer from "../components/footer";
import Events from "../components/home/events";
import Eventlist from "../components/home/eventlist";
import style from "../components/home/events.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Tech Affairs IIITDM</title>
        <link rel="shortcut icon" href="/assests/images/techaffairslogo.ico" />
      </Head>
      <Navbar />
      <Events />
      <HomeIntro></HomeIntro>
      <Circles></Circles>
      <h2 className={style.event_heading} id="Events">
        Events
      </h2>
      <Eventlist />
      {/* <h2 class={style.current_events}>Currently No Events!!!</h2> */}
      <button className={style.past_events}>
        <Link href="/upcoming">
          <a>Past Events</a>
        </Link>
      </button>
      <Ticks></Ticks>
      <HomeVision></HomeVision>
      <Footer></Footer>
    </div>
  );
}
