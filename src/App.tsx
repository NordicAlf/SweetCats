import { KeyboardControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Perf } from 'r3f-perf';
import React, {useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoaderScreen } from './components/UserInterface/Loader/LoaderScreen';
import { Menu } from './components/UserInterface/Menu/Menu';
import World from './components/World/World';
import { RoutesList } from './core/routes';
import './index.css';
import { KeyboardControl } from './utils/constants/KeyboardControl';
import GameInterface from "~/components/UserInterface/Game/GameInterface";
import MainMusicAudio from "~/components/Audio/MainMusicAudio";
import useAudioStore from "~/store/AudioStore";
import {isMobile} from "react-device-detect";

const App: React.FC = () => {
  const isDevMode = import.meta.env.DEV;
  const [isRunApp, runApp] = useState(false);
  const playMainMusic = useAudioStore((state) => (state.actions.playMainMusic));

  return (
    <>
      <KeyboardControls map={KeyboardControl}>
        <GameInterface />
        <div className={`fullscreen bg ${isRunApp ? 'ready' : 'notready'} ${isRunApp && 'clicked'}`}>
          <div className="stack">
            {!isMobile ? <a href="#" onClick={() => {
                runApp(true);
                playMainMusic(true)
              }}>
                {!isRunApp && 'click to continue'}
              </a>
              : <b>Mobile devices are not supported.</b>
            }
          </div>
        </div>
          <Canvas
            style={{ position: 'absolute', left: 0, top: 0 }}
            camera={{ position: [0, 1, 5] }}
            linear={true}
          >
            <BrowserRouter>
              <Routes>
                <Route path={RoutesList.menu} element={<Menu />} />
                <Route path={RoutesList.loading} element={<LoaderScreen />} />
                <Route path={RoutesList.game} element={<World />} />
              </Routes>
              <MainMusicAudio />
            </BrowserRouter>

            {isDevMode && (
              <>
                <Perf position={'top-left'} />
                {/*<gridHelper args={[100, 50, 50]} />*/}
              </>
            )}
          </Canvas>
        </KeyboardControls>
    </>
  );
};

export default App;
