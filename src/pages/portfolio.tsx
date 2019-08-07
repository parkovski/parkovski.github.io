import Link from "~/link";

import Layout from "~/layout";
import SEO from "~/seo";

const SecondPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <h1>Portfolio</h1>
    <p>I'm a programmer.</p>
    <Link href="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
