import { ChakraProvider } from "@chakra-ui/react";

import theme from "lib/theme";
import Fonts from "components/fonts";
import Layout from "components/layouts";
import { AnimatePresence } from "framer-motion";

const App = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
};

export default App;
