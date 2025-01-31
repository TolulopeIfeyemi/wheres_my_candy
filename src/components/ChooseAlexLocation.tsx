// import inWeedsImg from '../assets/in_weeds.jpg';
// import behindBuildingImg from '../assets/behind_building.svg';
import candy_island from '../assets/candy_island.jpeg';
import halloween_candy from '../assets/halloween_candy.png';
import { Answer } from '@state/RecordTypes/wheres_alex_vxxx';

type HideAlexProps = {
  setAnswer: (answer: Answer) => void;
  answer?: Answer;
  hiding: boolean; // are we hiding alex? or finding alex?
};

function ChooseAlexLocation({ setAnswer, answer, hiding }: HideAlexProps) {
  return (
    <section className='mt-4 flex max-w-full flex-col gap-4'>
      <div className='flex gap-5'>
        <AlexButton
          imgSrc={candy_island}
          text='In Candy Island'
          onClick={() => setAnswer(Answer.InTheWeeds)}
          selected={answer ? answer === Answer.InTheWeeds : undefined}
        />
        <AlexButton
          imgSrc={halloween_candy}
          text='In The Halloween Candy'
          onClick={() => setAnswer(Answer.BehindTheBuilding)}
          selected={answer ? answer === Answer.BehindTheBuilding : undefined}
        />
      </div>
      <p className='self-center whitespace-nowrap text-center text-sm font-extrabold tracking-tight text-primary-green'>
        {((): string => {
          if (answer === undefined && hiding) {
            return 'Choose where to hide the Candy';
          } else if (hiding) {
            return `You choose ${answer} as the where the candy is `;
          } else {
            return `You think ${answer} is where the candy is`;
          }
        })()}
      </p>
    </section>
  );
}

type AlexButtonProps = {
  imgSrc: string;
  text: string ;
  selected?: boolean;
  onClick: () => void;
};

const AlexButton = ({ imgSrc, text, selected, onClick }: AlexButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`group flex flex-col self-center rounded-lg outline-primary-green hover:outline ${
        selected ? 'outline' : ''
      } flex w-[150px] flex-col items-center gap-2 p-4 hover:opacity-100`}
    >
      <img
        loading='lazy'
        src={imgSrc}
        className={`aspect-square h-[100px] w-[100px] overflow-hidden rounded-[50%] object-cover object-center ${
          selected || selected === undefined ? '' : 'opacity-40'
        }`}
        alt={text}
      />
      <div
        className={`mt-2.5 whitespace-nowrap text-center text-sm font-extrabold ${
          selected
            ? 'text-primary-green'
            : selected === false
            ? 'text-primary-white opacity-40 group-hover:text-primary-green'
            : 'text-primary-white'
        }`}
      >
        {text}
      </div>
    </button>
  );
};

export default ChooseAlexLocation;
