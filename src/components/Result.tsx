import { FC } from 'react';

interface ResultProps {
  title: string;
  alcool: string | number;
  gasolina: string | number;
}

const Result: FC<ResultProps> = ({ title, alcool, gasolina }) => {
  return (
    <section className="result">
      <h2 className="result-title">{title}</h2>
      <span>Álcool {alcool}</span>
      <span>Gasolina {gasolina}</span>
    </section>
  );
};

export default Result;
