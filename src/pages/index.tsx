import Layout from "~/layout";
import SEO from "~/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`software`, `programming`]} />
    <h1>It's a-me, Parker!</h1>
    <p style={{textAlign: 'center'}}>This page intentionally left blank.</p>
    {/*<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>*/}
  </Layout>
);

export default IndexPage;
