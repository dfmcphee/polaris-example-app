import React from 'react';
import {AppProvider, SkeletonPage, SkeletonBodyText, SkeletonDisplayText, Card, TextContainer, Layout} from '@shopify/polaris';
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
        <SkeletonPage title="Product reviews" secondaryActions={2}>
          <Layout>
            <Layout.Section>
              <Card sectioned>
                <SkeletonBodyText />
              </Card>
              <Card sectioned>
                <TextContainer>
                  <SkeletonDisplayText size="small" />
                  <SkeletonBodyText />
                </TextContainer>
              </Card>
              <Card sectioned>
                <TextContainer>
                  <SkeletonDisplayText size="small" />
                  <SkeletonBodyText />
                </TextContainer>
              </Card>
            </Layout.Section>
            <Layout.Section secondary>
              <Card>
                <Card.Section>
                  <TextContainer>
                    <SkeletonDisplayText size="small" />
                    <SkeletonBodyText lines={2} />
                  </TextContainer>
                </Card.Section>
                <Card.Section>
                  <SkeletonBodyText lines={1} />
                </Card.Section>
              </Card>
            </Layout.Section>
          </Layout>
        </SkeletonPage>
      </AppProvider>
  );
}
