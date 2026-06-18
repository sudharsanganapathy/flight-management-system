import Navbar from "./components/layout/Navbar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      
      <Navbar />

      <main className="pt-26">
        <AppRoutes />
      </main>

    </div>
  );
}

export default App;