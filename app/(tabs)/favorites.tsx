import { IconSymbol } from '@/components/ui/icon-symbol';
import { useFavorites } from '@/contexts/favorites-context';
import { useRouter } from 'expo-router';
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function FavoritesScreen() {
  const router = useRouter();
  const { favoriteBands } = useFavorites();

  if (favoriteBands.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>FAVORITOS</Text>
        <Text style={styles.text}>Nenhuma banda favorita ainda.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FAVORITOS</Text>
      <FlatList
        data={favoriteBands}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Pressable
            style={styles.card}
            onPress={() =>
              router.push({
                pathname: '/banda/[id]',
                params: { id: String(item.id) },
              })
            }>
            <Image source={item.imagem} style={styles.bandImage} />
            <View style={styles.infoContainer}>
              <Text style={styles.bandName}>{item.nome}</Text>
              <Text style={styles.genreTag}>{item.genero}</Text>
              <View style={styles.yearRow}>
                <IconSymbol name="calendar" size={14} color="#B6B6BB" />
                <Text style={styles.yearText}>{item.anoFormacao}</Text>
              </View>
            </View>
            <IconSymbol name="chevron.right" size={24} color="#8E8E93" />
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#060608',
    paddingHorizontal: 14,
    paddingTop: 62,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 42,
    fontWeight: '800',
    marginBottom: 18,
  },
  text: {
    color: '#BDBDC4',
    fontSize: 19,
    textAlign: 'center',
  },
  listContent: {
    paddingBottom: 26,
    gap: 12,
  },
  card: {
    backgroundColor: '#121217',
    borderRadius: 18,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1D1D23',
  },
  bandImage: {
    width: 120,
    height: 120,
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 14,
    justifyContent: 'center',
  },
  bandName: {
    color: '#F4F4F6',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },
  genreTag: {
    alignSelf: 'flex-start',
    borderRadius: 9,
    backgroundColor: '#8138D9',
    color: '#F4E8FF',
    fontSize: 10,
    fontWeight: '700',
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginBottom: 10,
  },
  yearRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  yearText: {
    color: '#C3C3C8',
    fontSize: 12,
    fontWeight: '500',
  },
});
