import React, { forwardRef } from 'react';
import {CAROUSEL_SPEED, } from '@/utils/constants';
import Slider from 'react-slick';
import styles from './styles.module.scss';

// eslint-disable-next-line react/display-name
const Carousel = forwardRef(
  (
    { beforeChange, children, animated, slidesToShowOnDesktop, slidesToShowOnMobile },
    ref
  ) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: CAROUSEL_SPEED,
      slidesToShow: slidesToShowOnDesktop,
      centerMode: true,
      centerPadding: '0px',
      dots: false,
      responsive: [
        {
          breakpoint: 500,
          settings: {
            slidesToShow: slidesToShowOnMobile,
            centerPadding: '0px',
          }
        }
      ],
      nextArrow: (
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="18"
            viewBox="0 0 24 18"
          >
            <g
              fill="none"
              fillRule="evenodd"
              stroke="#5C5C5C"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              transform="matrix(-1 0 0 1 23 1)"
            >
              <line x2="22" y1="8" y2="8" />
              <polyline points="8 16 0 8 8 0" />
            </g>
          </svg>
        </div>
      ),
      prevArrow: (
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="18"
            viewBox="0 0 24 18"
          >
            <g
              fill="none"
              fillRule="evenodd"
              stroke="#5C5C5C"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              transform="translate(1 1)"
            >
              <line x2="22" y1="8" y2="8" />
              <polyline points="8 16 0 8 8 0" />
            </g>
          </svg>
        </div>
      ),
    };

    const handleBeforeChange = (oldIndex, newIndex) => {
      if (beforeChange) beforeChange(oldIndex, newIndex);
    };

    return (<div className={styles.carouselContainer}>
      <Slider
        ref={ref}
        className={`slider ${animated ? 'animated' : ''}`}
        {...settings}
        beforeChange={handleBeforeChange}
      >
        {children}
      </Slider>
    </div>)
  }
);

export default Carousel;