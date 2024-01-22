import React from "react";
import MenuBar from "../menu";
import MobileDocumentImg from "./img/Rectangle 36.png";
import QualityImg from "./img/Rectangle 37.png";
import StartupProjectImg from "./img/Rectangle 38.png";
import ResponsiveDesignImg from "./img/Rectangle 39.png";
import Footer from "../footer/index";
import {
  All,
  TitleDiv,
  Title1,
  Div1,
  Div1Inner,
  MobileDocument,
  Quality,
  ConnectDiv1,
  ConnectDiv2,
  TitleDescription,
  Title,
  Description,
  ConnectDiv3,
  ConnectDiv4,
  Div2,
  Div2Inner,
  StartupProject,
  ResponsiveDesign,
} from "./styled";

export default function Portfolio() {
  return (
    <>
      <All>
        <MenuBar />
        <TitleDiv>
          <Title1>Checkout These Projects</Title1>
        </TitleDiv>

        <Div1>
          <Div1Inner>
            <ConnectDiv1>
              <MobileDocument
                src={MobileDocumentImg}
                alt="Img1"
              ></MobileDocument>
              <TitleDescription to="">
                <Title>Title</Title>
                <Description>Description</Description>
              </TitleDescription>
            </ConnectDiv1>

            <ConnectDiv2>
              <Quality src={QualityImg} alt="Img2"></Quality>
              <TitleDescription to="">
                <Title>Title</Title>
                <Description>Description</Description>
              </TitleDescription>
            </ConnectDiv2>
          </Div1Inner>
        </Div1>

        <Div2>
          <Div2Inner>
            <ConnectDiv3>
              <StartupProject
                src={StartupProjectImg}
                alt="Img3"
              ></StartupProject>
              <TitleDescription to="">
                <Title>Title</Title>
                <Description>Description</Description>
              </TitleDescription>
            </ConnectDiv3>

            <ConnectDiv4>
              <ResponsiveDesign
                src={ResponsiveDesignImg}
                alt="Img4"
              ></ResponsiveDesign>
              <TitleDescription to="">
                <Title>Title</Title>
                <Description>Description</Description>
              </TitleDescription>
            </ConnectDiv4>
          </Div2Inner>
        </Div2>
        <Footer></Footer>
      </All>
    </>
  );
}
