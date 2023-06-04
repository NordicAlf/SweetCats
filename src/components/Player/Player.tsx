import { Ray } from '@dimforge/rapier3d-compat';
import { useKeyboardControls } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { CapsuleCollider, RigidBody, useRapier } from '@react-three/rapier';
import React, { useRef } from 'react';
import { Vector3 } from 'three';
import ObjectNames from '../../utils/types/ObjectNames';
import Settings from '../../utils/types/Settings';
import { Cat } from './Model/Cat';

const ViewHeightAbovePlayer = 0.02;

interface ControlInterface {
  forward: boolean;
  backward: boolean;
  left: boolean;
  right: boolean;
  jump: boolean;
  run: boolean;
}

export const Player = () => {
  const ref = useRef();
  const [, getKeys] = useKeyboardControls();
  const { camera } = useThree();
  const rapier = useRapier();

  const direction = new Vector3();
  const frontVector = new Vector3();
  const sideVector = new Vector3();
  const jumpVector = new Vector3(0, Settings.jumpHeight, 0);

  camera.rotation.order = 'YXZ';

  useFrame((state) => {
    const controls: ControlInterface = getKeys();
    const velocity = ref.current.linvel();

    // movement
    frontVector.set(
      0,
      0,
      Number(controls.backward) / 100 - Number(controls.forward) / 100
    );

    sideVector.set(
      Number(controls.left) / 100 - Number(controls.right) / 100,
      0,
      0
    );

    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(
        controls.run ? Settings.speed + Settings.acceleration : Settings.speed
      )
      .applyEuler(state.camera.rotation);

    ref.current.setLinvel({ x: direction.x, y: velocity.y, z: direction.z });

    // jumping
    const ray = rapier.world.castRay(
      new Ray(ref.current.translation(), { x: 0, y: -1, z: 0 })
    );
    const grounded = ray && ray.collider && Math.abs(ray.toi) < 0.6;

    if (controls.jump && grounded) {
      ref.current.setLinvel(jumpVector);
    }

    // update camera
    const translation = ref.current.translation();

    state.camera.position.set(
      translation.x,
      translation.y + ViewHeightAbovePlayer,
      translation.z
    );
  });

  return (
    <group>
      <RigidBody
        ref={ref}
        colliders={false}
        type={'dynamic'}
        scale={[3, 3, 3]}
        enabledRotations={[false, false, false]}
        mass={1}
        position={[0, 8, 0]}
        canSleep={false}
        name={ObjectNames.player}
      >
        <Cat position={new Vector3(0, -0.1, 0)} />
        <CapsuleCollider args={[0.02, 0.08]} />
      </RigidBody>
    </group>
  );
};
