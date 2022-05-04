/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from "./style.module.scss";
import logo from "../../assets/img/logo.png";

function VerticalMenu() {
	return (
		<>
			<div className={styles.verticalMenu}>
				<a href="">
					<img src={logo} alt="logo" />
				</a>
				<ul className={styles.navigation}>
					<li>Dashboard</li>
					<li>Colaborador</li>
					<li>Cliente</li>
					<li>Ordens de Serviço</li>
				</ul>
			</div>
		</>
	);
}

export default VerticalMenu;
