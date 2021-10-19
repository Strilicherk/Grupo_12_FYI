import "./App.css";
import Header from "./components/header";
import Button from "./components/buttom";

import background from "./components/IMG/Background.png";

function App() {
  return (
    <div>
      <div className="background">
        <div className="container, text">
          {" "}
          <Header />
        </div>

        <main>
          <div className="texto">
            <div className="information">
              <h2 className="container, text">
                For Your Information Learning solution
              </h2>

              <p className=" container, text">
                Desde 2003 sendo o principal <br />
                centro de treinamento oficial <br /> da Microsoft
              </p>
            </div>
          </div>

          <div className="container, text">
            <div className="saiba-btt">
              <Button>Saiba Mais</Button>
            </div>
            
          </div>

        </main>
      </div>
    </div>
  );
}

export default App;
