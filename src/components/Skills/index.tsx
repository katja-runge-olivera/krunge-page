import React from "react";
import * as styles from './styles.module.scss';

const skillsList = [
		"Javascript",
		"Typescript",
		"React",
		"Gatsby",
		"HTML, CSS",
		"UX/UI",
		"Design",
		"A/B testing",
		"Problem-solving",
		"Design thinking",
		"Adobe Suite",
		"Figma",
		"Stakeholder management and communication"
];

export const Skills = () => (
		<div className={styles.root}>
						<div className={styles.rectangle}>
								<ul className={styles.list}>
								{skillsList.map((item, index) => (
													<li className={styles.listItem}>{skillsList[index]}</li>
								))}
								</ul>
						</div>
						<h2 className={styles.skillsTitle}>Skills</h2>
		</div>
);