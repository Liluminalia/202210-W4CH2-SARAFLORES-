import { SyntheticEvent, useState } from "react";
import "./Form.scss";

type UserAccount = {
    userName: string;
    password: string;
    repeatPassword: string;
    account: string;
};

export function Paso2() {
    const UserAccount: UserAccount = {
        userName: "",
        password: "",
        repeatPassword: "",
        account: "",
    };

    const [form, setForm] = useState(UserAccount);

    const handlerSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
    };

    const handleForm = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setForm({
            ...form,
            [element.name]:
                element.type === "checkbox" ? element.checked : element.value,
        });
    };

    return (
        <form onSubmit={handlerSubmit} className="container-form">
            <legend className="title-form">Paso 2</legend>
            <div>
                <legend>Username</legend>
                <input
                    type="text"
                    name="username"
                    placeholder="usuario"
                    value={form.userName}
                    onInput={handleForm}
                />
            </div>
            <div>
                <legend>Password</legend>
                <input
                    type="password"
                    name="password"
                    placeholder="contraseña"
                    value={form.password}
                    onInput={handleForm}
                />
            </div>
            <div>
                <legend>Repeat Password</legend>
                <input
                    type="password"
                    name="repeatPassword"
                    value={form.repeatPassword}
                    onInput={handleForm}
                />
            </div>
            <div>
                <select>
                    Tipo de cuenta
                    <option value="personal">personal</option>
                    <option value="pro">pro</option>
                    <option selected value="business">
                        business
                    </option>
                </select>
            </div>
            <button
                onInput={() => {
                    // codigo comentado xq no recuerdo bien como hacer la herencia y sino no me funciona netlify
                    // handlerCounter(-1);
                }}
            >
                Paso 2
            </button>
            <button
                onInput={() => {
                    // codigo comentado xq no recuerdo bien como hacer la herencia y sino no me funciona netlify
                    // handlerCounter(+1);
                }}
            >
                Paso 3
            </button>
        </form>
    );
}
