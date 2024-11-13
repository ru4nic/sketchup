import { useRef, useEffect, ReactNode, MutableRefObject } from 'react';

import { register } from 'swiper/element';
import { Thumbs, Zoom, Autoplay } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';

import { carouselMainStyles } from './carousel.styles';

type CarouselMainProps = {
  children: ReactNode;
  forwardedRef: MutableRefObject<null>;
};

const CarouselMain = ({ children, forwardedRef }: CarouselMainProps) => {
  const mainSwiperRef = useRef(null);

  useEffect(() => {
    register();
    const params: SwiperOptions = {
      modules: [Thumbs, Zoom, Autoplay],
      thumbs: {
        swiper: forwardedRef.current,
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      },
      loop: true,
      autoHeight: false,
      spaceBetween: 5,
      grabCursor: true,
      zoom: true,
      injectStyles: carouselMainStyles,
      injectStylesUrls: [
        // './navigation-element.min.css'
        './zoom-element.min.css',
      ],
    };
    if (mainSwiperRef.current) {
      Object.assign(mainSwiperRef.current, params);
      //@ts-ignore
      mainSwiperRef.current.initialize();
    }
  }, []);
  return (
    <swiper-container init={false} ref={mainSwiperRef}>
      {children}
    </swiper-container>
  );
};

export default CarouselMain;
