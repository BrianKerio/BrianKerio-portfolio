import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="I Love Kenya Tour and Travel."
          des=" Offers a secure place for booking magnificent adventures across 
          the country."
          src={projectOne}
        />
        <ProjectsCard
          title="Hope E.N.T Android Application."
          des=" Serving Customer who buy Ear, Nose and Throat Equipments
          Also aids in booking of services and Appointments to specialist."
          src={projectTwo}
        />
        <ProjectsCard
          title="Kitchen Enterprise Android App."
          des=" Offers aids in buying and selling of kitchen equipments make sucure
          a payment also helps on booking of various services e.g Installation."
          src={projectThree}
        />
        
        
      </div>
    </section>
  );
}

export default Projects