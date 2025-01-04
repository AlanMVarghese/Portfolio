import profile from "../assets/Profile.png";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, staggerChildren: 0.5 },
  },
};
const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};
const Hero = () => {
  return (
    <div className=" pb-4 lg:mb-36 lg:px-20">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center mt-[-70px] lg:p-8 lg:mt-[-90px]">
            <motion.img
              src={profile}
              alt="Alan Mathew Varghese"
              className="border border-stone-900 rounded-3xl"
              width={650}
              height={650}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-5"
          >
            <motion.h2
              variants={childVariants}
              className="pb-2 text-3xl tracking-tighter lg:text-8xl lg:mt-10 "
            >
              <span className="block lg:hidden">Alan Mathew Varghese</span>
              <span className="hidden lg:block">Alan Mathew</span>
            </motion.h2>
            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-2xl lg:text-5xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={childVariants}
              className="mt-[-5px] lg:mt-3 text-sm my-2 max-w-lg py-6 lg:text-xl text-justify  leading-relaxed tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              variants={childVariants}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="mt-[-10px] lg:mt-0 p-3 bg-white rounded-full lg:p-4 text-sm text-stone-800 mb-10"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
