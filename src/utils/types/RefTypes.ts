// @ts-ignore
import { Text } from '@react-three/drei';
import { Group, Mesh } from 'three';
import {ReactThreeFiber} from "@react-three/fiber";

export type RefGroupType = Group;
export type RefSphereType = Mesh;

export type TextType = Text & {
  outlineWidth?: string | number | undefined;
  color?: ReactThreeFiber.Color | undefined;
  outlineColor?: ReactThreeFiber.Color | undefined;
};
