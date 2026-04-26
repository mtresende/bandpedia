import { getBandaById } from '@/constants/bandas';
import { useFavorites } from '@/contexts/favorites-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import {
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function BandaDetailScreen() {
  const router = useRouter();
  const { isFavorite, toggleFavorite } = useFavorites();
  const params = useLocalSearchParams<{ id: string }>();
  const id = Number(params.id);
  const banda = Number.isNaN(id) ? undefined : getBandaById(id);

  if (!banda) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.notFoundContainer}>
          <Text style={styles.notFoundTitle}>Banda nao encontrada</Text>
          <Pressable style={styles.backButtonSimple} onPress={() => router.back()}>
            <Text style={styles.backButtonSimpleText}>Voltar</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <ImageBackground source={banda.imagem} style={styles.heroImage} imageStyle={styles.heroImageStyle}>
          <View style={styles.heroOverlay}>
            <View style={styles.heroTopBar}>
              <Pressable style={styles.circleButton} onPress={() => router.back()}>
                <MaterialIcons name="arrow-back-ios-new" size={18} color="#FFFFFF" />
              </Pressable>
            </View>
            <View>
              <Text style={styles.heroTitle}>{banda.nome}</Text>
              <View style={styles.metaRow}>
                <View style={styles.metaItem}>
                  <MaterialIcons name="calendar-month" size={16} color="#D5D5DA" />
                  <Text style={styles.metaText}>Formacao: {banda.anoFormacao}</Text>
                </View>
                <View style={styles.metaDivider} />
                <View style={styles.metaItem}>
                  <MaterialIcons name="music-note" size={16} color="#D5D5DA" />
                  <Text style={styles.metaText}>Genero: {banda.genero}</Text>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>

        <View style={styles.section}>
          <Pressable
            style={[styles.favoriteButton, isFavorite(banda.id) && styles.favoriteButtonActive]}
            onPress={() => toggleFavorite(banda.id)}>
            <MaterialIcons
              name={isFavorite(banda.id) ? 'favorite' : 'favorite-border'}
              size={20}
              color={isFavorite(banda.id) ? '#3B1A00' : '#FFFFFF'}
            />
            <Text
              style={[
                styles.favoriteButtonText,
                isFavorite(banda.id) && styles.favoriteButtonTextActive,
              ]}>
              {isFavorite(banda.id) ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
            </Text>
          </Pressable>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionTitleRow}>
            <MaterialIcons name="article" size={18} color="#F1BC52" />
            <Text style={styles.sectionTitle}>SOBRE A BANDA</Text>
          </View>
          <Text style={styles.sectionText}>{banda.descricao}</Text>
          <Text style={styles.sectionText}>Pais de origem: {banda.pais}</Text>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionTitleRow}>
            <MaterialIcons name="groups" size={20} color="#F1BC52" />
            <Text style={styles.sectionTitle}>INTEGRANTES</Text>
          </View>
          {banda.integrantes.map((integrante) => (
            <View key={integrante} style={styles.itemRow}>
              <View style={styles.itemBullet} />
              <Text style={styles.itemText}>{integrante}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <View style={styles.sectionTitleRow}>
            <MaterialIcons name="album" size={20} color="#F1BC52" />
            <Text style={styles.sectionTitle}>ALBUNS FAMOSOS</Text>
          </View>
          {banda.albunsFamosos.map((album) => (
            <View key={album} style={styles.itemRow}>
              <View style={styles.itemBullet} />
              <Text style={styles.itemText}>{album}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <View style={styles.sectionTitleRow}>
            <MaterialIcons name="queue-music" size={20} color="#F1BC52" />
            <Text style={styles.sectionTitle}>MUSICAS FAMOSAS</Text>
          </View>
          {banda.musicasFamosas.map((musica) => (
            <View key={musica} style={styles.itemRow}>
              <View style={styles.itemBullet} />
              <Text style={styles.itemText}>{musica}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <View style={styles.sectionTitleRow}>
            <MaterialIcons name="auto-awesome" size={20} color="#F1BC52" />
            <Text style={styles.sectionTitle}>CURIOSIDADES</Text>
          </View>
          {banda.curiosidades.map((curiosidade) => (
            <View key={curiosidade} style={styles.curiosityRow}>
              <MaterialIcons name="stars" size={18} color="#D9B263" />
              <Text style={styles.sectionText}>{curiosidade}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#05060A',
  },
  container: {
    flex: 1,
    backgroundColor: '#05060A',
  },
  content: {
    paddingBottom: 28,
  },
  notFoundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#05060A',
  },
  notFoundTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 12,
  },
  backButtonSimple: {
    backgroundColor: '#A84CFF',
    borderRadius: 12,
    paddingHorizontal: 18,
    paddingVertical: 12,
  },
  backButtonSimpleText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  heroImage: {
    height: 300,
    justifyContent: 'flex-end',
  },
  heroImageStyle: {
    resizeMode: 'cover',
  },
  heroOverlay: {
    paddingHorizontal: 18,
    paddingBottom: 20,
    paddingTop: 12,
    backgroundColor: 'rgba(5, 6, 10, 0.45)',
    flex: 1,
    justifyContent: 'space-between',
  },
  heroTopBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  circleButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroTitle: {
    color: '#F3F4F8',
    fontSize: 48,
    fontWeight: '900',
    lineHeight: 50,
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flexWrap: 'wrap',
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  metaDivider: {
    width: 1,
    height: 16,
    backgroundColor: '#888B98',
  },
  metaText: {
    color: '#E5E5EA',
    fontSize: 14,
    fontWeight: '500',
  },
  section: {
    borderTopWidth: 1,
    borderTopColor: '#1A1B22',
    paddingHorizontal: 18,
    paddingVertical: 16,
    gap: 10,
  },
  favoriteButton: {
    height: 52,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#8242C7',
    backgroundColor: '#60298F',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  favoriteButtonActive: {
    borderColor: '#F1BC52',
    backgroundColor: '#F1BC52',
  },
  favoriteButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },
  favoriteButtonTextActive: {
    color: '#3B1A00',
  },
  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  sectionTitle: {
    color: '#F7F7FA',
    fontSize: 23,
    fontWeight: '900',
  },
  sectionText: {
    color: '#CDCFD7',
    fontSize: 19,
    lineHeight: 28,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 6,
  },
  itemBullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#B56DFF',
  },
  itemText: {
    color: '#D5D7DF',
    fontSize: 20,
    flex: 1,
  },
  curiosityRow: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'flex-start',
  },
});
