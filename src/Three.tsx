// import { Box } from "@react-three/drei";
// import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useControls } from "leva";

export default function Three() {
  const boxRef = useRef<THREE.Mesh>(null);
  const boxCopyRef = useRef<THREE.Mesh>(null);
  const boxControl = useControls({
    width: {
      value: 1,
      min: 0,
      max: 10,
      step: 0.1,
    },
    height: {
      value: 1,
      min: 0,
      max: 10,
      step: 0.1,
    },
    depth: {
      value: 1,
      min: 0,
      max: 10,
      step: 0.1,
    },
    widthSegments: {
      value: 1,
      min: 1,
      max: 10,
      step: 1,
    },
    heightSegments: {
      value: 1,
      min: 1,
      max: 10,
      step: 1,
    },
    depthSegments: {
      value: 1,
      min: 1,
      max: 10,
      step: 1,
    },
  });

  // fiber hooks
  // const { size, gl, camera, scene } = useThree();
  // useFrame((state, delta) => {});

  //use three.js
  // const geometry = new THREE.BoxGeometry();
  // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  // const cube = new THREE.Mesh(geometry, material);
  // scene.add(cube);

  useEffect(() => {
    if (boxRef.current && boxCopyRef.current) {
      boxCopyRef.current.geometry = boxRef.current.geometry.clone();
    }
  }, [boxControl]);

  return (
    <>
      <directionalLight position={[5, 5, 5]} />
      <group position={[0, 0, 0]}>
        <mesh
          ref={boxRef}
          position={[0, 0, 0]}
          rotation={[
            THREE.MathUtils.degToRad(0),
            THREE.MathUtils.degToRad(0),
            THREE.MathUtils.degToRad(0),
          ]}
        >
          <boxGeometry
            args={[
              boxControl.width,
              boxControl.height,
              boxControl.depth,
              boxControl.widthSegments,
              boxControl.heightSegments,
              boxControl.depthSegments,
            ]}
          />
          <meshStandardMaterial color={new THREE.Color("blue")} />
        </mesh>
        {/* <Box args={[1, 1, 1]} position={[0, 0, 2]}>
          <meshStandardMaterial color={new THREE.Color("red")} />
        </Box> */}
        <mesh ref={boxCopyRef} position={[0, 0, 0]}>
          <meshStandardMaterial wireframe />
        </mesh>
      </group>
    </>
  );
}
