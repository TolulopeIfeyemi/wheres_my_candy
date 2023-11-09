type NavProps = {
  step: number;
};

function Nav({ step }: NavProps) {

  return (
    <nav className='mt-11 flex w-full items-start justify-between gap-5 self-stretch max-md:mr-px max-md:mt-10 max-md:justify-center'>
      <a
        href='#'
        className={`self-stretch text-center text-xs font-extrabold tracking-tight text-primary-white ${
          step === 1 ? 'underline' : ''
        }`}
      >
        1. CHALLENGE
      </a>
      <div className='self-stretch text-center text-xs font-extrabold tracking-tight text-primary-white'>
        <a
          href='#'
          className={`self-stretch text-center text-xs font-extrabold tracking-tight ${
            step >= 2 ? 'text-primary-white' : 'text-primary-gray'
          } ${step === 2 ? 'underline' : ''}`}
        >
          2. HIDE ALEX
        </a>
      </div>
      <div className='self-stretch whitespace-nowrap text-center text-xs font-extrabold tracking-tight text-primary-white text-opacity-40'>
        <a
          href='#'
          className={`self-stretch text-center text-xs font-extrabold tracking-tight  ${
            step >= 3 ? 'text-primary-white' : 'text-primary-gray'
          } ${step === 3 ? 'underline' : ''}`}
        >
          3.WAGER
        </a>
      </div>
    </nav>
  );
}

export default Nav;