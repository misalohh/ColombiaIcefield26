import * as THREE from "three";

export function createStars(count = 20000, minRadius = 3.5, spread = 50) {
  const starGeo = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    let x, y, z;
    do {
      x = (Math.random() - 0.5) * spread;
      y = (Math.random() - 0.5) * spread;
      z = (Math.random() - 0.5) * spread;
    } while (x * x + y * y + z * z < minRadius * minRadius);

    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
  }

  starGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.05 });
  return new THREE.Points(starGeo, starMat);
}