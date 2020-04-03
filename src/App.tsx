import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useFetch } from "use-http";

function App() {
  const { loading, error, data } = useFetch("data.json", {}, []);
  if (loading) {
    return <span>...</span>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={data.profile_pic_url}
          className="App-logo"
          alt={data.username}
        />
        {data.username}
      </header>

      <footer>
        <img src={logo} className="App-logo" alt="logo" />
      </footer>
    </div>
  );
}

export default App;
