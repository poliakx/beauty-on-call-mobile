import { Button, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'RoleSelect'>;

export default function RoleSelectScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose your role</Text>

      <Button
        title="Client"
        onPress={() => navigation.navigate('Register', { role: 'client' })}
      />

      <Button
        title="Specialist"
        onPress={() => navigation.navigate('Register', { role: 'specialist' })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 12,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
  },
});