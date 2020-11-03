import { createCamera } from "./components/camera.js";
import { createScene } from "./components/scene.js";
import { createAxesHelper, createGridHelper } from "./components/helpers.js";
import { createLights } from "./components/lights.js";
import { Train } from "./components/Train/Train.js";
import { Tracks } from "./components/Envirements/Tracks/Tracks.js";

import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";

import { Loop } from "./systems/Loop.js";
import { createControls } from "./systems/controls.js";

let renderer;
let scene;
let loop;

export class World {
  controls;

  constructor(container) {
    this.camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    loop = new Loop(this.camera, scene, renderer);
    container.append(renderer.domElement);

    this.controls = createControls(this.camera, renderer.domElement);

    const train = new Train();
    const tracks = new Tracks();
    console.log(tracks);
    const { ambientLight, mainLight } = createLights();

    this.controls.addEventListener("change", () => {
      this.render();
    });

    loop.updatables.push(this.controls, train);
    scene.add(ambientLight, mainLight, train, tracks);

    const resizer = new Resizer(container, this.camera, renderer);
    scene.add(createAxesHelper(), createGridHelper());
  }
  render() {
    renderer.render(scene, this.camera);
  }

  rotate(x) {
    this.train.rotation.y += -x;
    this.train.rotation.x += -x;
    renderer.render(scene, this.camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}
