import React from "react";
import GoogleMapReact from "google-map-react";
import LocationPic from "./img/marker-02.png";
import PhonePic from "./img/phone-call-01.png";
import GmailPic from "./img/mail-02.png";
import MenuBar from "../menu";
import Footer from "../footer";
import {
  App,
  ButtonsDiv,
  Button1,
  Button2,
  ContactsDiv,
  FormDiv,
  Contacts1,
  Location,
  Gmail,
  PhoneNumber,
  MapDiv,
  Form1,
  Pic,
  Text,
  TextDiv,
  Label_,
  Input_,
  TextArea,
  MapDivIn,
  Button3,
} from "./styled";

export default function Contacts() {
  
  const defaultProps = {
    center: {
      lat: 40.563179,
      lng: 45.016425,
    },
    zoom: 11,
  };

  return (
    <>
      <MenuBar />
      <App>
        <ButtonsDiv>
          <Button1 to="">Contact Us</Button1>
          <Button2 to="">Join Our Team</Button2>
        </ButtonsDiv>

        <ContactsDiv>
          <FormDiv>
            <Contacts1>
              <Location>
                <Pic src={LocationPic} alt="Pic1"></Pic>
                <Text>Sevan, Armenia</Text>
              </Location>
              <PhoneNumber>
                <Pic src={PhonePic} alt="Pic2"></Pic>
                <Text>+37433611106</Text>
              </PhoneNumber>
              <Gmail>
                <Pic src={GmailPic} alt="Pic3"></Pic>
                <Text>magicalcompanyofficial@gmail.com</Text>
              </Gmail>
            </Contacts1>

            <Form1>
              <TextDiv>
                <Label_>Full Name:</Label_>
                <Input_ type="text" />
              </TextDiv>
              <TextDiv>
                <Label_>Country:</Label_>
                <Input_ type="text" />
              </TextDiv>
              <TextDiv>
                <Label_>Email:</Label_>
                <Input_ type="text" />
              </TextDiv>
              <TextDiv>
                <Label_>Message:</Label_>
                <TextArea></TextArea>
              </TextDiv>
              <Button3>Submit</Button3>
            </Form1>
          </FormDiv>

          <MapDiv>
            <MapDivIn>
              <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                yesIWantToUseGoogleMapApiInternals={true}
              >
              </GoogleMapReact>
            </MapDivIn>
          </MapDiv>
        </ContactsDiv>
      </App>
      <Footer />
    </>
  );
}
