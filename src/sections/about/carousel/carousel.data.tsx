import img1 from '../../../assets/images/1.jpg';
import img2 from '../../../assets/images/2.jpg';
import img3 from '../../../assets/images/3.jpg';
import img4 from '../../../assets/images/4.jpg';
import img5 from '../../../assets/images/5.jpg';

export type Images = {
  src: string;
  alt: string;
};
export const images: Images[] = [
  { src: img1, alt: 'Визуализация интерьера 1' },
  { src: img2, alt: 'Визуализация местности' },
  { src: img3, alt: 'Визуализация интерьера 2' },
  { src: img4, alt: 'Визуализация интерьера 3' },
  { src: img5, alt: 'Визуализация интерьера 4' },
];
