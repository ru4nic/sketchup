import { lazy, Suspense } from 'react';

import * as Base from '../../layout/main';
import * as A from './about.styled';
import photo from '../../assets/images/about.jpg';
const Carousel = lazy(() => import('./carousel'));
import links from '../../data/links';

function About() {
  return (
    <A.Section id={links.sections.about.href}>
      <Base.Container $default>
        <A.PhotoBlock>
          <A.Photo src={photo}></A.Photo>
          <div>
            <A.BigSizeText>
              Меня зовут Евгений Молотов. Я визуализатор с 7 летним опытом
            </A.BigSizeText>

            <A.MediumSizeText>
              Веду каналы на YouTube и в Telegram более чем 1000 подписчиками
            </A.MediumSizeText>
          </div>
        </A.PhotoBlock>
        {/* <A.MediumSizeText></A.MediumSizeText> */}
        <A.WorksTitle>Мои работы</A.WorksTitle>
        <Suspense fallback={<div>Загрузка...</div>}>
          <Carousel />
        </Suspense>
      </Base.Container>
    </A.Section>
  );
}

export default About;
