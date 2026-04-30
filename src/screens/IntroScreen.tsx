import { StyleSheet, Text, View } from 'react-native';
import Screen from '../components/Screen';
import AppButton from '../components/AppButton';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Intro'>;

export default function IntroScreen({ navigation }: Props) {
  const handleStart = () => navigation.navigate('RoleSelect');

  return (
    <Screen>
      <View style={styles.content}>
        <Text style={styles.title}>Beauty on call</Text>

        <Text style={styles.paragraph}>
          Beauty on call- твій новий спосіб замовляти beauty-послуги легко,
          швидко і там, де тобі зручно.
        </Text>

        <Text style={styles.paragraph}>
          Тепер не потрібно витрачати час на пошуки майстра чи довге
          очікування у салоні.
        </Text>

        <Text style={styles.paragraph}>
          Просто відкрий додаток, обери послугу — і професійний
          beauty-майстер прийде до тебе додому або прийме в себе у
          зручний для тебе час.
        </Text>

        <AppButton title="Продовжити" onPress={handleStart} />
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
    fontSize: 28, 
    fontWeight: '700', 
    marginBottom: 18, 
  }, 
  
  paragraph: { 
    textAlign: 'center', 
    color: '#333', 
    marginBottom: 16, 
    lineHeight: 22, 
  }, 
});