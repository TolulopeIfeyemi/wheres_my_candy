/* eslint-disable @typescript-eslint/no-explicit-any */
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { PuzzleWalletProvider } from '@puzzlehq/sdk';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div className='h-screen w-screen'>
    <PuzzleWalletProvider
      dAppName="Where's My Candy?"
      dAppDescription='A friendly wager between friends Inspired by Zkpuzzle'
      dAppUrl='https://wheresalex.puzzle.online'
      dAppIconURL='https://wheresalex.puzzle.online/candy4.jpeg'
    >
      <App />
    </PuzzleWalletProvider>
  </div>
);
