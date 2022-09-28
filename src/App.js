import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import About from "./Pages/About";
import AddUser from "./Pages/AddUser";
import Contact from "./Pages/Contact";
import EditUser from "./Users/EditUser";
import Home from "./Pages/Home";
import ViewUser from "./Users/ViewUser";

function App() {
  // alert("Run following command : npm run json-server")
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route path="/view/:id" element={<ViewUser />} />
      </Routes>
    </div>
  );
}

export default App;
