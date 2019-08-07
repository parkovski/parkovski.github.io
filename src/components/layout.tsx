/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { ThemeProvider } from "emotion-theming";

import Header from "./header";
import "style/base.css";

import Link from "~/link";

import theme from 'style/theme';

const Layout = ({ children }: { children: React.ReactElement[] }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <Link href="https://www.gatsbyjs.org">Gatsby</Link>
          </footer>
        </div>
      </ThemeProvider>
    )}
  />
);

export default Layout;
