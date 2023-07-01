import "./App.css";
import Header from "./component/common/Header";
import Footer from "./component/common/Footer";
import Card from "./Home/Society";
import Society from "./Home/Society/Society";

function App() {
  return (
    <div>
      <body>
        <Header />

        <div>
          <Card />
          <Society />
        </div>

        <Footer />
      </body>
    </div>
  );
}

export default App;
