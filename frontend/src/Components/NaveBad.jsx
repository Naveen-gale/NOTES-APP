import { Link } from "react-router-dom";
import { useAuth } from "../context/ContextProvider"; // adjust path if needed

const Navbar = () => {
  const { user, setUser } = useAuth();

  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <div className="w-full bg-slate-800 text-white px-6 py-3 flex items-center justify-between">
      
      {/* Left */}
      <h1 className="text-xl font-bold">NoteApp</h1>

      {/* Center */}
      <input
        type="text"
        placeholder="Search notes..."
        className="w-1/3 px-4 py-1.5 rounded-md bg-slate-700 text-white outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Right */}
      <div className="flex items-center gap-3">
        {!user ? (
          <>
            <Link
              to="/login"
              className="bg-blue-500 hover:bg-blue-600 px-3 py-1.5 rounded-md text-sm"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-green-500 hover:bg-green-600 px-3 py-1.5 rounded-md text-sm"
            >
              Signup
            </Link>
          </>
        ) : (
          <>
            <span className=" uppercase font-black text-stone-50">{user.name}</span>
            <button
              onClick={logout}
              className="bg-red-500 hover:bg-red-600 px-3 py-1.5 rounded-md text-sm"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
