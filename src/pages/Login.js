import {useState} from "react";
import api from "../service/api";
import Swal from "sweetalert2";
import React from "react";
import {login} from "../service/auth";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function handleLogin(e) {
        e.preventDefault();
        const payload = {
            'usernameOrEmail': email,
            'password': password
        };
        api.post("/auth/signin", payload).then(response => {
            login(response.data.accessToken);
            window.location.href = "/";
        }).catch(error => {
            Swal.fire({
                title: 'Erro!',
                text: "Não foi possível fazer login",
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        })
    }
    return (
        <div className="login-page">
            <div className="card card-outline card-primary" style={{width: 400}}>
                <div className="card-header text-center">
                    <a href="../../index.html" className="h1"><b>T.I </b> Company</a>
                </div>
                <div className="card-body">
                    <p className="login-box-msg">Faça login para entrar</p>

                    <form onSubmit={handleLogin}>
                        <div className="input-group mb-3">
                            <input type="email" className="form-control" placeholder="Email" onChange={event => setEmail(event.target.value)} />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-envelope"></span>
                                </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input type="password" className="form-control" placeholder="Senha" onChange={event => setPassword(event.target.value)}/>
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-lock"></span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-8">
                                <div className="icheck-primary">
                                    <input type="checkbox" id="remember" />
                                    <label htmlFor="remember">
                                        Lembrar
                                    </label>
                                </div>
                            </div>
                            <div className="col-4">
                                <button type="submit" className="btn btn-primary btn-block">Entrar!</button>
                            </div>

                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}
