import React, { Component } from "react";
import PropTypes from "prop-types";
import anime from "animejs";

import {mod}  from "../Logic/math-helpers";

import "./TextTransition.scss";

class TextTransition extends Component {

  animations = {
    flipIn: {
      rotateX: [90, 0]
    },
    fadeUp: {
      opacity: [0, 1],
      translateY: [100, 0],
      easing: "easeOutSine"
    },
    fadeLeft: {
      opacity: [0, 1],
      translateX: [100, 0],
      easing: "easeOutSine"
    }
  };

  constructor(props) {
    super(props);
    this.state = {};

    this.goto = this.goto.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    this.goto(this.props.textIndex, prevProps.textIndex);
  }

  goto(ind, prevInd) {
    anime({
      targets: ".text-wrapper span",
      ...this.animations.fadeLeft,
      delay: (el, i) => 1000 + 500 * i
    });
  }

  render() {
    return (
      <div className="text-slide-1-container">
        <div className="text-wrapper">
          <span className="textslide-title">
      
          </span>

          <span className="textslide-subtitle">
           
          </span>
        </div>
      </div>
    );
  }
}

TextTransition.propTypes = {
  // The current index from the collection of text to reveal for the slideshow
  textIndex: PropTypes.number
};

export default TextTransition;