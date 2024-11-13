import { StyledVk, StyledWu, StyledTg, StyledYt } from './socials.styled';
import link from '../../data/links';
const { socials } = link;
const links = [
  {
    icon: StyledVk,
    title: 'Вконтакте',
    href: socials.vk,
    id: 111,
  },
  {
    icon: StyledYt,
    title: 'Youtube',
    href: socials.youtube,
    id: 112,
  },
  {
    icon: StyledTg,
    title: 'Telegram',
    href: socials.telegram,
    id: 113,
  },

  {
    icon: StyledWu,
    title: 'WhatsApp',
    href: socials.whatsapp,
    id: 114,
  },
];
export default links;
