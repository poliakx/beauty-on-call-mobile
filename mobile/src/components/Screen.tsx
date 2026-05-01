import { ReactNode } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

type Props = {
  children: ReactNode;
  centered?: boolean;
};

export default function Screen({ children, centered }: Props) {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={[styles.container, centered && styles.centered]}>
        {children}
      </View>
    </SafeAreaView>
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