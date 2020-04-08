import React from "react";
import App from "next/app";
import "../css/tailwind.css";
import Router from "next/router";

Router.events.on("routeChangeComplete", url => {
  window.analytics.page(url);
});

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default MyApp;
