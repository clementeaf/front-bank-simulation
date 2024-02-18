import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();  
    return (
      <div className="flex w-full justify-around items-center p-4">
        <p>Hero Title</p>
        <div>
          <button className="px-4 py-2 rounded-2xl bg-blue-600 text-white shadow-lg hover:shadow-sm ease-in-out duration-300" onClick={() => navigate("/register")}>
            Register
          </button>
        </div>
      </div>
    );
  }