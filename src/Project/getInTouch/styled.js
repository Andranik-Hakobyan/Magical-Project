import { styled } from "styled-components";

export const DeviceDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 100%;
  height: 820px;
  margin-top: 27px;
  margin-bottom: 155px;
  border-top: 1px solid #6c00ff;
  border-bottom: 1px solid #6c00ff;
`;

export const DeviceReg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 600px;
`;

export const DevicePic = styled.img`
  width: 700px;
  height: 600px;
  border-radius: 5px;
`;

export const Form = styled.form`
  width: 100%;
  height: 600px;
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 484px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-family: Inter;
  color: gray;
  margin-bottom: 21px;
  font-family: Inter;

  input[type="radio"] {
    /* Hide the default radio button */
    appearance: none;
    position: relative;
    width: 20px;
    height: 20px;
    border: 1px solid gray;
    border-radius: 50%;
    margin-right: 8px;
    outline: none;
    cursor: pointer;
  }

  input[type="radio"]:checked {
    /* Apply styles when the radio button is checked */
    border: 6px solid gray;
    transition: all 1s, ease-in;
  }
`;

export const Input_ = styled.input`
  width: 484px;
  height: 44px;
`;

export const FormTitle = styled.h1`
  width: 360px;
  height: 24px;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  margin-bottom: 28px;
  color: #333333;
`;

export const InputGroup = styled.div`
  width: 484px;
  height: 68px;
  margin-top: 10px;
`;

export const InputLable = styled.label`
  width: 79px;
  height: 19px;
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  text-align: left;
  color: #000000;
`;

export const InputText = styled.input`
  width: 484px;
  height: 44px;
  border-radius: 4px;
  border: 1px;
  border: 1px solid #d5d8de;
`;

export const InputMessage = styled.textarea`
  width: 484px;
  height: 135px;
  border-radius: 4px;
  border: 1px;
  border: 1px solid #d5d8de;
  margin-bottom: 29px;
`;

export const InputGroupMessage = styled.div`
  width: 484px;
  height: 179px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const FormButton = styled.button`
  width: 484px;
  height: 44px;
  padding: 8px 24px 8px 24px;
  border-radius: 6px;
  border: none;
  color: white;
  gap: 10px;
  background: #6c00ff;
  margin-top: 30px;
  
  &:hover {
    cursor: pointer;
    background: rgb(108, 0, 255);
    background: linear-gradient(
      32deg,
      rgba(108, 0, 255, 1) 62%,
      rgba(186, 135, 255, 1) 100%
    );
  }
`;