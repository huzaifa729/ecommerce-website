import React, { Component } from "react";
import PropTypes from "prop-types";
import anime from "animejs";

import {mod } from "../Logic/math-helpers";

import "./ImageTransition.scss";

class ImageTransition extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.goto = this.goto.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    this.goto(this.props.slideIndex, prevProps.slideIndex);
  }

  /**
   * Go to the selected index (ind) from slideshow collection
   *
   * @param {Number} ind The photo index from the collection to go to
   * @param {Number} prevInd The previous photo index from the slideshow collection
   */
  goto(ind, prevInd, userTrigger = false) {
    let newImg = document.querySelector(`.slideshow-image-${ind}`);
    let prevImg = document.querySelector(
      `.slideshow-image-${mod(prevInd, this.props.images.length)}`
    );
    anime.set(newImg, { zIndex: 5 });

    anime
      .timeline({ easing: "easeInOutQuad" })
      .add({
        // set new slide to foreground
        targets: newImg,
        zIndex: 5,
        duration: 0
      })
      .add({
        // move new image into frame
        targets: newImg,
        translateX: ["100%", 0],
        duration: 2000
      })
      .add(
        {
          // move old image out of frame
          targets: prevImg,
          translateX: [0, "-100%"],
          duration: 2000
        },
        0
      )
      .add({
        // set new slide to middleground
        targets: newImg,
        zIndex: 4,
        duration: 1, //appearently if i don't set this to a non-zero value, the first z-index
        complete: anim => {
          anime.set(prevImg, { zIndex: 3 });
        }
      });
  }

  render() {
    return (
      <div className="slideshow-container">
        {this.props.images.map((url, i) => (
          <div
            key={i}
            style={{ zIndex: i == 0 ? 4 : 3 }}
            className={` slideshow-image slideshow-image-${i}`}
          >
            <div
              style={{
                backgroundImage: `linear-gradient(
                                  rgba(0, 0, 0, 0.25),
                                  rgba(0, 0, 0, 0.25)
                                ),
                                url(${url})`
              }}
              alt={`slideshow-image-${i}`}
            />
          </div>
        ))}
      </div>
    );
  }
}

ImageTransition.propTypes = {
  // The current index from the collection of images to reveal for the slideshow
  slideIndex: PropTypes.number,
  // The collection of image urls to use for the slideshow
  imageURLs: PropTypes.arrayOf(PropTypes.string)
};

export default ImageTransition;