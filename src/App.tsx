import { Canvas } from "@react-three/fiber";
import "./App.css";
import { OrbitControls } from "@react-three/drei";
// import Material from "./Material";
import Light from "./Light";

function App() {
  // leva is a library that provides a GUI for controlling variables in your React app.
  // const grid = useControls({
  //   segment: {
  //     value: 10,
  //     min: 1,
  //     max: 100,
  //     step: 1,
  //   },
  // });
  return (
    <>
      <Canvas
        shadows
        camera={{
          position: [5, 5, 5],
          fov: 90,
          near: 0.1,
          far: 100,
        }}
      >
        <OrbitControls />
        <color attach="background" args={["#000000"]} />
        <axesHelper args={[5]} />
        <gridHelper args={[10, 10]} />
        {/* <Material /> */}
        <Light />
      </Canvas>
    </>
  );
}

export default App;
