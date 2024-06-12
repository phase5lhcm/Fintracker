import Login from "./pages/Login";
import Topbar from "./components/Topbar";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Dashboard from "./pages/dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MySidebar from "./components/Sidebar";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <BrowserRouter>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <main className="content">
              <Topbar />
              {/* <Login /> */}
              <MySidebar />
              {/* <Routes>
              <Route path="/" element={<DashBoard />} />
            </Routes> */}
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
