import { StyleSheet, Text } from 'react-native';
import Screen from '../components/Screen';
import AppButton from '../components/AppButton';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Intro'>;

export default function IntroScreen({ navigation }: Props) {
  const handleStart = () => {
    navigation.navigate('RoleSelect');
  };

  return (
    <Screen centered>
      <Text style={styles.title}>Beauty On Call</Text>

      <AppButton title="Start" onPress={handleStart} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 24,
  },
});