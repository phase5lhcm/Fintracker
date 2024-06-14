import Login from "./pages/Login";
import Topbar from "./components/Topbar";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Dashboard from "./pages/dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MySidebar from "./components/Sidebar";
import Register from "./pages/Register";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <CssBaseline />
          <div className="app">
            <MySidebar />
            <main className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
