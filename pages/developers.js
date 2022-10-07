import Head from "next/head";
import Team from "../components/developers/team";
import { frontend } from "../components/developers/developerdata";
import { backend } from "../components/developers/developerdata";
import { design } from "../components/developers/developerdata";

import Classes from "../components/developers/deve.module.css";
import Heading from "../components/heading/heading";
import Navbar from "../components/navbar";

export default function Developers() {
  return (
    <div>
      <Head>
        <title>Developers</title>
        <link rel="shortcut icon" href="/assests/images/techaffairslogo.ico" />
      </Head>
      <Navbar />
      <Heading name="TEAM" />
      <div className={Classes.container}>
        <Team title="FrontEnd Team" data={frontend} />
        <Team title="BackEnd Team" data={backend} />
        <Team title="Design Team" data={design} />
      </div>
    </div>
  );
}
