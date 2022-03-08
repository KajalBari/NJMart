import React, {useState} from 'react';
import {SMView} from '..';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import PropTypes from 'prop-types';
import {COLORS} from '../../constants/Colors';
import {dim, normalize} from '../../constants/Platform';
import {styles} from './styles';

function SMCarousel(props) {
  const {
    containerStyle,
    data,
    renderItem,
    sliderWidth,
    itemWidth,
    pagination,
    dotColor,
    inactiveDotColor,
    paginationContainerStyle,
    paginationDotStyle,
    inactiveDotStyle,
    inactiveDotOpacity,
    inactiveDotScale,
    scrollEnabled,
    autoplay,
    loop,
  } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  let carousel;

  return (
    <SMView style={[styles.container, containerStyle]}>
      <Carousel
        ref={c => {
          carousel = c;
        }}
        data={data}
        renderItem={renderItem}
        sliderWidth={sliderWidth ? sliderWidth : dim().width * 0.9}
        itemWidth={itemWidth ? itemWidth : dim().width * 0.9}
        onSnapToItem={index => {
          setActiveIndex(index);
        }}
        scrollEnabled={scrollEnabled}
        autoplay={autoplay}
        loop={loop}
        nestedScrollEnabled
      />
      {pagination ? (
        <Pagination
          dotsLength={data.length}
          activeDotIndex={activeIndex}
          dotColor={dotColor ? dotColor : COLORS.SLIDER_PAGINATION_ACTIVE}
          inactiveDotColor={
            inactiveDotColor
              ? inactiveDotColor
              : COLORS.SLIDER_PAGINATION_INACTIVE
          }
          containerStyle={[
            styles.paginationContainerStyle,
            paginationContainerStyle,
          ]}
          dotContainerStyle={styles.dotContainerStyle}
          dotStyle={[styles.paginationDotStyle, paginationDotStyle]}
          inactiveDotStyle={[inactiveDotStyle]}
          inactiveDotOpacity={inactiveDotOpacity}
          inactiveDotScale={inactiveDotScale}
        />
      ) : null}
    </SMView>
  );
}

SMCarousel.propTypes = {
  containerStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  data: PropTypes.array,
  renderItem: PropTypes.any,
  sliderWidth: PropTypes.number,
  itemWidth: PropTypes.number,
  pagination: PropTypes.bool,
  scrollEnabled: PropTypes.bool,
  autoplay: PropTypes.bool,
  loop: PropTypes.bool,
  dotColor: PropTypes.string,
  inactiveDotColor: PropTypes.string,
  paginationContainerStyle: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  paginationDotStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  inactiveDotStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  inactiveDotOpacity: PropTypes.number,
  inactiveDotScale: PropTypes.number,
};

SMCarousel.defaultProps = {
  containerStyle: {},
  data: [],
  sliderWidth: dim().width * 0.9,
  itemWidth: dim().width * 0.9,
  pagination: true,
  dotColor: COLORS.SLIDER_PAGINATION_ACTIVE,
  inactiveDotColor: COLORS.SLIDER_PAGINATION_INACTIVE,
  paginationContainerStyle: {},
  paginationDotStyle: {},
  inactiveDotStyle: {},
  inactiveDotOpacity: 0.3,
  inactiveDotScale: 0.5,
  scrollEnabled: true,
  autoplay: true,
  loop: true,
};

export default SMCarousel;
