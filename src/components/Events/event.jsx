import React from 'react';
import styled from 'styled-components';
import Article from './article';
import { CSSTransition } from 'react-transition-group';
import './eventstyles.css'

const Container = styled.div`
  margin: 0 auto;
  max-width: 15000px;
  padding: 40px 40px;
  background-color: #071952;
`;

const Heading = styled.h2`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 20px;
  padding:10px 20px;
  text-align: center;
  color: #e8ffc2;
`;

// Add a styled button component
const ViewMoreButton = styled.button`
  background-color: #e8ffc2;
  color: #071952;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right; /* Align the button to the right side */

  /* Responsive styles */
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 16px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 6px 12px;
  }
`;

const ArticleWrapper = styled.div`
  /* Parallax effect for article cards on entry and exit */
  transform: translateY(${props => (props.isEntering ? '-50px' : '0')});
  opacity: ${props => (props.isEntering ? 0 : 1)};
  transition: transform 0.8s ease-in-out, opacity 0.5s ease-in-out;
`;

const Event = () => {
  const handleViewMoreClick = () => {
    // Replace 'your-url-here' with the actual URL you want to redirect to
    window.location.href = 'your-url-here';
  };

  return (
    <Container>
      <Heading>
        Upcoming Events
        <ViewMoreButton onClick={handleViewMoreClick}>View More</ViewMoreButton>
      </Heading>
      {/* Use CSSTransition for the ArticleWrapper */}
      <CSSTransition in={true} appear={true} timeout={1000} classNames="article-transition">
        {state => (
          <ArticleWrapper isEntering={state === 'entering'}>
            <Article />
          </ArticleWrapper>
        )}
      </CSSTransition>
    </Container>
  );
};

export default Event;
