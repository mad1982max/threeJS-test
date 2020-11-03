import { BoxBufferGeometry } from "../../../../../vendor/three.module.js";

function createGeometries() {
  const tracks = new BoxBufferGeometry(6, 0.2, 0.1);

  return {
    tracks,
  };
}

export { createGeometries };
