/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from "./style.module.scss";
import { Link } from "react-router-dom";

function Login() {
	return (
		<>
			<div className={styles.container}>
				<form>
					<div>
						<label htmlFor="loginEmail">Email</label>
						<input type="email" id="email" />
					</div>
					<div>
						<label htmlFor="loginPassword">Senha</label>
						<input type="password" id="password" />
					</div>
					<Link to="/dashboard">
						<button type="submit">Entrar</button>
					</Link>
				</form>
			</div>
		</>
	);
}

export default Login;
