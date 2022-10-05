import Head from "next/head";
import Team from "../components/developers/Team";
import { frontend } from "../components/developers/DeveloperData";
import { backend } from "../components/developers/DeveloperData";
import { design } from "../components/developers/DeveloperData";

import Classes from "../components/developers/Deve.module.css";
import Heading from "../components/heading/Heading";
import Navbar from "../components/Navbar";

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
