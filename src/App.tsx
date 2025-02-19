import type { Component } from "solid-js";
import { TraversalOutputComponentKeyboardParentFocus } from "./priority-traversal-parent-focus";

import { FranconeriHideHypergraph } from "./input-franconeri-hide";

const App: Component = () => {
  return (
    <TraversalOutputComponentKeyboardParentFocus
      nodeGraph={FranconeriHideHypergraph}
      showHypergraph={false}
    />
  );
};

export default App;
