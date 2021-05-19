import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';

import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='section-subscription'>
                <p className='footer-subscription-heading'>
                    Date de alta en nuestra Newsletter
                </p>
                <p className='footer-subscription-text'>
                    Puedes darte de baja en cualquier momento
                </p>
                <div className='input-areas'>
                    <form>
                        <input type='email' name='email' placeholder='Tu e-mail' className='footer-input' />
                        <Button buttonStyle='btn--outline'>Suscríbete</Button>
                    </form> 
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Nosotros</h2>
                        <Link to='/sign-up'>Qué hacemos</Link>
                        <Link to='/'>Nuestros clientes opinan</Link>
                        <Link to='/'>Colaboramos</Link>
                        <Link to='/'>Términos de Uso</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contacto</h2>
                        <Link to='/'>Contacto</Link>
                        <Link to='/'>Apóyanos</Link>
                        <Link to='/'>Historia</Link>
                        <Link to='/'>Patrocinios</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Documentos</h2>
                        <Link to='/'>Galería de fotos</Link>
                        <Link to='/'>Clientes</Link>
                        <Link to='/'>Empresas</Link>
                        <Link to='/'>Embajadores</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Redes Sociales</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Tweeter</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link className='social-logo'>
                            ONGnG <i className="fas fa-box-open"/>
                        </Link>
                    </div>
                    <small class='website-rights'>ONGoinG © 2021</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
            </section>
        </div>
    )
}

export default Footer;
