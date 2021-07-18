import React from "react";
import Navbar from "../src/Component/Navbar/navbar";
import Section from "../src/Component/Content/content";
import Card from "../src/Component/Card/card";
import Form from "../src/Component/Form/form";
import Footer from "../src/Component/Footer/footer";

function App() {
  return (
    <div>
      <Navbar />
      <Section />
      <Card />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
