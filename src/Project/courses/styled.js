import styled from "styled-components";
import { Link } from "react-router-dom";

export const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 140px;
`;

export const TitleDivIn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 87%;
  height: 58px;
`;

export const TitleH1 = styled.h1`
  width: 336px;
  height: 58px;
  font-family: Inter;
  font-size: 48px;
  font-weight: 700;
  line-height: 58px;
  text-align: left;
`;

export const TitleP = styled(Link)`
  width: 285px;
  height: 48px;
  font-family: Inter;
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;
  text-align: left;
  color: #6c00ff;
  text-decoration: none;
`;

// -------------------------------------------

export const CoursesDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 578px;
`;

export const CoursesDivIn = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 48.5%);
  gap: 33px;
  width: 87%;
  height: 450px;
`;

// -----------------------------------------------

export const Corsrs1 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-shrink: 0;
  width: 100%;
  height: 214px;
  top: 316px;
  left: 83px;
  border: 1px;
  background: #f0f0fb;
  border-radius: 5px;
  &:hover {
    border-radius: 5px;
    border: 1px solid var(--purple, #6c00ff);
    background: linear-gradient(
      180deg,
      rgba(108, 0, 255, 0.11) 0%,
      rgba(108, 0, 255, 0.06) 46.88%,
      rgba(56, 172, 168, 0.11) 100%
    );
    transition: 0.5s ease-out;
  }
`;

export const Corsrs1In = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 95%;
  height: 95%;
`;

export const Corsrs1Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 50%;
  height: 100%;
  /* padding-left: 20px; */
`;

export const Corsrs1LeftIn = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 75px;
  top: 34px;
  left: 46.08251953125px;
  border-radius: 5px;
  gap: 32px;
`;

export const Corsrs1LeftName = styled.p`
  display: flex;
  gap: 5px;
  width: 248px;
  height: 24px;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;

  font-family: Inter;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
`;

export const Corsrs1LeftNameJS = styled.p`
  color: #6c00ff;
`;

export const Corsrs1LeftWeeks = styled.p`
  display: flex;
  gap: 5px;
  width: 64px;
  height: 19px;
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: center;

  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: center;
  color: #333333;
`;

export const Corsrs1LeftWeeksNum = styled.p`
  font-weight: 800;
`;

export const Corsrs1LeftButton = styled(Link)`
  text-decoration: none;
  width: 114px;
  height: 39px;
  top: 141px;
  left: 46px;
  padding: 8px 10px 8px 10px;
  border-radius: 6px;
  gap: 10px;
  background: #6c00ff;
  color: white;
`;

export const Corsrs1Right = styled.img`
  width: 165px;
  height: 148px;
  border-radius: 5px;
`;

// -----------------------------------------------

export const Corsrs2 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 214px;
  top: 316px;
  left: 83px;
  border: 1px;
  background: #f0f0fb;
  border-radius: 5px;

  &:hover {
    border-radius: 5px;
    border: 1px solid var(--purple, #6c00ff);
    background: linear-gradient(
      180deg,
      rgba(108, 0, 255, 0.11) 0%,
      rgba(108, 0, 255, 0.06) 46.88%,
      rgba(56, 172, 168, 0.11) 100%
    );
    transition: 0.5s ease-out;
  }
`;

// -----------------------------------------------

export const Corsrs3 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 214px;
  top: 316px;
  left: 83px;
  border: 1px;
  background: #f0f0fb;
  border-radius: 5px;

  &:hover {
    border-radius: 5px;
    border: 1px solid var(--purple, #6c00ff);
    background: linear-gradient(
      180deg,
      rgba(108, 0, 255, 0.11) 0%,
      rgba(108, 0, 255, 0.06) 46.88%,
      rgba(56, 172, 168, 0.11) 100%
    );
    transition: 0.5s ease-out;
  }
`;

// -----------------------------------------------

export const Corsrs4 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 214px;
  top: 316px;
  left: 83px;
  border: 1px;
  background: #f0f0fb;
  border-radius: 5px;

  &:hover {
    border-radius: 5px;
    border: 1px solid var(--purple, #6c00ff);
    background: linear-gradient(
      180deg,
      rgba(108, 0, 255, 0.11) 0%,
      rgba(108, 0, 255, 0.06) 46.88%,
      rgba(56, 172, 168, 0.11) 100%
    );
    transition: 0.5s ease-out;
  }
`;
