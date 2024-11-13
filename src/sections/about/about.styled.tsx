import styled from 'styled-components';
import theme from '../../theme';

export const Section = styled.section`
  /* background-color: ${theme.colors.primaryText}; */
  color: ${theme.colors.secondaryText};
  line-height: 1.3;
`;
export const Photo = styled.img`
  height: 14rem;
  border-radius: 50%;
  margin: 0 2rem 0 0;
  transform: rotateY(-180deg);
`;
export const BigSizeText = styled.h3`
  font-size: 2.2rem;
  font-family: ${theme.fonts.bold};
  margin: 0;
`;
export const MediumSizeText = styled.h3`
  font-size: 1.1rem;
  font-family: ${theme.fonts.light};
  margin: 0;
`;
export const PhotoBlock = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
`;
export const WorksTitle = styled.h4`
  font-family: ${theme.fonts.bold};
  font-size: 1.7rem;
  text-align: center;
  margin-bottom: 1rem;
  /* font-size: ; */
`;
