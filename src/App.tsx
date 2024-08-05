import { Canvas } from "@react-three/fiber";
import "./App.css";
import Three from "./Three";
import { OrbitControls } from "@react-three/drei";

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
        camera={{
          position: [5, 5, 5],
          fov: 75,
          near: 0.1,
          far: 100,
        }}
      >
        <OrbitControls />
        <color attach="background" args={["#f0f0f0"]} />
        <axesHelper args={[5]} />
        <gridHelper args={[10, 10]} />
        <Three />
      </Canvas>
    </>
  );
}

export default App;
