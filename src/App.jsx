
import { Routes, Route } from 'react-router-dom'
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Historia } from "./components/Historia"
import { Contato } from "./components/Contato"
import { Produto } from "./components/Produto"
import { Missao } from "./components/Missao"
import { Home } from "./components/Home"
import { Login } from "./components/Login"
import './index.css'

function App() {
  return (
    <div>
      <Header />

      <div>
        <Routes>

          <Route path='/' element={<Home nomePagina='Página Inicial' />} />
          <Route path='/missao' element={<Missao nomePagina='Nossa Missão' missao='Missão:' visao='Visão:' />} />
          <Route path='/produto' element={<Produto nomePagina='Nossos Produtos' />} />
          <Route path='/historia' element={<Historia nomePagina='Nossa História' />} />
          <Route path='/contato' element={<Contato nomePagina='Contato' telContato='(32) 9 9999-9999' emailContato='speedwheels@gmail.com' />} />
          <Route path='/login' element={<Login nomePagina='Login' />} />

        </Routes>
      </div>
      <Footer brunoFooter='DevBrzera' pedroFooter='PedroTheDevv' erickFooter='Erickdevz' />
    </div>

  )
}

export default App
