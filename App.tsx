import "react-native-gesture-handler";
import React from "react";
import useCachedResources from "./hooks/useCachedResources";
import Navigation from "./navigation";
import { Provider as PaperProvider } from "react-native-paper";
import { DTheme, LTheme } from "./constants/Theme";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

// const rootReducers = combineReducers({});
// const store = createStore(rootReducers);

export const PreferencesContext = React.createContext({
  toggleTheme: () => {},
  isThemeDark: false,
});

export default function App() {
  const [isThemeDark, setIsThemeDark] = React.useState(false);
  let theme = isThemeDark ? DTheme : LTheme;

  const toggleTheme = React.useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark]
  );
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      // <Provider store={store}>
        <PreferencesContext.Provider value={preferences}>
          <PaperProvider theme={theme}>
            <Navigation theme={theme} />
          </PaperProvider>
        </PreferencesContext.Provider>
      // </Provider>
    );
  }
}
