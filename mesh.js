import * as THREE from "three";

export function createIcosahedron() {
  const geo = new THREE.IcosahedronGeometry(1.0, 2);

  const mat = new THREE.MeshPhysicalMaterial({
    color: 0xe0f7fa,
    transmission: 0.95, 
    opacity: 1,
    transparent: true,
    roughness: 0.1,   
    thickness: 1.5,  
    envMapIntensity: 1.5,  
    ior: 1.305         
  });
  const mesh = new THREE.Mesh(geo, mat);

  const wireMat = new THREE.MeshBasicMaterial({
    color: 0xe1e5fa,
    wireframe: true,
  });
  const wireMesh = new THREE.Mesh(geo, wireMat);
  wireMesh.scale.setScalar(1.001);

  return { mesh, wireMesh };
}