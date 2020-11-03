import { Mesh } from "../../../../../vendor/three.module.js";

import { createGeometries } from "./geometries.js";
import { createMaterials } from "./materials.js";

function createMeshes() {
  const geometries = createGeometries();
  const materials = createMaterials();

  const tracks1 = new Mesh(geometries.tracks, materials.tracksMat);
  tracks1.position.set(0, 0, -0.8);

  const tracks2 = tracks1.clone();
  tracks2.position.set(0, 0, 0.8);

  return {
    tracks1,
    tracks2,
  };
}

export { createMeshes };
