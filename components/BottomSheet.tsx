import type { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type BottomSheetProps = {
  title: string;
  children?: ReactNode;
};

export default function BottomSheet({ title, children }: BottomSheetProps) {
  return (
    <View style={styles.sheet}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  sheet: {
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
});
