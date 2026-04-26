import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace('/(tabs)');
    }, 2200);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.logoContainer}>
        <View style={styles.circle}>
          <MaterialIcons name="music-note" size={74} color="#bd6bff" />
        </View>
      </View>

      <Text style={styles.title}>
        BAND<Text style={styles.titleAccent}>PEDIA</Text>
      </Text>
      <Text style={styles.subtitle}>Descubra a historia das maiores bandas</Text>

      <View style={styles.pagination}>
        <View style={styles.dot} />
        <View style={[styles.dot, styles.dotActive]} />
        <View style={styles.dot} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#05030B',
    paddingHorizontal: 24,
  },
  logoContainer: {
    marginBottom: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 210,
    height: 210,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: '#962DFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#962DFF',
    shadowOpacity: 0.45,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 8 },
    elevation: 15,
  },
  title: {
    fontSize: 52,
    fontWeight: '900',
    color: '#ECECEC',
    letterSpacing: 1,
    marginBottom: 16,
  },
  titleAccent: {
    color: '#A64BFF',
  },
  subtitle: {
    color: '#E0E0E0',
    textAlign: 'center',
    fontSize: 26,
    lineHeight: 36,
    maxWidth: 340,
  },
  pagination: {
    position: 'absolute',
    bottom: 54,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#4E3A71',
  },
  dotActive: {
    backgroundColor: '#A64BFF',
    width: 14,
    height: 14,
    borderRadius: 7,
  },
});
