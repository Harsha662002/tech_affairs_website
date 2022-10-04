import Head from "next/head";
import Team from "../components/developers/Team";
import { frontend } from "../components/developers/DeveloperData";
import { backend } from "../components/developers/DeveloperData";
import { design } from "../components/developers/DeveloperData";

import Classes from "../components/developers/Deve.module.css";
import Heading from "../components/heading/Heading";

export default function Developers() {
  return (
    <div className={Classes.container}>
      <Head>
        <title>Developers</title>
      </Head>
      <Heading name="TEAM" />
      <Team title="FrontEnd Team" data={frontend} />
      <Team title="BackEnd Team" data={backend} />
      <Team title="Design Team" data={design} />
    </div>
  );
}
