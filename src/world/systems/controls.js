import { OrbitControls } from "../../../vendor/OrbitControls.js";

function createControls(camera, canvas) {
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  // controls.dampingFactor = 0.5;
  controls.autoRotate = false;
  controls.autoRotateSpeed = 0.2;

  controls.tick = () => {
    controls.update();
  };

  return controls;
}

export { createControls };
