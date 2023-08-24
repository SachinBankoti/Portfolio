import { headerItems, userInfo } from "@/constants/constants";
import { NavItems } from "@/models/Header";

const Header: React.FC = () => {
  return (
    <header>
      <div>
        <h2>{userInfo.name}</h2>
      </div>
      <div>
        {Object.keys(headerItems).map((item) => (
          <a key={headerItems[item as keyof NavItems].label}>
            {headerItems[item as keyof NavItems].label}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
