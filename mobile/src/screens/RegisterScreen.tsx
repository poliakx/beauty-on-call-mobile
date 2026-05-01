import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Keyboard,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types/navigation';
import Screen from '../components/Screen';
import AppButton from '../components/AppButton';
import { registerUser } from '../api/register';
import { CITIES, DISTRICTS } from '../constants/locations';

type Props = NativeStackScreenProps<RootStackParamList, 'Register'>;

export default function RegisterScreen({ route, navigation }: Props) {
  const role = route.params?.role ?? 'client';

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');

  const [showCities, setShowCities] = useState(false);
  const [showDistricts, setShowDistricts] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  function handlePhoneChange(value: string) {
    const onlyDigits = value.replace(/\D/g, '').slice(0, 9);
    setPhone(onlyDigits);
  }

  function handleCitySelect(selectedCity: string) {
    Keyboard.dismiss();
    setCity(selectedCity);
    setDistrict('');
    setShowCities(false);
  }

  function handleDistrictSelect(selectedDistrict: string) {
    Keyboard.dismiss();
    setDistrict(selectedDistrict);
    setShowDistricts(false);
  }

  function validateForm() {
    if (!name.trim()) return "Введіть ім'я";
    if (phone.length !== 9) return 'Введіть 9 цифр номера телефону';
    if (!city) return 'Оберіть місто';
    if (!district) return 'Оберіть район';

    return '';
  }

  async function handleSubmit() {
    if (loading) return;

    Keyboard.dismiss();

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    setError('');
    setLoading(true);

    try {
      const payload = {
        name: name.trim(),
        phone: `+380${phone}`,
        city,
        district,
        role,
      };

      await registerUser(payload);

      navigation.reset({ index: 0, routes: [{ name: 'Success' }] });
    } catch {
      setError('Не вдалося зареєструватись. Спробуйте ще раз.');
    } finally {
      setLoading(false);
    }
  }

  const availableDistricts = city ? DISTRICTS[city] ?? [] : [];

  return (
    <Screen>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>Реєстрація</Text>

        <Text style={styles.label}>Ваше ім&apos;я</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Введіть ім'я"
        />

        <Text style={styles.label}>Ваш номер телефону</Text>
        <View style={styles.phoneRow}>
          <View style={styles.phonePrefix}>
            <Text style={styles.prefixText}>+380</Text>
          </View>

          <TextInput
            style={[styles.input, styles.phoneInput]}
            value={phone}
            onChangeText={handlePhoneChange}
            keyboardType="phone-pad"
            placeholder="XX XXX XX XX"
          />
        </View>

        <Text style={styles.label}>Місто</Text>
        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => {
            Keyboard.dismiss();
            setShowCities(prev => !prev);
            setShowDistricts(false);
          }}
        >
          <Text style={city ? styles.dropdownValue : styles.dropdownPlaceholder}>
            {city || 'Оберіть місто'}
          </Text>
          <Text style={styles.chevron}>{'\u2304'}</Text>
        </TouchableOpacity>

        {showCities && (
          <View style={styles.dropdownList}>
            {CITIES.map(item => (
              <TouchableOpacity
                key={item}
                style={styles.dropdownItem}
                onPress={() => handleCitySelect(item)}
              >
                <Text>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <Text style={styles.label}>Район</Text>
        <TouchableOpacity
          style={[styles.dropdown, !city && styles.dropdownDisabled]}
          onPress={() => {
            Keyboard.dismiss();

            if (!city) return;

            setShowDistricts(prev => !prev);
            setShowCities(false);
          }}
        >
          <Text
            style={district ? styles.dropdownValue : styles.dropdownPlaceholder}
          >
            {district || 'Оберіть район'}
          </Text>
          <Text style={styles.chevron}>{'\u2304'}</Text>
        </TouchableOpacity>

        {showDistricts && (
          <View style={styles.dropdownList}>
            {availableDistricts.map(item => (
              <TouchableOpacity
                key={item}
                style={styles.dropdownItem}
                onPress={() => handleDistrictSelect(item)}
              >
                <Text>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <AppButton
          title="Зареєструватись"
          onPress={handleSubmit}
          loading={loading}
          containerStyle={styles.button}
        />

        <Text style={styles.legal}>
          {'Створюючи обліковий запис, я погоджуюсь з '}
          <Text style={styles.legalLink}>Умовами надання послуг</Text>
          {' і '}
          <Text style={styles.legalLink}>Політикою конфіденційності</Text>
          {' Beauty on call'}
        </Text>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    color: '#111',
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 15,
    backgroundColor: '#fff',
  },
  phoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 8,
  },
  phonePrefix: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
  },
  prefixText: {
    fontSize: 15,
    color: '#111',
  },
  phoneInput: {
    flex: 1,
    marginBottom: 0,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  dropdownDisabled: {
    opacity: 0.6,
  },
  dropdownValue: {
    fontSize: 15,
    color: '#111',
  },
  dropdownPlaceholder: {
    fontSize: 15,
    color: '#aaa',
  },
  chevron: {
    fontSize: 18,
    color: '#555',
  },
  dropdownList: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginTop: -12,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  dropdownItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  error: {
    color: 'red',
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 12,
  },
  button: {
    marginTop: 8,
    marginBottom: 24,
  },
  legal: {
    textAlign: 'center',
    fontSize: 12,
    color: '#555',
    lineHeight: 18,
  },
  legalLink: {
    textDecorationLine: 'underline',
    color: '#111',
  },
});