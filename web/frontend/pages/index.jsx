import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Heading,
} from "@shopify/polaris";

import { TitleBar } from "@shopify/app-bridge-react";

import { trophyImage } from "../assets";

export default function HomePage() {
  return (
    <Page narrowWidth>
      <TitleBar title="DX - Checkout UI Extensions" primaryAction={null} />

      <Layout>
        <Layout.Section>
          <Card sectioned>
            <Stack
              wrap={false}
              spacing="extraTight"
              distribution="trailing"
              alignment="center"
            >
              <Stack.Item fill>
                <TextContainer spacing="extraLoose">
                  <Heading>
                    Explore Checkout UI Extensions - Icons
                  </Heading>

                  <p>
                    To preview the checkout icons, please follow the instructions below for accessing the checkout editor:
                  </p>

                  <ol>
                    <li>
                      Go to{" "}
                      <Link url="https://partners.shopify.com/813932/stores?tab=development">
                        Shopify Partner Dashboard
                      </Link>
                    </li>

                    <li>Select <strong>Store</strong> -> <strong>Development</strong></li>

                    <li>Log into <strong>DX App Sandbox V2</strong></li>

                    <li>Go to <strong>Settings</strong> -> <strong>Checkout</strong> -> <strong>Customize</strong></li>

                    <li>Select <strong>Icons</strong></li>
                  </ol>

                  <p>
                    To ensure a seamless integration with Shopify, our app utilizes their{" "}
                    <Link url="https://shopify.dev/docs/api/checkout-ui-extensions/components" external>
                      required component library.
                    </Link>{" "}
                    As a result, we are limited to the styles and design elements provided.
                  </p>

                  <p>
                    For more information on the checkout UI extensions API, check out the{" "}
                    <Link url="https://shopify.dev/apps/getting-started/add-functionality" external>
                      Shopify documentation
                    </Link>{" "}
                    📚{" "}
                  </p>
                </TextContainer>
              </Stack.Item>

              <Stack.Item>
                <div style={{ padding: "0 20px" }}>
                  <Image
                    source={trophyImage}
                    alt="Nice work on building a Shopify app"
                    width={120}
                  />
                </div>
              </Stack.Item>
            </Stack>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
