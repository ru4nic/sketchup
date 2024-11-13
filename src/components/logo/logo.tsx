import logo from '../../assets/logo/Sketchup_Work_LOGO.png';
import { StyledLogo } from '../../layout/main';
type LogoProps = {
  section?: string;
};
function Logo({ section }: LogoProps) {
  const styledProps = { [`$${section}`]: true };
  return <StyledLogo {...styledProps} src={logo} alt="pokerface logo" />;
}
export default Logo;
