import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { ECommerce, Calendar, ColorPicker, Customer, Editor, Kanban, Orders, Employees, Line, Pie, Bar, Pyramid, Stacked, ColorMapping, Area, Financial } from "./pages";
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { useStateContext } from "./context/ContextProvider";
import "./App.css";

const App = () => {
  const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext();
  return (
    <div className={ currentMode === 'Dark' ? 'dark' : '' }>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={ { zIndex: "1000" } }>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={ { background: currentColor, borderRadius: "50%" } }
                onClick={ () => setThemeSettings(true) }
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          { activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg"><Sidebar /></div>
          ) }
          <div
            className={ `
              ${activeMenu ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '}
              `}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>

            <div>
              {/* ThemeSettings */ }
              { themeSettings && <ThemeSettings /> }
              <Routes>
                {/* Dashboard Routes */ }
                <Route path="/" element={ <ECommerce /> } />
                <Route path="/ecommerce" element={ <ECommerce /> } />
                {/* Pages Routes */ }
                <Route path="/orders" element={ <Orders /> } />
                <Route path="/employees" element={ <Employees /> } />
                <Route path="/customers" element={ <Customer /> } />

                {/* Apps */ }
                <Route path="/calendar" element={ <Calendar /> } />
                <Route path="/kanban" element={ <Kanban /> } />
                <Route path="/editor" element={ <Editor /> } />
                <Route path="/Color-Picker" element={ <ColorPicker /> } />
                {/* Charts Routes */ }
                <Route path="/line" element={ <Line /> } />
                <Route path="/area" element={ <Area /> } />
                <Route path="/bar" element={ <Bar /> } />
                <Route path="/pie" element={ <Pie /> } />
                <Route path="/financial" element={ <Financial /> } />
                <Route path="/color-mapping" element={ <ColorMapping /> } />
                <Route path="/pyramid" element={ <Pyramid /> } />
                <Route path="/stacked" element={ <Stacked /> } />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
