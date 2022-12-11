import Link from "next/link";
import React from "react";
import Image from "next/image";

import styles from "../styles/ImageSlider.module.css";

const ImageSlider = ({ image1, image2 }) => {
  // let slideIndex = 1;
  // showSlides(slideIndex);

  // // Next/previous controls
  // function plusSlides(n) {
  //   showSlides((slideIndex += n));
  // }

  // // Thumbnail image controls
  // function currentSlide(n) {
  //   showSlides((slideIndex = n));
  // }

  // function showSlides(n) {
  //   let i;
  //   let slides = document.getElementsByClassName("mySlides");
  //   let dots = document.getElementsByClassName("dot");
  //   if (n > slides.length) {
  //     slideIndex = 1;
  //   }
  //   if (n < 1) {
  //     slideIndex = slides.length;
  //   }
  //   for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";
  //   }
  //   for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  //   }
  //   slides[slideIndex - 1].style.display = "block";
  //   dots[slideIndex - 1].className += " active";
  // }

  return (
    <>
      <Image src={image1} width="100" height="100" />
      <Image src={image2} width="100" height="100" />
      {/* <div className="slideshow-container">
        <div className="mySlidesfade">
          <Image src="/ImageSlider/exma.png" width="100" height="100" />
          <div className="CT">Exmatrikulation</div>
        </div>

        <div className="mySlidesfade">
          <Image src="/ImageSlider/poster.png" width="100" height="100" />
          <div className="CT">Posterwettbewerb</div>
        </div>

        <div className="mySlidesfade">
          <Image src="/ImageSlider/exma.png" width="100" height="100" />
          <div className="CT">Exmatrikulation</div>
        </div>

        <a className="prev" onClick={plusSlides(-1)}>
          &#10094;
        </a>
        <a className="next" onClick={plusSlides}>
          &#10095;
        </a>
      </div>

      <br></br>

      <div>
        <span className="dot" onClick={currentSlide(1)}></span>
        <span className="dot" onClick={currentSlide(2)}></span>
        <span className="dot" onClick={currentSlide(3)}></span>
      </div> */}
    </>
  );
};

export default ImageSlider;
