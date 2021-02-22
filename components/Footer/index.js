import React from 'react';
import Styles from './styles.module.css';

const Footer = () => {
  return (
    <div className={Styles.wrapper + ' bg-gray-700'}>
      <div className="container mx-auto text-center font-bold text-white">
        Projeto desenvolvido no curso Fullstack Master por:{' '}
        <a className="hover:underline" target="_blank" href="https://portfolio-puce-gamma.vercel.app/">Guilherme Rodrigues</a> /{' '}
        <a className="hover:underline" target="_blank" href="https://www.linkedin.com/in/guiadr/">Linkedin</a> /{' '}
        <a className="hover:underline" target="_blank" href="https://github.com/GuiADR">Github</a>{' '}
        <div className="mt-4">
          <img className="inline p-4" src="/images/logo_semana_fsm.svg" alt="Semana Fullstack Master" />
          <img className="inline p-4" src="/images/logo_devpleno.svg" alt="Devpleno" />
        </div>
      </div>
    </div>
  )
}

export default Footer;