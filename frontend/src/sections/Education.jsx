import React from "react";

const educationData = [
  {
    level: "B.Tech in Computer Science and Engineering",
    institution: "Sree Datha Institute of Engineering and Science",
    duration: "2023 – Present (Currently in 3rd Year)",
  },
  {
    level: "Intermediate (MPC)",
    institution: "Sri Chaitanya Junior College",
    duration: "2021 – 2023",
  },
  {
    level: "SSC",
    institution: "Newgen High School",
    duration: "2015 – 2021",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 px-6 lg:px-24 bg-[#0a192f] text-white"
    >
      <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
      <div className="space-y-8">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-[#112240] p-6 rounded-2xl shadow-lg hover:shadow-[0_0_25px_#64ffda] transition duration-300"
          >
            <h3 className="text-xl font-semibold text-accent mb-1">
              {edu.level}
            </h3>
            <p className="text-gray-300">{edu.institution}</p>
            <p className="text-gray-400 text-sm">{edu.duration}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
