import Desktop from "../../img/desktop.png";

import { useEffect, useState } from 'react';
import api from "../../services/api";

export default function ModalProjetos() {
  const [user, setUser] = useState({});

  useEffect(() => {
    api
      .get("/users/iurisant/repos")
      .then((response) => setUser(response.data)
      )
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <section>
      {Object.keys(user).map((i) => (
        <div>
          {(user[i].language === "TypeScript" || user[i].language === "CSS" || user[i].language === "JavaScript") &&
            <div key={i} className='flex'>
              <div className='relative w-64'>
                <img
                  src={Desktop}
                  alt="Desktop"
                />
                <img
                  className='w-71.5 h-3/4 absolute top-0.53 left-2.28'
                  src={''}
                  alt={user[i].name}
                />
              </div>
              <div>
                <h2>{user[i].name}</h2>
                <span>{user[i].name}</span>
              </div>
            </div>
          }
        </div>
      ))}
    </section>
  )
}