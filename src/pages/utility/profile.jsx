import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/Icon";
import Card from "@/components/ui/Card";
import BasicArea from "../chart/appex-chart/BasicArea";

// import images
import ProfileImage from "@/assets/images/users/user-1.jpg";

const profile = () => {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState("Albert Flores");
  const [ocupation, setOcupation] = useState("Front End Developer");
  const [projectsOwned, setProjectsOwned] = useState("2");
  const [collaborations, setCollaborations] = useState("200");
  const [availability, setAvailability] = useState("Weekdays after 6pm");
  const [email, setEmail] = useState("info-500@dashcode.com");
  const [skills, setSkills] = useState(["Python", "FastAPI"]);
  const [interests, setInterests] = useState([ "API Development", "Machine Learning"]);

  const nameAndOcupation = edit ? 
  (
    <>
      <div className="flex flex-col gap-1">
        <div className="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
          EDITING!
        </div>
        <input className="text-2xl font-medium text-slate-900 dark:text-slate-200 max-w-[150px]" value={name} onChange={ev=>setName(ev.target.value)}/>
        <input className="text-sm font-light text-slate-600 dark:text-slate-400 max-w-[150px]" value={ocupation} onChange={ev=>setOcupation(ev.target.value)}/>
      </div>
    </>
  ) 
  :
  (
    <div className="flex-1">
      <div className="text-2xl font-medium text-slate-900 dark:text-slate-200 mb-[3px]">
        {name}
      </div>
      <div className="text-sm font-light text-slate-600 dark:text-slate-400">
        {ocupation}
      </div>
    </div>
  )


  return (
    <div>
      <div className="space-y-5 profile-page">
        <div className="profiel-wrap px-[35px] pb-10 md:pt-[84px] pt-10 rounded-lg bg-white dark:bg-slate-800 lg:flex lg:space-y-0 space-y-6 justify-between items-end relative z-[1]">
          <div className="bg-slate-900 dark:bg-slate-700 absolute left-0 top-0 md:h-1/2 h-[150px] w-full z-[-1] rounded-t-lg"></div>
          <div className="profile-box flex-none md:text-start text-center">
            <div className="md:flex items-end md:space-x-6 rtl:space-x-reverse">
              <div className="flex-none">
                <div className="md:h-[186px] md:w-[186px] h-[140px] w-[140px] md:ml-0 md:mr-0 ml-auto mr-auto md:mb-0 mb-4 rounded-full ring-4 ring-slate-100 relative">
                  <img
                    src={ProfileImage}
                    alt=""
                    className="w-full h-full object-cover rounded-full"
                  />
                  <Link
                    to="#"
                    className="absolute right-2 h-8 w-8 bg-slate-50 text-slate-600 rounded-full shadow-sm flex flex-col items-center justify-center md:top-[140px] top-[100px]"
                    onClick={()=>setEdit(prev=>!prev)}
                  >
                    <Icon icon={edit? "mingcute:save-line":"heroicons:pencil-square"} />
                  </Link>
                </div>
              </div>
              {nameAndOcupation}
            </div>
          </div>

          <div className="profile-info-500 md:flex md:text-start text-center flex-1 max-w-[516px] md:space-y-0 space-y-4">
            <div className="flex-1">
              <div className="text-base text-slate-900 dark:text-slate-300 font-medium mb-1">
                {projectsOwned}
              </div>
              <div className="text-sm text-slate-600 font-light dark:text-slate-300">
                Projects owned
              </div>
            </div>

            <div className="flex-1">
              <div className="text-base text-slate-900 dark:text-slate-300 font-medium mb-1">
                {collaborations}
              </div>
              <div className="text-sm text-slate-600 font-light dark:text-slate-300">
                Collaborations
              </div>
            </div>

            <div className="flex-1">
              <div className="text-base text-slate-900 dark:text-slate-300 font-medium mb-1">
                {availability}
              </div>
              <div className="text-sm text-slate-600 font-light dark:text-slate-300">
                Availability
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="lg:col-span-4 col-span-12">
            <Card title="Info">
              <ul className="list space-y-8">
                <li className="flex space-x-3 rtl:space-x-reverse">
                  <div className="flex-none text-2xl text-slate-600 dark:text-slate-300">
                    <Icon icon="heroicons:envelope" />
                  </div>
                  <div className="flex-1">
                    <div className="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
                      EMAIL
                    </div>
                    <a
                      href="mailto:someone@example.com"
                      className="text-base text-slate-600 dark:text-slate-50"
                    >
                      {email}
                    </a>
                  </div>
                </li>

                <li className="flex space-x-3 rtl:space-x-reverse">
                  <div className="flex-none text-2xl text-slate-600 dark:text-slate-300">
                    <Icon icon="heroicons:phone-arrow-up-right" />
                  </div>
                  <div className="flex-1">
                    <div className="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
                      SKILLS
                    </div>
                    <a
                      href="tel:0189749676767"
                      className="text-base text-slate-600 dark:text-slate-50"
                    >
                      {skills.join(", ")}
                    </a>
                  </div>
                </li>

                <li className="flex space-x-3 rtl:space-x-reverse">
                  <div className="flex-none text-2xl text-slate-600 dark:text-slate-300">
                    <Icon icon="heroicons:map" />
                  </div>
                  <div className="flex-1">
                    <div className="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
                      INTERESTS
                    </div>
                    <div className="text-base text-slate-600 dark:text-slate-50">
                      {interests.join(", ")}
                    </div>
                  </div>
                </li>
              </ul>
            </Card>
          </div>
          <div className="lg:col-span-8 col-span-12">
            <Card title="User Overview">
              <BasicArea height={190} />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default profile;
