import Desktop from "../../img/desktop.png";

import { useEffect, useState } from 'react';
import api from "../../services/api";

export default function ModalProjetos() {
  const [repo, setRepo] = useState({});

  useEffect(() => {
    api
      .get("/users/iurisant/repos")
      .then((response) => setRepo(response.data)
      )
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <section>
      {Object.keys(repo).map((i) => (
        <>
          {(repo[i].has_pages && repo[i].visibility === "public" && repo[i].name !== "my-portfolio") &&
            <div key={i} className='block md:flex bg-zinc-100 p-8 my-8'>
              <div className='relative w-64'>
                <img
                  src={Desktop}
                  alt="Desktop"
                />
                <img
                  className='w-71.5 h-3/4 absolute top-0.53 left-2.28'
                  src={'https://raw.githubusercontent.com/iurisant/'.concat(repo[i].name, '/master/preview.png')}
                  alt={repo[i].name}
                />
              </div>
              <div className='my-8 md:my-0 flex flex-col items-center'>
                <h2><strong>{repo[i].name}</strong></h2>
                <span className='text-black/70'>Descrição em breve!</span>
                <div className='flex flex-col md:block mt-4 text-white items-center'>
                  <a href={repo[i].name === "lojagreenpet" ? ("https://lojagreenpet-2022.web.app/") : ("https://iurisant.github.io/".concat(repo[i].name))}
                    className='bg-sky-800 hover:bg-sky-950 mb-4 md:mb-0 md:mx-2 py-2 px-16 md:px-10 font-bold rounded-full' target='blank'>Site</a>
                  <a href={"https://github.com/iurisant/".concat(repo[i].name)}
                    className='bg-sky-800 hover:bg-sky-950 md:mx-2 py-2 px-16 md:px-10 font-bold rounded-full' target='blank'>Repositório</a>
                </div>
              </div>
            </div>
          }
        </>
      ))}
    </section>
  )
}