import React from "react";
import App from "next/app";
import "../css/tailwind.css";
import Router from "next/router";
import { atom, RecoilRoot } from "recoil";

Router.events.on("routeChangeComplete", (url) => {
  window.analytics.page(url);
});

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    );
  }
}

export default MyApp;
