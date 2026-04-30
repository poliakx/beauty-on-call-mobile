import { Button, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Intro'>;

export default function IntroScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Beauty On Call</Text>
      <Button title="Start" onPress={() => navigation.navigate('RoleSelect')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 24,
  },
});