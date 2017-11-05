import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/common/Header'
import App from './components/App'

class MainApp extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Header/>
                    <br/>
                    <div className="container">
                        <App/>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

export default MainApp