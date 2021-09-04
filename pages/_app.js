import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { GlobalStyle } from "../styles/theme/global";
import { AnimatePresence, motion } from "framer-motion";
import { ScrollContext } from "../context/scroll.context";
import styled from "styled-components";

import Header from "../components/header/header.component";
import Footer from "../components/Footer/footer.component";
import SocialMedia from "../components/social-media/social-media.component";
import MenuMobile from "../components/header/menu-mobile/menu-mobile.component";
import HideDesktop from "../components/ui/hide-desktop/hide-desktop.component";
import Loading from "../components/loading/loading.component";

function MyApp({ Component, pageProps, router }) {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollDown, setScrollDown] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <ScrollContext.Provider value={{ scrollDown, setScrollDown }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AnimatePresence>{isLoading && <Loading />}</AnimatePresence>
        <Content>
          <Header />
          <HideDesktop>
            <SocialMedia />
          </HideDesktop>
          <MenuMobile />
          <AnimatePresence exitBeforeEnter>
            <Component key={router.route} {...pageProps} />
          </AnimatePresence>
          <Footer />
        </Content>
      </ThemeProvider>
    </ScrollContext.Provider>
  );
}

const Content = styled(motion.div)``;

export default MyApp;
