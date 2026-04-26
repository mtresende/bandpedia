import { Banda, bandas } from '@/constants/bandas';
import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

type FavoritesContextValue = {
  favoriteIds: number[];
  favoriteBands: Banda[];
  isFavorite: (bandId: number) => boolean;
  toggleFavorite: (bandId: number) => void;
};

const FavoritesContext = createContext<FavoritesContextValue | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  const toggleFavorite = (bandId: number) => {
    setFavoriteIds((currentIds) => {
      if (currentIds.includes(bandId)) {
        return currentIds.filter((id) => id !== bandId);
      }

      return [...currentIds, bandId];
    });
  };

  const isFavorite = (bandId: number) => favoriteIds.includes(bandId);

  const favoriteBands = useMemo(
    () => bandas.filter((banda) => favoriteIds.includes(banda.id)),
    [favoriteIds]
  );

  const value = useMemo(
    () => ({ favoriteIds, favoriteBands, isFavorite, toggleFavorite }),
    [favoriteBands, favoriteIds]
  );

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error('useFavorites must be used within FavoritesProvider');
  }

  return context;
}
