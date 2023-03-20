import Layout from "components/Layout";
import Hero from "./Hero";
import Collections from "./Collections";
import Partners from "./Partners";
import Assets from "./Assets";
import OurTeam from "./OurTeam";
import FAQ from "./FAQ";
import JoinUs from "./JoinUs";

const Home = () => {
  return (
    <Layout header="Home">
      <Hero />
      <Collections />
      <Partners />
      <Assets />
      <OurTeam />
      <FAQ />
      <JoinUs />
    </Layout>
  );
};

export default Home;
