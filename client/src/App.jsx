import { Navigationbar, Welcome, Transactions, Footer } from "./Components"
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="min-h-screen gradient-bg-welcome">
      <div>
        <Navigationbar />
        <Welcome />
      </div>
      <Transactions />
      <Footer />
    </div>
  )
}

export default App;
