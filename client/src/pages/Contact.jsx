import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 22px 0px;
  overflow-y: scroll;
`;

const Wrapper = styled.div`
  flex: 1;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const Title = styled.div`
  padding: 0px 16px;
  font-size: 22px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 16px;
  gap: 22px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;

const Button = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  color: #fff;
  background-color: ${({ theme }) => theme.button_background};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.button_hover};
  }
`;

const Map = styled.iframe`
  width: 100%;
  height: 300px;
  border: none;
  border-radius: 8px;
`;

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Contact Us</Title>
        <Section>
          <Title>Contact Information</Title>
          <ContactInfo>
            <InfoItem>
              <strong>Email:</strong> contact@fitnessapp.com
            </InfoItem>
            <InfoItem>
              <strong>Phone:</strong> +1 (123) 456-7890
            </InfoItem>
            <InfoItem>
              <strong>Address:</strong> 123 Fitness St, Workout City, XY 12345
            </InfoItem>
          </ContactInfo>
        </Section>
        <Section>
          <Title>Send Us a Message</Title>
          <ContactForm>
            <Input type="text" placeholder="Your Name" required />
            <Input type="email" placeholder="Your Email" required />
            <TextArea rows="5" placeholder="Your Message" required></TextArea>
            <Button type="submit">Submit</Button>
          </ContactForm>
        </Section>
        <Section>
          <Title>Our Location</Title>
          <Map
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.863764949333!2d-122.0842496850474!3d37.422065979823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba015281f1fd%3A0x56c9b8e36d68ab10!2sGoogleplex!5e0!3m2!1sen!2sus!4v1624114636385!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></Map>
        </Section>
      </Wrapper>
    </Container>
  );
};

export default Contact;