import styled from "styled-components";
import { Link } from "react-router-dom";

export const App = styled.div`
  width: 100%;
  height: 1017px;
  flex-shrink: 0;
  background: linear-gradient(165deg, #6c00ff 0%, #fff 100%);
`;

export const ButtonsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  width: 100%;
  height: 193px;
`;

export const Button1 = styled(Link)`
  display: inline-flex;
  height: 53px;
  width: 170px;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 20px;
  border: none;
  background: linear-gradient(
    141deg,
    #6c00ff 0%,
    rgba(255, 255, 255, 0.46) 100%
  );
  margin: 88px 57px;
  color: var(--white, #fff);
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 56px;
  text-decoration: none;
`;

export const Button2 = styled(Link)`
  display: flex;
  width: 168px;
  height: 53px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: var(--white, #fff);
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 56px;
  text-decoration: none;
`;

export const ContactsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80%;
`;

export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40%;
  height: 90%;
`;

export const Contacts1 = styled.div`
  display: flex;
  align-items: start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 20px;
`;

export const Location = styled.div`
  display: flex;
  gap: 5px;
`;

export const PhoneNumber = styled.div`
  display: flex;
  gap: 5px;
`;

export const Gmail = styled.div`
  display: flex;
  gap: 5px;
`;

export const Pic = styled.img`
  width: 24px;
  height: 24px;
`;

export const Text = styled.p`
  color: var(--white, #fff);
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 32.491px;
`;

export const MapDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  flex-shrink: 0;
  border-radius: 5px;
  border: 0;
`;

export const MapDivIn = styled.div`
  width: 95%;
  height: 90%;
`;

// ------------------------------------------

export const Form1 = styled.form`
  display: flex;
  flex-direction: column;
  gap: 44px;
`;

export const Label_ = styled.label`
  color: var(--white, #fff);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Input_ = styled.input`
  width: 484px;
  height: 44px;
  flex-shrink: 0;
  border-radius: 4px;
  border: 1px solid #d5d8de;
  background: #fff;
`;

export const TextArea = styled.textarea`
  width: 484px;
  height: 135px;
  flex-shrink: 0;
  border-radius: 4px;
  border: 1px solid #d5d8de;
  background: #fff;
`;

export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 72%;
`;

export const Button3 = styled.button`
  display: flex;
  width: 484px;
  padding: 8px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  border: none;
  background: var(--purple, #6c00ff);
  color: white;
`;
