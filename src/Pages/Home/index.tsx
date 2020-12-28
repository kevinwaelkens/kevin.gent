import React, { useEffect, useState } from 'react';

import Detail from './Detail';
import * as Styled from './styles';
import Layout from 'components/Layout';

type Filter = 'all' | 'portrait' | 'event';

const filters: Filter[] = ['all', 'portrait', 'event'];

const Home: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<Filter>('all');
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [photos, setPhotos] = useState<Record<string, string>[]>([]);
  const [isDetailVisible, setIsDetailVisible] = useState(false);

  useEffect(() => {
    fetch('./api/api.json')
      .then((res) => res.json())
      .then(({ photos }: { photos: Record<string, string>[] }) => {
        setPhotos(photos);
      });
  }, []);

  const handleClick = (currentPhotoIndex: number) => {
    setCurrentPhotoIndex(currentPhotoIndex);
    setIsDetailVisible(true);
  };

  const handleCloseClick = () => {
    setIsDetailVisible(false);
  };

  const filteredPhotos =
    activeFilter === 'all'
      ? photos
      : photos.filter((photo) => photo.filter === activeFilter);
  return (
    <Layout>
      <>
        {isDetailVisible && (
          <Detail
            photos={filteredPhotos}
            activePhotoIndex={currentPhotoIndex}
            onCloseClick={handleCloseClick}
          />
        )}
        <Styled.PreviewWrapper>
          <Styled.PreviewContainer>
            <Styled.FilterContainer>
              {filters.map((filter) => (
                <Styled.Filter
                  onClick={() => setActiveFilter(filter)}
                  isActive={activeFilter === filter}
                  key={filter}
                >
                  {filter}
                </Styled.Filter>
              ))}
            </Styled.FilterContainer>
            {filteredPhotos.map((photo, index) => (
              <Styled.Preview
                onClick={() => handleClick(index)}
                key={photo.name}
                src={`./images/photos/${photo.name}.jpg`}
                alt="Preview."
              />
            ))}
          </Styled.PreviewContainer>
        </Styled.PreviewWrapper>
      </>
    </Layout>
  );
};

export default Home;
