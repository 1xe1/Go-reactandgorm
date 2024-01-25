import ItemsList from "./Componects/ItemsList";
import Students from "./Componects/Students";
import Subjects from "./Componects/Subjects";
import "./App.css";

function App() {
  return (
    <>
      <div className=" block">
        <h1 className="pt-5">My Front-end</h1>
        <div className="card pl-20">
          <ItemsList />
        </div>
        <div className="card">
          <Students />
        </div>
        <div className="card">
          <Subjects />
        </div>
      </div>
    </>
  );
}

export default App;
