import { Routes, Route } from 'react-router-dom'
import AuthPrivate from '../middlewares/Auth'
import Login from '../pages/Login'
import Home from '../pages/Home'

const Router = () => {

    const token = false
    // Buscar em localstorage se exite token e se é igual ao token no banco
    // ao sair resetar token

    return(
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/home' element={<AuthPrivate><Home/></AuthPrivate>}/>
        </Routes>
    )
}

export default Router