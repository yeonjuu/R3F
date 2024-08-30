// import { ThreeEvent } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function Interactive() {
  // material 에 color 가 없나? typescript 에서는 color 가 없다고 나옴
  //   const meshClickHandler = (e: ThreeEvent<MouseEvent>) => {
  //     console.log("mesh clicked", e);
  //     const mesh = e.object as THREE.Mesh;
  //     mesh.material.color = new THREE.Color("#01ff01");
  //   };

  const meshClickHandler = (e: any) => {
    console.log("mesh clicked", e);
    e.object.material.color = new THREE.Color("#01ff01");
  };

  const { camera, raycaster, pointer } = useThree();

  const groupClickHandler = (e: any) => {
    console.log("group clicked", e);
    //포인터에서 레이캐스터로 광선을 쏴서 물체를 찾는다.
    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObject(e.eventObject, true);
    console.log(intersects);
  };

  return (
    <>
      <ambientLight />
      <directionalLight intensity={5} />
      <group onClick={(e) => groupClickHandler(e)}>
        <mesh position={[-2, 0, 0]}>
          <boxGeometry />
          <meshStandardMaterial color={"#fff"} />
        </mesh>
        <mesh>
          <boxGeometry />
          <meshStandardMaterial color={"#fff"} />
        </mesh>
        <mesh position={[2, 0, 0]}>
          <boxGeometry />
          <meshStandardMaterial color={"#fff"} />
        </mesh>
      </group>
    </>
  );
}
