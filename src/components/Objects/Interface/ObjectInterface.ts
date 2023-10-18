import { Euler } from '@react-three/fiber';
import { Mesh, Vector3 } from 'three';
import { GLTF } from 'three-stdlib';
import {PlateType} from "../../../store/ObjectStore";

export interface ObjectInstanceInterface {
  countInstances: number;
  positions: PlateType[] | null;
  model: GLTF;
}

export interface ObjectInterface {
  uuid?: string; // TO-DO fix it
  position: Vector3;
  rotation?: Euler;
  scale?: Vector3;
  index: number | string; // TO-DO fix it
  isVisible: boolean;
  mesh?: Mesh;
}
