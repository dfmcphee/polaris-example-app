import React from 'react';
import {AppProvider, Page} from '@shopify/polaris';
import en from '@shopify/polaris/locales/en.json';
import "@shopify/polaris/styles.css";


export default function App() {
  const theme = {

  };

  return (
      <AppProvider
        theme={theme}
        i18n={en}
      >
        <Page title="Product reviews" />
      </AppProvider>
  );
}
