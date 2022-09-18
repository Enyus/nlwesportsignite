import './styles/main.css';
import logoImg from './assets/logo-nlw-esports.svg';
// Componentes / Propriedades
import { useState, useEffect } from 'react';
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import * as Dialog from '@radix-ui/react-dialog';
import { GameController } from 'phosphor-react';

interface Game {
  id: string,
  title: string,
  bannerUrl: string,
  _count: {
    ads: number
  }
}

function App(): JSX.Element {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then(response => response.json())
      .then(data => {
        setGames(data)
      })
  }, []) // array vazio indica que o código do useEffect vai ser executado apenas uma vez

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} alt='Logo da NLW eSports' />

      <h1 className='text-6xl text-white font-black mt-20'>Seu <span className='bg-nlw-gradient text-transparent bg-clip-text'>duo</span> está aqui!</h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        {games.map(game => {
          return (
            <GameBanner
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game._count.ads}
            />
          )
        })}
      </div>

      <Dialog.Root>
        <CreateAdBanner />
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
          <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
            <Dialog.Title className="text-3xl font-black">Publique um anúncio</Dialog.Title>
            <Dialog.Content>
              <form>
                <div>
                  <label htmlFor='game'>Qual o game?</label>
                  <input id='game' name='title' type="text" placeholder='Selecione o game que deseja jogar' />
                </div>

                <div>
                  <label htmlFor="nome">Seu nome (ou nickname)</label>
                  <input id='nome' type='text' name='name' placeholder='Como te chamam dentro do game?' />
                </div>

                <div>
                  <div>
                    <label htmlFor='yearsPlaying'>Joga há quantos anos?</label>
                    <input type='number' id='yearsPlaying' placeholder='Tudo bem ser ZERO' />
                  </div>

                  <div>
                    <label htmlFor='discord'>Qual o seu Discord?</label>
                    <input id='discord' name='discord' placeholder='Usuario#000' />
                  </div>
                </div>

                <div>
                  <div>
                    <label htmlFor="weekdays">Quando costuma jogar?</label>

                  </div>

                  <div>
                    <label htmlFor='hourStart'>Qual o horário do dia?</label>
                    <div>
                      <input id='hourStart' type='time' placeholder='De' />
                      <input id='hourEnd' type='time' placeholder='Até' />
                    </div>
                  </div>
                </div>

                <div>
                  <input type="checkbox" name="useVoiceChannel" id="useVoiceChannel" value='true' />
                  <label htmlFor="useVoiceChannel">Costumo me conecter ao chat de voz.</label>
                </div>

                <footer>
                  <button>Cancelar</button>
                  <button type="submit">
                    <GameController/>
                    Encontrar duo
                  </button>
                </footer>
              </form>
            </Dialog.Content>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
};

export default App;