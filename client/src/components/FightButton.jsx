import { useNavigate } from 'react-router-dom';

export default function FightButton() {

  const navigate = useNavigate();

  return (
    <div className="hovercl">
      <button
        onClick={() => {
          navigate("/fight");
        }}
      >
        <img src="fight.svg" alt="" className="mb-4 w-96 h-11/12" />
      </button>
    </div>
  );
}