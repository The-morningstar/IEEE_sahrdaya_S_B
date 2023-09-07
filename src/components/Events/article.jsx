import React from 'react';

import styled from 'styled-components';
import i1 from './images/kcd.png';

const ArticleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  
  @media (min-width: 1024px) {
    gap: 20px;
  }
  @media (min-width: 1280px) {
    gap:50px;
  }
`;

const ArticleCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const ArticleImage = styled.div`
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    display: block;
  }
  &:hover {
    .overlay {
      opacity: 1;
    }
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  background-color: rgba(251, 251, 251, 0.15);
  transition: opacity 0.3s ease-in-out;
`;

const ArticleContent = styled.div`
  padding: 20px;
  h5 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
  }
  p {
    color: #777;
    margin-bottom: 16px;
    // Hide the text for smaller devices
    @media (max-width: 768px) {
      display: none;
    }
  }
  a {
    display: inline-block;
    padding: 6px 12px;
    background-color: #007bff;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 20px;
    text-decoration: none;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease-in-out;
    &:hover {
      background-color: #0056b3;
    }
  }
`;

const Article = () => {
  return (
    <ArticleContainer>
      {/* Article 1 */}
      <ArticleCard>
        <ArticleImage>
          <img src={i1}alt="Article 1" />
          <ImageOverlay className="overlay" />
        </ArticleImage>
        <ArticleContent>
          <h5>Keras Community Day</h5>
          <p>
            <small>
              Hosted on  <u>19.07.2023</u> by </small><h3>EDSOC</h3>
            
          </p>
          <p>
            Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat vulputate. Ut vulputate est non quam
            dignissim elementum. Donec a ullamcorper diam.
          </p>
          
        </ArticleContent>
      </ArticleCard>

      {/* Article 2 */}
      <ArticleCard>
        <ArticleImage>
          <img src={i1}alt="Article 1" />
          <ImageOverlay className="overlay" />
        </ArticleImage>
        <ArticleContent>
          <h5>Keras Community Day</h5>
          <p>
            <small>
              Hosted on  <u>19.07.2023</u> by </small><h3>EDSOC</h3>
            
          </p>
          <p>
            Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat vulputate. Ut vulputate est non quam
            dignissim elementum. Donec a ullamcorper diam.
          </p>
          
        </ArticleContent>
      </ArticleCard>
      <ArticleCard>
        <ArticleImage>
          <img src={i1}alt="Article 1" />
          <ImageOverlay className="overlay" />
        </ArticleImage>
        <ArticleContent>
          <h5>Keras Community Day</h5>
          <p>
            <small>
              Hosted on  <u>19.07.2023</u> by </small><h3>EDSOC</h3>
            
          </p>
          <p>
            Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat vulputate. Ut vulputate est non quam
            dignissim elementum. Donec a ullamcorper diam.
          </p>
          
        </ArticleContent>
      </ArticleCard>

    </ArticleContainer>
  );
};

export default Article;
