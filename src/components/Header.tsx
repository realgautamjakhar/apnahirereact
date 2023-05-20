import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className=" bg-white w-full p-4  z-50 sticky top-0 ">
      <NavLink to={"/"} className=" text-gray-900 text-xl">
        Brand Logo
      </NavLink>
    </header>
  );
};

export default Header;
