import { GLTF } from 'three-stdlib';
// export type GLTFResultType = GLTF & {
//   nodes: {
//     Pyramid: Mesh;
//   };
//   materials: {
//     ['default']: MeshStandardMaterial;
//   };
// };

export type GLTFResultType = GLTF & {
  nodes: any,
  materials: any
};

