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
                                <input type="text" onChange={(e)=> setEmail(e.target.value)} />
                            </div>
                            <div className="input-conteiner">
                                <span>Password</span>
                                <div style={{ width: "100%", position: "relative" }}>
                                    <input type="password" id="senha" onChange={(e) => setSenha(e.target)} />
                                    <section className="material-symbols-outlined eye" id="olho">
                                        visibility
                                    </section>
                                </div>
                            </div>
                            <div className="buttom" onClick={() => navigate('/logado')}>Login</div>
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
                                <input type="text" onChange={(e)=> setEmail(e.target.value)} />
                            </div>
                            <div className="input-conteiner">
                                <span>Password</span>
                                <div style={{ width: "100%", position: "relative" }}>
                                    <input type="password" id="senha" onChange={(e) => setSenha(e.target)} />
                                    <section className="material-symbols-outlined eye" id="olho">
                                        visibility
                                    </section>
                                </div>
                            </div>
                            <div className="buttom" onClick={() => navigate('/logado')}>Sign up</div>
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