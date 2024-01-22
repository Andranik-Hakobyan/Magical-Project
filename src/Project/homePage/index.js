import React, { useState, useEffect } from "react";
import MenuBar from "../menu";
import Footer from "../footer";
import Pic1 from "../homePage/img/Property1.png";
import Pic2 from "../homePage/img/Property2.png";
import Pic3 from "../homePage/img/Property3.png";
import Pic4 from "../homePage/img/Property4.png";
import Pic5 from "../homePage/img/Property5.png";
import {
  App,
  MagicDiv,
  MagicDivLeft,
  MagicDivRight,
  ImgSlider,
  MagicDivLeftText,
  MagicDivLeftTitle,
  MagicDivLeftTitle1,
  MagicDivLeftTitle2,
  MagicDivLeftLink,
  LanguagesDiv,
  LanguagesDivIn,
  Slider,
  SliderIn,
  FondButton,
  Button1,
  TextDiv,
  TextDivIn,
  TextDivLeft,
  TextDivRight,
  TextDivRightTitle,
  TextDivRightP,
  TextDivRightP1,
  TextDivRightP2,
} from "./styled";

export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const images = [Pic1, Pic2, Pic3];
  const images1 = [Pic4, Pic5, Pic4];
  const texts = [
    "JavaScript",
    "Python",
    "PHP",
    "C#",
    "HTML",
    "CSS",
    "Swift",
    "C and C++",
    "SQL",
    "TypeScript",
    "GO",
    "Kotlin",
  ];

  const showNextTexts = () => {
    if (startIndex + 6 < texts.length) {
      setStartIndex(startIndex + 6);
    }
  };

  const showPreviousTexts = () => {
    if (startIndex - 6 >= 0) {
      setStartIndex(startIndex - 6);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      // Increment the currentImageIndex by 1, or reset to 0 if it reaches the end.
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      clearInterval(timer); // Cleanup the interval when the component unmounts
    };
  }, []);

  return (
    <>
      <MenuBar />
      <App>
        <MagicDiv>
          <MagicDivLeft>
            <MagicDivLeftTitle>
              <MagicDivLeftTitle1>We Create Real</MagicDivLeftTitle1>
              <MagicDivLeftTitle2>MAGIC</MagicDivLeftTitle2>
            </MagicDivLeftTitle>
            <MagicDivLeftText>
              The magical platform for digital products
            </MagicDivLeftText>
            <MagicDivLeftLink to="">Get In Touch</MagicDivLeftLink>
          </MagicDivLeft>
          <MagicDivRight>
            <ImgSlider
              src={images[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1}`}
              width="754"
              height="680"
            />
          </MagicDivRight>
        </MagicDiv>

        <Slider>
          <Button1
            onClick={showPreviousTexts}
            style={{ display: startIndex === 0 ? "none" : "block" }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M14.4 16.7998L9.59998 11.9998L14.4 7.19981"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Button1>
          <SliderIn>
            {texts.slice(startIndex, startIndex + 6).map((text, index) => (
              <FondButton key={index}>{text}</FondButton>
            ))}
          </SliderIn>
          <Button1
            onClick={showNextTexts}
            style={{
              display: startIndex + 6 >= texts.length ? "none" : "block",
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M9.60002 7.2002L14.4 12.0002L9.60002 16.8002"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Button1>
        </Slider>

        <TextDiv>
          <TextDivIn>
            <TextDivLeft>
              <ImgSlider
                src={images1[currentImageIndex]}
                alt={`Image ${currentImageIndex + 1}`}
              />
            </TextDivLeft>
            <TextDivRight>
              <TextDivRightTitle>Who We’re & What We Do ?</TextDivRightTitle>
              <TextDivRightP>
                <TextDivRightP1>
                  Lorem ipsum is a pseudo-Latin text used in web design,
                  typography, layout, and printing in place of English to
                  emphasise design elements over content. It's also called
                  placeholder (or filler) text. It's a convenient tool for
                  mock-ups. It helps to outline the visual elements of a
                  document or presentation, eg typography, font, or layout.
                </TextDivRightP1>
                <TextDivRightP2>
                  Lorem ipsum is mostly a part of a Latin text by the classical
                  author and philosopher Cicero. Its words and letters have been
                  changed by addition or removal, so to deliberately render.
                </TextDivRightP2>
              </TextDivRightP>
            </TextDivRight>
          </TextDivIn>
        </TextDiv>
      </App>
      <Footer />
    </>
  );
}
