import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import "../Styles/hamburger_menu.css";
export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu
      outerContainerId={"navbar"}
      isOpen={isOpen}
      onOpen={() => setIsOpen(!isOpen)}
      disableAutoFocus
    >
      <a className="menu-item" href="#">
        NEW
      </a>
      <a className="menu-item" href="#">
        USED
      </a>
      <a className="menu-item" href="#">
        SERVICE
      </a>
      <a className="menu-item" href="#">
        PARTS
      </a>
      <a className="menu-item" href="#">
        ABOUT
      </a>
    </Menu>
  );
}
