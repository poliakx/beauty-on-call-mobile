import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';
import Screen from '../components/Screen';
import AppInput from '../components/AppInput';
import AppButton from '../components/AppButton';

type Props = NativeStackScreenProps<RootStackParamList, 'Register'>;

export default function RegisterScreen({ route }: Props) {
  const role = route.params?.role;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!role) {
    return (
      <Screen centered>
        <Text>Role is missing</Text>
      </Screen>
    );
  }

  function handleSubmit() {
    if (loading) return;

    if (!name.trim() || !email.trim()) {
      setError('Please enter name and email');
      return;
    }

    if (!email.includes('@')) {
      setError('Invalid email');
      return;
    }

    setError('');
    setLoading(true);

    setTimeout(() => setLoading(false), 1000);
  }

  return (
    <Screen>
      <Text style={styles.title}>Register</Text>
      <Text style={styles.subtitle}>Selected role: {role}</Text>

      <View style={styles.form}>
        <AppInput
          label="Name"
          value={name}
          onChangeText={setName}
          placeholder="Your name"
        />

        <AppInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          placeholder="you@example.com"
          keyboardType="email-address"
        />

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <AppButton
          title="Submit"
          onPress={handleSubmit}
          loading={loading}
          disabled={loading}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 16,
  },
  form: {
    width: '100%',
    marginTop: 8,
  },
  error: {
    color: 'red',
    marginBottom: 8,
  },
});