import React from "react"
import Image from "next/image"

const skills = [
  { skill: "Python" },
  { skill: "Pandas" },
  { skill: "Machine Learning" },
  { skill: "Numpy" },
  { skill: "Azure" },
  { skill: "Matplotlib" },
  { skill: "Seaborn" },
  { skill: "Statistics" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Jupyter Notebooks" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Bruno and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer
              based in Salvador, BA.
            </p>
            <br />
            <p>

              I am currently studying software at Universidade Católica do Salvador
              (UCSal) and I also work as an intern data scientist at Lactec.
            </p>
            <br />
            <p>
              I am passionate about data and I try to always be on top of everything that
              happens in this vast universe. AI, Deep Learning,
              Machine Learning and data visualization are my biggest interests
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/hero-image.png"
              alt=""
              width={200}
              height={200}
              // <a href="https://www.vecteezy.com/free-png/statistics">Statistics PNGs by Vecteezy</a>


              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0 md:top-0 md:w-1/2 mt-4"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
