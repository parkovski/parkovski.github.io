import Link from "~/link";
import styled from 'styled';

const TitleLink = styled(Link)`
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  &:hover {
    color: ${props => props.theme.colors.yellow[2]};
    text-decoration: underline;
  }
`;

interface HeaderProps {
  siteTitle: string;
}

const Header = ({ siteTitle }: HeaderProps) => (
  <header
    css={theme => ({
      background: theme.colors.teal[9],
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
          <TitleLink href="/">Home</TitleLink>&nbsp;
          <TitleLink href="/portfolio">Portfolio</TitleLink>&nbsp;
      </div>
      <h1 style={{ margin: 0 }}>
        <Link
          href="/"
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
