import { useTexture } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Material() {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  const startX = -4;

  const matcap = useTexture("./material1.jpg");

  useEffect(() => {
    if (meshRef.current && groupRef.current) {
      let i = 1;
      for (const child of groupRef.current.children) {
        if (child instanceof THREE.Mesh) {
          child.geometry = meshRef.current.geometry.clone();
          child.position.x = (i / 2) * 2 + startX;
          child.position.z = 0;
          if (i % 2 === 1) {
            child.position.z = 2;
          }
          i++;
        }
      }
    }
  }, []);

  return (
    <>
      <directionalLight position={[5, 5, 5]} />
      {/* <mesh position={[-2, 0, 0]}>
        <planeGeometry />
        <meshBasicMaterial color={"green"} side={THREE.DoubleSide} />
      </mesh> */}
      <mesh position={[startX, 0, 0]} ref={meshRef}>
        <sphereGeometry />
        <meshBasicMaterial wireframe color={"red"} />
      </mesh>
      <group ref={groupRef}>
        <mesh>
          <meshStandardMaterial
            color={"red"}
            transparent={true}
            opacity={0.5}
          />
        </mesh>
        <mesh>
          <meshLambertMaterial color={"red"} emissive={"black"} />
        </mesh>
        <mesh>
          <meshPhongMaterial
            color={"red"}
            emissive={"black"}
            specular={"white"}
            shininess={10}
            flatShading={true}
          />
        </mesh>
        <mesh>
          <meshNormalMaterial />
        </mesh>
        <mesh>
          <meshStandardMaterial color={"red"} roughness={0.5} metalness={0.5} />
        </mesh>
        <mesh>
          <meshPhysicalMaterial
            color={"#fff"}
            roughness={0.5}
            metalness={0.5}
            clearcoat={0.5}
            clearcoatRoughness={0.5}
            transmission={1}
          />
        </mesh>
        <mesh>
          <meshMatcapMaterial matcap={matcap} />
        </mesh>
        <mesh>
          <meshToonMaterial color={"pink"} />
        </mesh>
      </group>
    </>
  );
}
