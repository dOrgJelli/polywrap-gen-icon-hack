/** Original Source: https://github.com/lokesh-coder/blobshape */

import {
  degreesArray,
  shuffleArray,
  createRandomDoubleGenerator,
  magicOrigin,
  circlePoint,
  Point
} from "./utils";

// TODO:
// blob = new BlobShape(config)
// blob.toSvgPath()?
// blog.transition(otherBlob)?

export interface GeneratorConfig {
  /* Minimum size of the blob in percentage (0-100). Smaller = more randomness. */
  growth: number;

  /* Total nodes to create s shape. Increasing this value will add complexity to the shape. */
  edges: number;

  /* Blob path size */
  size: number;

  /* Set seed value to get same fixed shape */
  seed?: number;
}

export const defaultConfig: GeneratorConfig = {
  size: 400,
  growth: 6,
  edges: 6,
  seed: undefined
};

export function generateSvgPath(config: GeneratorConfig = defaultConfig): {
  path: string;
  seed: number;
} {
  const { destPoints, seed } = createPoints(config);
  const path = createSvgPath(destPoints);
  return { path, seed };
}

export function createPoints(config: GeneratorConfig): {
  destPoints: Point[];
  seed: number;
} {
  const { size, growth, edges, seed } = config;

  let outerRad = size / 2;
  let innerRad = growth * (outerRad / 10);
  let center = size / 2;

  let slices = degreesArray(edges);
  let maxRandomValue = shuffleArray([99, 999, 9999, 99999, 999999])[0];
  let id = Math.floor(Math.random() * maxRandomValue);
  let seedValue = seed || id;
  let randVal = createRandomDoubleGenerator(seedValue);
  let destPoints: Point[] = [];

  slices.forEach((degree) => {
    let O = magicOrigin(randVal(), innerRad, outerRad);
    let end = circlePoint(center, O, degree);
    destPoints.push(end);
  });
  return { destPoints, seed: seedValue };
}

export function createSvgPath(points: Point[]): string {
  let svgPath = "";
  let mid: Point = {
    x: (points[0].x + points[1].x) / 2,
    y: (points[0].y + points[1].y) / 2,
  };
  svgPath += "M" + mid.x + "," + mid.y;

  for (let i = 0; i < points.length; i++) {
    const p1 = points[(i + 1) % points.length];
    const p2 = points[(i + 2) % points.length];
    mid = {
      x: (p1.x + p2.x) / 2,
      y: (p1.y + p2.y) / 2
    };
    svgPath += "Q" + p1.x + "," + p1.y + "," + mid.x + "," + mid.y;
  }
  svgPath += "Z";
  return svgPath;
}
