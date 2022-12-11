import Link from "next/link";
import React from "react";
import Image from "next/image";

import styles from "../styles/ImageSlider.module.css";

const ImageSlider = () => {
  return (

    <><div className="slideshow-container">


    <div className="mySlidesfade">
        <Image src="/ImageSlider/exma.png" width="100%" />
        <div className="CT">Exmatrikulation</div>
    </div>

    <div className="mySlidesfade">
        <Image src="/ImageSlider/poster.png" width="100%" />
        <div className="CT">Posterwettbewerb</div>
    </div>

    <div className="mySlidesfade">
        <Image src="/ImageSlider/exma.png" width="100%" />
        <div className="CT">Exmatrikulation</div>
    </div>


    <a className="prev" onClick={plusSlides(-1)}>&#10094;</a>
    <a className="next" onClick={plusSlides1}>&#10095;</a>

    </div>

    <br></br>

    <div>
        <span className="dot" onClick={currentSlide(1)}></span>
        <span className="dot" onClick={currentSlide(2)}></span>
        <span className="dot" onClick={currentSlide(3)}></span>
    </div>


    </>

  );
};

