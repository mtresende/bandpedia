import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function SobreScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.pageTitle}>SOBRE</Text>

      <View style={styles.heroCard}>
        <View style={styles.logoCircle}>
          <MaterialIcons name="music-note" size={40} color="#E3B44A" />
        </View>
        <View style={styles.heroTextWrapper}>
          <Text style={styles.heroMainTitle}>BANDPEDIA</Text>
          <Text style={styles.heroSubtitle}>CONHECA. ESCUTE. APRENDA.</Text>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionTitleRow}>
          <MaterialIcons name="info-outline" size={20} color="#E3B44A" />
          <Text style={styles.sectionTitle}>SOBRE O APP</Text>
        </View>
        <Text style={styles.sectionText}>
          O Bandpedia e um aplicativo desenvolvido como parte de um projeto academico,
          com o objetivo de apresentar grandes bandas da historia da musica.
        </Text>
        <Text style={styles.sectionText}>
          Aqui voce encontra informacoes sobre a formacao, historia, integrantes, albuns e
          curiosidades das maiores bandas
        </Text>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionTitleRow}>
          <MaterialIcons name="person-outline" size={20} color="#E3B44A" />
          <Text style={styles.sectionTitle}>DESENVOLVEDOR</Text>
        </View>
        <View style={styles.profileCard}>
          <Image source={require('@/assets/images/perfil.jpg')} style={styles.profileImage} />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Matheus Resende</Text>
            <Text style={styles.profileDescription}>
              Estudante de ADS.
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionTitleRow}>
          <MaterialIcons name="code" size={20} color="#E3B44A" />
          <Text style={styles.sectionTitle}>TECNOLOGIAS UTILIZADAS</Text>
        </View>
        <View style={styles.techCard}>
          <MaterialIcons name="developer-mode" size={24} color="#79D8FF" />
          <View style={styles.techInfo}>
            <Text style={styles.techName}>React Native</Text>
            <Text style={styles.techText}>
              Biblioteca JavaScript para construcao de interfaces nativas em Android e iOS.
            </Text>
          </View>
        </View>
        <View style={styles.techCard}>
          <MaterialIcons name="rocket-launch" size={24} color="#FFFFFF" />
          <View style={styles.techInfo}>
            <Text style={styles.techName}>Expo Go</Text>
            <Text style={styles.techText}>
              Plataforma para desenvolvimento, testes e simulacao do aplicativo em dispositivos
              moveis.
            </Text>
          </View>
        </View>
        <View style={styles.techCard}>
          <MaterialIcons name="data-object" size={24} color="#E3B44A" />
          <View style={styles.techInfo}>
            <Text style={styles.techName}>JSON</Text>
            <Text style={styles.techText}>
              Formato leve para armazenar dados de bandas, integrantes, albuns e curiosidades.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#07090F',
  },
  content: {
    paddingTop: 56,
    paddingHorizontal: 18,
    paddingBottom: 34,
  },
  pageTitle: {
    color: '#F3F4F8',
    fontSize: 44,
    fontWeight: '900',
    letterSpacing: 1,
    marginBottom: 16,
  },
  heroCard: {
    backgroundColor: '#11131C',
    borderWidth: 1,
    borderColor: '#23283A',
    borderRadius: 16,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
    gap: 14,
  },
  logoCircle: {
    width: 78,
    height: 78,
    borderRadius: 39,
    borderWidth: 2,
    borderColor: '#E3B44A',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0A0C13',
  },
  heroTextWrapper: {
    flex: 1,
  },
  heroMainTitle: {
    color: '#F3F4F8',
    fontSize: 32,
    fontWeight: '900',
    lineHeight: 46,
  },
  heroSubtitle: {
    color: '#D6D9E3',
    fontSize: 12,
    fontWeight: '500',
    marginTop: 2,
  },
  section: {
    borderTopWidth: 1,
    borderTopColor: '#1B1F2E',
    paddingTop: 14,
    marginBottom: 14,
    gap: 8,
  },
  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  sectionTitle: {
    color: '#E3B44A',
    fontSize: 24,
    fontWeight: '800',
  },
  sectionText: {
    color: '#DBDDE5',
    fontSize: 21,
    lineHeight: 31,
  },
  profileCard: {
    marginTop: 6,
    backgroundColor: '#1A1E2C',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#2A3047',
    padding: 12,
    flexDirection: 'row',
    gap: 12,
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: '#E3B44A',
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    color: '#F3F4F8',
    fontSize: 25,
    fontWeight: '700',
    marginBottom: 10,
  },
  profileDescription: {
    color: '#D8DBE7',
    fontSize: 15,
    lineHeight: 27,
  },
  techCard: {
    backgroundColor: '#161A27',
    borderWidth: 1,
    borderColor: '#252C40',
    borderRadius: 12,
    padding: 10,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'flex-start',
  },
  techInfo: {
    flex: 1,
  },
  techName: {
    color: '#F3F4F8',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 2,
  },
  techText: {
    color: '#D5D9E4',
    fontSize: 18,
    lineHeight: 26,
  },
});
