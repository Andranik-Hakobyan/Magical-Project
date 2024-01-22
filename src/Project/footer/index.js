import React from "react-dom";
import LogoImg from "./img/Untitled-1 2.png";
import linkedin from "./img/linkedin.png";
import instagram from "./img/instagram.png";
import telegram from "./img/telegram.png";
import facebook from "./img/facebook.png";
import Marker from "./img/marker-02.png";
import Phone from "./img/phone-call-01.png";
import Mail from "./img/mail-02.png";
import {
  Footer_,
  FooterLeft,
  FooterLeftIn,
  FooterRight,
  LogoMagical,
  Text,
  IconsDiv,
  Icon,
  Links,
  FooterRightIn,
  Services,
  Company,
  Title,
  Other,
  Contacts,
  TextLink,
  Icon_,
} from "./styled";

export default function Footer() {
  return (
    <>
      <Footer_>
        <FooterLeft>
          <FooterLeftIn>
            <LogoMagical src={LogoImg} alt="logoImg"></LogoMagical>
            <Text>
              Magical is a company whose primary products are various forms of
              software, software technology, distribution, and software product
              development, also a platform to get programming courses
            </Text>
            <IconsDiv>
              <Links href="">
                <Icon src={linkedin} />
              </Links>
              <Links href="">
                <Icon src={telegram} />
              </Links>
              <Links href="">
                <Icon src={facebook} />
              </Links>
              <Links href="">
                <Icon src={instagram} />
              </Links>
            </IconsDiv>
          </FooterLeftIn>
        </FooterLeft>
        <FooterRight>
          <FooterRightIn>
            <Services>
              <Title>Services</Title>
              <TextLink to="">IT Consulting</TextLink>
              <TextLink to="">Web Development</TextLink>
              <TextLink to="">Mobile Development</TextLink>
              <TextLink to="">QA & Testing</TextLink>
              <TextLink to="">UX/UI Design</TextLink>
            </Services>
            <Company>
              <Title>Company</Title>
              <TextLink to="">About Us</TextLink>
              <TextLink to="">Courses</TextLink>
              <TextLink to="">Career</TextLink>
            </Company>
            <Other>
              <Title>Other</Title>
              <TextLink to="">Help Center</TextLink>
              <TextLink to="">Pricing</TextLink>
              <TextLink to="">Privacy Policy</TextLink>
              <TextLink to="">Terms & Privacy</TextLink>
            </Other>
            <Contacts>
              <Title>Contacts</Title>
              <TextLink>
                <Icon_ src={Marker} alt="marker" />
                Sevan, Armenia
              </TextLink>
              <TextLink>
                <Icon_ src={Phone} alt="phone" />
                +37433611106
              </TextLink>
              <TextLink>
                <Icon_ src={Mail} alt="mail" />
                magicalcompanyofficial@gmail.com
              </TextLink>
            </Contacts>
          </FooterRightIn>
        </FooterRight>
      </Footer_>
    </>
  );
}
