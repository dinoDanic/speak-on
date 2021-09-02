import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { GlobalStyle } from "../styles/theme/global";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";

import Header from "../components/header/header.component";
import Footer from "../components/Footer/footer.component";
import SocialMedia from "../components/social-media/social-media.component";
import MenuMobile from "../components/header/menu-mobile/menu-mobile.component";
import HideDesktop from "../components/ui/hide-desktop/hide-desktop.component";
import Loading from "../components/loading/loading.component";

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AnimatePresence>{isLoading && <Loading />}</AnimatePresence>

      <Content animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
        <Header />
        <HideDesktop>
          <SocialMedia />
        </HideDesktop>
        <MenuMobile />
        <Component {...pageProps} />
        <Footer />
      </Content>
    </ThemeProvider>
  );
}

const Content = styled(motion.div)``;

export default MyApp;
