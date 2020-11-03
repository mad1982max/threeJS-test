import { PerspectiveCamera } from "../../../vendor/three.module.js";

function createCamera() {
  const camera = new PerspectiveCamera(
    20, // fov = Field Of View
    1, // aspect ratio (dummy value)
    0.1, // near clipping plane
    100 // far clipping plane
  );
  let dirFlag = "far";

  // move the camera back so we can view the scene
  camera.position.set(0, 0, 10);

  camera.tick = (delta) => {
    if (camera.position.z <= 20) {
      dirFlag = "far";
    } else if (camera.position.z >= camera.far - 20) {
      dirFlag = "near";
    }

    if (dirFlag === "far") {
      camera.position.z += 0.5;
    } else {
      camera.position.z -= 0.4;
    }
  };

  return camera;
}

export { createCamera };
