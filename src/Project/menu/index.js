import React, { useState } from "react";
import Logo_ from "./img/LogoMagical.png";
import {
  Menu,
  Logo,
  Frame,
  StartButton,
  ButtonDiv,
  Services,
  Option,
  AboutUs,
  Portfolio,
  Courses,
  Contacts,
  LogoLink,
  ButtonsConteiner,
} from "./styled";

export default function MenuBar() {
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const handleSelectToggle = () => {
    setIsSelectOpen(!isSelectOpen);
  };

  const handleSelectToggleClose = () => {
    setIsSelectOpen(isSelectOpen);
  };

  return (
    <Menu>
      <LogoLink to="/">
        <Logo src={Logo_} alt="logo" />
      </LogoLink>

      <Frame>
        <Services
          onBlur={isSelectOpen ? handleSelectToggle : handleSelectToggleClose}
          onClick={handleSelectToggle}
        >
          <Option value="Services">Services</Option>
          <Option value="Services">Services</Option>
          <Option value="Services">Services</Option>
          <Option value="Services">Services</Option>
        </Services>
        <ButtonsConteiner className={isSelectOpen ? "open" : "close"}>
          <Portfolio to="/portfolio">Portfolio</Portfolio>
          <AboutUs to="/aboutUs">About Us</AboutUs>
          <Courses to="/courses">Courses</Courses>
          <Contacts to="/contacts">Contacts</Contacts>
        </ButtonsConteiner>
      </Frame>
      <ButtonDiv >
        <StartButton to="/getInTouch">Get Started</StartButton>
      </ButtonDiv>
    </Menu>
  );
}
