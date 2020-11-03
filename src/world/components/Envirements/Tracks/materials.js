import { MeshStandardMaterial } from "../../../../../vendor/three.module.js";

function createMaterials() {
  const tracksMat = new MeshStandardMaterial({
    color: "silver",
    flatShading: true,
  });

  return { tracksMat };
}

export { createMaterials };
