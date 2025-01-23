import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.get('/api', (req: Request, res: Response) => {
    res.json({ message: "API funcionando correctamente" });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});