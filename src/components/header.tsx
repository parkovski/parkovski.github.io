import { Link } from "gatsby";
import styled from '@emotion/styled';

const TitleLink = styled(Link)`
  color: ${props => props.theme.colors.headerText};
  text-decoration: none;
  &:hover {
    color: ${props => props.theme.colors.linkHover};
  }
`;

interface HeaderProps {
  siteTitle: string;
}

const Header = ({ siteTitle }: HeaderProps) => (
  <header
    css={theme => ({
      background: theme.colors.header,
      marginBottom: `1.45rem`,
    })}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          padding: `.5rem 0`,
          float: 'right',
        }}>
          <TitleLink to="/">Page 1</TitleLink>&nbsp;
          <TitleLink to="/page-2">Page 2</TitleLink>&nbsp;
      </div>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);

export default Header;
