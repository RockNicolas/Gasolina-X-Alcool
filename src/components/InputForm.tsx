import { FC } from 'react';

interface InputFormProps {
  alcoolInput: number;
  gasolinaInput: number;
  setAlcoolInput: (value: number) => void;
  setGalosinaInput: (value: number) => void;
  calcular: (event: React.FormEvent) => void;
}

const InputForm: FC<InputFormProps> = ({ alcoolInput, gasolinaInput, setAlcoolInput, setGalosinaInput, calcular }) => {
  return (
    <form className="form" onSubmit={calcular}>
      <label>Álcool (preço por litro):</label>
      <input
        className="input"
        type="number"
        placeholder="4,90"
        min="1"
        step="0.01"
        required
        value={alcoolInput}
        onChange={(e) => setAlcoolInput(Number(e.target.value))}
      />

      <label>Gasolina (preço por litro):</label>
      <input
        className="input"
        placeholder="4,90"
                type="number"
        min="1"
        step="0.01"
        required
        value={gasolinaInput}
        onChange={(e) => setGalosinaInput(Number(e.target.value))}
      />

      <input className="button" type="submit" value="Calcular" />
    </form>
  );
};

export default InputForm;
