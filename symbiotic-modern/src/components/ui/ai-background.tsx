"use client";

import { useEffect, useRef } from "react";

type Particle = { x: number; y: number; vx: number; vy: number; radius: number; color: string; baseX: number; baseY: number };
type DigitalRain = { x: number; y: number; vx: number; vy: number; life: number; maxLife: number; text: string; color: string };

export function AIBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let rain: DigitalRain[] = [];
    const colors = ["#47B549", "#26A8E0", "#00A899"];

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      
      // Occasionally spawn digital rain on move
      if (Math.random() > 0.5) {
        spawnDigitalRain(mouseX, mouseY);
      }
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const numParticles = Math.floor((canvas.width * canvas.height) / 12000);
      for (let i = 0; i < numParticles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    const spawnDigitalRain = (x: number, y: number) => {
      for (let i = 0; i < 3; i++) {
        rain.push({
          x: x + (Math.random() - 0.5) * 40,
          y: y + (Math.random() - 0.5) * 40,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2 - 1,
          life: 0,
          maxLife: Math.random() * 50 + 30,
          text: Math.random() > 0.5 ? "1" : "0",
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    let animationFrameId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw and update standard nodes
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Base movement
        p.baseX += p.vx;
        p.baseY += p.vy;
        
        if (p.baseX < 0 || p.baseX > canvas.width) p.vx *= -1;
        if (p.baseY < 0 || p.baseY > canvas.height) p.vy *= -1;

        // Mouse Repel Logic
        let dx = mouseX - p.baseX;
        let dy = mouseY - p.baseY;
        let dist = Math.sqrt(dx * dx + dy * dy);
        
        const repelRadius = 150;
        if (dist < repelRadius) {
          const force = (repelRadius - dist) / repelRadius;
          p.x = p.baseX - (dx / dist) * force * 50;
          p.y = p.baseY - (dy / dist) * force * 50;
        } else {
          // Smooth return to base
          p.x += (p.baseX - p.x) * 0.1;
          p.y += (p.baseY - p.y) * 0.1;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distNodes = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);

          if (distNodes < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(38, 168, 224, ${0.4 * (1 - distNodes / 120)})`; // scg-blue
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw Digital Rain (Hover Effect)
      ctx.font = "bold 18px monospace";
      for (let i = rain.length - 1; i >= 0; i--) {
        const r = rain[i];
        r.x += r.vx;
        r.y += r.vy;
        r.life++;
        
        if (r.life >= r.maxLife) {
          rain.splice(i, 1);
          continue;
        }

        const opacity = 1 - (r.life / r.maxLife);
        ctx.fillStyle = r.color;
        ctx.globalAlpha = Math.min(1, opacity * 1.5);
        ctx.shadowColor = r.color;
        ctx.shadowBlur = 12;
        ctx.fillText(r.text, r.x, r.y);
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1.0;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 h-full w-full opacity-70"
      aria-hidden="true"
    />
  );
}
