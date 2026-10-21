import React, { useState } from 'react';
import Header from './componentes/Header';
import Footer from './componentes/Footer';

function App() {
  const datosPersonales = {
    nombre: 'Sebastian',
    edad: 21,
    direccion: 'zona sudeste'
  };

  const frutas = ['naranja', 'manzana, pera, frutilla'];

  const [textoMostrado, setTextoMostrado] = useState('');
  const [urlBlob, setUrlBlob] = useState(null);

  const mostrarDatos = () => {
    const texto = `Mi nombre es ${datosPersonales.nombre}, tengo ${datosPersonales.edad} y vivo en ${datosPersonales.direccion}.`;
    setTextoMostrado(texto);
    setUrlBlob(null);
  };

  const mostrarFrutas = () => {
    const texto = frutas.join(', ');
    setTextoMostrado(texto);
    setUrlBlob(null);
  };

  const crearBlob = () => {
    const texto = "Texto del Blob largo largo";
    const blob = new Blob([texto], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    setUrlBlob(url);

    setTextoMostrado(texto);
    alert("Blob creado correctamente");
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      {/* 1. Encabezado */}
      <Header />

      {/* 2. Contenido Principal */}
      <main style={{ flex: 1, padding: '20px', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <h2>React - Botones y Blob</h2>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
          <button onClick={mostrarDatos} style={{ padding: '10px 15px', cursor: 'pointer' }}>
            Mostrar Datos
          </button>

          <button onClick={mostrarFrutas} style={{ padding: '10px 15px', cursor: 'pointer' }}>
            Mostrar Frutas
          </button>

          <button onClick={crearBlob} style={{ padding: '10px 15px', cursor: 'pointer', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px' }}>
            Crear Blob
          </button>
        </div>

        <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #ccc', borderRadius: '5px', background: '#f9f9f9' }}>
          <h3>Resultado en pantalla:</h3>
          <p>{textoMostrado}</p>
          
          {urlBlob && (
            <div style={{ marginTop: '15px' }}>
              <a 
                href={urlBlob} 
                download="archivo-creado.txt" 
                style={{
                  display: 'inline-block',
                  padding: '10px 15px',
                  backgroundColor: '#007BFF',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  fontWeight: 'bold'
                }}
              >
                 Descargar Blob como archivo .txt
              </a>
            </div>
          )}
        </div>
      </main>

      {/* 3. Pie de página */}
      <Footer />
    </div>
  );
}

export default App;