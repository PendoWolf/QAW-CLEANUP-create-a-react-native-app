/**
 * QAW Counter: a small React Native counter app.
 *
 * @format
 */

import { useState } from 'react';
import {
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { NavigationLibraryType, PendoSDK } from 'rn-pendo-sdk';

PendoSDK.setup(
  'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhY2VudGVyIjoidXMiLCJrZXkiOiIzZWVkNGI4NzQzODU2YmJlOGUwYjlkZjNmNjJjYmU2ZjI4ZGM0YjQwYmI2ZTViMzVjODBjZmI1OWJjMTQ1NDdkM2NhZmNlZjY1ODA2ZjkzMmVlODJkZTdjZDU4ZTg2Mzg1MTg1YzQ2NzJmODhkYWJlOTc3OGM0Y2FlNjhmZDc0YTZkZGRkMDliZDg0NDg1YzdhMThiNjEyNzBjYWJhYTJkODZmZGIwNWEzYjJhZGYwYjQxNTg0OTY0MzdkMGVmM2UuNzBkNWY4MmNhMmExODg4ZTY2NDRiYWM2MmI4YzIzMTEuNDlmOGRkOTMxOThlMjYzNDJhZDU1N2EzNzFjOWU5NjlkODMwMmMwYzE4N2FhN2FhN2Q5MjI3ODY2M2ViNjZlZCJ9.RqUvdHuKbDT8l5S-j9M1R8nsnCashA-VqgGilOcbuz_nsf9gu7_ktHVYeILtVqaZoy28uRUJ5jPUDdraFiCX3dBEIJVfd7J2Etl3-hiHKjkWQSLitQerFi9rjWHcXIWilscZOVMDVAij6jskOHg8IrmXm4z7WhmIDuQcLndHn8U',
  { library: NavigationLibraryType.Other },
);

// The app has no sign-in or user identity, so start an anonymous session:
// an empty visitorId lets Pendo generate an anonymous visitor. accountId and
// accountData stay empty because this is a B2C app.
PendoSDK.startSession('', '', {}, {});

const STEP_OPTIONS = [1, 5, 10];

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Counter />
    </SafeAreaProvider>
  );
}

function Counter() {
  const safeAreaInsets = useSafeAreaInsets();
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(STEP_OPTIONS[0]);

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: safeAreaInsets.top,
          paddingBottom: safeAreaInsets.bottom,
        },
      ]}
    >
      <Text style={styles.title}>QAW Counter</Text>
      <Text
        accessibilityLabel="Current count"
        style={styles.count}
        testID="count-value"
      >
        {count}
      </Text>

      <View style={styles.row}>
        <Pressable
          accessibilityRole="button"
          onPress={() => setCount(current => current - step)}
          style={styles.button}
          testID="btn-decrement"
        >
          <Text style={styles.buttonText}>Decrement</Text>
        </Pressable>
        <Pressable
          accessibilityRole="button"
          onPress={() => setCount(current => current + step)}
          style={styles.button}
          testID="btn-increment"
        >
          <Text style={styles.buttonText}>Increment</Text>
        </Pressable>
      </View>

      <Text style={styles.label}>Step</Text>
      <View accessibilityRole="tablist" style={styles.row}>
        {STEP_OPTIONS.map(option => (
          <Pressable
            accessibilityRole="tab"
            accessibilityState={{ selected: option === step }}
            key={option}
            onPress={() => setStep(option)}
            style={[styles.stepButton, option === step && styles.stepActive]}
            testID={`btn-step-${option}`}
          >
            <Text style={styles.stepText}>{option}</Text>
          </Pressable>
        ))}
      </View>

      <Pressable
        accessibilityRole="button"
        onPress={() => setCount(0)}
        style={styles.resetButton}
        testID="btn-reset"
      >
        <Text style={styles.resetText}>Reset</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f7fb',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1d2a3a',
  },
  count: {
    fontSize: 72,
    fontWeight: '800',
    color: '#2f6fed',
    marginVertical: 24,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#2f6fed',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  label: {
    fontSize: 14,
    color: '#5b6b7f',
    marginBottom: 8,
  },
  stepButton: {
    borderColor: '#2f6fed',
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  stepActive: {
    backgroundColor: '#dce7fd',
  },
  stepText: {
    color: '#2f6fed',
    fontSize: 16,
  },
  resetButton: {
    marginTop: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  resetText: {
    color: '#c0392b',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default App;
