import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedSphere: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const size = Math.min(window.innerWidth * 0.5, 500);
      canvas.width = size;
      canvas.height = size;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Animation variables
    let angle = 0;
    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;
    let isHovering = false;
    let hoverIntensity = 0;
    let targetHoverIntensity = 0;
    
    // Planet colors - teal/turquoise like in the reference
    const planetColor = '#1adbbc';
    const planetGlowColor = '#1adbbc';
    const particleColors = ['#1adbbc', '#14b09a', '#0f8573', '#ffffff'];
    
    // Particles for the planet surface
    const particles: Array<{
      x: number;
      y: number;
      z: number;
      size: number;
      color: string;
      originalX: number;
      originalY: number;
      originalZ: number;
    }> = [];
    
    // Create particles
    const createParticles = () => {
      const particleCount = 2000;
      const radius = canvas.width / 2 * 0.75;
      
      for (let i = 0; i < particleCount; i++) {
        // Create particles on the sphere surface with slight variation
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        
        // Spherical to Cartesian coordinates
        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);
        
        // Add some terrain variation
        const terrainNoise = (Math.random() - 0.5) * (radius * 0.05);
        
        particles.push({
          x: x + terrainNoise,
          y: y + terrainNoise,
          z: z + terrainNoise,
          size: Math.random() * 1.5 + 0.5,
          color: particleColors[Math.floor(Math.random() * particleColors.length)],
          originalX: x + terrainNoise,
          originalY: y + terrainNoise,
          originalZ: z + terrainNoise
        });
      }
    };
    
    createParticles();
    
    // Orbital paths
    const orbitalPaths = [
      { radiusX: canvas.width * 0.45, radiusY: canvas.width * 0.25, rotation: Math.PI / 4, color: 'rgba(255, 255, 255, 0.15)' },
      { radiusX: canvas.width * 0.4, radiusY: canvas.width * 0.35, rotation: -Math.PI / 6, color: 'rgba(26, 219, 188, 0.15)' }
    ];
    
    // Moons
    const moons = [
      { 
        speed: 0.003, 
        size: 8, 
        color: '#ffffff',
        path: orbitalPaths[0],
        angle: 0
      },
      { 
        speed: 0.002, 
        size: 6, 
        color: planetColor,
        path: orbitalPaths[1],
        angle: Math.PI
      }
    ];
    
    // Spice extraction simulation
    const spiceParticles: Array<{
      x: number;
      y: number;
      size: number;
      speed: number;
      life: number;
      maxLife: number;
      color: string;
    }> = [];
    
    // Draw orbital paths
    const drawOrbitalPaths = () => {
      orbitalPaths.forEach(path => {
        ctx.strokeStyle = path.color;
        ctx.lineWidth = 1;
        
        ctx.beginPath();
        ctx.ellipse(
          canvas.width / 2,
          canvas.height / 2,
          path.radiusX,
          path.radiusY,
          path.rotation,
          0,
          Math.PI * 2
        );
        ctx.stroke();
      });
    };
    
    // Draw moons
    const drawMoons = () => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      moons.forEach(moon => {
        // Update moon position
        moon.angle += moon.speed;
        
        // Calculate position based on orbital path
        const x = Math.cos(moon.angle) * moon.path.radiusX;
        const y = Math.sin(moon.angle) * moon.path.radiusY;
        
        // Apply rotation
        const rotatedX = x * Math.cos(moon.path.rotation) - y * Math.sin(moon.path.rotation);
        const rotatedY = x * Math.sin(moon.path.rotation) + y * Math.cos(moon.path.rotation);
        
        // Draw moon
        ctx.fillStyle = moon.color;
        ctx.beginPath();
        ctx.arc(centerX + rotatedX, centerY + rotatedY, moon.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add glow effect
        const gradient = ctx.createRadialGradient(
          centerX + rotatedX, centerY + rotatedY, 0,
          centerX + rotatedX, centerY + rotatedY, moon.size * 2
        );
        gradient.addColorStop(0, moon.color.replace(')', ', 0.3)').replace('rgb', 'rgba'));
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(centerX + rotatedX, centerY + rotatedY, moon.size * 2, 0, Math.PI * 2);
        ctx.fill();
      });
    };
    
    // Simulate spice extraction when hovering
    const simulateSpiceExtraction = () => {
      if (!isHovering) return;
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Create new spice particles
      if (Math.random() > 0.7) {
        // Random position on the planet surface
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        const radius = canvas.width / 2 * 0.75;
        
        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);
        
        // Only create particles on the visible side
        if (z > 0) {
          spiceParticles.push({
            x: centerX + x,
            y: centerY + y,
            size: Math.random() * 2 + 1,
            speed: Math.random() * 0.5 + 0.2,
            life: 0,
            maxLife: Math.random() * 100 + 50,
            color: '#e6c751' // Spice color (golden)
          });
        }
      }
      
      // Update and draw spice particles
      for (let i = spiceParticles.length - 1; i >= 0; i--) {
        const particle = spiceParticles[i];
        
        // Update particle
        particle.life += 1;
        particle.y -= particle.speed;
        particle.size -= particle.size / particle.maxLife;
        
        // Remove dead particles
        if (particle.life >= particle.maxLife || particle.size <= 0.1) {
          spiceParticles.splice(i, 1);
          continue;
        }
        
        // Draw particle
        const opacity = 1 - (particle.life / particle.maxLife);
        ctx.fillStyle = particle.color.replace(')', `, ${opacity})`).replace('#', 'rgba(');
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      }
    };
    
    // Draw scan lines effect
    const drawScanLines = () => {
      if (!isHovering) return;
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = canvas.width * 0.35;
      
      // Draw scan line
      const scanLineY = centerY + Math.sin(angle * 10) * radius * 0.8;
      
      ctx.strokeStyle = `rgba(26, 219, 188, ${hoverIntensity * 0.5})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(centerX - radius, scanLineY);
      ctx.lineTo(centerX + radius, scanLineY);
      ctx.stroke();
      
      // Draw scan effect
      ctx.fillStyle = `rgba(26, 219, 188, ${hoverIntensity * 0.1})`;
      ctx.beginPath();
      ctx.rect(centerX - radius, scanLineY - 20, radius * 2, 40);
      ctx.fill();
    };
    
    // Draw data points
    const drawDataPoints = () => {
      if (!isHovering) return;
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Draw random data points
      for (let i = 0; i < 5; i++) {
        const theta = Math.random() * Math.PI * 2;
        const radius = canvas.width * 0.3 * Math.random();
        
        const x = centerX + Math.cos(theta) * radius;
        const y = centerY + Math.sin(theta) * radius;
        
        // Only draw if in front of planet
        if (Math.random() > 0.5) {
          // Draw data point
          ctx.fillStyle = `rgba(26, 219, 188, ${hoverIntensity * 0.8})`;
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fill();
          
          // Draw connecting line
          ctx.strokeStyle = `rgba(26, 219, 188, ${hoverIntensity * 0.3})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(centerX, centerY);
          ctx.lineTo(x, y);
          ctx.stroke();
          
          // Draw data label
          ctx.font = '8px monospace';
          ctx.fillStyle = `rgba(255, 255, 255, ${hoverIntensity * 0.8})`;
          ctx.textAlign = 'center';
          ctx.fillText(`DATA_${Math.floor(Math.random() * 1000)}`, x, y - 8);
        }
      }
    };
    
    // Draw planet
    const drawPlanet = () => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Sort particles by z-index for proper rendering
      particles.sort((a, b) => a.z - b.z);
      
      // Draw particles
      particles.forEach(particle => {
        // Apply rotation based on angle
        const rotatedX = particle.originalX * Math.cos(angle * 0.1) - particle.originalZ * Math.sin(angle * 0.1);
        const rotatedZ = particle.originalX * Math.sin(angle * 0.1) + particle.originalZ * Math.cos(angle * 0.1);
        
        // Apply another rotation for y-axis
        const finalX = rotatedX;
        const finalY = particle.originalY * Math.cos(angle * 0.08) - rotatedZ * Math.sin(angle * 0.08);
        const finalZ = particle.originalY * Math.sin(angle * 0.08) + rotatedZ * Math.cos(angle * 0.08);
        
        // Update particle position
        particle.x = finalX;
        particle.y = finalY;
        particle.z = finalZ;
        
        // Only draw particles on the visible side
        if (finalZ > 0) {
          // Calculate opacity based on z-position for depth effect
          const distanceFromCenter = Math.sqrt(finalX * finalX + finalY * finalY);
          const normalizedDistance = distanceFromCenter / (canvas.width / 2 * 0.75);
          
          // Simulate atmosphere edge glow
          let opacity = 0.8 - normalizedDistance * 0.3;
          
          // Enhance glow when hovering
          if (isHovering) {
            opacity += hoverIntensity * 0.2;
          }
          
          // Adjust size based on z-position
          const sizeModifier = (finalZ / (canvas.width / 2 * 0.75)) * 0.5 + 0.5;
          
          // Draw particle
          ctx.fillStyle = particle.color.replace(')', `, ${opacity})`).replace('#', 'rgba(');
          ctx.beginPath();
          ctx.arc(
            centerX + finalX, 
            centerY + finalY, 
            particle.size * sizeModifier * (isHovering ? (1 + hoverIntensity * 0.1) : 1), 
            0, 
            Math.PI * 2
          );
          ctx.fill();
        }
      });
      
      // Draw atmosphere glow
      const gradient = ctx.createRadialGradient(
        centerX, centerY, canvas.width * 0.3,
        centerX, centerY, canvas.width * 0.4
      );
      gradient.addColorStop(0, `rgba(26, 219, 188, ${isHovering ? 0.05 + hoverIntensity * 0.1 : 0.0})`);
      gradient.addColorStop(0.5, `rgba(26, 219, 188, ${isHovering ? 0.1 + hoverIntensity * 0.15 : 0.05})`);
      gradient.addColorStop(1, 'rgba(26, 219, 188, 0.0)');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, canvas.width * 0.4, 0, Math.PI * 2);
      ctx.fill();
    };
    
    // Add UI elements
    const drawUI = () => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      ctx.strokeStyle = `rgba(255, 255, 255, ${isHovering ? 0.3 : 0.2})`;
      ctx.lineWidth = 1;
      
      // Draw crosshair
      const crosshairSize = 10;
      ctx.beginPath();
      ctx.moveTo(centerX - crosshairSize, centerY);
      ctx.lineTo(centerX + crosshairSize, centerY);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(centerX, centerY - crosshairSize);
      ctx.lineTo(centerX, centerY + crosshairSize);
      ctx.stroke();
      
      // Draw circular UI element
      ctx.beginPath();
      ctx.arc(centerX, centerY, canvas.width * 0.35, 0, Math.PI * 2);
      ctx.stroke();
      
      // Draw additional UI elements when hovering
      if (isHovering) {
        // Draw outer ring
        ctx.strokeStyle = `rgba(26, 219, 188, ${0.2 + hoverIntensity * 0.3})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(centerX, centerY, canvas.width * 0.38, 0, Math.PI * 2);
        ctx.stroke();
        
        // Draw angle markers
        for (let i = 0; i < 8; i++) {
          const angle = (i / 8) * Math.PI * 2;
          const innerRadius = canvas.width * 0.35;
          const outerRadius = canvas.width * 0.38;
          
          ctx.strokeStyle = `rgba(26, 219, 188, ${0.3 + hoverIntensity * 0.4})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(
            centerX + Math.cos(angle) * innerRadius,
            centerY + Math.sin(angle) * innerRadius
          );
          ctx.lineTo(
            centerX + Math.cos(angle) * outerRadius,
            centerY + Math.sin(angle) * outerRadius
          );
          ctx.stroke();
        }
      }
      
      // Draw text labels
      ctx.font = '10px monospace';
      ctx.fillStyle = `rgba(255, 255, 255, ${isHovering ? 0.7 : 0.5})`;
      ctx.textAlign = 'left';
      ctx.fillText('ORBITAL VIEWPORT', 10, 20);
      
      ctx.textAlign = 'right';
      ctx.fillText('HET KOTHARI', canvas.width - 10, 20);
      
      // Draw status text
      if (isHovering) {
        ctx.fillStyle = `rgba(26, 219, 188, ${0.7 + hoverIntensity * 0.3})`;
        ctx.textAlign = 'left';
        ctx.fillText('STATUS: SCANNING', 10, 40);
        ctx.fillText(`INTENSITY: ${Math.floor(hoverIntensity * 100)}%`, 10, 55);
      }
      
      ctx.textAlign = 'left';
      ctx.fillStyle = `rgba(255, 255, 255, ${isHovering ? 0.7 : 0.5})`;
      ctx.fillText('DIRECTIONS:', 10, canvas.height - 30);
      ctx.fillText('1. HOVER TO SIMULATE SPICE EXTRACTION', 10, canvas.height - 15);
    };
    
    // Handle mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      
      // Check if mouse is over the planet
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const distance = Math.sqrt(Math.pow(mouseX - centerX, 2) + Math.pow(mouseY - centerY, 2));
      
      isHovering = distance < canvas.width * 0.3;
      setIsHovering(isHovering);
      
      // Set target hover intensity
      targetHoverIntensity = isHovering ? 1 : 0;
    };
    
    // Handle mouse leave
    const handleMouseLeave = () => {
      isHovering = false;
      setIsHovering(false);
      targetHoverIntensity = 0;
    };
    
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update angle
      angle += 0.005;
      
      // Smoothly update hover intensity
      hoverIntensity += (targetHoverIntensity - hoverIntensity) * 0.05;
      
      // Draw everything
      drawOrbitalPaths();
      drawPlanet();
      drawMoons();
      simulateSpiceExtraction();
      drawScanLines();
      drawDataPoints();
      drawUI();
      
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="relative"
    >
      <motion.div
        className="relative"
        animate={{
          scale: isHovering ? 1.05 : 1,
          filter: isHovering ? 'drop-shadow(0 0 40px rgba(26, 219, 188, 0.5))' : 'drop-shadow(0 0 30px rgba(26, 219, 188, 0.3))'
        }}
        transition={{ duration: 0.5 }}
      >
        <canvas 
          ref={canvasRef} 
          className="max-w-full cursor-pointer"
        />
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {isHovering && (
            <motion.div 
              className="absolute inset-0 border-2 border-primary rounded-full opacity-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: [0, 0.5, 0], scale: [0.8, 1.1, 1.2] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
        </div>
      </motion.div>
      {/* <div className="absolute bottom-2 left-2 text-xs text-slate-400 font-mono">HOVER TO INTERACT</div> */}
    </motion.div>
  );
};

export default AnimatedSphere; 