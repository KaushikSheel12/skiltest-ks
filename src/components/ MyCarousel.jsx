import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MyCarousel = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleTextHover = (index) => {
    setHoveredIndex(index);
  };

  return (
    <Carousel>
      <div>
        <img
          src={hoveredIndex === 0 ? '/path/to/hovered-image1.jpg' : '/path/to/image1.jpg'}
          alt="Image 1"
        />
        <p className="legend" onMouseEnter={() => handleTextHover(0)} onMouseLeave={() => handleTextHover(null)}>
          Legend 1
        </p>
      </div>
      <div>
        <img
          src={hoveredIndex === 1 ? '/path/to/hovered-image2.jpg' : '/path/to/image2.jpg'}
          alt="Image 2"
        />
        <p className="legend" onMouseEnter={() => handleTextHover(1)} onMouseLeave={() => handleTextHover(null)}>
          Legend 2
        </p>
      </div>
      <div>
        <img
          src={hoveredIndex === 2 ? '/path/to/hovered-image3.jpg' : '/path/to/image3.jpg'}
          alt="Image 3"
        />
        <p className="legend" onMouseEnter={() => handleTextHover(2)} onMouseLeave={() => handleTextHover(null)}>
          Legend 3
        </p>
      </div>
    </Carousel>
  );
};

export default MyCarousel;
