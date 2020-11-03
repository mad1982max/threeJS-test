import { OrbitControls } from "../../../vendor/OrbitControls.js";

function createControls(camera, canvas) {
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  // controls.dampingFactor = 0.5;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 1;

  controls.tick = () => {
    controls.update();
  };

  return controls;
}

export { createControls };
