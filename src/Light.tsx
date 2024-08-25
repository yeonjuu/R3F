import { Environment, useHelper } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Light() {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const dLightRef = useRef<THREE.DirectionalLight>(null!);

  const startX = -3;

  // useHelper is a hook that creates a helper object for a light or camera.
  useHelper(dLightRef, THREE.DirectionalLightHelper);

  useEffect(() => {
    if (meshRef.current && groupRef.current) {
      let i = 1;
      for (const child of groupRef.current.children) {
        if (child instanceof THREE.Mesh) {
          child.geometry = meshRef.current.geometry.clone();
          child.position.x = i + startX;
          child.position.z = 0;
          if (i % 2 === 0) {
            child.position.z = 2;
          }
          i++;
        }
      }
    }
  }, []);

  return (
    <>
      <directionalLight
        ref={dLightRef}
        shadow-camera-left={-5}
        shadow-camera-right={5}
        shadow-camera-top={5}
        shadow-camera-bottom={-5}
        castShadow
        intensity={1}
        color={"#fff"}
        position={[0, 5, 0]}
        target-position={[0, 0, 2]}
      />
      {/* <pointLight position={[0, 5, 0]} intensity={10} />
      <spotLight
        position={[0, 5, 0]}
        angle={Math.PI / 4}
        penumbra={0.05}
        intensity={10}
      /> */}
      {/* <Environment files={"./autumn_sky.hdr"} background /> */}
      <mesh
        rotation-x={THREE.MathUtils.degToRad(-90)}
        position={[0, -1, 0]}
        receiveShadow
      >
        <planeGeometry args={[15, 15]} />
        <meshStandardMaterial color={"blue"} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[startX, 0, 0]} ref={meshRef}>
        <torusKnotGeometry args={[0.5, 0.2]} />
        <meshBasicMaterial visible={false} color={"red"} />
      </mesh>
      <group ref={groupRef}>
        <mesh receiveShadow castShadow>
          <meshLambertMaterial color={"pink"} emissive={"black"} />
        </mesh>
        <mesh receiveShadow castShadow>
          <meshPhongMaterial
            color={"pink"}
            emissive={"black"}
            specular={"white"}
            shininess={10}
            flatShading={true}
          />
        </mesh>

        <mesh receiveShadow castShadow>
          <meshStandardMaterial
            color={"pink"}
            roughness={0.5}
            metalness={0.5}
          />
        </mesh>
        <mesh receiveShadow castShadow>
          <meshPhysicalMaterial
            color={"#fff"}
            roughness={0.5}
            metalness={0.5}
            clearcoat={0.5}
            clearcoatRoughness={0.5}
            transmission={1}
          />
        </mesh>
        <mesh receiveShadow castShadow>
          <meshToonMaterial color={"pink"} />
        </mesh>
      </group>
    </>
  );
}
