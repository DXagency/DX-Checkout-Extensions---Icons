import React from 'react';
import {
  render,
  Image,
  InlineLayout,
  BlockLayout,
  Heading,
  useSettings, GridItemSize, BlockStack, Text
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  const { icon_1, copy_1, icon_2, copy_2, icon_3, copy_3 } = useSettings();

  const data: Icon[] = [
    { url: "https://placehold.co/400", title: "Icon 1 HI" },
    { url: "https://placehold.co/400", title: "Test copy 2\nwith multi-line" },
    { url: "https://placehold.co/400", title: "Icon 3" }
  ]

  const iconBlocks = [];
  let icons: Icon[] = [
    {
      url: icon_1 && String(icon_1),
      title: copy_1 && String(copy_1)
    },
    {
      url: icon_2 && String(icon_2),
      title: copy_2 && String(copy_2)
    },
    {
      url: icon_3 && String(icon_3),
      title: copy_3 && String(copy_3)
    }
  ];

  icons = icons.filter(icon => icon.url || icon.title);

  icons.forEach(icon => {
    const title = icon.title && icon.title.split('\n').map(item => {
      return <Heading level={ 3 } inlineAlignment={ "center" }>{ item }</Heading>
    })

    iconBlocks.push(
        <BlockLayout rows={['auto', 'auto']} spacing={ "base" }>
          { icon.url && <Image source={ icon.url } /> }

          { icon.title && <BlockStack spacing={ 'none' }>{title}</BlockStack> }
        </BlockLayout>
    )
  })

  const equalColumns: GridItemSize[] = icons.map((): GridItemSize => `${ (1 / icons.length) * 100 }%`);

  return (
    <InlineLayout spacing={ "base" } columns={ equalColumns }>
      { iconBlocks }
    </InlineLayout>
  );
}

interface Icon {
  url: string,
  title: string
}
