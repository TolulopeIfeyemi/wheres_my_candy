import { connect, useAccount } from '@puzzlehq/sdk';
import rightImageSrc from '../assets/alex_mic_left_tilt.png';
import leftImageSrc from '../assets/alex_mic_right_tilt.png';
import bottomImageSrc from '../assets/alexbottom.png';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Button from '../components/Button';

export const Welcome = () => {
  const navigate = useNavigate();
  const { account } = useAccount();

  useEffect(() => {
    if (account) {
      navigate('/');
    }
  }, [account, navigate]);
  console.log('what the fudge');
  return (
    <div className='flex h-screen w-full items-stretch justify-between'>
      <div className='relative flex h-full w-full flex-col items-center justify-center'>
        <img
          src={rightImageSrc}
          alt='Right top decoration'
          className='absolute right-0 top-0 z-0 h-full max-h-[18rem] max-w-[50%] object-contain'
        />
        <img
          src={leftImageSrc}
          alt='Left decoration'
          className='absolute left-0 top-1/4 z-0 h-full max-h-[20rem] w-3/5 max-w-[80%] -translate-x-1/4 -translate-y-20 transform object-contain'
        />
        <p className='z-10 text-24xl max-w-full overflow-visible whitespace-nowrap text-center font-extrabold leading-[40.56px] tracking-tight text-primary-white'>
          WHERE'S<br />ALEX?{' '}
        </p>
        <p className='z-10 mt-8 max-w-[400px] text-center text-base font-bold tracking-tight text-primary-white'>
          A thrilling game showcasing the power of Aleo and the Puzzle
          multiparty privacy stack through a wager between friends!
        </p>
        <Button
          onClick={connect}
          color='yellow'
        >
          Play!
        </Button>
        <img
          src={bottomImageSrc}
          alt='bottom decoration'
          className='center -translate-y-100 absolute bottom-0 z-0 h-full max-h-[12rem] w-3/5 max-w-[35%] transform object-contain'
        />
      </div>
    </div>
  );
};
