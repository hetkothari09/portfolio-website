import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Text, useTexture, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi';

// Define types for props
interface KeyProps {
  position: [number, number, number];
  size?: [number, number, number];
  color?: string;
  label: string;
  icon?: string;
  link: string;
  hovered: string | null;
  setHovered: (label: string | null) => void;
}

interface LEDIndicatorProps {
  position: [number, number, number];
  isAvailable: boolean;
}

interface KeyboardBaseProps {
  children: React.ReactNode;
}

interface KeyboardSceneProps {
  isAvailable: boolean;
}

interface KeyboardContactProps {
  isAvailable: boolean;
}

// Key component for individual keyboard keys
const Key: React.FC<KeyProps> = ({ 
  position, 
  size = [1, 0.4, 1], 
  color = '#1adbbc', 
  label, 
  icon, 
  link, 
  hovered, 
  setHovered 
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const isHovered = hovered === label;
  
  // Animation for key press effect
  useFrame(() => {
    if (meshRef.current) {
      if (isHovered) {
        meshRef.current.position.y = THREE.MathUtils.lerp(
          meshRef.current.position.y,
          position[1] - 0.05,
          0.1
        );
      } else {
        meshRef.current.position.y = THREE.MathUtils.lerp(
          meshRef.current.position.y,
          position[1],
          0.1
        );
      }
    }
  });

  return (
    <group position={position}>
      {/* Key base */}
      <mesh
        ref={meshRef}
        position={[0, 0, 0]}
        onPointerOver={() => setHovered(label)}
        onPointerOut={() => setHovered(null)}
        onClick={() => window.open(link, '_blank')}
      >
        <boxGeometry args={size} />
        <meshStandardMaterial 
          color={color} 
          metalness={0.5} 
          roughness={0.2}
          emissive={color}
          emissiveIntensity={isHovered ? 0.5 : 0.1}
        />
      </mesh>
      
      {/* Key label */}
      <Text
        position={[0, 0.21, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={0.2}
        color="#ffffff"
        font="/fonts/JetBrainsMono-Bold.ttf"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </group>
  );
};

// LED indicator component
const LEDIndicator: React.FC<LEDIndicatorProps> = ({ position, isAvailable }) => {
  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial 
          color={isAvailable ? '#00ff00' : '#ff0000'} 
          emissive={isAvailable ? '#00ff00' : '#ff0000'}
          emissiveIntensity={0.8}
        />
      </mesh>
      <Text
        position={[0.5, 0, 0]}
        fontSize={0.15}
        color="#ffffff"
        font="/fonts/JetBrainsMono-Bold.ttf"
        anchorX="left"
        anchorY="middle"
      >
        {isAvailable ? 'Available For Freelance' : 'Currently Unavailable'}
      </Text>
    </group>
  );
};

// Keyboard base component
const KeyboardBase: React.FC<KeyboardBaseProps> = ({ children }) => {
  return (
    <mesh position={[0, -0.3, 0]} receiveShadow>
      <boxGeometry args={[5.5, 0.1, 3]} />
      <meshStandardMaterial color="#111111" metalness={0.7} roughness={0.2} />
      {children}
    </mesh>
  );
};

// Loading fallback component
const LoadingFallback = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="text-primary font-mono text-sm flex items-center">
        <div className="w-3 h-3 border-2 border-primary border-t-transparent rounded-full animate-spin mr-2"></div>
        LOADING_3D_KEYBOARD...
      </div>
    </div>
  );
};

// Main keyboard scene
const KeyboardScene: React.FC<KeyboardSceneProps> = ({ isAvailable = true }) => {
  const [hovered, setHovered] = useState<string | null>(null);
  const { camera } = useThree();
  
  useEffect(() => {
    // Set initial camera position
    camera.position.set(0, 2, 4);
  }, [camera]);

  // Define key data
  const keys = [
    { 
      position: [-2, 0.2, -0.7] as [number, number, number], 
      color: '#ff5555', 
      label: 'HIRE ME', 
      link: 'mailto:hetkothari.work@gmail.com?subject=Job%20Opportunity' 
    },
    { 
      position: [-0.7, 0.2, -0.7] as [number, number, number], 
      color: '#5555ff', 
      label: 'CALL ME', 
      link: 'tel:+919324119268' 
    },
    { 
      position: [0.7, 0.2, -0.7] as [number, number, number], 
      color: '#55ff55', 
      label: '@', 
      link: 'mailto:hetkothari.work@gmail.com' 
    },
    { 
      position: [2, 0.2, -0.7] as [number, number, number], 
      color: '#ffaa00', 
      label: 'GITHUB', 
      link: 'https://github.com/hetkothari09' 
    },
    { 
      position: [-2, 0.2, 0.7] as [number, number, number], 
      color: '#aa55ff', 
      label: 'LINKEDIN', 
      link: 'https://www.linkedin.com/in/het-kothari-8b6a1a1b9/' 
    },
    { 
      position: [-0.7, 0.2, 0.7] as [number, number, number], 
      color: '#ff55aa', 
      label: 'RESUME', 
      link: '/resume.pdf' 
    },
    { 
      position: [0.7, 0.2, 0.7] as [number, number, number], 
      color: '#55ffff', 
      label: 'PROJECTS', 
      link: '#projects' 
    },
    { 
      position: [2, 0.2, 0.7] as [number, number, number], 
      color: '#ffff55', 
      label: 'CONTACT', 
      link: '#contact' 
    },
  ];

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} castShadow />
      <pointLight position={[-10, 10, -10]} intensity={0.5} />
      
      <KeyboardBase>
        {keys.map((key, index) => (
          <Key 
            key={index} 
            position={key.position} 
            color={key.color} 
            label={key.label} 
            link={key.link}
            hovered={hovered}
            setHovered={setHovered}
          />
        ))}
        
        <LEDIndicator position={[0, 0.3, -1.2] as [number, number, number]} isAvailable={isAvailable} />
      </KeyboardBase>
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2.5}
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
      />
    </>
  );
};

// Responsive container for the 3D keyboard
const KeyboardContact: React.FC<KeyboardContactProps> = ({ isAvailable = true }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full h-[400px] md:h-[500px] relative rounded-lg overflow-hidden border border-primary border-opacity-20"
    >
      {isClient ? (
        <Suspense fallback={<LoadingFallback />}>
          <Canvas shadows dpr={[1, 2]}>
            <PerspectiveCamera makeDefault position={[0, 2, 4]} fov={45} />
            <KeyboardScene isAvailable={isAvailable} />
          </Canvas>
        </Suspense>
      ) : (
        <LoadingFallback />
      )}
      
      {/* Overlay effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Scan line effect */}
        <motion.div 
          className="absolute left-0 w-full h-0.5 bg-primary opacity-10"
          animate={{ top: ['0%', '100%', '0%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Corner decorations */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary border-opacity-50"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary border-opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary border-opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary border-opacity-50"></div>
      </div>
      
      {/* Mobile instructions */}
      <div className="absolute bottom-4 left-0 right-0 text-center text-xs text-slate-400 md:hidden">
        Touch and drag to rotate keyboard
      </div>
    </motion.div>
  );
};

export default KeyboardContact; 