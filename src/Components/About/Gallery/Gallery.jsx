import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css"

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

const Gallery = () => (
  <>
    <AliceCarousel  clasName="carrousel" responsive = {{375: { items: 1 }, 1024: { items: 2 }}}>
      {images.map((image) => {
        return <img src={image.original} />
      })}
  </AliceCarousel>
  </>
);

export default Gallery;
