import sunshareteam from "../../assets/img/about/sunshare_team.JPG";
import project_lead from "../../assets/img/about/coreteam/project_lead.png";
import programmer from "../../assets/img/about/coreteam/programmer.png";
import proj_devt_offr from "../../assets/img/about/coreteam/proj_devt_offr.png";
import proj_devt from "../../assets/img/about/coreteam/proj_devt.png";
import project_engr from "../../assets/img/about/coreteam/project_engr.png";
import React, { useState, useRef, useEffect } from "react";

const team = [
  {
    name: "Dr. Thelma D. Palaoag",
    role: "Project Leader",
    phone: "+639456712357",
    email: "tdpalaoag@uc-bcf.edu.ph",
    img: project_lead,
  },
  {
    name: "Earl P. Siachongco",
    role: "Project Computer Programmer",
    phone: "+639754231562",
    email: "epsiachongco@uc-bcf.edu.ph",
    img: programmer,
  },
  {
    name: "Sophia Marie F. Arellano",
    role: "Project Development Officer",
    phone: "+639245470231",
    email: "sfarellano@uc-bcf.edu.ph",
    img: proj_devt,
  },
  {
    name: "Rodney A. Doyaoen",
    role: "Project Development Officer",
    phone: "+639433490231",
    email: "radoyaoen@uc-bcf.edu.ph",
    img: proj_devt_offr,
  },
  {
    name: "Michael James Deus",
    role: "Project Staff",
    phone: "+639798542345",
    email: "mjdeus@uc-bcf.edu.ph",
    img: project_engr,
  },
];

const CoreSection = () => {
  const [open, setOpen] = useState(false);
  const teamGridRef = useRef(null);

  useEffect(() => {
    if (open && teamGridRef.current) {
      setTimeout(() => {
        teamGridRef.current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }, 100);
    }
  }, [open]);

  const handleAccordionClick = () => {
    setOpen((o) => !o);
  };

  return (
    <div className="w-full flex flex-col dark:bg-[#243447] justify-items-center align-items-center">
      <div className="mt-[8vh]">
        <h4 className="font-Space-Grotesk font-black text-amber-500 text-center xl:text-[20px]">
          — Team —
        </h4>
        <div className="flex items-center justify-center gap-4 mb-8">
          <h1 className="font-Space-Grotesk font-black text-center xl:text-[30px]">
            The Sunshare Team
          </h1>
        </div>
        <div className="flex items-center justify-center gap-4 mb-8">
        <button
            className="flex items-center gap-2 px-6 py-4 bg-[#FEA803] text-white font-bold rounded-full shadow hover:bg-[#e69500] transition text-2xl"
            onClick={handleAccordionClick}
            aria-label="Show Sunshare Team"
          >
            <span className="text-2xl">i</span>
          </button>
        </div>
      </div>
      <div className="mx-auto relative w-full max-w-[100rem]">
        <img
          id="sunshare_team_img"
          src={sunshareteam}
          className="w-full h-auto shadow mb-8"
          alt="Sunshare Team"
        />
      </div>
      <div className="w-[100rem] mx-auto my-8">
        {open && (
          <div ref={teamGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {team.map((member) => (
              <div
                key={member.email}
                className="bg-white rounded-xl shadow p-3 flex flex-col items-center"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-[450px] h-[250px] object-cover mb-4 shadow rounded-xl"
                />
                <div className="font-bold text-3xl text-[#0D1F31] text-center">{member.name}</div>
                <div className="text-[#FEA803] font-semibold mb-2">{member.role}</div>
                <div className="text-gray-700 text-sm mb-1">{member.phone}</div>
                <div className="text-gray-700 text-sm">{member.email}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CoreSection;
