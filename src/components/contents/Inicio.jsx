import Linkedin from '../../img/linkedin.svg';
import Github from '../../img/github.svg';
import { useEffect, useState } from 'react';

import api from "../../services/api";

export default function Inicio() {

  const [user, setUser] = useState({});

  useEffect(() => {
    api
      .get("/users/iurisant")
      .then((response) => setUser(response.data)
      )
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <section className='flex justify-center relative z-10 '>
      <div className='flex flex-col pb-8 pt-0 justify-center items-center lg:flex lg:flex-row lg:py-44'>
        <img
          className="lg:mr-5 mb-5 lg:mb-0 bg-invisible rounded-full w-60"
          src={user.avatar_url}
          alt="Avatar"
          width={600}
          height={600}
          quality={100}
        />
        <div className='text-white w-auto flex flex-col px-10 justify-center items-center lg:block lg:px-0 lg:w-530'>
          <p className='text-sky-800 text-base font-monospace lg:ml-1 lg:text-2xl'>
            Hi, my name is
          </p>
          <h1 className='text-4xl font-roboto font-bold lg:text-8xl'>
            Iuri Santana
          </h1>
          <p className='text-base font-roboto lg:ml-1 lg:text-3xl text-center lg:text-left'>
            Welcome to my portfolio website.
          </p>
          <div className='pt-6 lg:flex'>
            <a href='https://www.linkedin.com/in/iurisant/' target='blank' className='flex justify-center items-center bg-sky-800 hover:bg-sky-950 lg:mx-2 py-2 px-16 lg:px-10 font-bold rounded-full mb-2 lg:mb-0 lg:mr-10'>
              <img
                className="mr-2"
                src={Linkedin}
                alt="Linkedin"
                width={28}
              />
              Linkedin
            </a>
            <a href='https://github.com/iurisant' target='blank' className='flex justify-center items-center bg-sky-800 hover:bg-sky-950 lg:mx-2 py-2 px-16 lg:px-10 font-bold rounded-full'>
              <img
                className="mr-2"
                src={Github}
                alt="Github"
                width={28}
              />
              Github
            </a>
          </div>
        </div>
      </div>
    </section >
  )
}