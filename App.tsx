/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
  ActivityIndicator,
  TouchableOpacity,
  Animated,
  ScrollView,
} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent isDarkMode={isDarkMode} />
    </SafeAreaProvider>
  );
}

function AppContent({ isDarkMode }: { isDarkMode: boolean }) {
  const safeAreaInsets = useSafeAreaInsets();
  const [isLoading, setIsLoading] = useState(true);
  const [counter, setCounter] = useState(0);
  const fadeAnim = useState(new Animated.Value(0))[0];

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Fade in animation
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }, 2000);

    return () => clearTimeout(timer);
  }, [fadeAnim]);

  const backgroundColor = isDarkMode ? '#1a1a1a' : '#f5f5f5';
  const textColor = isDarkMode ? '#ffffff' : '#333333';
  const cardColor = isDarkMode ? '#2a2a2a' : '#ffffff';
  const accentColor = isDarkMode ? '#4a9eff' : '#007AFF';

  if (isLoading) {
    return (
      <View
        style={[
          styles.container,
          { backgroundColor, paddingTop: safeAreaInsets.top },
        ]}
      >
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={accentColor} />
          <Text style={[styles.loadingText, { color: textColor }]}>
            Loading awesome content...
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View
      style={[
        styles.container,
        { backgroundColor, paddingTop: safeAreaInsets.top },
      ]}
    >
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={[styles.title, { color: textColor }]}>
              🚀 Keep It Real
            </Text>
            <Text style={[styles.subtitle, { color: textColor }]}>
              React Native App
            </Text>
          </View>

          {/* Main Card */}
          <View style={[styles.card, { backgroundColor: cardColor }]}>
            <Text style={[styles.cardTitle, { color: accentColor }]}>
              Welcome to Eminem piece of advice for kids!
            </Text>
            <Text style={[styles.cardText, { color: textColor }]}>
              This is a React Native app running on your{' '}
              {require('react-native').Platform.OS === 'android'
                ? 'Android'
                : 'iOS'}{' '}
              device.
            </Text>

            {/* add a list of advice */}
            <View style={styles.adviceContainer}>
              <Text style={[styles.adviceText, { color: textColor }]}>
                💪 "Don't let anyone tell you what you can't do. Be yourself and keep it real."
              </Text>
              <Text style={[styles.adviceText, { color: textColor }]}>
                💰 "Success is not about the money, it's about the impact you make."
              </Text>
              <Text style={[styles.adviceText, { color: textColor }]}>
                🎯 "Stay focused, stay humble, and keep pushing forward."
              </Text>
            </View>

            <View style={styles.divider} />

            {/* Counter Section */}
            <View style={styles.counterSection}>
              <Text style={[styles.counterLabel, { color: textColor }]}>
                Button pressed:
              </Text>
              <Text style={[styles.counterValue, { color: accentColor }]}>
                {counter} {counter === 1 ? 'time' : 'times'}
              </Text>
            </View>

            {/* Button */}
            <TouchableOpacity
              style={[styles.button, { backgroundColor: accentColor }]}
              onPress={() => setCounter(counter + 1)}
              activeOpacity={0.8}
            >
              <Text style={styles.buttonText}>Press Me! ✨</Text>
            </TouchableOpacity>

            {counter > 0 && (
              <TouchableOpacity
                style={[styles.resetButton, { borderColor: accentColor }]}
                onPress={() => setCounter(0)}
                activeOpacity={0.8}
              >
                <Text style={[styles.resetButtonText, { color: accentColor }]}>
                  Reset Counter
                </Text>
              </TouchableOpacity>
            )}
          </View>

          {/* Info Cards */}
          <View style={styles.infoGrid}>
            <View style={[styles.infoCard, { backgroundColor: cardColor }]}>
              <Text style={styles.infoEmoji}>⚡</Text>
              <Text style={[styles.infoText, { color: textColor }]}>Fast</Text>
            </View>
            <View style={[styles.infoCard, { backgroundColor: cardColor }]}>
              <Text style={styles.infoEmoji}>📱</Text>
              <Text style={[styles.infoText, { color: textColor }]}>
                Cross-Platform
              </Text>
            </View>
            <View style={[styles.infoCard, { backgroundColor: cardColor }]}>
              <Text style={styles.infoEmoji}>🎨</Text>
              <Text style={[styles.infoText, { color: textColor }]}>
                Beautiful
              </Text>
            </View>
          </View>

          {/* Loading Spinner Demo */}
          <View style={[styles.spinnerCard, { backgroundColor: cardColor }]}>
            <ActivityIndicator size="small" color={accentColor} />
            <Text style={[styles.spinnerText, { color: textColor }]}>
              Processing in background...
            </Text>
          </View>

          {/* Footer */}
          <Text style={[styles.footer, { color: textColor }]}>
            &copy; Ashraf Kabir
          </Text>
        </Animated.View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: '500',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 20,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    opacity: 0.7,
  },
  card: {
    borderRadius: 20,
    padding: 24,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  cardText: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  adviceContainer: {
    marginTop: 10,
  },
  adviceText: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 16,
    fontStyle: 'italic',
    paddingLeft: 8,
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 20,
  },
  counterSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  counterLabel: {
    fontSize: 16,
    marginBottom: 8,
  },
  counterValue: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  resetButton: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 2,
  },
  resetButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  infoGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  infoCard: {
    flex: 1,
    marginHorizontal: 4,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  infoEmoji: {
    fontSize: 32,
    marginBottom: 8,
  },
  infoText: {
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
  spinnerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  spinnerText: {
    marginLeft: 12,
    fontSize: 14,
    fontWeight: '500',
  },
  footer: {
    textAlign: 'center',
    fontSize: 14,
    opacity: 0.6,
    paddingVertical: 20,
  },
});

export default App;