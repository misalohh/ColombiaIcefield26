import * as THREE from "three";

export function createHemiLight() {
  return new THREE.HemisphereLight(0xffffff, 0xffffff);
}