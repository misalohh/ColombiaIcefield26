import * as THREE from "three";

export function createHemiLight() {
  return new THREE.HemisphereLight(0x40afff, 0x0c0647);
}