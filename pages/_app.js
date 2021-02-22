import React from 'react';
// import "tailwindcss/tailwind.css"
//or
import '../src/css/styles.css';

import Template from '../components/Template'

const App = ({ Component, pageProps }) => {
  return (
    <Template>
      <Component {...pageProps} />
    </Template>
  )

}

export default App