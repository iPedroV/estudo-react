import './App.css';
import Menu from './components/Menu';
//import Cartao from './components/Cartao';
//import Box from './components/Box';
//import { Alert, Button, Card, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Array from './pages/Array';
import Carros from './pages/Carros';
import Objeto from './pages/Objeto';
import Contador from './pages/Contador';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import FilmesPopulares from './pages/filmes/FilmesPopulares';
import FilmesDetalhes from './pages/filmes/FilmesDetalhes';
import UltimoFilmeAdd from './pages/filmes/UltimoFilmeAdd';
import FilmesLancamentos from './pages/filmes/FilmesLancamentos';
import FilmesCartaz from './pages/filmes/FilmesCartaz';
import AtoresDetalhes from './pages/atores/AtoresDetalhes';
import SeriesPopulares from './pages/series/SeriesPopulares';
import SerieDetalhes from './pages/series/SerieDetalhes';
import TemporadaDetalhes from './pages/series/TemporadaDetalhes copy';
import SeriesNoAr from './pages/series/SeriesNoAr';
import { SeriesEstrelando } from './pages/series/SeriesEstrelando';
import RickEpisodes  from './pages/desenho/RickEpisodes';
import TodosPersonagens  from './pages/disney/TodosPersonagens';
import PersonagemDetalhes from './pages/disney/PersonagemDetalhes';
import PersonagensGot from './pages/got/PersonagensGot';
import InserirProfessor from './pages/academico/professor/InserirProfessor';
import InserirDisciplina from './pages/academico/disciplina/InserirDisciplina';
import InserirCurso from './pages/academico/curso/InserirCurso';
import InserirAluno from './pages/academico/aluno/InserirAluno';
import InserirSala from './pages/academico/sala/InserirSala';
import InserirSemestre from './pages/academico/semestre/InserirSemestre';
import ListaDisciplinas from './pages/academico/disciplina/ListaDisciplinas';
import ListaAlunos from './pages/academico/aluno/ListaAlunos';
import ListaProfessores from './pages/academico/professor/ListaProfessores';
import ListaSala from './pages/academico/sala/ListaSala';
import ListaSemestre from './pages/academico/semestre/ListaSemestre';




function App() {
  return (
    <div className="fundo">

      

      <BrowserRouter>
        <Menu />
        <Container>
        <Routes>
          <Route path="/" element={<RickEpisodes/>}></Route> {/* Posso fechar das duas formas */} 
          <Route path="/personagens" element={<RickEpisodes/>}></Route> {/* Posso fechar das duas formas */} 
          <Route path="/carros" element={<Carros/>}></Route>
          <Route path="/array" element={<Array/>}></Route>
          <Route path="/objeto" element={<Objeto/>}></Route>
          <Route path="/contador" element={<Contador/>}></Route>
          <Route path="/got" element={<PersonagensGot/>}></Route>
          <Route path="/filmes/populares" element={<FilmesPopulares/>}></Route>
          <Route path="/filmes/lancamentos" element={<FilmesLancamentos/>}></Route>
          <Route path="/filmes/cartaz" element={<FilmesCartaz/>}></Route>
          <Route path="/filmes/ultimoAdicionado" element={<UltimoFilmeAdd/>}></Route>
          <Route path="/filmes/:id" element={<FilmesDetalhes/>}></Route>
          <Route path="/series/:id" element={<SerieDetalhes/>}></Route>
          <Route path="/ator/:id" element={<AtoresDetalhes/>}></Route>
          <Route path="/ator/:id" element={<AtoresDetalhes/>}></Route>
          <Route path="/series/:id/temporada/:season_number" element={<TemporadaDetalhes/>}></Route>
          <Route path="/series/populares" element={<SeriesPopulares/>}></Route>
          <Route path="/series/no-ar" element={<SeriesNoAr/>}></Route>
          <Route path="/series/estrelando-hoje" element={<SeriesEstrelando/>}></Route>
          <Route path="/disney/personagens" element={<TodosPersonagens/>}></Route>
          <Route path="/disney/personagens/:_id" element={<PersonagemDetalhes/>}></Route>
          <Route path="/academico/cadastrar-curso" element={<InserirCurso/>}></Route>
          <Route path="/academico/cadastrar-disciplina" element={<InserirDisciplina/>}></Route>
          <Route path="/academico/disciplinas" element={<ListaDisciplinas/>}></Route>
          <Route path="/academico/cadastrar-professor" element={<InserirProfessor/>}></Route>
          <Route path="/academico/professores" element={<ListaProfessores/>}></Route>
          <Route path="/academico/cadastrar-aluno" element={<InserirAluno/>}></Route>
          <Route path="/academico/alunos" element={<ListaAlunos/>}></Route>
          <Route path="/academico/cadastrar-sala" element={<InserirSala/>}></Route>
          <Route path="/academico/salas" element={<ListaSala/>}></Route>
          <Route path="/academico/cadastrar-semestre" element={<InserirSemestre/>}></Route>
          <Route path="/academico/semestres" element={<ListaSemestre/>}></Route>
        </Routes>
        </Container>
      </BrowserRouter>
      

      {/* */}


      {/*     
  <Container>
        <Box title='teste1' cor='danger'>
          <p>teste1</p>
        </Box>
        <Box title='teste2' cor='success'>
          <p>teste2</p>
        </Box>
        <Row className="justify-content ps-0">
          <Col>
            <Cartao titulo="Palmeiras" src="https://i.superesportes.com.br/81WRvS0ZqVjw5kHq0bzEibTbpcs=/smart/imgsapp.mg.superesportes.com.br/app/foto_126510467054/2022/02/12/13330/20220212210407264685a.jpg" />
          </Col>
          <Col>
            <Cartao />
          </Col>
          <Col>
            <Cartao />
          </Col>
          <Col>
            <Cartao />
          </Col>

        </Row>




        <h1>Hello World</h1>

        <Button variant='outline-primary'>Salvar</Button>

        <Alert variant='danger'>
          PERIGO
        </Alert>
  </Container> */}
    </div>
  );
}

export default App;
