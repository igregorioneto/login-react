import { FormEvent, useState } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';

import '../styles/home.scss';
import { FaGooglePlusG } from 'react-icons/fa';

import games from '../assets/images/games.jpg';
import { useAuth } from './../hooks/useAuth';

export function Home() {
    const history = useHistory();
    const { user, signInWithGoogle, createUserWithEmailAndPassword } = useAuth();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [termos, setTermos] = useState(false);

    async function handleAccountGoogle() {
      if(!user && termos) {
        await signInWithGoogle();
      }

      history.push('/bem-vindo');
    }

    async function handleValuesInputs(event: FormEvent) {
      event.preventDefault();
      if (termos) {
        await createUserWithEmailAndPassword({ email, senha });
      }

      await history.push('/bem-vindo');
    }

    return (
      <div className="container">
          <aside>
              <div className="informacao">
                <img src={games} alt="Site para games" />
              </div>
          </aside>
          <main>
              <div className="conteudo">
                <h1>Get's started</h1>
                <span>
                  <p>Already have an account?<a href="/login" className='logar'>Log in.</a></p>
                </span>

                <div className="register-buttons">
                  <button 
                    onClick={handleAccountGoogle}
                    className='registrar' 
                  >
                      <FaGooglePlusG className='icon'/>
                      Sign up with Google 
                  </button>

                  <button className='registrar facebook'>
                      <FaGooglePlusG className='icon'/>
                      Sign up with Facebook
                  </button>
                </div>

                <span className='separador'>or</span>

                <form onSubmit={handleValuesInputs} className='formulario'>
                    <label>Email address</label>
                    <input 
                      type="text" 
                      placeholder='Email address' 
                      className='input-form'
                      onChange={event => setEmail(event.target.value)}
                      value={email}
                    />

                    <label>Password</label>
                    <input 
                      type="password" 
                      placeholder='Password' 
                      className='input-form'
                      onChange={event => setSenha(event.target.value)}
                      value={senha}
                    />

                  <span className='termos-registrar'>
                    <input 
                      type="checkbox"
                      checked={termos}
                      onChange={event => setTermos(event.target.checked)}
                    /> 
                      I agree to Platform's 
                    <Link 
                      to="/" 
                      className='termos'
                    >
                      Terms of Service 
                    </Link> 
                      and 
                    <Link 
                      to="/" 
                      className='termos'
                    >
                      Privacy Policy
                    </Link>
                  </span>

                  <button className='registrar'>
                    Register
                  </button>
                </form>
              </div>
          </main>
      </div>  
    );
}