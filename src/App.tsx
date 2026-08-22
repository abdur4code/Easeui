import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AppRouter from "./router/AppRouter";
import type { RootState } from "./store/Store";
import { setTheme } from "./features/ThemeSlice";

function App() {
  const dispatch = useDispatch();
  const themeMode = useSelector((state: RootState) => state.theme.mode);

  // Initialize theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme && savedTheme !== themeMode) {
      dispatch(setTheme(savedTheme));
    }
  }, [dispatch]);

  // Apply theme to DOM whenever it changes
  useEffect(() => {
    localStorage.setItem("theme", themeMode);
    if (themeMode === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [themeMode]);

  return (
    <div className="min-h-screen w-full transition-colors duration-300">
      <AppRouter />
    </div>
  );
}

export default App;