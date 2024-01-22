import styled from "styled-components";
import { Link } from "react-router-dom";
import Pic1 from "./img/Fond Bouton IN.png";
import Pic2 from "./img/Fond Bouton OUT.png";

export const App = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const MagicDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  height: 680px;
`;

// ------------------------------------------------

export const MagicDivLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const MagicDivLeftTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
`;

export const MagicDivLeftTitle1 = styled.span`
  color: var(--purple, #6c00ff);
  font-family: Inter;
  font-size: 64px;
  font-style: normal;
  font-weight: 500;
  line-height: 72px; /* 112.5% */
`;

export const MagicDivLeftTitle2 = styled.span`
  font-family: Inter;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: 72px; /* 112.5% */

  background: linear-gradient(
    250deg,
    #6c00ff 36.57%,
    rgba(108, 0, 255, 0.42) 97.39%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const MagicDivLeftText = styled.p`
  color: var(--gray-4, #333);
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 133.333% */
`;

export const MagicDivLeftLink = styled(Link)`
  display: inline-flex;
  padding: 12px 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  background: var(--purple, #6c00ff);
  color: var(--white, #fff);
  text-align: center;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 116.667% */
  text-decoration: none;
  width: 210px;

  &:hover {
    background: linear-gradient(
      57deg,
      #6c00ff 41.05%,
      rgba(108, 0, 255, 0) 139.87%
    );
  }
`;

// -------------------------------------------------

export const LanguagesDiv = styled.div`
  display: flex;
  width: 100%;
  height: 444px;
  padding: 137px 71px 137px 133px;
  justify-content: flex-end;
  align-items: center;
  gap: 32px;
  flex-shrink: 0;
`;

export const LanguagesDivIn = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 45px;
`;

// -------------------------------------------------

export const Slider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 444px;
  padding: 137px 71px 137px 71px;
  gap: 32px;
  flex-shrink: 0;
`;

export const SliderIn = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 45px;
  width: 90%;
`;

export const FondButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("${Pic1}");
  width: 140px;
  height: 140px;
  text-decoration: none;

  &:hover {
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("${Pic2}");
  }
`;

export const Button1 = styled.button`
  width: 30px;
  height: 50px;
  background: none;
  border: none;
`;

// -------------------------------------------------

export const MagicDivRight = styled.div`
  width: 700px;
  height: 680px;
  flex-shrink: 0;
`;

export const ImgSlider = styled.img`
  transition: 1s ease-in-out;
`;

// -------------------------------------------------

export const TextDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 662px;
  background: var(--purple, #6c00ff);
`;

export const TextDivIn = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  height: 662px;
`;

export const TextDivLeft = styled.div`
  width: 670px;
  height: 570px;
  flex-shrink: 0;
`;

export const TextDivRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const TextDivRightTitle = styled.h1`
  color: var(--white, #fff);
  font-family: Inter;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const TextDivRightP = styled.p`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`;

export const TextDivRightP1 = styled.p`
  color: var(--white, #fff);
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const TextDivRightP2 = styled.p`
  color: var(--white, #fff);
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
