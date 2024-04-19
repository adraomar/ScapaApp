import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate();

    const [data, setData] = useState({
        username: "",
        password: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(data.username === "admin" && data.password === "admin") {
            alert("Te has conectado correctamente");
            navigate("/main");
        }
        else alert("Nombre de usuario y/o contraseña inválido.");
    }; 

    return (
        <>
            <div className="container d-flex flex-column mt-3">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <div class="card">
                            <div class="card-header text-center">
                                Iniciar Sesion
                            </div>
                            <div class="card-body">
                                <form class="row g-3 needs-validation" onSubmit={handleSubmit} novalidate>
                                    <div class="col-12">
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" name="username" onChange={handleChange} value={data.username} />
                                            <label for="floatingInput">Nombre de usuario</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name="password" onChange={handleChange} value={data.password}/>
                                            <label for="floatingPassword">Contraseña</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="d-grid gap-2">
                                            <input class="btn btn-dark" type="submit" value="Conectarse"/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default LoginForm