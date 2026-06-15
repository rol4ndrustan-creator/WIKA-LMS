"use client";

import { Canvas } from "@react-three/fiber";
import { Sparkles, Float } from "@react-three/drei";

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <ambientLight intensity={0.4} color="#fff7e6" />
      <pointLight position={[2, 3, 4]} intensity={40} color="#d4af37" />
      <pointLight position={[-3, -1, 2]} intensity={15} color="#2f4f3e" />

      <Float speed={0.6} rotationIntensity={0.15} floatIntensity={0.6}>
        <Sparkles
          count={140}
          scale={[12, 6, 6]}
          size={2.5}
          speed={0.25}
          color="#d4af37"
          opacity={0.6}
        />
      </Float>

      <Sparkles
        count={60}
        scale={[16, 8, 8]}
        size={1.2}
        speed={0.08}
        color="#f5f1e8"
        opacity={0.25}
      />
    </Canvas>
  );
}
