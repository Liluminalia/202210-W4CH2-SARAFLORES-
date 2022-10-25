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

export function Paso1() {
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
        <form onSubmit={handlerSubmit} className="container-form">
            <legend className="title-form">Paso 1</legend>
            <div className="form__item">
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onInput={handleForm}
                    placeholder="Dime tu nombre"
                    required
                />
            </div>
            <div className="form__item">
                <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onInput={handleForm}
                    placeholder="Dime tu apellido"
                    required
                />
            </div>
            <div className="form__item">
                <input
                    type="date"
                    name="birthDate"
                    placeholder="Indica tu fecha de nacimiento"
                    required
                />
            </div>
            <div className="item__radio">
                Indica tu género
                <label>
                    <input type="radio" name="gender" value="male" />
                    Male
                </label>
                <label>
                    <input type="radio" name="gender" value="female" />
                    Female
                </label>
                <label>
                    <input type="radio" name="gender" value="other" />
                    Other
                </label>
                <label>
                    <input type="radio" name="gender" value="not-mention" />
                    Prefiero no indicarlo
                </label>
            </div>
            <div className="form__item">
                <input
                    type="email"
                    name="email"
                    placeholder="Indica tu e-mail"
                    required
                />
            </div>
            <div className="form__item">
                <label>
                    Suscribirse a nuestra Newslatter
                    <input
                        type="checkbox"
                        name="newsletter"
                        required
                        checked={form.newsletter}
                        onChange={handleForm}
                    />{" "}
                </label>
            </div>
            <button>Paso 2</button>
        </form>
    );
}
