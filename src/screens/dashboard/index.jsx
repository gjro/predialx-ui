/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from "./style.module.scss";
import VerticalMenu from "../../components/verticalMenu";
import Header from "../../components/header";

function LoginScreen() {
	return (
		<>
			<div className={styles.container}>
				<div className="leftSide">
					<VerticalMenu />
				</div>
				<div className="rightSide">
					<Header />
					<div className="section">
						<div className="counter"></div>
						<div className="graphics"></div>
					</div>
					<div className="section">
						<table>
							<thead>
								<tr>
									<th>Cliente</th>
									<th>Colaborador</th>
									<th>Problema</th>
									<th>Data</th>
								</tr>
							</thead>
						</table>
					</div>
				</div>
			</div>
		</>
	);
}

export default LoginScreen;
