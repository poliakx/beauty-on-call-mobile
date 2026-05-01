import { ReactNode } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

type Props = {
  children: ReactNode;
  centered?: boolean;
};

export default function Screen({ children, centered }: Props) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.safe}>
        <View style={[styles.container, centered && styles.centered]}>
          {children}
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});