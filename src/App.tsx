import React from 'react';

import { generateSvgPath, GeneratorConfig } from './lib';

import './App.css';

{/* TODO: We haven't yet added the styes:

<style>
  #polywrap {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  svg {
    width: 60vh;
  }

  .click-through {
    pointer-events: none;
  }
</style>

*/}

{/* TODO: do we need this tag? 

<main id="polywrap"></main>

*/}


const configs: GeneratorConfig[] = [
  {
    growth: 2,
    edges: 6,
    size: 100,
    fill: "#FFC272",
    link: "https://www.ethereum.org",
    timing: {
      morph: 24,
      pulse: 16,
    },
  },
  {
    growth: 10,
    edges: 6,
    size: 100,
    fill: "#1B5FED",
    link: "https://www.uniswap.org",
    timing: {
      morph: 16,
      pulse: 6,
    },
  }
];


// Create the svg paths to add to the animations
const start = generateSvgPath(configs[0]);
const end = generateSvgPath(configs[1]);

function CreateAtom(props: GeneratorConfig) {

  return (      
    <div style={{ width: "100px" }}>
      <a  target="_blank" rel="noredirect">
        <svg viewBox="0 0 160 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill={props.fill} >
            <animate
              id="anim"
              fill="freeze"
              attributeName="d"
              //dur={props.timing.morph}
              repeatCount="1"
              values="
                ${start}
                ${end}
              "
            /> 
          </path>
        </svg>
      </a>
    </div>
)
}

function Blob(props: { id: string }) {
  const start = generateSvgPath(configs[0]);
  const end = generateSvgPath(configs[1]);

  return (
    <div style={{ width: "100px" }}>
      <svg viewBox="0 0 160 200" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <CreateAtom 
          growth={10}
          edges={2}
          size={100}
          link={"https://polywrap.io"}
        />
      </header>
    </div>
  );
}

export default App;
