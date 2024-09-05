import {  BrowserRouter ,Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/Home'


function RouterApp() {
    return(
        <>
            <BrowserRouter>
                <Header></Header>
                <Routes>
                    <Route path='/' element={<Home></Home>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default RouterApp