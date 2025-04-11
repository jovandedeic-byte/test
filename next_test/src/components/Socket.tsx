"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import RatchetModel from "@/components/RatchetModel"; // We'll create this next

const Socket = () => {
  return (
    <div className="flex items-center justify-center w-full !h-[100dvh] m-0">
      <div className="w-full h-full ">
        <Canvas>
          <Stage environment="city" intensity={0.6}>
            <RatchetModel />
          </Stage>
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
};

export default Socket;
