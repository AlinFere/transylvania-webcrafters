import React from "react"
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { services } from "../constants"
import { SectionWrapper } from "../hoc"
import { fadeIn, textVariant } from "../utils/motion"

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full"
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
    >
      <motion.div
        variants={fadeIn("right", "spring", 0, 5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col ">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3x1 leading-[30px]"
      >
        Greetings! I'm a skilled software developer proficient in JavaScript,
        React and Three.js. My journey in the digital realm is defined by a
        passion for creating innovative solutions that transcend expectations.
        With a proven track record, I am not only a quick learner but also
        thrive on collaboration. Partnering closely with clients, I specialize
        in crafting efficient, scalable, and user-friendly solutions that
        address real-world challenges. My commitment is to transform your ideas
        into tangible, high-performing digital experiences. Ready to turn
        visions into reality? Let's work together and make it happen!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
