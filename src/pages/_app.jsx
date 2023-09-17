import React, { useEffect } from "react";
import BaseLayout from "@/common/components/base-layout";
import "bootstrap/dist/css/bootstrap.css";

function app({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const getLayout =
    Component.getLayout || ((page) => <BaseLayout>{page}</BaseLayout>);

  return getLayout(<Component {...pageProps} />);
}

export default app;
