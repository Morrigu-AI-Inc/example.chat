import type { AppProps } from "next/app";
import { CssBaseline, } from "@mui/material";
import Layout from "@/layout";
import AppTheme from "@/theme/AppTheme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppTheme>
      <CssBaseline />
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppTheme>
  );
}
