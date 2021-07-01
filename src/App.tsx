import React from 'react';

import { generateSvgPath, GeneratorConfig } from './lib';

import './App.css';

const configs: GeneratorConfig[] = [
  {
    growth: 2,
    edges: 6,
    size: 100,
  },
  {
    growth: 10,
    edges: 6,
    size: 100,
  }
];

function Blob(props: { id: string }) {
  const start = generateSvgPath(configs[0]);
  const end = generateSvgPath(configs[1]);

  return (
    <div style={{ width: "100px" }}>
      <svg>
        <path id={props.id} d={start.path} fill="#85ffda" stroke="#85ffda" />
        <animate
          id="anim"
          xlinkHref={`#${props.id}`}
          attributeName="d"
          from={start.path}
          to={end.path}
          dur="2s"
          begin="2s;anim.end+3s"
          fill="freeze"
        />
      </svg>
    </div>
  );
}

function App() {
  const [updateCount, setUpdateCount] = React.useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setUpdateCount(updateCount + 1)}>
          Randomize
        </button>
        <Blob id={"blob-1"} />
        <Blob id={"blob-2"} />
        <Blob id={"blob-3"} />
        <Blob id={"blob-4"} />
        <Blob id={"blob-5"} />
      </header>
    </div>
  );
}

export default App;
