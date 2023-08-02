import { Mesh, MeshStandardMaterial } from 'three';
import { GLTF } from 'three-stdlib';

export type GLTFResultType = GLTF & {
  nodes: {
    Pyramid: Mesh;
  };
  materials: {
    ['default']: MeshStandardMaterial;
  };
};
