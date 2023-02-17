import "./App.css";
import { Application } from "./components/Application/Application";
import { AppProviders } from "./Providers/AppProviders";
// import { Skills } from './components/Skills/Skills';
import { MuiMode } from "./components/Mui/MuiMode";

function App() {
  return (
    <AppProviders>
      <div className="App">
        <h1>hello</h1>
        {/* <Application/> */}
       <MuiMode/>
        {/* <Skills/> */}
      </div>
    </AppProviders>
  );
}

export default App;
