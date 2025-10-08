import React, { useState } from 'react'
import {Canvas} from '@react-three/fiber'
import { Suspense } from 'react'
import Loader from '../components/Loader'
import Island from '../models/island'
import Sky from '../models/Sky'
import { Plane } from '../models/plane'
import HomeInfo from '../components/HomeInfo'

const home = () => {

  const [isRotating, setIsRotating] = useState(false);

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];
  };

  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    // If screen width is less than 768px, adjust the scale and position
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const [currentStage, setCurrentStage] = useState(1);
  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();



  return (
    <section className= 'w-full h-screen relative '> 
   
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
         {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas 
        className={' w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing": "cursor-grab"}'}
        camera={{ near: 0.1, far: 1000 }}
        >
        {/* All 3d stuff goes here */}

        <Suspense fallback = {<Loader/>}>
        {/* for loading screen add lighst here, add model?  */}
          <directionalLight position = {[1,1,1]} intensity={2}/>
          <ambientLight intensity  = {0.5} />
          <hemisphereLight skyColor = "#b1e1ff" groundColor="000000" intensity={1}/>

          <Sky/>
        
          <Island
      
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          />

          <Plane
            isRotating={isRotating}
            position={biplanePosition}
            rotation={[0, 20.1, 0]}
            scale={biplaneScale}
          />
        </Suspense>

      </Canvas>

    </section>
  )
}

export default home