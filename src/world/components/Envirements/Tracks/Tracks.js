import { Group, MathUtils } from "../../../../../vendor/three.module.js";

import { createMeshes } from "./meshes.js";

class Tracks extends Group {
  constructor() {
    super();

    this.meshes = createMeshes();
    this.add(this.meshes.tracks1, this.meshes.tracks2);
  }
}

export { Tracks };
