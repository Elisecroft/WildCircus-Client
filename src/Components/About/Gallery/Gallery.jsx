import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css"

const images = [
  {
    url: 'https://cdn.pixabay.com/photo/2016/02/24/08/31/girl-1219339_960_720.jpg',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2015/07/02/10/16/circus-828680_960_720.jpg',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2016/11/30/16/27/circus-1873241_960_720.jpg',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2014/08/06/21/03/dance-411999_960_720.jpg',
  },
];

const Gallery = () => (
  <>
    <AliceCarousel  clasName="carrousel" responsive = {{375: { items: 1 }, 1024: { items: 2 }}}>
      {images.map((image) => {
        return <img src={image.url} />
      })}
  </AliceCarousel>
  </>
);

export default Gallery;
