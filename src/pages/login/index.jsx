import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import $ from 'jquery'
import "./style.scss"

const Login = () => {

    const navigate = useNavigate()

    const [senhas, setSenha] = useState()
    const [email, setEmail] = useState()

    const [field, setField] = useState(true)

    var senha = $('#senha');
    var olho = $("#olho");

    olho.mousedown(function () {
        senha.attr("type", "text");
    });

    olho.mouseup(function () {
        senha.attr("type", "password");
    });

    const login = async () => {
        const options = {
            body: JSON.stringify({ email: email, senha: senhas }),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        await fetch('http://localhost:3003/user', options)
            .then(res => res.json())
            .then(data => {
                if (data.status == 200) {
                    console.log("Usuário existe")
                } else {
                    console.log("Usuário não existe")
                }
            })
    }

    const cadastrar = async () => {
        const options = {
            body: JSON.stringify({ email: email, senha: senhas }),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        await fetch('http://localhost:3003/create', options)
        .then(res => res.json())
        .then(data => {
            if (data.status == 200) {
                console.log("Usuário cadastrado com sucesso")
            } else {
                console.log("Usuario já existe")
            }
        })
    }

    return (
        <div className="main-conteiner-login">

            {
                field == true
                    ?
                    <div className="contaiener-login-register">
                        <div>
                            <div className="cadastro" onClick={() => setField(!field)}>sign-up</div>
                            <h2>Sign in</h2>
                            <div className="input-conteiner">
                                <span>Email</span>
                                <input type="text" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="input-conteiner">
                                <span>Password</span>
                                <div style={{ width: "100%", position: "relative" }}>
                                    <input type="password" id="senha" onChange={(e) => setSenha(e.target.value)} />
                                    <section className="material-symbols-outlined eye" id="olho">
                                        visibility
                                    </section>
                                </div>
                            </div>
                            <div className="buttom" onClick={() => login()}>Login</div>
                        </div>

                        <div>
                            <img src={require('../../image/border.png')} alt="" />
                        </div>
                    </div>
                    :
                    false
            }

            {
                field == false
                    ?
                    <div className="contaiener-login-register">
                        <div>
                            <div className="cadastro" onClick={() => setField(!field)}>sign-in</div>
                            <h2>Sign up</h2>
                            <div className="input-conteiner">
                                <span>Email</span>
                                <input type="text" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="input-conteiner">
                                <span>Password</span>
                                <div style={{ width: "100%", position: "relative" }}>
                                    <input type="password" id="senha" onChange={(e) => setSenha(e.target.value)} />
                                    <section className="material-symbols-outlined eye" id="olho">
                                        visibility
                                    </section>
                                </div>
                            </div>
                            <div className="buttom" onClick={() => cadastrar()}>Sign up</div>
                        </div>
                        <div>
                            <img src={require('../../image/border.png')} alt="" />
                        </div>
                    </div>
                    :
                    false
            }


        </div>
    )
}

export default Login;