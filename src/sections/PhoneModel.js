import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import { Environment, OrbitControls } from "@react-three/drei";
import { Model } from "../assets/3D-Model/Scene";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 1;
  background-color: transparent;
`;

const PhoneModel = () => {
  return (
    <>
      <Container id="phone-model">
        <Canvas camera={{ fov: 15 }}>
          <ambientLight intensity={1.25} />
          <directionalLight intensity={0.4} />
          <Suspense fallback={null}>
            <Model />
          </Suspense>
          <Environment preset="night" />
          <OrbitControls />
        </Canvas>
      </Container>
    </>
  );
};

export default PhoneModel;
