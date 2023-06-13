import { Mesh, Vector3 } from 'three';
import { GLTF } from 'three-stdlib';

export interface ObjectInstanceInterface {
  countInstances: number;
  positions: Vector3[];
  model: GLTF;
}

export interface ObjectInterface {
  position: Vector3;
  index: number;
  isVisible: boolean;
  mesh?: Mesh;
}
