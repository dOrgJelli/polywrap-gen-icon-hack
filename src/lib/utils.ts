/** Original Source: https://github.com/lokesh-coder/blobshape */

export interface Point {
  x: number;
  y: number;
}

export function circlePoint(origin: number, radius: number, degree: number): Point {
  var x = origin + radius * Math.cos(toRadian(degree));
  var y = origin + radius * Math.sin(toRadian(degree));
  return {
    x: Math.round(x),
    y: Math.round(y)
  };
}

export function toRadian(degrees: number): number {
  return degrees * (Math.PI / 180.0);
}

export function magicOrigin(value: number, min: number, max: number): number {
  let radius = min + value * (max - min);
  if (radius > max) {
    radius = radius - min;
  } else if (radius < min) {
    radius = radius + min;
  }
  return radius;
}

export function shuffleArray(array: number[]): number[] {
  array.sort(() => Math.random() - 0.5);
  return array;
};

export function degreesArray(segments: number): number[] {
  var deg = 360 / segments;

  return Array(segments)
    .fill("a")
    .map((_, i) => i * deg);
}

export function createRandomDoubleGenerator(seed: number): () => number {
  const mask = 0xffffffff;
  let m_w = (123456789 + seed) & mask;
  let m_z = (987654321 - seed) & mask;

  return function () {
    m_z = (36969 * (m_z & 65535) + (m_z >>> 16)) & mask;
    m_w = (18000 * (m_w & 65535) + (m_w >>> 16)) & mask;

    let result = ((m_z << 16) + (m_w & 65535)) >>> 0;
    result /= 4294967296;
    return result;
  };
}
