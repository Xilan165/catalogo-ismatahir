const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());

// Ruta para productos (puedes modificar para conectar tu DB)
app.get('/api/productos', (req, res) => {
  res.json([
    {
      id: 1,
      nombre: 'Rosas eternas',
      descripcion: 'Rosas preservadas que duran años',
      precio: 20.0,
      categoria: 'Flores',
      imagen: '/imagenes/rosas-eternas.jpg'
    }
  ]);
});

// Servir carpeta imágenes
app.use('/imagenes', express.static(path.join(__dirname, '../frontend/imagenes')));

// Servir frontend estático
app.use(express.static(path.join(__dirname, '../frontend')));

// Ruta fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
