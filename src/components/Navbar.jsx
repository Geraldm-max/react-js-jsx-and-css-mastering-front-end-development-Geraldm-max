import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/api">API</Link>
      </div>
      <button
        onClick={toggleTheme}
        className="bg-white text-blue-600 px-3 py-1 rounded-md"
      >
        {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </nav>
  );
}
