import '@/libs/dayjs';
import '@/styles/global.css';

import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { useFonts, OpenSans_700Bold, OpenSans_400Regular, OpenSans_600SemiBold } from '@expo-google-fonts/open-sans';

import { colors } from '@/styles/colors';

import { DatabaseProvider } from '@/database/databaseProvider';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsLoaded] = useFonts({
    OpenSans_600SemiBold,
    OpenSans_400Regular,
    OpenSans_700Bold,
  });

  if (fontsLoaded) {
    SplashScreen.hideAsync();
  } else {
    return;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: colors.gray[600] }}>
      <StatusBar style="light" />

      {/* <SQLiteProvider databaseName={databaseName} onInit={databaseInit}>
        <Slot />
      </SQLiteProvider> */}

      <DatabaseProvider />
    </GestureHandlerRootView>
  );
}
