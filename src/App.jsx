import { Canvas } from '@react-three/fiber';
import { Experience } from './components/Experience';
import { KeyboardControls, Loader } from '@react-three/drei';
import { useConvaiClient } from './hooks/useConvaiClient';
import ChatBubble from './components/chat/Chat';

function App() {
// Replace 'YOUR_CONVAI_API_KEY' and 'YOUR_CHARACTER_ID' with your Convai API key and character ID
const convaiApiKey = '0aaee3a6c74ae4bfd30bc12088e7e5ec';
const characterId = '8181e9be-d259-11ef-a7e2-42010a7be016';


  const { client } = useConvaiClient(characterId, convaiApiKey);
  return (
    <>
      <KeyboardControls
        map={[
          { name: 'forward', keys: ['ArrowUp', 'w', 'W'] },
          { name: 'backward', keys: ['ArrowDown', 's', 'S'] },
          { name: 'left', keys: ['ArrowLeft', 'a', 'A'] },
          { name: 'right', keys: ['ArrowRight', 'd', 'D'] },
          { name: 'sprint', keys: ['Shift'] },
          { name: 'jump', keys: ['Space'] },
        ]}
      >
        <Loader />
        {/* <Leva /> */}
        <Canvas
          shadows
          camera={{
            position: [0, 0.8, 4],
            fov: 50,
          }}
        >
          <Experience client={client} />
        </Canvas>
      </KeyboardControls>
      {/* {
      client && */}
      <ChatBubble client={client} />
      {/* } */}
    </>
  );
}

export default App;
