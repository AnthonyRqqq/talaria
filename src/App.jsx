import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

import { useEffect, useState } from "react";

import { getQuote } from "./utils";

import "./app.css";

function App() {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    newQuote();
  }, []);

  const newQuote = async () => {
    const data = await getQuote();
    setQuote(data);
    console.log(data);
  };

  return (
    <div className="app-div">
      <div>
        <div>
          <h1>Talaria Quotes</h1>
        </div>
        <div>
          <Card title={quote.author}>
            <p>{quote.quote}</p>
          </Card>

          <div className="new-quote">
            <Button label="New Quote" onClick={() => newQuote()} />
          </div>

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
