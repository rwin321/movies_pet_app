import React, { useEffect, useState } from 'react'
import '../styles/ContentView.css';

const Signin = () => { 
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [db, setDb] = useState({});

    useEffect(() => {
        const login = localStorage.getItem('data-login')
        const password = localStorage.getItem('data-password')
        setDb({login,password})
    }, []);


    const handleInputLogin=(e)=>{
        setLogin(e.target.value);
    }

    const handleInputPassword=(e)=>{
        setPassword(e.target.value);
    }

    const hangleSubmit=(e)=>{
        e.preventDefault();
        const data = {
            login,
            password
        } 
        if (data.login === db.login && data.password===db.password) {
            alert('redirect home')
        } else {
            alert('Неверный логин или пароль')
        }
    }

    return ( 
        <div className="row signin">
            <h1 style={{textAlign:'center'}}> Авторизация </h1>
            <form className="col s12">
                <div className="row">
                <div className="input-field col s6">
                    <input  id="first_name" type="text" className="validate" value={login} onChange={(e)=>handleInputLogin(e)}/>
                    <label htmlFor="first_name">Логин</label>
                </div>
                <div className="input-field col s6">
                        <input id="password" type="password" className="validate" value={password} onChange={(e)=>handleInputPassword(e)} />
                    <label htmlFor="password">Пароль</label>
                </div>
                </div>
                <button className="btn waves-effect waves-light" type="submit" name="action" onClick={(e)=>hangleSubmit(e)}>Войти
    </button>

            </form>
        </div>
    )
}

export default Signin;

