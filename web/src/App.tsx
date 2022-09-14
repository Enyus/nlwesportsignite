import './styles/main.css';
// Componentes / Propriedades

import logoImg from './assets/logo-nlw-esports.svg';

function App(): JSX.Element {
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} alt='Logo da NLW eSports'/>

      <h1 className='text-6xl text-white font-black mt-20'>Seu duo está aqui!</h1>
    </div>
  )
};

export default App;