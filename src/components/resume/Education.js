import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2016 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Background.</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Computer Science."
            subTitle="Kenya methodist University (2021 - 2024)"
            result="3.3/4"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Android Development."
            subTitle="FreeCodeCamp (2024 - 2024)"
            result="74/100"
            des="Mobile app development for Android platform using Java ."
          />
          <ResumeCard
            title="Secondary level."
            subTitle="Goseta Boys' (2016 - 2019)"
            result="65/84"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job/Work Experience.</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Jr. Software Engineer"
            subTitle="Hackhatons - (2023 - Present)"
            result="Nairobi County"
            des="Junior developers in hackathons contribute fresh perspectives, learn from experienced teammates, solve challenges collaboratively, and gain valuable hands-on experience in real-world coding projects."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Computer Science Club - (2021 - 2023)"
            result="Meru County"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in the market isn't easy."
          />
          <ResumeCard
            title="Volunter Tutor"
            subTitle="SOS Children Home - (2022 - 2023)"
            result="Meru County"
            des="Teaching children at home involves creating a nurturing environment, fostering curiosity, providing structured lessons, and adapting to individual learning styles."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education