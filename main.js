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
scene.background = new THREE.Color(0x526482);
scene.fog = new THREE.Fog(0x526482, 1, 13);

const controls = createControls(camera, renderer.domElement);

const { mesh, wireMesh } = createIcosahedron();
scene.add(mesh);
scene.add(wireMesh);
scene.add(createHemiLight());
scene.add(createStars());

const slider = document.getElementById("scaleSlider");
const yearCounter = document.getElementById("yearCounter");

const step = parseFloat(slider.step);      
const minVal = parseFloat(slider.min);
const maxVal = parseFloat(slider.max);
const startValue = parseFloat(slider.value); 
const startYear = 2026;

let targetScale = maxVal - startValue + minVal;
let currentScale = targetScale;

slider.addEventListener("input", () => {
    const value = parseFloat(slider.value); 
    targetScale = maxVal - value + minVal;
    const stepsMoved = Math.round((startValue - value) / step);
    yearCounter.textContent = startYear - stepsMoved;
});

function animate() {
  requestAnimationFrame(animate);
  controls.update();

  currentScale += (targetScale - currentScale) * 0.1;
  mesh.scale.setScalar(currentScale);

  renderer.render(scene, camera);
}
animate();