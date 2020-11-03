import { createCamera } from "./components/camera.js";
import { createCube } from "./components/cube.js";
import { createScene } from "./components/scene.js";
import { createLights } from "./components/lights.js";

import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";

import { Loop } from "./systems/Loop.js";
import { createControls } from "./systems/controls.js";

let camera;
let renderer;
let scene;
let loop;

export class World {
  cube;
  camera;
  controls;
  constructor(container) {
    this.camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    loop = new Loop(this.camera, scene, renderer);
    container.append(renderer.domElement);
    this.controls = createControls(this.camera, renderer.domElement);

    this.cube = createCube();
    const { ambientLight, mainLight } = createLights();

    this.controls.target.copy(this.cube.position);
    this.controls.addEventListener("change", () => {
      this.render();
    });

    // loop.updatables.push(this.cube, light);
    loop.updatables.push(this.controls);

    scene.add(this.cube, ambientLight, mainLight);

    const resizer = new Resizer(container, this.camera, renderer);
  }
  render() {
    renderer.render(scene, this.camera);
  }

  rotate(x) {
    this.cube.rotation.y += -x;
    this.cube.rotation.x += -x;
    renderer.render(scene, this.camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}
