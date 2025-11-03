import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron } from '@react-three/drei';

// Componente interno que representa o cristal
function Crystal() {
  const meshRef = useRef();

  // Esta função é chamada em cada frame (60x por segundo)
  useFrame((state, delta) => {
    // Rotaciona o cristal lentamente
    meshRef.current.rotation.x += delta * 0.1;
    meshRef.current.rotation.y += delta * 0.15;
  });

  return (
    <Icosahedron ref={meshRef} args={[2.5, 0]}> 
      {/* args=[radius, detail] */}
      <meshStandardMaterial 
        color="#555555" /* Cinza Metálico (Grafite) */
        roughness={0.1}
        metalness={0.9}
        emissive="#FF4A00" /* Brilho sutil Laranja Magma */
        emissiveIntensity={0.15} /* Intensidade do brilho */
      />
    </Icosahedron>
  );
}

// Componente principal que exportamos
export const GraphiteModel = () => {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
      {/* Luz ambiente para iluminar a cena inteira */}
      <ambientLight intensity={1.5} />
      
      {/* Luz direcional, como um "sol", para criar reflexos */}
      <directionalLight 
        position={[5, 5, 5]} 
        intensity={2.5} 
        color="#FFFFFF"
      />
      {/* Luz vindo do outro lado para preencher */}
      <directionalLight 
        position={[-3, -3, 2]} 
        intensity={1} 
        color="#FF4A00" /* Luz de preenchimento magma */
      />
      
      <Crystal />
    </Canvas>
  );
};