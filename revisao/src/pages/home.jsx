import './home.css';
import Happy from '../assets/happy.jpg';

function home() {
  return (
    <div>
      <h1>Olá, bem-vindo ao site da revisão de PW</h1>
      <div className='imagem'>
        <img src={Happy}/>
      </div>
    </div>
  );
}

export default home;