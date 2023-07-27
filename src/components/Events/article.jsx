import React from 'react';
import styled from 'styled-components';

const ArticleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
  @media (min-width: 1024px) {
    gap: 12px;
  }
  @media (min-width: 1280px) {
    gap: 24px;
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
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/024.webp" alt="Article 1" />
          <ImageOverlay className="overlay" />
        </ArticleImage>
        <ArticleContent>
          <h5>My paradise</h5>
          <p>
            <small>
              Published <u>13.01.2022</u> by <a href="">Anna Maria Doe</a>
            </small>
          </p>
          <p>
            Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat vulputate. Ut vulputate est non quam
            dignissim elementum. Donec a ullamcorper diam.
          </p>
          <a href="#" data-mdb-ripple="true" data-mdb-ripple-color="light">
            Read more
          </a>
        </ArticleContent>
      </ArticleCard>

      {/* Article 2 */}
      <ArticleCard>
        <ArticleImage>
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/031.webp" alt="Article 2" />
          <ImageOverlay className="overlay" />
        </ArticleImage>
        <ArticleContent>
          <h5>Travel to Italy</h5>
          <p>
            <small>
              Published <u>12.01.2022</u> by <a href="">Halley Frank</a>
            </small>
          </p>
          <p>
            Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet diam orci, nec ornare metus semper sed. Integer
            volutpat ornare erat sit amet rutrum.
          </p>
          <a href="#" data-mdb-ripple="true" data-mdb-ripple-color="light">
            Read more
          </a>
        </ArticleContent>
      </ArticleCard>

      {/* Article 3 */}
      <ArticleCard>
        <ArticleImage>
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/081.webp" alt="Article 3" />
          <ImageOverlay className="overlay" />
        </ArticleImage>
        <ArticleContent>
          <h5>Chasing the sun</h5>
          <p>
            <small>
              Published <u>10.01.2022</u> by <a href="">Joe Svan</a>
            </small>
          </p>
          <p>
            Curabitur tristique, mi a mollis sagittis, metus felis mattis arcu, non vehicula nisl dui quis diam. Mauris
            ut risus eget massa volutpat feugiat. Donec.
          </p>
          <a href="#" data-mdb-ripple="true" data-mdb-ripple-color="light">
            Read more
          </a>
        </ArticleContent>
      </ArticleCard>
    </ArticleContainer>
  );
};

export default Article;
