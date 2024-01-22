import React from "react";
import MenuBar from "../menu/index";
import Footer from "../footer/index";
import Pic from "./img/Group631815.png";
import {
  DeviceDiv,
  DeviceReg,
  Form,
  Input_,
  FormTitle,
  RadioGroup,
  Label,
  InputGroup,
  InputLable,
  InputText,
  InputGroupMessage,
  InputMessage,
  FormButton,
  DevicePic,
} from "./styled";

export default function GetInTouch() {
  return (
    <>
      <MenuBar />
      <DeviceDiv>
        <DeviceReg>
          <Form>
            <FormTitle>What is the device for your project? *</FormTitle>
            <RadioGroup>
              <Label>
                <Input_ type="radio" name="radio" />
                <div className="radio-custom"></div>
                Website
              </Label>

              <Label>
                <Input_ type="radio" name="radio" />
                <div className="radio-custom"></div>
                Mobile
              </Label>

              <Label>
                <Input_ type="radio" name="radio" />
                <div className="radio-custom"></div>
                Other
              </Label>
            </RadioGroup>

            <InputGroup>
              <InputLable>Full Name:</InputLable>
              <InputText type="text" />
            </InputGroup>

            <InputGroup>
              <InputLable>Country:</InputLable>
              <InputText type="text" />
            </InputGroup>

            <InputGroup>
              <InputLable>Email:</InputLable>
              <InputText type="text" />
            </InputGroup>

            <InputGroupMessage>
              <InputLable>Message:</InputLable>
              <InputMessage type="text" />
            </InputGroupMessage>

            <FormButton>
              Submit
            </FormButton>
          </Form>
        </DeviceReg>

        <DevicePic src={Pic} alt="Pic" />
      </DeviceDiv>
      <Footer></Footer>
    </>
  );
}
