import styled from "styled-components";
import { Link } from "react-router-dom";

export const All = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const TitleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 190px;
`;

export const Title1 = styled.h1`
  width: 487px;
  height: 48px;
  top: 198px;
  left: 512px;
  font-family: Inter;
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: 0em;
  text-align: center;
  color: #6c00ff;
`;

export const Div1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Div1Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  width: 90%;
`;

export const ConnectDiv1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 424px;
`;

export const ConnectDiv2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 424px;
`;

export const ConnectDiv3 = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 424px;
`;

export const ConnectDiv4 = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 424px;
`;

export const MobileDocument = styled.img`
  width: 100%;
  height: 341px;
`;

export const Quality = styled.img`
  width: 100%;
  height: 341px;
`;

// -------------------------------------------------

export const Div2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 50px;
`;

export const Div2Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  width: 90%;
`;

export const StartupProject = styled.img`
  width: 100%;
  height: 341px;
`;

export const ResponsiveDesign = styled.img`
  width: 100%;
  height: 341px;
`;

export const TitleDescription = styled(Link)`
  /* width: Fixed (517px); */
  height: Fixed (83px);
  top: 657px;
  left: 85px;
  padding: 16px;
  gap: 10px;
  background: var(--purple, #6c00ff);
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s, ease;

  &:hover {
    background: linear-gradient(
      94.72deg,
      #6c00ff 46.19%,
      rgba(108, 0, 255, 0) 130.15%
    );
  }
`;

export const Title = styled.h3`
  width: 43px;
  height: 28px;
  font-family: Inter;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
`;

export const Description = styled.p`
  width: 87px;
  height: 28px;
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: white;
`;
