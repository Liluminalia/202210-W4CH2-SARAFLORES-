import { SyntheticEvent, useState } from "react";
import "./Form.scss";

type User = {
    name: string;
    lastName: string;
    birthDate: string;
    gender: string;
    email: string;
    newsletter: boolean;
};

export function Form() {
    const user: User = {
        name: "",
        lastName: "",
        birthDate: "",
        gender: "",
        email: "",
        newsletter: false,
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
        <form onSubmit={handlerSubmit}>
            <legend className="title-form">Paso 1</legend>
            <div>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onInput={handleForm}
                    placeholder="Dime tu nombre"
                />
            </div>
            <div>
                <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onInput={handleForm}
                    placeholder="Dime tu apellido"
                />
            </div>
            <div>
                <input
                    type="text"
                    name="birthDate"
                    value={form.birthDate}
                    onInput={handleForm}
                    placeholder="instroduzca su fecha de nacimiento"
                />
            </div>
            <div>
                <select
                    onSelect={handleForm}
                    name="gender"
                    value={form.gender}
                    placeholder="Indique su género"
                >
                    <option value="male">Hombre</option>
                    <option value="female">Mujer</option>
                    <option value="other">Otro</option>
                    <option selected value="prefer not to mention">
                        Prefiero no indicarlo
                    </option>
                </select>
            </div>
            <div>
                <input
                    type="text"
                    name="email"
                    value={form.email}
                    onInput={handleForm}
                    placeholder="instroduzca su e-mail"
                />
            </div>
            <div>
                <label>
                    Suscribirse a nuestra Newslatter
                    <input
                        type="checkbox"
                        name="newsletter"
                        checked={form.newsletter}
                        onChange={handleForm}
                    />{" "}
                </label>
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
}
