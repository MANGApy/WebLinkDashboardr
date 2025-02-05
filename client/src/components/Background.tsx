import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{x: number; y: number; vx: number; vy: number; size: number; alpha: number}> = [];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        alpha: Math.random()
      });
    }

    function animate() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 0, 0, ${particle.alpha})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    const cleanup = () => {
      cancelAnimationFrame(animate as any);
    };

    return cleanup;
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full"
        style={{ background: 'black' }}
      />
      
      {/* Celestial Bodies */}
      <motion.div
        className="fixed top-8 right-8 w-16 h-16 bg-white rounded-full"
        animate={{
          scale: [1, 1.1, 1],
          filter: ["brightness(100%)", "brightness(120%)", "brightness(100%)"]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          boxShadow: "0 0 20px rgba(255,255,255,0.5)"
        }}
      />

      <motion.div
        className="fixed top-8 left-8 w-16 h-16 bg-white rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          filter: ["brightness(100%)", "brightness(130%)", "brightness(100%)"]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          boxShadow: "0 0 30px rgba(255,255,255,0.6)"
        }}
      />

      {/* Saturn-like Planet */}
      <motion.div
        className="fixed w-32 h-32 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{
          rotateX: [0, 10, 0, -10, 0],
          rotateY: [0, 15, 0, -15, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-full h-full bg-red-500 rounded-full opacity-75" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-16 border-4 border-red-500 rounded-full opacity-50 transform -rotate-12" />
      </motion.div>
    </>
  );
}
