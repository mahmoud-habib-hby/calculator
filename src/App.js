import TextProvider from '.';
import './App.css';
import Number from './number';
import { TttextProvider } from './provider';
import Show from './show';
function App() {
  return (
    <TttextProvider>
      <Show/>
      <Number /> 
    </TttextProvider>
  
  );
}

export default App;
