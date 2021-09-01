import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { GlobalStyle } from "../styles/theme/global";

import Header from "../components/header/header.component";
import Footer from "../components/Footer/footer.component";
import SocialMedia from "../components/social-media/social-media.component";
import MenuMobile from "../components/header/menu-mobile/menu-mobile.component";
import HideDesktop from "../components/ui/hide-desktop/hide-desktop.component";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <HideDesktop>
        <SocialMedia />
      </HideDesktop>
      <MenuMobile />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
