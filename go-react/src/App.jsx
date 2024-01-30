import ItemsList from "./Componects/ItemsList";
import Students from "./Componects/Students";
import Subjects from "./Componects/Subjects";
import "./App.css";
import ItemFormFind from "./Componects/ItemFormFind";
import StudentFormFind from "./Componects/StudentFormFind";
import SubjectFormFind from "./Componects/SubjectFormFind";

function App() {
  return (
    <>
      <div className=" block">
        <h1 className="pt-5 text-center">My Front-end</h1>
        <div className="card ">
          <ItemsList />
        </div>
        <div className="card">
          <Students />
        </div>
        <div className="card">
          <Subjects />
        </div>
        <div className="card">
          <ItemFormFind />
        </div>
        <div className="card">
          <StudentFormFind />
        </div>
        <div className="card">
          <SubjectFormFind />
        </div>
      </div>
    </>
  );
}

export default App;
