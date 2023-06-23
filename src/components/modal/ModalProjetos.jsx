import { useEffect, useState } from 'react';
import api from "../../services/api";
import axios from 'axios';

export default function ModalProjetos() {
  const [dataRepos, setDataRepos] = useState([]);
  const [tamanhoTela, setTamanhoTela] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/users/iurisant/repos");
        const repos = response.data;
        const data = [];

        for (let i = 0; i < repos.length; i++) {
          if (repos[i].has_pages && repos[i].visibility === "public" && repos[i].name !== "my-portfolio") {
            const repoResponse = await axios.get(
              `https://raw.githubusercontent.com/iurisant/${repos[i].name}/master/inforepo.json`
            );
            data.push(repoResponse.data);
          }
        }
        setDataRepos(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const verificaTamanhoTela = () => {
      if (window.matchMedia('(max-width: 1023px)').matches) {
        setTamanhoTela('mobile');
      } else {
        setTamanhoTela('desktop');
      }
    };

    verificaTamanhoTela();

    window.addEventListener('resize', verificaTamanhoTela);

    return () => {
      window.removeEventListener('resize', verificaTamanhoTela);
    };
  }, []);

  return (
    <section className='flex flex-col items-center'>
      {dataRepos.map((repo, index) => {
        return (
          <div key={index} className='block lg:flex lg:items-center lg:justify-between my-8 rounded-lg box mx-10 w-3/4 bg-white'>
            {tamanhoTela === 'mobile' ? (
              <>
                <img
                  className='rounded-t-lg lg:w-1/2 w-full box'
                  src={repo.url}
                  alt={repo.name}
                />
                <div className='m-8 lg:py-0 flex flex-col items-center justify-center lg:w-1/2'>
                  <h2><strong>{repo.name}</strong></h2>
                  <div className='w-full text-center'>
                    <span className='text-black/70'>{repo.description}</span><br />
                    <span className='text-black/70'>{repo.language}</span>
                  </div>
                  <div className='flex flex-col mt-4 text-white items-center'>
                    <a href={repo.site}
                      className='bg-sky-800 w-full text-center hover:bg-sky-950 mb-4 py-2 px-16 font-bold rounded-full' target='_blank' rel="noreferrer">Site</a>
                    <a href={repo.repositories}
                      className='bg-sky-800 w-full text-center hover:bg-sky-950 mx-2 py-2 px-16 font-bold rounded-full' target='_blank' rel="noreferrer">Repositório</a>
                  </div>
                </div>
              </>
            ) : (
              <>
                {(index % 2 === 0) && (
                  <img
                    className='rounded-l-lg w-1/2 box'
                    src={repo.url}
                    alt={repo.name}
                  />
                )}
                <div className='mx-12 flex flex-col items-center justify-center w-1/2'>
                  <h2><strong>{repo.name}</strong></h2>
                  <div className='w-full text-center'>
                    <span className='text-black/70'>{repo.description}</span><br />
                    <span className='text-black/70'>{repo.language}</span>
                  </div>
                  <div className='flex flex-col md:block mt-4 text-white items-center'>
                    <a href={repo.site}
                      className='bg-sky-800 hover:bg-sky-950 mb-4 md:mb-0 md:mx-2 py-2 px-16 md:px-10 font-bold rounded-full' target='_blank' rel="noreferrer">Site</a>
                    <a href={repo.repositories}
                      className='bg-sky-800 hover:bg-sky-950 md:mx-2 py-2 px-16 md:px-10 font-bold rounded-full' target='_blank' rel="noreferrer">Repositório</a>
                  </div>
                </div>
                {(index % 2 !== 0) && (
                  <img
                    className='rounded-r-lg w-1/2 box'
                    src={repo.url}
                    alt={repo.name}
                  />
                )}
              </>
            )}
          </div>
        );
      })}
    </section>
  );
}