import { StyleSheet, Text, View } from 'react-native';
import Screen from '../components/Screen';
import AppButton from '../components/AppButton';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'RoleSelect'>;

export default function RoleSelectScreen({ navigation }: Props) {
  const handleSelectRole = (role: 'client' | 'specialist') =>
    navigation.navigate('Register', { role });

  return (
    <Screen>
      <View style={styles.content}>
        <Text style={styles.title}>Beauty on call</Text>

        <Text style={styles.paragraph}>
          Знайдіть майстра, що виконає ваше замовлення, або пропонуйте свої
          послуги та знаходьте нових клієнтів.
        </Text>

        <View style={styles.roleLabel}>
          <Text style={styles.roleLabelText}>Оберіть свою роль</Text>
        </View>

        <View style={styles.row}>
          <AppButton
            title="Я — майстер"
            onPress={() => handleSelectRole('specialist')}
            containerStyle={{ width: '48%' }}
          />

          <AppButton
            title="Я — клієнт"
            onPress={() => handleSelectRole('client')}
            containerStyle={{ width: '48%' }}
            textStyle={{ color: '#d33' }}
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 12,
  },
  paragraph: {
    textAlign: 'center',
    color: '#444',
    marginBottom: 20,
    lineHeight: 20,
  },
  roleLabel: {
    marginBottom: 16,
  },
  roleLabelText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    gap: 12,
  },
  roleButton: {
    backgroundColor: '#EDEDED',
    paddingVertical: 12,
    borderRadius: 12,
    width: '48%',
    alignItems: 'center',
  },
  roleButtonText: {
    color: '#222',
    fontWeight: '600',
  },
  roleButtonTextAccent: {
    color: '#d33',
  },
});