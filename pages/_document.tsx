import Document, { Head, Main, NextScript } from "next/document";
import * as snippet from "@segment/snippet";
import { config } from "../utils/config";

// @ts-ignore
export default class extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    return { html, head, errorHtml, chunks };
  }

  renderSnippet() {
    const opts = {
      apiKey: config.api.ANALYTICS_WRITE_KEY,
    };

    return snippet.min(opts);
  }

  render() {
    return (
      <html>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.3.1/themes/algolia-min.css"
            integrity="sha256-HB49n/BZjuqiCtQQf49OdZn63XuKFaxcIHWf0HNKte8="
            crossOrigin="anonymous"
          />
          {/* Inject the Segment snippet into the <head> of the document  */}
          <script dangerouslySetInnerHTML={{ __html: this.renderSnippet() }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
