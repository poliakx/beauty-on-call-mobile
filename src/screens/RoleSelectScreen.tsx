import { StyleSheet, Text } from 'react-native';
import Screen from '../components/Screen';
import AppButton from '../components/AppButton';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'RoleSelect'>;

export default function RoleSelectScreen({ navigation }: Props) {
  const handleSelectRole = (role: 'client' | 'specialist') => {
    navigation.navigate('Register', { role });
  };

  return (
    <Screen centered>
      <Text style={styles.title}>Choose your role</Text>

      <AppButton title="Client" onPress={() => handleSelectRole('client')} />

      <AppButton
        title="Specialist"
        onPress={() => handleSelectRole('specialist')}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
  },
});