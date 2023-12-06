/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import Layout from "@theme/Layout";

function NotFound(): JSX.Element {
  return (
    <Layout title="Page Not Found">
      <main className="container margin-vert--xl">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <h1 className="hero__title">Page Not Found</h1>
            <h2>404: not found</h2>
            <p>
              The page your requested could not be found. Try starting at the
              <a href="/docs/"> docs home page</a> or go ahead and
              <a href="/contact/"> contact us</a>.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default NotFound;
