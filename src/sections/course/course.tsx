import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
} from 'react-icons/tb';
import { IconContext } from 'react-icons';
import * as Base from '../../layout/main';
import * as C from './course.styled';
import iconStyles from './course.styled';
import CustomAccordion from './accordion';
import links from '../../data/links';
import Faq from './faq';

function Course() {
  return (
    <C.Section id={links.sections.learning.href}>
      <Base.Container>
        <Base.Title>Вам подходит этот курс, если</Base.Title>
        <IconContext.Provider value={iconStyles}>
          <C.CardsBlock>
            <C.Card>
              <C.IconWrapper>
                <TbCircleNumber1Filled />
              </C.IconWrapper>
              <C.CardTitle>Вы уже работаете в SketchUp</C.CardTitle>
              <C.CardDesc>
                и хотите научиться делать фотореалистичные визуализации
              </C.CardDesc>
            </C.Card>
            <C.Card>
              <C.IconWrapper>
                <TbCircleNumber2Filled />
              </C.IconWrapper>
              <C.CardTitle>Хотите освоить V-Ray</C.CardTitle>
              <C.CardDesc>
                мощный, разносторонний, а главное, самый реалистичный движок по
                визуализации для SketchUp
              </C.CardDesc>
            </C.Card>
            <C.Card>
              <C.IconWrapper>
                <TbCircleNumber3Filled />
              </C.IconWrapper>
              <C.CardTitle>Хотите обучаться онлайн</C.CardTitle>
              <C.CardDesc>
                Онлайн уроки позволяют обучаться в свободное время, тогда когда
                удобно
              </C.CardDesc>
            </C.Card>
          </C.CardsBlock>
        </IconContext.Provider>
        <C.CourseBlock>
          <C.Title>Программа обучения</C.Title>
          <CustomAccordion />
        </C.CourseBlock>
        <Faq />
      </Base.Container>
    </C.Section>
  );
}
export default Course;
