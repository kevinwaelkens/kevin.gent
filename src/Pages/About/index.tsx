import React from 'react';
import * as Styled from './styles';
import Layout from 'components/Layout';

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  const getAge = () => {
    const now = new Date();
    const birthDate = new Date(825418800000);
    let age = now.getFullYear() - birthDate.getFullYear();
    const m = now.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <Layout>
      <Styled.Wrapper>
        <Styled.Container>
          <Styled.ImageContainer>
            <Styled.Image src="../images/me.jpg" alt="Myself" />
          </Styled.ImageContainer>
          <Styled.TextContainer>
            <Styled.Text>
              <p>
                I'm Kevin Waelkens, a {getAge()} year old youngster who loves
                anything that's digital. I graduated in Digital Design and
                Development where I caught the interest in design and the love
                for programming. I'm currently working full time as a full-stack
                developer at{' '}
                <Styled.Link href="https://www.delta.app">Delta</Styled.Link>.
              </p>
              <p>
                Along the way a passion for photography grew. I enjoy capturing
                the perfect moment which is why I'm barely still leaving the
                house without my camera.
              </p>
              <p>
                Do you have any project you want realised and wonder if we'd
                make a good fit? Don't hesitate to reach out!
              </p>
            </Styled.Text>
            <Styled.External>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.github.com/kevinwaelkens"
              >
                <img src="../images/github.png" alt="GitHub" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/kevinwaelkens/"
              >
                <img src="../images/in.png" alt="LinkedIn" />
              </a>
            </Styled.External>
          </Styled.TextContainer>
        </Styled.Container>
      </Styled.Wrapper>
    </Layout>
  );
};

export default About;
