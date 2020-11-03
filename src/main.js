import { World } from "./world/World.js";
main();

function main() {
  const btnAnim = document.querySelector("#startBtn");
  btnAnim.addEventListener("click", startAnimation);

  const btnCam = document.querySelector("#camera");
  btnCam.addEventListener("click", cameraAnimation);

  const container = document.querySelector("#scene-container");
  const world = new World(container);
  world.start();
  // world.render();

  function startAnimation() {
    if (this.innerHTML === "START") {
      this.innerHTML = "STOP";
      world.start();
    } else {
      this.innerHTML = "START";
      world.stop();
    }
  }

  function cameraAnimation() {
    world.camera.position.set(-15, 10, 20);
    world.camera.rotation.set(0, 0, 0);
    world.controls.update();
  }
}
