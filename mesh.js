import * as THREE from "three";

export function createIcosahedron() {
  const geo = new THREE.IcosahedronGeometry(1.0, 2);

  const mat = new THREE.MeshStandardMaterial({
    color: 0xffffff,      
    flatShading: true,
  });
  const mesh = new THREE.Mesh(geo, mat);

  const attachedWire = new THREE.MeshBasicMaterial({
    color: 0x7e7e8c,
    wireframe: true,
  })
  const attachedMesh = new THREE.Mesh(geo, attachedWire);
  attachedMesh.scale.setScalar(1.001);
  mesh.add(attachedMesh);

  const wireMat = new THREE.MeshBasicMaterial({
    color: 0xe1e5fa,
    wireframe: true,
  });
  const wireMesh = new THREE.Mesh(geo, wireMat);
  wireMesh.scale.setScalar(1.001);

  return { mesh, wireMesh };
}