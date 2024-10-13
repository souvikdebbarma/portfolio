import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three-stdlib';
import { gsap } from 'gsap';

const ParticleHead = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let camera, scene, renderer, p;
    let mouseX = 0, mouseY = 0;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;

    // Save containerRef to a local variable
    const currentContainer = containerRef.current;

    const init = () => {
      // Camera
      camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 2000);
      camera.position.z = 300;

      // Scene
      scene = new THREE.Scene();

      // Particle Geometry using BufferGeometry
      const p_geom = new THREE.BufferGeometry();
      const positions = [];

      const p_material = new THREE.PointsMaterial({
        color: 0xFFFFFF,
        size: 1.9,
      });

      // Loader for the OBJ model
      const loader = new OBJLoader();
      loader.load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/40480/head.obj', (object) => {
        object.traverse(function (child) {
          if (child instanceof THREE.Mesh) {
            const scale = 8;
            const vertices = child.geometry.attributes.position.array;
            for (let i = 0; i < vertices.length; i += 3) {
              positions.push(vertices[i] * scale, vertices[i + 1] * scale, vertices[i + 2] * scale);
            }
          }
        });

        // Set the positions as a buffer attribute to the geometry
        p_geom.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

        // Create Particle System
        p = new THREE.Points(p_geom, p_material);
        scene.add(p);
      });

      // Renderer
      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0); // transparent background

      // Append renderer to the container
      if (currentContainer) {
        currentContainer.appendChild(renderer.domElement);
      }

      // Event listeners
      document.addEventListener('mousemove', onDocumentMouseMove, false);
      window.addEventListener('resize', onWindowResize, false);
    };

    const onWindowResize = () => {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const onDocumentMouseMove = (event) => {
      mouseX = (event.clientX - windowHalfX) / 2;
      mouseY = (event.clientY - windowHalfY) / 2;
    };

    const animate = () => {
      gsap.ticker.add(render);
    };

    const render = () => {
      camera.position.x += ((mouseX * 0.5) - camera.position.x) * 0.05;
      camera.position.y += (-(mouseY * 0.5) - camera.position.y) * 0.05;

      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    };

    init();
    animate();

    // Cleanup function
    return () => {
      document.removeEventListener('mousemove', onDocumentMouseMove);
      window.removeEventListener('resize', onWindowResize);

      // Clean up the renderer DOM element
      if (currentContainer) {
        currentContainer.removeChild(renderer.domElement);
      }
    };
  }, []); // Empty dependency array ensures this runs only on mount and unmount

  return <div ref={containerRef} style={{ width: '100vw', height: '100vh' }} />;
};

export default ParticleHead;
