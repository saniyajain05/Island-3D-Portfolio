import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>Saniya</span>
        👋
        <br />
        A 3D Animator and Software Developer!
      </h1>
    );

  if (currentStage === 2) {
    return (
      
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center neo-brutalism-blue py-4 px-8'>
          Always been Passionate about both <br/> So Best of both Worlds!
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Which Sodtwares do I use and my Resume
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl neo-brutalism-blue py-4 px-8'>
          Look at the Projects I've Done!
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Projects
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center neo-brutalism-blue py-4 px-8'>
        Look at the my Portfolio!
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Portfolio
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;
