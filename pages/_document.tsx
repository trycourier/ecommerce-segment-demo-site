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
      apiKey: config.api.ANALYTICS_WRITE_KEY
    };

    return snippet.min(opts);
  }

  render() {
    return (
      <html>
        <Head>
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
