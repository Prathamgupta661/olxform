import Navbar from "./components/Navbar";
import PropertyForm from "./components/PropertyForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <Navbar/>
      <PropertyForm />
    </div>
  );
}

export default App;
