import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native';

type Props = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
};

export default function AppButton({
  title,
  onPress,
  disabled,
  loading,
}: Props) {
  return (
    <Pressable
      style={[styles.button, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color="#333" />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#EDEDED',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
    alignSelf: 'center',
    minWidth: 200,
  },
  disabled: {
    opacity: 0.6,
  },
  text: {
    color: '#222',
    fontWeight: '600',
  },
});