interface iCourseStructure {
  '1': string;
  '2': string;
  '3': string;
  '4': {
    Materials: string[];
  };
  '5': {
    'Процедурные карты': string[];
  };
  '6': {
    'Chaos Cosmos': string[];
  };
  '7': {
    Lights: string[];
  };
  '8': {
    'V-Ray Objects': string[];
  };
  '9': string;
  '10': {
    'V-Ray Settings': string[];
  };
  '11': {
    'V-Ray Остальное': string[];
  };
  '12': {
    'Import из 3D’s Max': string[];
  };
  '13': {
    'Важные плагины для работы': string[];
  };
  '14': string;
  '15': string;
  '16': string;
}

// Объект
export const courseStructure: iCourseStructure = {
  '1': 'Установка V-Ray 6',
  '2': 'V-Ray ToolBar',
  '3': 'Asset Editor',
  '4': {
    Materials: [
      'Generic',
      'PBR',
      'Dirt Map',
      'Randomize Texture',
      'Emmissive',
      'Two Sided',
      'Car Paint 2',
      'Hair',
      'Blend',
      'Outline Override',
      'Override',
      'Wrapper',
      'V-Ray Attribute',
      'Layers',
    ],
  },
  '5': {
    'Процедурные карты': [
      'BitMap',
      'Color, Gradient, Texture',
      'Color Correction, Spline Curve, Bezier Curve',
      'Simple Mix',
      'Mix (Value)',
      'Mix (Operator)',
      'Mix (Map)',
      'MultiSub',
      'Tri-Planar',
      'Checker',
      'Grid',
      'Tiles',
      'Cloth',
      'Leather',
      'Bulge',
      'Water',
      'Noise A',
      'Noise B',
      'Cellular',
      'Edges',
      'Falloff',
      'Fresnel',
      'Dirt',
    ],
  },
  '6': {
    'Chaos Cosmos': ['Регистрация', 'Ошибки', 'Chaos Cosmos'],
  },
  '7': {
    Lights: [
      'Rectangle Light',
      'Sphere Light',
      'Spot Light',
      'IES Light',
      'Omni Light',
      'Mesh Light',
      'Sun & Sky',
      'Dome Light',
      'Light Gen',
    ],
  },
  '8': {
    'V-Ray Objects': [
      'Infinite Plane',
      'Import & Export',
      'Fur',
      'Clipper',
      'Displacement',
      'Decal',
      'Enmesh',
      'Scatter',
    ],
  },
  '9': 'V-Ray Utilities',
  '10': {
    'V-Ray Settings': [
      'Введение',
      'Render',
      'Camera',
      'Depth of Field',
      'Render Output',
      'Environment',
      'Material Override',
      'Swarm',
      'Render Parameters',
      'Global Illumination',
      'Camera Advanced Parameters',
      'Caustic',
      'Environment Fog',
      'Denoiser',
      'V-Ray Frame Buffer (VFB)',
    ],
  },
  '11': {
    'V-Ray Остальное': ['Light Mix', 'Batch Render'],
  },
  '12': {
    'Import из 3D’s Max': [
      'Установка 3D’s Max',
      'Установка V-Ray for 3ds Max',
      'Установка Corona Render',
      'Установка V-Ray Converter',
      'Import с материалами',
      'Import без материалов',
      'Import FBX',
      'Где бесплатно брать крутые модели и текстуры бесплатно',
    ],
  },
  '13': {
    'Важные плагины для работы': [
      'Сложное текстурирование (Thru Paint)',
      'Быстрое текстурирование (S4U Paint)',
      'Скругление и фаски (Bevel)',
    ],
  },
  '14': 'Интерьерная сцена',
  '15': 'Экстерьерная сцена',
  '16': 'Интерьерная сцена 2',
};
