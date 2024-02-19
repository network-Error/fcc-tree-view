import './App.css';
import TreeView from './components/TreeView';
import menus from './components/data';

function App() {
  return (
    <div className="App">
      <TreeView menus={menus} />
    </div>
  );
}

export default App;
