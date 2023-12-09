import styled from "styled-components"
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery"
const SliderContainer = styled.div`
background-color: #F5F5F5;
width: 100%;
border-radius: 5px;

`


const images = [
  {
    original: "https://pixosoft.com/images/sliders/pixosoft-slider-3.jpg",
  },
  {
    original: "https://i.pinimg.com/736x/b6/89/96/b68996b0aeb13339740f961ada455a77.jpg",
  },
  {
    original: "https://helloyubo.com/wp-content/uploads/2022/09/IMG-20220913-WA0040-1024x465.jpg",
  },
  {
    original: "https://images.vexels.com/content/194700/preview/buy-online-slider-template-4261dd.png",
  },
];

const Slider = () => {
  
  return (
    <SliderContainer>
       <ImageGallery className="slideImage" items={images} autoPlay showThumbnails={false} showPlayButton={false} showBullets={true}/>
    </SliderContainer>
  )
}

export default Slider