import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';
import Screen from '../components/Screen';

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

export default function SplashScreen({ navigation }: Props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Intro');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <Screen>
      <View style={styles.content}>
        <Text style={styles.title}>Beauty On Call</Text>
        <Text style={styles.subtitle}>Сервіс бронювання beauty-послуг</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 120,
  },
  title: {
    fontSize: 40,
    fontWeight: '600',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
});