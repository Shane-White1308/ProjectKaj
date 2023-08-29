import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Hero = ({images}) => {
  const responsive = {
    any: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
    },
  };

  return (
      <Carousel
          responsive={responsive}
          ssr={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          deviceType="any"
          arrows={true}
      >
        {images.length
            ? images.map((link, i) => (
                <div key={i}>
                  <img className="h-[60vh] w-full object-cover" src={link} alt="Carousel image"/>
                </div>
            ))
            : [1].map((i) => <div key={i} className="h-[60vh]"></div> )}
      </Carousel>
  );
};

export default Hero;
