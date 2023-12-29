import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';


//Generate random points
function randomSpherePoint(x0=0,y0=0,z0=0,radius=1.5): number{
  const u = Math.random();
  const v = Math.random();
  const theta = 2 * Math.PI * u;
  const phi = Math.acos(2 * v - 1);
  const x = x0 + (radius * Math.sin(phi) * Math.cos(theta));
  const y = y0 + (radius * Math.sin(phi) * Math.sin(theta));
  const z = z0 + (radius * Math.cos(phi));

  const array = [x, y, z];
  return array[~~(Math.random() * 3)];
}

const spherePoints = (radius: number, points: number): Float32Array => {
  const array: Float32Array = new Float32Array(points);
  return array.map(val  => val + randomSpherePoint(radius));
}

function Stars() {
  const ref = useRef<THREE.Points>(null);
  const sphere = spherePoints(2, 5001);

  useFrame((_, delta) => {
    ref.current!.rotation.x -= delta / 10;
    ref.current!.rotation.y -= delta / 15;
  })
  
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points 
        ref={ref} 
        positions={sphere} 
        stride={3}
        frustumCulled
      >
        <PointMaterial 
          transparent
          color="#fff"
          size={.006}
          sizeAttentuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

export default function StarsCanvas() {
  return (
    <div className="stars-canvas">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  )
}
