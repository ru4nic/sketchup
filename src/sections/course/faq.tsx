import * as Base from '../../layout/main';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import theme from '../../theme';

interface iFaq {
  question: string;
  answer: string | string[];
}
const faq: iFaq[] = [
  {
    question: 'Курс для профи или новичков ?',
    answer:
      'Курс рассчитан как на новичков, так и для тех кто уже знакомс V-Ray, однако Вы должны уверенно работать в SketchUp.',
  },
  {
    question: 'На каких версиях записан курс?',
    answer: 'SketchUp 2024; V-Ray 6.20.04',
  },
  {
    question: 'Как проходит обучение ?',
    answer:
      'После оплаты Вы будете добавлены в Telegram чат, где сможете общаться с единомышленниками, так же Вам будет отправлена ссылка на скачивание курса после чего Вы сможете приступить к обучению.',
  },
  {
    question: 'Моделирование разбираете ?',
    answer:
      'Курс по V-Ray и не затрагивает моделирование в SketchUp. Однако на максимальном тарифе, я консультирую и по вопросам возникающим с работой в SketchUp.',
  },
  {
    question: 'Будут ли мне помогать, если возникнут вопросы ?',
    answer: [
      'Да, но зависит от тарифа, который Вы приобрели:',
      'Начальный: Вам доступны онлайн уроки + доступ в Telegram чат. (где я буду отвечать на ваши вопросы с 10:00 до 19:00',
      'Средний: Вам доступны онлайн уроки + доступ в Telegram чат + вебинар по выходным, где мы все вместе будем собираться и разбирать частые ошибки, отвечать на возникающие вопросы (суббота: 10:00)',
      'Максимальный: онлайн уроки + доступ в Telegram чат + вебинар по выходным + индивидуальная поддержка. (в течении 3-х месяцев после покупки я разбираю ваши вопросы по курсу (по Пн/Ср/Пт с 20:00 до 22:00). Помогу с индивидуальными вопросами, если нужно срочно сдать проект и что-то не получается по V-Ray. Так же в данном тарифе, если возникают вопросы по SketchUp, я тоже помогаю',
    ],
  },
];
function Faq() {
  return (
    <>
      <Base.Title>Часто задаваемые вопросы</Base.Title>
      {faq.map((item, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontFamily={theme.fonts.medium}>
              - {item.question}
            </Typography>
          </AccordionSummary>
          {Array.isArray(item.answer) ? (
            item.answer.map((item, index) => (
              <AccordionDetails key={index}>{item}</AccordionDetails>
            ))
          ) : (
            <AccordionDetails>
              <Typography variant="body2">{item.answer}</Typography>
            </AccordionDetails>
          )}
        </Accordion>
      ))}
    </>
  );
}
export default Faq;
