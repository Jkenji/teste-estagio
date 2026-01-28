import { useState } from "react";

function App() {
  const [names, setNames] = useState([]);
  const [newName, setNewName] = useState("");

  function addName() {
    if (newName.trim() === "") return;
      console.log("Adicionando:", newName);

    setNames([...names, newName]);
    setNewName("");
  }

  function removeName(indexToRemove) {
    setNames(names.filter((_, index) => index !== indexToRemove));
  }

  return (
  <div style={{ padding: 20, color: "black" }}>
    <h2>Lista de nomes</h2>

    <input
      value={newName}
      onChange={(e) => setNewName(e.target.value)}
      placeholder="Digite um nome"
    />

    <button onClick={addName} style={{ marginLeft: 8 }}>
      Adicionar
    </button>

    <ul style={{ marginTop: 16 }}>
      {names.map((name, index) => (
        <li key={index}>
          {name}
          <button
            onClick={() => removeName(index)}
            style={{ marginLeft: 8 }}
          >
            Remover
          </button>
        </li>
      ))}
    </ul>
  </div>
);
}

export default App;