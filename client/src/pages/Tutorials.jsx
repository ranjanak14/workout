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

const Heading = styled.div`
  padding: 0px 16px;
  font-size: 18px;
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

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 100px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.card_background};
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const VideoFrame = styled.iframe`
  width: 100%;
  height: 200px;
  border: none;
  border-radius: 8px;
`;

const Tutorials = () => {
  const workouts = [
    { title: "Back Workout", videoId: "zgfcOWuTeYA" },
    { title: "Chest Workout", videoId: "ChDeUAJc9bE" },
    { title: "Arms Workout", videoId: "2S_9dQylItg" },
    { title: "Legs Workout", videoId: "DpIeBMgh2OA" },
    { title: "Shoulder Workout", videoId: "sUNv3uHAP6I" },
    { title: "Abs Workout", videoId: "TGw_PFFJKjY" },
  ];

  return (
    <Container>
      <Wrapper>
        <Title>Tutorials</Title>
        <Heading>
          Our Trusted Exercise Videos which you can refer:-
        </Heading>
        <Section>
          <CardWrapper>
            {workouts.map((workout, index) => (
              <Card key={index}>
                <Title>{workout.title}</Title>
                <VideoFrame
                  src={`https://www.youtube.com/embed/${workout.videoId}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </Card>
            ))}
          </CardWrapper>
        </Section>
        <Section>
          <Title>Other Tutorials</Title>
          <CardWrapper>
            {/* Add other tutorial cards here */}
            <Card>
              <Title>Yoga for Beginners</Title>
              <VideoFrame
                src="https://www.youtube.com/embed/v7AYKMP6rOE"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Card>
            <Card>
              <Title>HIIT Workout</Title>
              <VideoFrame
                src="https://www.youtube.com/embed/ml6cT4AZdqI"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Card>
            <Card>
              <Title>Belly Fat Burner</Title>
              <VideoFrame
                src="https://www.youtube.com/embed/Iga0h0p6DcI"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Card>
            <Card>
              <Title>Healthy Eating</Title>
              <VideoFrame
                src="https://www.youtube.com/embed/7UDx1RF9Oho"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Card>
          </CardWrapper>
        </Section>
      </Wrapper>
    </Container>
  );
};

export default Tutorials;