import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

import "./app.css";

function App() {
  return (
    <div className="app-div">
      <div>
        <div>
          <h1>Talaria</h1>
        </div>
        <div>
          <Card title="Quote">
            <p>This is where a quote goes</p>
          </Card>

          <div className="text-div">
            <p>
              Want to get daily texts? Input your number below and press submit!
            </p>
            <InputText />
            <div>
              <Button label="Submit" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
