import styled from 'styled-components';
import theme from '../../theme';

export const Section = styled.section`
  /* background-color: beige; */
  color: ${theme.colors.secondaryText};
`;
export const CardsBlock = styled.div`
  display: flex;
  margin-bottom: 3rem;
  column-gap: 1rem;
`;
export const Card = styled.div`
  padding: 1.5rem 1rem;
  background-color: ${theme.colors.cardBackground};
  border-radius: 0.5rem;
  width: min-content;
  box-shadow: 0 6px 24px ${theme.colors.secondaryText}15;
  flex-basis: 33%;
`;
export const CardTitle = styled.h5`
  font-family: ${theme.fonts.bold};
  font-size: 1.2rem;
  margin: 1rem 0 0 0;
  text-align: center;
`;
export const CardDesc = styled.p`
  font-family: ${theme.fonts.light};
  color: #777;
  margin-bottom: 0;
  text-align: center;
`;

type iconStyledType = object;

const iconStyles: iconStyledType = {
  color: theme.colors.accent,
  size: '2rem',
  style: { textAlign: 'center' },
};

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const Title = styled.h5`
  font-family: ${theme.fonts.light};
  font-size: 1.3rem;
  text-align: center;
`;
export const CourseBlock = styled.div`
  border-radius: 2rem;
  background-color: ${theme.colors.darkAccent}10;
  padding: 0rem 1rem 2rem;
  overflow: auto;
  margin-bottom: 3rem;
`;
export default iconStyles;
