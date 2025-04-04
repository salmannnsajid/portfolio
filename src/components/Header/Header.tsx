import { header } from "../../portfolio";
import Navbar from "../Navbar/Navbar.tsx";
import "./Header.css";

interface HeaderProps {
  homepage?: string;
  title: string;
}

const Header: React.FC = () => {
  const { homepage, title } = header as HeaderProps;

  return (
    <header className="header center">
      <h3>
        {homepage ? (
          <a href={homepage} className="link">
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <Navbar />
    </header>
  );
};

export default Header;
