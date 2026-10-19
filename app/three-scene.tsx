"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0b0d10);

    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });

    const resize = () => {
      const { clientWidth: width, clientHeight: height } = container;
      if (!width || !height) return;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width, height, false);
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(container);
    renderer.setAnimationLoop(() => renderer.render(scene, camera));

    return () => {
      observer.disconnect();
      renderer.setAnimationLoop(null);
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="scene">
      <canvas
        ref={canvasRef}
        role="img"
        aria-label="Empty Three.js scene"
      />
    </div>
  );
}
