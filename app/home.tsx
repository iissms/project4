import { Stack, useRouter } from 'expo-router';
import { StyleSheet, Button } from 'react-native';

import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <ThemedView style={styles.container}>
      <Stack.Screen options={{ title: 'Home' }} />
      <ThemedText type="title" style={styles.title}>Home</ThemedText>
      <ThemedText style={styles.text}>Welcome to the home page.</ThemedText>
      <Button title="Log out" onPress={() => router.replace('/')} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    marginBottom: 10,
  },
  text: {
    marginBottom: 20,
  },
});
