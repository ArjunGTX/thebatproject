"use client";

import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { BatCaveLoader } from "./BatCaveLoader";

const getCanvasDimensions = () => {
  const canvasWidth = Math.min(window.innerWidth, 900);
  const canvasHeight = canvasWidth / 1.8;
  return { canvasWidth, canvasHeight };
};

export const BatCave = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { canvasHeight, canvasWidth } = getCanvasDimensions();

  const [isLoaded, setIsLoaded] = React.useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const { canvasHeight, canvasWidth } = getCanvasDimensions();
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      40,
      canvasWidth / canvasHeight,
      0.1,
      100,
    );
    camera.position.set(0, 0, 8);
    scene.add(camera);

    const light1 = new THREE.AmbientLight(0xaaaaaa, 0.1);
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0xaaaaaa, 0.5);
    light2.position.set(0, 100, -100);
    scene.add(light2);

    const light3 = new THREE.DirectionalLight(0xaaaaaa, 0.5);
    light3.position.set(0, 0, 50);
    scene.add(light3);

    const light4 = new THREE.PointLight(0xffee88, 2);
    light4.position.set(-1, -1, 3);
    scene.add(light4);

    const light5 = new THREE.PointLight(0xffee88, 3);
    light5.position.set(3, 1, -1);
    scene.add(light5);

    const loader = new GLTFLoader();

    loader.load("/models/batcave/scene.gltf", (glb) => {
      const model = glb.scene;
      model.scale.set(0.8, 0.8, 0.8);
      scene.add(model);
      setIsLoaded(true);
    });

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      logarithmicDepthBuffer: true,
    });

    const orbitControls = new OrbitControls(camera, renderer.domElement);
    orbitControls.enableDamping = true;
    orbitControls.enablePan = false;

    renderer.setSize(canvasWidth, canvasHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;

    const animate = () => {
      renderer.render(scene, camera);
      orbitControls.update();
    };
    renderer.setAnimationLoop(() => animate());

    const onWindowResize = () => {
      const { canvasHeight, canvasWidth } = getCanvasDimensions();
      camera.aspect = canvasWidth / canvasHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvasWidth, canvasHeight);
    };

    window.addEventListener("resize", onWindowResize);

    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return (
    <div className="w-full h-full relative bg-secondary">
      <canvas
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
      ></canvas>
      {!isLoaded && (
        <BatCaveLoader className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 animate-pulse" />
      )}
    </div>
  );
};
