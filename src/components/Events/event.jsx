import React from 'react';
import styled from 'styled-components';
import Article from './article';

const Container = styled.div`
  margin: 0 auto;
  max-width: 15000px;
  padding: 20px;
`;

const Heading = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 12px;
  padding-bottom: 4px;
  text-align: center;
`;

const Event = () => {
  return (
    <Container>
      <Heading>Upcoming Events</Heading>
      <Article />
    </Container>
  );
};

export default Event;
