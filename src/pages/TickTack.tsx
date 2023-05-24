import TickTackBtn from '../components/TickTackBtn';

import './TickTack.scss';

export default function TickTack() {
  return (
    <>
      <main>
        <h1>Jogo da Velha</h1>
        <div className="board">
          <TickTackBtn value="_" />
        </div>
      </main>
    </>
  );
}