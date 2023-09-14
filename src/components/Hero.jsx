import { logo } from '../assets';


const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='h-9 object-contain' />

        <button type="button" onClick={() => window.open('https://github.com/shreyanshshukla021')}
        className='black_btn'>
        GitHub
        </button>
      </nav>

      <h1 className='head_text'>Summarize Articles with <br className='max-md:hidden'/>
      <span  className='orange_gradient'>OpenAI GPT4</span>
      </h1>
      <h2 className='desc'>Utilize Summize, an open-source article summarizer, to make reading easier by turning large articles into concise summaries.
</h2>
    </header>
  )
}

export default Hero