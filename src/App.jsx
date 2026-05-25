/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import Loader from "./components/Loader";
import Home from "./pages/Home";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <Home />
      )}
    </>
  );
}

