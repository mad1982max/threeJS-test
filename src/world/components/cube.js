import {
  BoxBufferGeometry,
  Mesh,
  RepeatWrapping,
  MirroredRepeatWrapping,
  MeshBasicMaterial,
  MeshStandardMaterial,
  TextureLoader,
  MathUtils,
} from "../../../vendor/three.module.js";

const radiansPerSecond = MathUtils.degToRad(15);

function createMaterial() {
  const textureLoader = new TextureLoader();

  const texture = textureLoader.load("../../../assets/textures/brick.jpg");
  texture.wrapS = MirroredRepeatWrapping;
  texture.wrapT = MirroredRepeatWrapping;
  // texture.repeat.set(4, 4);

  const material = new MeshStandardMaterial({
    map: texture,
  });

  return material;
}

function createCube() {
  // create a geometry
  const geometry = new BoxBufferGeometry(3, 2, 0.5);

  const material = createMaterial();

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);
  // cube.rotation.set(10, 15, 25);

  cube.tick = (delta) => {
    // cube.rotation.z += radiansPerSecond * delta;
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
    cube.rotation.z += radiansPerSecond * delta;
  };

  return cube;
}

export { createCube };
