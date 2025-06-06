
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
}

const ParticleBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const createParticles = () => {
      const newParticles: Particle[] = [];
      const particleCount = window.innerWidth < 768 ? 30 : 50;
      
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 3 + 1,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
        });
      }
      setParticles(newParticles);
    };

    createParticles();
    window.addEventListener('resize', createParticles);
    return () => window.removeEventListener('resize', createParticles);
  }, []);

  return (
    <>
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/30" />
      
      {/* Animated Particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-purple-400/30"
            style={{
              width: particle.size,
              height: particle.size,
            }}
            initial={{ x: particle.x, y: particle.y }}
            animate={{
              x: particle.x + particle.vx * 1000,
              y: particle.y + particle.vy * 1000,
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>
      
      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 border border-purple-500/20 rotate-45"
        animate={{ rotate: [45, 405] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-24 h-24 border-2 border-blue-500/20 rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 right-20 w-16 h-16 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rotate-12"
        animate={{ rotate: [12, 372] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      />
    </>
  );
};

export default ParticleBackground;
