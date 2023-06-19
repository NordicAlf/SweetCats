import { Mesh, MeshStandardMaterial } from 'three';
import { GLTF } from 'three-stdlib';

export type GLTFResult = GLTF & {
  nodes: {
    Pyramid: Mesh;
  };
  materials: {
    ['default']: MeshStandardMaterial;
  };
};
