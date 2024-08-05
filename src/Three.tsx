// import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function Three() {
  const boxRef = useRef<THREE.Mesh>(null);

  // fiber hooks
  // const { size, gl, camera } = useThree();
  // useFrame((state, delta) => {});

  return (
    <>
      <directionalLight position={[5, 5, 5]} />
      <mesh ref={boxRef}>
        <boxGeometry />
        <meshStandardMaterial color={new THREE.Color("red")} />
      </mesh>
    </>
  );
}
