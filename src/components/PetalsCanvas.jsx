import React, { useEffect, useRef } from 'react';

export default function PetalsCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Generate Petals & Gold Sparkles - Soft white/gold palette
    const numPetals = 25;
    const numSparkles = 35;
    const petals = [];
    const sparkles = [];

    for (let i = 0; i < numPetals; i++) {
      const colorRandom = Math.random();
      let color;
      if (colorRandom > 0.6) {
        color = 'rgba(201, 168, 76, 0.3)'; // soft gold
      } else if (colorRandom > 0.3) {
        color = 'rgba(243, 229, 176, 0.4)'; // light gold
      } else {
        color = 'rgba(255, 228, 196, 0.35)'; // peach/blush
      }

      petals.push({
        x: Math.random() * width,
        y: Math.random() * height - height,
        size: Math.random() * 10 + 8,
        speedY: Math.random() * 1.2 + 0.6,
        speedX: Math.random() * 0.8 - 0.4,
        rotation: Math.random() * 360,
        spin: Math.random() * 2 - 1,
        color: color,
      });
    }

    for (let i = 0; i < numSparkles; i++) {
      sparkles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1,
        alpha: Math.random(),
        speedAlpha: (Math.random() * 0.02 + 0.01) * (Math.random() > 0.5 ? 1 : -1)
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render Sparkles - warm gold tones
      sparkles.forEach((s) => {
        s.alpha += s.speedAlpha;
        if (s.alpha >= 1 || s.alpha <= 0.1) s.speedAlpha = -s.speedAlpha;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 168, 76, ${Math.max(0, s.alpha * 0.5)})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(201, 168, 76, 0.5)';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Render Petals
      petals.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(p.y * 0.01) * 0.5;
        p.rotation += p.spin;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.beginPath();
        // Draw petal path
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-p.size / 2, -p.size / 2, -p.size, p.size / 3, 0, p.size);
        ctx.bezierCurveTo(p.size, p.size / 3, p.size / 2, -p.size / 2, 0, 0);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 5;
        ctx.shadowColor = 'rgba(201, 168, 76, 0.15)';
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  );
}
