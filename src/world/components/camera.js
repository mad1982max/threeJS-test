import { PerspectiveCamera } from "../../../vendor/three.module.js";

function createCamera() {
  const camera = new PerspectiveCamera(35, 1, 0.1, 100);

  camera.position.set(-10, 5, 15);
  camera.tick = (delta) => {};

  return camera;
}

export { createCamera };
