import bandasJson from '@/constants/bandas.json';
import { ImageSourcePropType } from 'react-native';

type BandaRaw = {
  id: number;
  nome: string;
  anoFormacao: number;
  pais: string;
  genero: string;
  descricao: string;
  integrantes: string[];
  albunsFamosos: string[];
  musicasFamosas: string[];
  curiosidades: string[];
  imagem: string;
};

export type Banda = Omit<BandaRaw, 'imagem'> & {
  imagem: ImageSourcePropType;
};

const imageMap: Record<string, ImageSourcePropType> = {
  'foo.webp': require('@/assets/images/foo.webp'),
  'engenheiros.webp': require('@/assets/images/engenheiros.webp'),
  'jota.jpg': require('@/assets/images/jota.jpg'),
  'eagles.webp': require('@/assets/images/eagles.webp'),
  'charlie.jpg': require('@/assets/images/charlie.jpg'),
  'nirvana.webp': require('@/assets/images/nirvana.webp'),
  'legiao.jpg': require('@/assets/images/legiao.jpg'),
  'redhot.jpg': require('@/assets/images/redhot.jpg'),
  'cold.webp': require('@/assets/images/cold.webp'),
  'park.jpg': require('@/assets/images/park.jpg'),
};

const imageAliases: Record<string, string> = {
  'redhot.webp': 'redhot.jpg',
};

const parseImagePath = (imagem: string) => {
  const fileNameMatch = imagem.match(/@\/assets\/images\/(.+?)['"]/);
  const fileName = fileNameMatch?.[1] ?? '';
  const normalizedFileName = imageAliases[fileName] ?? fileName;

  if (!normalizedFileName || !imageMap[normalizedFileName]) {
    return imageMap['foo.webp'];
  }

  return imageMap[normalizedFileName];
};

export const bandas: Banda[] = (bandasJson as BandaRaw[]).map((banda) => ({
  ...banda,
  imagem: parseImagePath(banda.imagem),
}));

export const getBandaById = (id: number) => bandas.find((banda) => banda.id === id);
