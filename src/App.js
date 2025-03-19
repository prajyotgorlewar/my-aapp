import "./App.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";


function Soldier1({ position, animationIndex }) {
  const { scene, animations } = useGLTF("/Soldier1.glb");
  const mixer = useRef(null);

  useEffect(() => {
    if (animations.length > 0 && animationIndex >= 0 && animationIndex < animations.length) {
      if (!mixer.current) {
        mixer.current = new THREE.AnimationMixer(scene);
      }

      const action = mixer.current.clipAction(animations[animationIndex]);
      action.play();
    }

    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    return () => {
      if (mixer.current) mixer.current.stopAllAction();
    };
  }, [animations, animationIndex, scene]);

  useFrame((_, delta) => {
    if (mixer.current) {
      mixer.current.update(delta);
    }
  });

  return <primitive object={scene} position={position} castShadow receiveShadow />;
}

function Soldier2({ position, animationIndex }) {
  const { scene, animations } = useGLTF("/Soldier2.glb");
  const mixer = useRef(null);

  useEffect(() => {
    if (animations.length > 0 && animationIndex >= 0 && animationIndex < animations.length) {
      if (!mixer.current) {
        mixer.current = new THREE.AnimationMixer(scene);
      }
      const action = mixer.current.clipAction(animations[animationIndex]);
      action.play();
    }

    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    return () => {
      if (mixer.current) mixer.current.stopAllAction();
    };
  }, [animations, animationIndex, scene]);

  useFrame((_, delta) => {
    if (mixer.current) {
      mixer.current.update(delta);
    }
  });

  return <primitive object={scene} position={position} castShadow receiveShadow />;
}

function Soldier3({ position, animationIndex }) {
  const { scene, animations } = useGLTF("/Soldier3.glb");
  const mixer = useRef(null);

  useEffect(() => {
    if (animations.length > 0 && animationIndex >= 0 && animationIndex < animations.length) {
      if (!mixer.current) {
        mixer.current = new THREE.AnimationMixer(scene);
      }

      const action = mixer.current.clipAction(animations[animationIndex]);
      action.play();
    }

    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    return () => {
      if (mixer.current) mixer.current.stopAllAction();
    };
  }, [animations, animationIndex, scene]);

  useFrame((_, delta) => {
    if (mixer.current) {
      mixer.current.update(delta);
    }
  });

  return <primitive object={scene} position={position} castShadow receiveShadow />;
}


function App() {
  return (
    <div className="canvas-container" >
      <Canvas camera={{ position: [0, 3, 20], fov: 60 }} shadows >
        <ambientLight intensity={1.4} />
        <directionalLight
          position={[0, 10, -10]}
          intensity={5}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />

        <Soldier1 position={[0, 0, 0]} animationIndex={1} castShadow receiveShadow />
        <Soldier2 position={[2, 0, 0]} animationIndex={3} castShadow receiveShadow />
        <Soldier3 position={[-2, 0, 0]} animationIndex={0} castShadow receiveShadow />

        <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial color="white" />
        </mesh>

        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
