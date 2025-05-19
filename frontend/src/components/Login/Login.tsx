import { LoginReturn } from "@/client-component";
import style from "./../global.module.css";
const Login = () => {
  return (
    <div className={style.container}>
      <div className={style.boxFormat}>
        <h1 className={style.titleWelcome}>Bienvenido o Bienvenida</h1>
        <p>Gracias por ser parte de nuestro emprendimiento</p>
        <p>A continuacion podras acceder a tu cuenta</p>
      </div>
      <div className={style.boxFormat}>
        <div className={style.boxContent}>
          <h1>Inicio de sesión</h1>
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
    </div>
  );
};

export default Login;
