import * as THREE from "three";
import { createIcosahedron } from "./mesh.js";
import { createHemiLight } from "./lights.js";
import { createStars } from "./stars.js";
import { createControls } from "./controls.js";

const width = window.innerWidth;
const height = window.innerHeight;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

const fov = 75;
const aspect = width / height;
const near = 0.1;
const far = 10;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x141424);
scene.fog = new THREE.Fog(0x141424, 1, 10);

const controls = createControls(camera, renderer.domElement);

scene.add(createIcosahedron());
scene.add(createHemiLight());
scene.add(createStars());

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();