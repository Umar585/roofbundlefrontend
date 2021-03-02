import React from "react";
//component
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
//css
import "../Estimates.css";
export default function CustomCarousel(props) {
  const uploads = props.uploads;
  return (
    <div>
      {uploads.length === 0 ? (
        <h5 className="text-center">No Images</h5>
      ) : (
        <Carousel
          centerMode
          //showArrows={false}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          infiniteLoop={true}
          centerSlidePercentage={80}
        >
          {uploads.map((item, index) => {
            return (
              <div className="m-2" key={index}>
                <div
                  className="card shadow"
                  key={index}
                  style={{
                    height: "180px",
                    width: "100%",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    src={item.name}
                    alt="estimates Images"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </Carousel>
      )}
    </div>
  );
}
