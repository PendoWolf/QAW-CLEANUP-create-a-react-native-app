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
  'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhY2VudGVyIjoidXMiLCJrZXkiOiI5OTQ5YzVjODczYWE4YmE1ODE0ZDE3OTJhNGNjYmVmYjYxNTg0MWZiZDU3NmRkNTQwYTFiNDhkN2E3NjdlODI4ZjQzYzdlNzcyMjkzOGRiZTk5MDYyZjIzNWIzYzNkNzk1MjE5NTllZWI2OTNkZDVkMjdmMzBmNTlhNWRiNjQ3OGM2YzNiN2ZhOGRlMTBlYjA0MjMzYTNhMjg3ZDdjOTdhYTQ0MmQ4ZjZhMTJhZDRiOWNhY2NkOGZhNmVmMDA2OWIuNjI3YzM0MDYzNjk4YWU1NTM2ZjM5ZTdiN2M3MDg2MWEuODY5MjYyZjM2YjdiZGE4OGQyYWNkZjViMDRiOTVlOTNiYTljMjUwZjJkNTZiN2VjMzBlZjNjZmI4ZWNlOGI2ZSJ9.N2Ejz-QYXc1cXUpBfRJWOyM7-yS44h2uf7pAw46j5pS1_03Q0lPEKd4_k4-k0xt8-d7oVguELLwAb2kqlQTZSOz-VroBBSGxPMmOsCZ6XGvR-QDGQegJihcKOQ0Y5EJXbsU9kUkUEvMJmGSo1voPhgOgN0kl0NgM3yEfc3z-59A',
  { library: NavigationLibraryType.Other },
);

// The app has no sign-in or user identity, so start an anonymous Pendo
// session (empty visitorId) at launch. B2C app: no account.
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
