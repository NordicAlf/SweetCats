import React, {useRef} from 'react'
import {useGLTF} from '@react-three/drei'
import {useFrame} from "@react-three/fiber";
import {Vector3} from "three";

interface ModelInterface {
    scale?: Vector3,
    position?: Vector3
}

export const Cat: React.FC<ModelInterface> = (props: ModelInterface) => {
    const group = useRef()
    const { nodes, materials } = useGLTF('/Models/cat.glb');

    useFrame((state) => {
        group.current.rotation.set(0, state.camera.rotation.y - 1.75, 0);
    });

    return (
        <group ref={group} {...props} dispose={null} >
            <group name="Sketchfab_Scene">
                <group name="GLTF_SceneRootNode">
                    <group name="donut_2" position={[0, 0.024, 0]} rotation={[0, -1.522, 0]}>
                        <group name="polewka_0">
                            <mesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials['Material.004']} />
                            <mesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials['Material.009']} />
                        </group>
                        <group name="twarz_1" position={[-0.003, -0.005, 0.082]} rotation={[-Math.PI / 2, 0, 0]} scale={[-0.012, 0.012, 0.012]}>
                            <mesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials['Material.002']} />
                            <mesh name="Object_13" geometry={nodes.Object_13.geometry} material={materials['Material.005']} />
                        </group>
                        <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials['Material.003']} />
                        <mesh name="Object_5" geometry={nodes.Object_5.geometry} material={materials['Material.008']} />
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/Models/cat.glb')