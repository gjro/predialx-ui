/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from "./style.module.scss";
import backgroundImg from "../../assets/img/background-img.png";
import logo from "../../assets/img/logo.png";
import LoginForm from "../../components/forms/loginForm/index.jsx";

function LoginScreen() {
	return (
		<>
			<div className={styles.container}>
				<a href="">
					<img src={logo} alt="logo" />
				</a>
				<div className={styles.leftSide}>
					<div className={styles.leftContent}>
						<img src={backgroundImg} alt="Login Background"></img>
					</div>
				</div>
				<div className={styles.rightSide}>
					<div className={styles.rightContent}>
						<h2>Bem-vindo ao PredialX!</h2>
						<p>
							Por favor, entre na sua conta para ter acesso à
							plataforma.
						</p>
						<LoginForm />
					</div>
				</div>
			</div>
		</>
	);
}

export default LoginScreen;
