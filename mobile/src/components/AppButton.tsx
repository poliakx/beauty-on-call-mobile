import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native';
import type { ViewStyle, TextStyle } from 'react-native';

type Props = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
};

export default function AppButton({
  title,
  onPress,
  disabled,
  loading,
  containerStyle,
  textStyle,
}: Props) {
  return (
    <Pressable
      style={[styles.button, containerStyle, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color="#333" />
      ) : (
        <Text style={[styles.text, textStyle]}>{title}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#EDEDED',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 16,
    alignItems: 'center',
  },
  disabled: {
    opacity: 0.6,
  },
  text: {
    color: '#222',
    fontWeight: '600',
    fontSize: 16,
  },
});