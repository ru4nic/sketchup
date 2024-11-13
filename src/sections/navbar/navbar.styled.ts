import styled from 'styled-components';

import theme from '../../theme/theme.main';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
  height: inherit;
  line-height: inherit;
  transform: translateY(0);
  transition: opacity 1s ease;
  min-height: 100%;
  opacity: 1;
  width: 100%;
`;
export const Menu = styled.nav`
  line-height: inherit;
`;
export const NavList = styled.ul`
  display: flex;
  height: inherit;
  line-height: inherit;
  margin: 0;
  text-align: right;
  color: inherit;
`;

export const NavBar = styled.div<{ $inView?: boolean }>`
  /* background-color: ${(props) =>
    props.$inView ? '' : `${theme.colors.navBackground}80`}; */
  height: ${theme.sizes.heightOfNavBarDesktop};
  left: 0;
  overflow: hidden;
  padding: 0;
  text-align: center;
  top: 0;
  width: 100%;
  position: fixed;
  box-sizing: border-box;
  backdrop-filter: ${(props) => (props.$inView ? 'blur(3px)' : 'blur(1px)')};

  padding: 0 6rem;
  z-index: 4;
  transition: background-color 0.5s ease-in-out;
  color: #000;
  @media (max-width: 1076px) {
    background-color: unset;
    height: ${theme.sizes.heightOfNavBarMobile};
    backdrop-filter: unset;
  }
  @media (max-width: 908px) {
    padding: 0 7rem;
  }
  @media (max-width: 625px) {
    padding: 0 2rem;
  }
`;
export const IconWrapp = styled.div`
  background-color: ${theme.colors.background};
  border-radius: 0.25em;
  /* box-shadow: 0 1px 3px #00000080; */
  box-shadow: 0 2px 4px #00000030;
`;
