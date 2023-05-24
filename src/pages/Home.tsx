import { Link } from 'react-router-dom';

import './Home.scss';

export default function Home() {
  return (
    <>
      <main>
        <h1>Home</h1>
        <div className="container">
          <Link to="tick-tack">Jogo da Velha</Link>
        </div>
      </main>
    </>
  );
}