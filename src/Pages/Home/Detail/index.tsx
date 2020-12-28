import React, { useCallback, useEffect, useState } from 'react';
import * as Styled from './styles';
import throttle from 'lodash.throttle';

interface DetailProps {
  activePhotoIndex: number;
  photos: Record<string, string>[];
  onCloseClick: () => void;
}

const Detail: React.FC<DetailProps> = ({
  activePhotoIndex,
  photos,
  onCloseClick: handleCloseClick,
}) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(activePhotoIndex);

  const handlePreviousClick = throttle(() => {
    setCurrentPhotoIndex(
      currentPhotoIndex === 0 ? photos.length - 1 : currentPhotoIndex - 1,
    );
  }, 350);

  const handleNextClick = throttle(() => {
    console.log('photos is ', photos);
    console.log(currentPhotoIndex === photos.length - 1);
    console.log('currentPhotoIndex + 1 is ', currentPhotoIndex + 1);
    setCurrentPhotoIndex(
      currentPhotoIndex === photos.length - 1 ? 0 : currentPhotoIndex + 1,
    );
  }, 350);

  const handleKeyDown = useCallback(
    ({ key }) => {
      switch (key) {
        case 'ArrowLeft':
          handlePreviousClick();
          break;
        case 'ArrowRight':
          handleNextClick();
          break;
        case 'Escape':
          handleCloseClick();
          break;
        default:
      }
    },
    [handleCloseClick, handleNextClick, handlePreviousClick],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <Styled.Container>
      <Styled.Previous
        src="./images/arrow.svg"
        alt="Previous"
        onClick={handlePreviousClick}
      />
      <Styled.Image
        src={`./images/photos/${photos[currentPhotoIndex].name}.jpg`}
        alt="photos[currentPhotoIndex].name"
      />
      <Styled.Next
        src="./images/arrow.svg"
        alt="Next"
        onClick={handleNextClick}
      />
      <Styled.Close
        src="./images/x.svg"
        alt="Close"
        onClick={handleCloseClick}
      />
    </Styled.Container>
  );
};

export default Detail;
