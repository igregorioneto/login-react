import '../styles/home.scss';
import { FaGooglePlusG } from 'react-icons/fa';

import { Link } from 'react-router-dom';

import games from '../assets/images/games.jpg';

export function Home() {
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
                  <p>Already have an account?<Link to="/" className='logar'>Log in.</Link></p>
                </span>

                <div className="register-buttons">
                  <button className='registrar'>
                      <FaGooglePlusG className='icon'/>
                      Sign up with Google 
                  </button>

                  <button className='registrar facebook'>
                      <FaGooglePlusG className='icon'/>
                      Sign up with Facebook
                  </button>
                </div>

                <span className='separador'>or</span>

                <form className='formulario'>
                    <label>Email address</label>
                    <input 
                      type="text" 
                      placeholder='Email address' 
                      className='input-form'
                    />

                    <label>Password</label>
                    <input 
                      type="text" 
                      placeholder='Password' 
                      className='input-form'
                    />

                  <span className='termos-registrar'>
                    <input 
                      type="checkbox"
                      value="false"
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