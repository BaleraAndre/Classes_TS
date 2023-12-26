import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { Pool } from 'pg';

const app = express();
const port =  8080;

const pool = new Pool({
  user: '***',
  host: '****',
  database: '****',
  password: '*****',
  port: ******,
});

app.use(bodyParser.json());
app.use(express.static(path.join('index.html')));

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join('index.html'));
});

app.get('/pessoas', async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM usuarios');
    const pessoas = result.rows;
    res.json(pessoas);
  } catch (error) {
    console.error('Erro ao obter pessoas:', error);
    res.status(500).json({ mensagem: 'Erro ao obter pessoas' });
  }
});

app.post('/pessoas', async (req: Request, res: Response) => {
  const { nome, email } = req.body;
  try {
    await pool.query('INSERT INTO usuarios (nome, email) VALUES ($1, $2)', [nome, email]);
    const result = await pool.query('SELECT * FROM usuarios');
    const pessoas = result.rows;
    res.json(pessoas);
  } catch (error) {
    console.error('Erro ao adicionar pessoa:', error);
    res.status(500).json({ mensagem: 'Erro ao adicionar pessoa' });
  }
});

app.put('/pessoas/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nome, email } = req.body;
  try {
    await pool.query('UPDATE usuarios SET nome = $1, email = $2 WHERE id = $3', [nome, email, id]);
    const result = await pool.query('SELECT * FROM usuarios');
    const pessoas = result.rows;
    res.json(pessoas);
  } catch (error) {
    console.error('Erro ao atualizar pessoa:', error);
    res.status(500).json({ mensagem: 'Erro ao atualizar pessoa' });
  }
});

app.delete('/pessoas/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM usuarios WHERE id = $1', [id]);
    const result = await pool.query('SELECT * FROM usuarios');
    const pessoas = result.rows;
    res.json(pessoas);
  } catch (error) {
    console.error('Erro ao excluir pessoa:', error);
    res.status(500).json({ mensagem: 'Erro ao excluir pessoa' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});