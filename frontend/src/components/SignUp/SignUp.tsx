import { LoginReturn } from "@/client-component";
import style from "./../global.module.css";

export const SignUp = () => {
  return (
    <div className={style.container}>
      <div className={style.boxFormat}>
        <div className={style.boxContent}>
          <h1>Nuevos usuarios</h1>
          <form className={style.form}>
            <label htmlFor="username">Usuario</label>
            <input
              type="text"
              id="username"
              name="username"
              required
              className={style.inputForm}
            />
            <br />
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className={style.inputForm}
            />
            <br />
            <div>
              <button type="submit" className={style.buttonStyle}>
                Ingresar
              </button>
              <LoginReturn />
            </div>
          </form>
        </div>
      </div>
      <div className={style.boxFormat}>
        <h1 className={style.titleWelcome}>Bienvenido o Bienvenida</h1>
        <p>A continuacion podras registrarte como nuevo usuario</p>
        <p>Se parte de este emprendimiento y aprovecha los beneficios </p>
      </div>
    </div>
  );
};
