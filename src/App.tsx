import { useState, FormEvent } from 'react';
import './App.css';
import logoImg from './assets/logo.png';
import InputForm from './components/InputForm';
import Result from './components/Result';

interface InfoProps {
  title: string;
  gasolina: string | number;
  alcool: string | number;
}

function App() {
  const [gasolinaInput, setGalosinaInput] = useState(Number);
  const [alcoolInput, setAlcoolInput] = useState(Number);
  const [info, setInfo] = useState<InfoProps>();

  function calcular(event: FormEvent) {
    event.preventDefault();

    let calculo = alcoolInput / gasolinaInput;
    console.log(calculo);

    if (calculo <= 0.7) {
      setInfo({
        title: 'Compensa usar Álcool!',
        gasolina: formatarMoeda(gasolinaInput),
        alcool: formatarMoeda(alcoolInput),
      });
    } else {
      setInfo({
        title: 'Compensa usar Gasolina!',
        gasolina: formatarMoeda(gasolinaInput),
        alcool: formatarMoeda(alcoolInput),
      });
    }
  }

  function formatarMoeda(valor: number) {
    return valor.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  return (
    <div>
      <main className="container">
        <img className="logo" src={logoImg} alt="Foto da calculadora de gasolina e álcool" />
        <h1 className="title">Qual melhor opção</h1>
        <InputForm
          alcoolInput={alcoolInput}
          gasolinaInput={gasolinaInput}
          setAlcoolInput={setAlcoolInput}
          setGalosinaInput={setGalosinaInput}
          calcular={calcular}
        />

        {info && Object.keys(info).length > 0 && (
          <Result title={info.title} alcool={info.alcool} gasolina={info.gasolina} />
        )}
      </main>
    </div>
  );
}

export default App;
