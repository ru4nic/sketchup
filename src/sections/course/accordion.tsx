import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { courseStructure } from './data';
import { Fragment } from 'react/jsx-runtime';
import theme from '../../theme';

function CustomAccordion() {
  const isObject = (value: string | object | []) =>
    typeof value === 'object' && value !== null;
  const SubTitle = ({ data }: { data: string }) => (
    <Typography fontFamily={theme.fonts.bold}>{data}</Typography>
  );
  return (
    <>
      {Object.entries(courseStructure).map(([key, value]) => (
        <Accordion key={key}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontFamily={theme.fonts.semiBold} fontSize="1.2rem">
              Модуль {key}
            </Typography>
          </AccordionSummary>
          {isObject(value) ? (
            Object.entries(value).map(([key, value]) => (
              <Fragment key={key}>
                {/* Подзаголовок */}
                <AccordionDetails>
                  <SubTitle data={key} />
                  {/* Содержание урока (список) */}
                  {value.map((item: string, index: number) => (
                    <Typography
                      key={index}
                      component="li"
                      style={{ listStyle: 'decimal inside', color: '#777' }}
                      fontFamily={theme.fonts.regular}
                    >
                      {item}
                    </Typography>
                  ))}
                </AccordionDetails>
              </Fragment>
            ))
          ) : Array.isArray(value) ? (
            value.map((item, index) => (
              <AccordionDetails key={index}>{item}</AccordionDetails>
            ))
          ) : (
            <AccordionDetails>
              <SubTitle data={value} />
            </AccordionDetails>
          )}
        </Accordion>
      ))}
    </>
  );
}
export default CustomAccordion;
