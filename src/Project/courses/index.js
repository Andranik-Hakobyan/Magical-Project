import React from "react";
import MenuBar from "../menu";
import Footer from "../footer";
import JSImg from "./img/JS.png";
import PSAIImg from "./img/PS & AI.png";
import HtmlCssImg from "./img/Html-Css.png";
import ProgrammingImg from "./img/Programming.png";
import {
  TitleDiv,
  TitleDivIn,
  TitleH1,
  TitleP,
  CoursesDiv,
  CoursesDivIn,
  Corsrs1,
  Corsrs2,
  Corsrs3,
  Corsrs4,
  Corsrs1Left,
  Corsrs1LeftIn,
  Corsrs1LeftName,
  Corsrs1LeftNameJS,
  Corsrs1LeftWeeks,
  Corsrs1LeftWeeksNum,
  Corsrs1Right,
  Corsrs1LeftButton,
} from "./styled";

export default function Courses() {
  return (
    <>
      <MenuBar />
      <TitleDiv>
        <TitleDivIn>
          <TitleH1>Start Learning</TitleH1>
          <TitleP to="">Popular Courses</TitleP>
        </TitleDivIn>
      </TitleDiv>

      <CoursesDiv>
        <CoursesDivIn>
          <Corsrs1>
            <Corsrs1Left>
              <Corsrs1LeftIn>
                <Corsrs1LeftName>
                  Introduction to
                  <Corsrs1LeftNameJS>JavaScript</Corsrs1LeftNameJS>
                </Corsrs1LeftName>
                <Corsrs1LeftWeeks>
                  <Corsrs1LeftWeeksNum>9</Corsrs1LeftWeeksNum>Weeks
                </Corsrs1LeftWeeks>
              </Corsrs1LeftIn>
              <Corsrs1LeftButton>Introduction</Corsrs1LeftButton>
            </Corsrs1Left>
            <Corsrs1Right src={JSImg} alt="JSImg"></Corsrs1Right>
          </Corsrs1>

          <Corsrs2>
            <Corsrs1Left>
              <Corsrs1LeftIn>
                <Corsrs1LeftName>
                  Design Tools:
                  <Corsrs1LeftNameJS>PS & AI</Corsrs1LeftNameJS>
                </Corsrs1LeftName>
                <Corsrs1LeftWeeks>
                  <Corsrs1LeftWeeksNum>9</Corsrs1LeftWeeksNum>Weeks
                </Corsrs1LeftWeeks>
              </Corsrs1LeftIn>
              <Corsrs1LeftButton>Introduction</Corsrs1LeftButton>
            </Corsrs1Left>
            <Corsrs1Right src={PSAIImg} alt="PSAIImg"></Corsrs1Right>
          </Corsrs2>

          <Corsrs3>
            <Corsrs1Left>
              <Corsrs1LeftIn>
                <Corsrs1LeftName>
                  <Corsrs1LeftNameJS>HTML & CSS</Corsrs1LeftNameJS>
                </Corsrs1LeftName>
                <Corsrs1LeftWeeks>
                  <Corsrs1LeftWeeksNum>6</Corsrs1LeftWeeksNum>Weeks
                </Corsrs1LeftWeeks>
              </Corsrs1LeftIn>
              <Corsrs1LeftButton>Introduction</Corsrs1LeftButton>
            </Corsrs1Left>
            <Corsrs1Right src={HtmlCssImg} alt="HtmlCssImg"></Corsrs1Right>
          </Corsrs3>

          <Corsrs4>
            <Corsrs1Left>
              <Corsrs1LeftIn>
                <Corsrs1LeftName>
                  Introduction to
                  <Corsrs1LeftNameJS>Programming</Corsrs1LeftNameJS>
                </Corsrs1LeftName>
                <Corsrs1LeftWeeks>
                  <Corsrs1LeftWeeksNum>2</Corsrs1LeftWeeksNum>Months
                </Corsrs1LeftWeeks>
              </Corsrs1LeftIn>
              <Corsrs1LeftButton>Introduction</Corsrs1LeftButton>
            </Corsrs1Left>
            <Corsrs1Right
              src={ProgrammingImg}
              alt="ProgrammingImg"
            ></Corsrs1Right>
          </Corsrs4>
          
        </CoursesDivIn>
      </CoursesDiv>
      <Footer />
    </>
  );
}
