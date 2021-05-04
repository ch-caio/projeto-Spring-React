import NavBar from "components/Footer";
import Footer from "components/NavBar";
import DataTable from "components/DataTable";

function App() {
  return (
    <>
      <NavBar />
      <div className='container'>
        <h1 className="text-primary">Olá mundo!</h1>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
