import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AppRouter from "./router/AppRouter";
import type { RootState } from "./store/Store";
import { setTheme } from "./features/ThemeSlice";

function App() {
  const dispatch = useDispatch();
  const themeMode = useSelector((state: RootState) => state.theme.mode);

  // Check local storage exactly once when the app mounts
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme && savedTheme !== themeMode) {
      dispatch(setTheme(savedTheme));
    }
  }, [dispatch]); 


  useEffect(() => {
    localStorage.setItem("theme", themeMode);
    document.documentElement.setAttribute("data-theme", themeMode);
  }, [themeMode]);

  return (
    <div className="min-h-screen w-full transition-colors duration-300">
      <AppRouter />
    </div>
  );
}

export default App;