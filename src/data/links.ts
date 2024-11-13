interface Links {
  downloads: { repertoire: string; bytRider: string; techRider: string };
  sections: {
    about: { name: string; href: string };
    learning: { name: string; href: string };
    price: { name: string; href: string };
    feedback: { name: string; href: string };
  };
  socials: {
    vk: string;
    youtube: string;
    telegram: string;
    whatsapp: string;
  };
}

const links: Links = {
  downloads: {
    repertoire: '/Pokerface_songs.pdf',
    bytRider: '/Pokerface_Bytovoi_Rider.pdf',
    techRider: '/Pokerface_Tech_Rider.pdf',
  },
  sections: {
    about: { name: 'Обо мне', href: 'about' },
    learning: { name: 'Обучение', href: 'learning' },
    price: { name: 'Стоимость', href: 'price' },
    feedback: { name: 'Отзывы', href: 'feedback' },
  },
  socials: {
    vk: 'https://vk.com/pokerfacecoverband',
    youtube: 'https://www.youtube.com/@pokerfacecoverband',
    telegram: 'https://t.me/pokerfacecoverband',
    whatsapp: 'https://api.whatsapp.com/send?phone=79264610236',
  },
};
export default links;
