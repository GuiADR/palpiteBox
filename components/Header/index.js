import React from 'react';
import Link from 'next/link';
import Styles from './styles.module.css';

const Header = () => {
  return (
    <>
      <div className={Styles.wrapper + ' bg-gray-200'}>
        <div className="container mx-auto">
          <Link href="/">
            <a><img className="mx-auto" src="/images/logo_palpitebox.svg" alt="PalpiteBox" /></a>
          </Link>
        </div>
      </div>
      <div className="conainer">
        <div className={Styles.wrapper + ' bg-gray-100 text-center'}>
          <Link href="/sobre">
            <a className="px-2 hover:underline">Sobre</a>
          </Link>
          <Link href="/contato">
            <a className="px-2 hover:underline">Contato</a>
          </Link>
          <Link href="/pesquisa">
            <a className="px-2 hover:underline">Pesquisa</a>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Header;