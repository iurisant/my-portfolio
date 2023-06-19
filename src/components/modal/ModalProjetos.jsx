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
    <section className='flex flex-col items-center'>
      {Object.keys(repo).map((key) => (
        <>
          {(repo[key].has_pages && repo[key].visibility === "public" && repo[key].name !== "my-portfolio") &&
            <div key={key} className='block lg:flex lg:items-center lg:justify-between bg-zinc-100 my-8 rounded-lg shadow-xl mx-10 w-3/4'>
              <img
                className='rounded-t-lg lg:rounded-tr-none lg:rounded-l-lg lg:w-1/2 w-full lg:h-72'
                src={'https://raw.githubusercontent.com/iurisant/'.concat(repo[key].name, '/master/preview.png')}
                alt={repo[key].name}
              />
              <div className='m-14 lg:py-0 flex flex-col items-center justify-center lg:w-1/2'>
                <h2><strong>{repo[key].name}</strong></h2>
                <div className='w-full text-center'>
                  {(key === '1') &&
                    <>
                      <span className='text-black/70'>- Calculadora feita para praticar JavaScript</span><br />
                      <span className='text-black/70'>- Tecnologias: Html, Css, JavaScript</span>
                    </>
                  }
                  {(key === '2') &&
                    <>
                      <span className='text-black/70'>- Clone front-end do Spotify</span><br />
                      <span className='text-black/70'>- Tecnologias: React, NextJs, JavaScript, TypeScript, Css, Tailwind</span>
                    </>
                  }
                  {(key === '3') &&
                    <>
                      <span className='text-black/70'>- Crachá virtual criado na NLW Heat 2021</span><br />
                      <span className='text-black/70'>- Tecnologias: Html, Css, JavaScript</span>
                    </>
                  }
                  {(key === '6') &&
                    <>
                      <span className='text-black/70'>- Loja virtual, criada como projeto de conclusão de curso do técnico</span>
                      <br /><span className='text-black/70'>- Tecnologias: React, JavaScript, Css, NodeJs, MySQL, FireBase, Figma</span>
                    </>
                  }
                </div>
                <div className='flex flex-col md:block mt-4 text-white items-center'>
                  <a href={repo[key].name === "lojagreenpet" ? ("https://lojagreenpet-2022.web.app/") : ("https://iurisant.github.io/".concat(repo[key].name))}
                    className='bg-sky-800 hover:bg-sky-950 mb-4 md:mb-0 md:mx-2 py-2 px-16 md:px-10 font-bold rounded-full' target='blank'>Site</a>
                  <a href={"https://github.com/iurisant/".concat(repo[key].name)}
                    className='bg-sky-800 hover:bg-sky-950 md:mx-2 py-2 px-16 md:px-10 font-bold rounded-full' target='blank'>Repositório</a>
                </div>
              </div>
            </div >
          }
        </>
      ))
      }
    </section >
  )
}

