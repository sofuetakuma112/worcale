import logo from "./logo.svg";
import "./App.css";

// import { db } from "./libs/firebase";
// import { useEffect } from "react";

// import { collection, addDoc } from "firebase/firestore";

function App() {
  // useEffect(() => {
  //   const async = async () => {
  //     const docRef = await addDoc(collection(db, "users"), {
  //       first: "Ada",
  //       last: "Lovelace",
  //       born: 1815,
  //     });
  //     console.log("Document written with ID: ", docRef.id);
  //   };
  //   async();
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
