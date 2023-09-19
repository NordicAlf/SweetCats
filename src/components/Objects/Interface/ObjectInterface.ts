import { Euler } from '@react-three/fiber';
import { Mesh, Vector3 } from 'three';
import { GLTF } from 'three-stdlib';
import {PlateType} from "../../../store/PlateStore";

export interface ObjectInstanceInterface {
  countInstances: number;
  positions: PlateType[] | null;
  model: GLTF;
}

export interface ObjectInterface {
  uuid?: string; // fix it
  position: Vector3;
  rotation?: Euler;
  scale?: Vector3;
  index: number;
  isVisible: boolean;
  mesh?: Mesh;
}
