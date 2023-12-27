import { useState } from 'react';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { ItemList } from '../../components/ItemList';
import logo_github from '../../assets/images/github-mark-white.png'

import './styles.css';

function App() {
  
  // estados
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`)
    const newUser = await userData.json();
    console.log(newUser);

    if(newUser.name) {
      const {avatar_url, name, bio, login} = newUser;
      setCurrentUser({ avatar_url, name, bio, login })

      // const reposData = await fetch(`https://api.github.com/users/${user}/repos`)
      // const newRepos = await reposData.json();

      // if(newRepos.length) {
      //   setRepos(newRepos);
      // }
    }



  }

  return (
    <div className="App">
      
      <Header />

      <section className="conteudo">
        
        <section className="info">

          {!currentUser?.name ? (
            <>
              <section className="logo__conteudo">
                <figure>
                  <img src={logo_github} alt="Logo GitHub"  title="Logo GitHub" />
                </figure>
                <h1>GitFind</h1>
              </section>

              <section className='input__conteudo'>

                <Input name={"usuario"} value={user} onChange={event => setUser(event.target.value)} placeholder={"@username"} />
                <Button onClick={handleGetData}/>

              </section>
            </>
            ) : null}

          {currentUser?.name ? (
            <>
              <section className="perfil">
                <img src={currentUser.avatar_url} className="perfil_img" alt="profile"/>
                <main className='perfil__dados'>
                  <h3>{currentUser.name}</h3>
                  <span>@{currentUser.login}</span>
                  <p>{currentUser.bio}</p>
                </main>
              </section>
            </>
          ) : null}
            
          {repos?.length ? (
              <section>
                <h4 className='repositorio'>Repositórios</h4>
                {repos.map(repo => (
                  <ItemList title={repo.name} description={repo.description} />
                ))}
              </section>
          ) : null}

        </section>

      </section>

    </div>
  );
}

export default App;