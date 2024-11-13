import { Link } from 'react-scroll';

// import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import useMediaQuery from '@mui/material/useMediaQuery';
import logo from '../../assets/logo/Sketchup_Work_LOGO.png';

import * as S from './intro.styled.ts';
import Button from '@mui/material/Button';

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    accent: true;
  }
}

const Intro = () => {
  const isMobile = useMediaQuery('(max-width:900px)');

  return (
    <S.SectionIntro id="intro">
      {/* <S.VideoContainer>
        <S.Video
          autoPlay
          muted
          loop
          playsInline
          // poster="bknd_head.webp"
        >
          {isMobile ? (
            <source src="/PokerFace_9-09-23_mobile.mp4" />
          ) : (
            <source src="/PokerFace_9-09-23_desktop.mp4" />
          )}
          <source src="/sketchup_intro_video.mp4" />
        </S.Video>
        <S.BckrndOverlay />
      </S.VideoContainer> */}

      <S.BlockDesc>
        <S.Logo src={logo} />
        <S.Heading> Обучение по V-Ray 6 для SketchUp</S.Heading>
        <S.Desc>Изучи мощный инструмент визуализации</S.Desc>
        <S.BlockButton>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={isMobile ? -50 : -80}
            duration={1000}
            spyThrottle={500}
          >
            <Button
              // endIcon={<KeyboardDoubleArrowDownIcon />}
              color="primary"
            >
              Записаться
            </Button>
          </Link>
        </S.BlockButton>
      </S.BlockDesc>
    </S.SectionIntro>
  );
};

export default Intro;
