import React from "react";
import Footer from "../footer";
import MenuBar from "../menu";
import Pic1 from "./img/Group.png";
import Pic2 from "./img/Group631815.png";
import {
  PicDiv,
  Pic_1,
  Text,
  TextDiv,
  TextDivInner,
  TextHead,
  Br,
  DeviceDiv,
  DeviceReg,
  DevicePic,
  Form,
  RadioGroup,
  Label,
  Input_,
  FormTitle,
  InputGroup,
  InputLable,
  InputText,
  InputMessage,
  InputGroupMessage,
  FormButton,
} from "./styled";

export default function AboutUs() {
  return (
    <>
      <MenuBar />
      <PicDiv>
        <Pic_1 src={Pic1} alt="Pic1" />
      </PicDiv>
      <TextDiv>
        <TextDivInner>
          <TextHead>Who We’re & What We Do ?</TextHead>
          <Text>
            Lorem ipsum is a pseudo-Latin text used in web design, typography,
            layout, and printing in place of English to emphasise design
            elements over content. It's also called placeholder (or filler)
            text. It's a convenient tool for mock-ups. It helps to outline the
            visual elements of a document or presentation, eg typography, font,
            or layout.
            <Br />
            <Br />
            Lorem ipsum is mostly a part of a Latin text by the classical author
            and philosopher Cicero. Its words and letters have been changed by
            addition or removal, so to deliberately render
          </Text>
        </TextDivInner>
      </TextDiv>
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

            <FormButton>Submit</FormButton>
          </Form>
        </DeviceReg>

        <DevicePic src={Pic2} alt="Pic2" />
      </DeviceDiv>
      <Footer />
    </>
  );
}
