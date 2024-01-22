import styled from "styled-components";
import { Link } from "react-router-dom";

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 126px;
`;

export const LogoLink = styled(Link)`
  text-decoration: none;
`;

export const Logo = styled.img`
  width: 140px;
  height: 85.83192443847656px;
  top: 20px;
  left: 89px;
`;

export const Frame = styled.div`
  display: flex;
  width: 700px;
  height: Hug (31px);
  gap: 38px;
`;

export const Services = styled.select`
  width: 111px;
  height: 31px;
  font-family: Inter;
  font-size: 20px;
  font-weight: 500;
  line-height: 31px;
  letter-spacing: 0em;
  text-align: left;
  border: none;
  transition: color 0.5s ease-in;

  &:hover {
    color: #6c00ff;
    cursor: pointer;
  }
`;

export const Arrow = styled.div`
  
`;

export const Option = styled.option`
  background: var(--purple, #6c00ff);
  color: black;
`;

export const ButtonsConteiner = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 38px;

  &.open {
    transition: all 0.4s ease-in;
    margin-left: 50px;
  }

  &.close {
    transition: all 0.4s ease-in;
  }
`;

export const Portfolio = styled(Link)`
  width: Hug (82px);
  height: Hug (31px);
  gap: 10px;
  font-family: Inter;
  font-size: 20px;
  font-weight: 500;
  line-height: 31px;
  letter-spacing: 0em;
  text-align: left;
  color: #333333;
  text-decoration: none;
  transition: all 0.5s ease-in;
  &:hover {
    color: #6c00ff;
  }
`;

export const AboutUs = styled(Link)`
  width: Hug (89px);
  height: Hug (31px);
  gap: 10px;
  font-family: Inter;
  font-size: 20px;
  font-weight: 500;
  line-height: 31px;
  letter-spacing: 0em;
  text-align: left;
  color: #333333;
  text-decoration: none;
  transition: all 0.5s ease-in;
  &:hover {
    color: #6c00ff;
  }
`;

export const Courses = styled(Link)`
  width: Hug (80px);
  height: Hug (31px);
  gap: 10px;
  font-family: Inter;
  font-size: 20px;
  font-weight: 500;
  line-height: 31px;
  letter-spacing: 0em;
  text-align: left;
  color: #333333;
  text-decoration: none;
  transition: all 0.5s ease-in;
  &:hover {
    color: #6c00ff;
  }
`;

export const Contacts = styled(Link)`
  width: Hug (87px);
  height: Hug (31px);
  gap: 10px;
  font-family: Inter;
  font-size: 20px;
  font-weight: 500;
  line-height: 31px;
  letter-spacing: 0em;
  text-align: left;
  color: #333333;
  text-decoration: none;
  transition: all 0.5s ease-in;
  &:hover {
    color: #6c00ff;
  }
`;

export const ButtonDiv = styled.div`
  font-family: Inter;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  text-align: center;
  width: 160px;
  height: 44px;
  padding: 8px 24px;
  border-radius: 6px;
  gap: 10px;
  background: var(--purple, #6c00ff);
  cursor: pointer;
  
  &:hover {
    transition: 0.3s ease-out;
    background: linear-gradient(15deg, #6c00ff 0%, rgba(108, 0, 255, 0) 100%);
  }
`;

export const StartButton = styled(Link)`
  color: white;
  width: 112px;
  height: 28px;
  text-decoration: none;
`;
