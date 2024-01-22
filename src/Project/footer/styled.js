import styled from "styled-components";
import { Link } from "react-router-dom";

export const Footer_ = styled.div`
  display: flex;
  width: 100%;
  height: 353px;
`;

export const FooterLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 353px;
  flex-shrink: 0;
  border-top: 1px solid var(--purple, #6c00ff);
  background: var(--white, #fff);
`;

export const FooterLeftIn = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: flex-start;
  gap: 20px;
  width: 75%;
  height: 75%;
`;

export const LogoMagical = styled.img`
  width: 176px;
  height: 107.903px;
  flex-shrink: 0;
`;

export const Text = styled.p`
  width: 343px;
  color: var(--gray-4, #333);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 171.429% */
`;

export const IconsDiv = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 20px;
`;

export const Links = styled.a`
  text-decoration: none;
`;

export const Icon = styled.img`
  width: 32px;
  height: 32px;
`;

/* ------------------------------------------------- */

export const FooterRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 353px;
  flex-shrink: 0;
  background: linear-gradient(53deg, #6c00ff 0%, rgba(108, 0, 255, 0.46) 100%);
`;

export const FooterRightIn = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: flex-start;
  gap: 70px;
  width: 85%;
  height: 60%;
`;

export const Services = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 11px;
  width: 150px;
`;

export const Company = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 11px;
  width: 96px;
`;

export const Other = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 11px;
  width: 116px;
`;

export const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 11px;
  width: 246px;
`;

export const Title = styled.h5`
  width: 76px;
  color: var(--white, #fff);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 171.429% */
  text-decoration: none;
`;

export const TextLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  color: var(--white, #fff);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 171.429% */
  text-decoration: none;
`;

export const Icon_ = styled.img`
  width: 24px;
  height: 24px;
`;
