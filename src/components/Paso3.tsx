import { SyntheticEvent, useState } from "react";
import "./Form.scss";

type User = {
    name: string;
    lastName: string;
    birthDate: string;
    gender: string;
    email: string;
    newsletter: boolean;
    password: string;
    repeatPassword: string;
};

export function Paso3() {
    const user: User = {
        name: "",
        lastName: "",
        birthDate: "",
        gender: "",
        email: "",
        newsletter: false,
        password: "",
        repeatPassword: "",
    };

    const [form, setForm] = useState(user);

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
            <legend className="title-form">Paso 1</legend>
            codigo comentado xq no recuerdo bien como hacer la herencia y sino
            no me funciona netlify
            <div>
                {" "}
                <h2>Verifique sus datos</h2>
                <p>Name: {form.name}</p>
                <p>Lastname: {form.lastName}</p>
                <p>Birthdate: {form.birthDate}</p>
                <p>Gender: {form.gender}</p>
                <p>Email: {form.email}</p>
                <p>Newsletter: {form.newsletter}</p>
                <p>Username: {form.name}</p>
                <p>Password: {form.password}</p>
                <p>Repeat password: {form.repeatPassword}</p>
            </div>
            <button
                type="submit"
                onClick={() => {
                    // codigo comentado xq no recuerdo bien como hacer la herencia y sino no me funciona netlify
                    // handlerCounter(+1);
                }}
            >
                Enviar
            </button>
            <button
                onInput={() => {
                    // codigo comentado xq no recuerdo bien como hacer la herencia y sino no me funciona netlify
                    // handlerCounter(-1);
                }}
            >
                Paso 2
            </button>
        </form>
    );
}
