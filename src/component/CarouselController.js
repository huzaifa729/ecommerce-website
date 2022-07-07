import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ImageTransition from './ImageTransition';
import TextTransition from './TextTransition';

import {mod} from '../Logic/math-helpers';

import './CarouselController.scss';

class CarouselController extends Component {
  sliderInterval = null; // interval that will dispatch a call to go to the next slide for every interval
  images = [
    "https://www.tatadigital.com/content/dam/tcp/channels/assets/homepage/stories/new_hp_version/desktop/midnight060722/HP_HERO_AEM_CROMA_Airpods_06_07_D.jpg",
    "https://www.tatadigital.com/content/dam/tcp/channels/assets/homepage/stories/new_hp_version/desktop/30062022midnight/HP_HERO_AEM_CROMA_Payday-2_TEMP.jpg",
    "https://www.tatadigital.com/content/dam/tcp/channels/assets/homepage/stories/05072022/HP_HERO_AEM_MONSOON_OFFER_05_07_D.jpg",
    "https://rukminim1.flixcart.com/flap/3376/560/image/7c8a50faa593dc24.jpg?q=50",
    "https://www.tatadigital.com/content/dam/tcp/channels/assets/homepage/stories/new_hp_version/desktop/29062022midnight/MicrosoftTeams-desktop.png",
  ];
  duration = 4000;
  constructor(props) {
    super(props);
    this.state = { index: 0 };

    this.createSlideInterval = this.creatSlideInterval.bind(this);
    this.gotoSlide = this.gotoSlide.bind(this);
  }

  componentDidMount() {
    this.creatSlideInterval();
  }

  componentWillUnmount() {
    clearInterval(this.sliderInterval);
  }

  creatSlideInterval() {
    this.sliderInterval = setInterval(() => {
      // change state s
      this.setState((prevS) => ({
        index: mod(prevS.index + 1, this.images.length),
      }));
    }, this.duration);
  }

  /* Goes to the specified slide given an index */
  gotoSlide(selectedIndex) {
    if (this.state.index !== selectedIndex) {
      // reset the timer
      clearInterval(this.sliderInterval);
      this.creatSlideInterval();

      // set slider to selected index
      this.setState({ index: selectedIndex });
    }
  }

  render() {
    return (
      <div className="slider-controller-container">
         <ImageTransition slideIndex={this.state.index} images={this.images} />

        <TextTransition textIndex={this.state.index} /> 

        <div className="selectors">
          {this.images.map((img, i) => (
            <div
              key={i}
              className={`carousel-selector ${
                i == this.state.index ? 'selector-active' : ''
              }`}
              onClick={(e) => this.gotoSlide(i)}
            />
          ))}
        </div>
      </div>
    );
  }
}

CarouselController.propTypes = {
  // the amount seconds (given in milliseconds) that each interval will take place
  seconds: PropTypes.number,
};

export default CarouselController;