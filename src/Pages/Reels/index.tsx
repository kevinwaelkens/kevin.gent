import React, { useState } from 'react';
import * as Styled from './styles';
import Layout from 'components/Layout';
import Modal from 'react-modal';

Modal.setAppElement('#__next');

const videos = [
  './videos/aBeautifulNight.mov',
  './videos/googleMan.mp4',
  './videos/nerf.mp4',
  './videos/teamleaderSaveTime.mp4',
];

const Reels: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <Layout>
      <Styled.Wrapper>
        <Styled.Container>
          {videos.map((video) => (
            <Styled.Preview
              onClick={() => {
                setActiveVideo(video);
              }}
            >
              <source src={video} type="video/mp4" />
            </Styled.Preview>
          ))}
        </Styled.Container>
      </Styled.Wrapper>
      <Modal
        isOpen={!!activeVideo}
        onRequestClose={() => {
          setActiveVideo(null);
        }}
        shouldCloseOnEsc
      >
        <Styled.VideoContainer>
          <Styled.CloseVideoButton
            onClick={() => {
              setActiveVideo(null);
            }}
          >
            X
          </Styled.CloseVideoButton>
          <Styled.Video controls controlsList="nodownload">
            <source src={activeVideo ?? ''} type="video/mp4" />
          </Styled.Video>
        </Styled.VideoContainer>
      </Modal>
    </Layout>
  );
};

export default Reels;
