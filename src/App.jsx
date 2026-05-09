import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Sidebar from "./components/Layout/Sidebar";

function App() {
  return (
    <div>
      <Header />

      <main>
        <h2>CommunityHub Dashboard</h2>
        <p>React structure is now working properly.</p>
      </main>

      <Sidebar />

      <Footer />
    </div>
  );
}

export default App;