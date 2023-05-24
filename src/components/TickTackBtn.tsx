import './TickTackBtn.scss';

type Props = {
  value: string,
}

export default function TickTackBtn({ value }: Props) {
  return (
    <button className="tick-tack-btn">
      {value}
    </button>
  );
}