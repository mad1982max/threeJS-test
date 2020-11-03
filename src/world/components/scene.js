import {
  Color,
  Scene,
  AxesHelper,
  GridHelper,
} from "../../../vendor/three.module.js";

function createScene() {
  const scene = new Scene();
  scene.background = new Color("lightblue");
  const axesHelper = new AxesHelper(5);
  const size = 5;
  const divisions = 10;

  const gridHelper = new GridHelper(size, divisions);
  scene.add(axesHelper, gridHelper);

  return scene;
}

export { createScene };
