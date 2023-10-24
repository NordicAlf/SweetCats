import { Euler } from '@react-three/fiber';
import { Mesh, Vector3 } from 'three';
import {ObjectType} from "../../../store/ObjectStore";
import {GLTFResultType} from "../../../utils/types/GLTFResultType";

export interface ObjectInstanceInterface {
  countInstances: number;
  positions: ObjectType[] | null;
  model: GLTFResultType;
}

export interface ObjectInterface {
  position: Vector3;
  rotation?: Euler;
  scale?: Vector3;
  index: string; // TO-DO fix it
  isVisible: boolean;
  mesh?: Mesh;
}
