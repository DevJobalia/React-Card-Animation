import { motion } from "framer-motion";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <div className="App">
      <motion.div
        transition={{ layout: { duration: 1, type: "spring" } }}
        layout
        className="card"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          borderRadius: "1rem",
          boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
        }}
      >
        <motion.h2 layout="position" h2>
          Framer Motion 🚀
        </motion.h2>
        {isOpen && (
          <motion.div
            className="expand"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloremque vitae distinctio illo soluta, voluptatum tempore
              facilis expedita aperiam sed reiciendis?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              consequuntur?
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default App;
