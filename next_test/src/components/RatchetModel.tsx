// components/RatchetModel.tsx
import { useGLTF } from "@react-three/drei";

export default function RatchetModel() {
  const model = useGLTF("/models/ratchet.glb"); // Make sure your file is here
  return <primitive object={model.scene} scale={3.5} />;
}

// Preload for faster rendering
useGLTF.preload("/models/ratchet.glb");
