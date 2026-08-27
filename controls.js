import { OrbitControls } from "jsm/controls/OrbitControls.js";

export function createControls(camera, domElement) {
  const controls = new OrbitControls(camera, domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.03;
  controls.enablePan = false;

  controls.minDistance = 2;  
  controls.maxDistance = 3.5;   

  return controls;
}