import React from 'react';
import styled from 'styled-components';

import heroSvg from '../../../resources/images/hero-a.svg';

const Section = styled.section`
  padding: 50px 0;

  &#hero {
    background: linear-gradient(135deg, #0079bf, #5067c5);
    padding: 100px 0;
  }
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  & > div {
    display: flex;
    flex-direction: column;
  }
  & > div.txt-area {
    color: #fff;
    padding: 0 30px;

    & > p {
      font-size: 40px;
      font-weight: bold;
      margin-bottom: 20px;
    }

    & > span {
      font-size: 24px;
    }
  }
`;

const Home = () => (
  <main>
    <Section id="hero">
      <Container>
        <div className="txt-area">
          <p>
            Trello helps teams work
            <br />
            more collaboratively and
            <br />
            get more done.
          </p>
          <span>
            Trello&apos;s boards, lists, cards enabled teams
            <br />
            to organize and prioritize projects in a fun,
            <br />
            flexible, and rewarding way.
          </span>
        </div>
        <div className="img-area">
          <img src={heroSvg} alt="" />
        </div>
      </Container>
    </Section>
  </main>
);

export default Home;
