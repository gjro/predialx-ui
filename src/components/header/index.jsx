/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from "./style.module.scss";

function VerticalMenu() {
	return (
		<>
			<div className={styles.header}>
				<ul>
					<li>
						<a className={styles.user} href="">
							<div className={styles.text}></div>
							<div className={styles.icon}></div>
						</a>
					</li>
				</ul>
			</div>
		</>
	);
}

export default VerticalMenu;
