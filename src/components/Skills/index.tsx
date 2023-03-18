import React from "react";
import * as styles from './styles.module.scss';

const skillsList = [
	"Javascript",
	"Typescript",
	"React",
	"HTML, CSS",
	"Gatsby",
	"UX/UI",
	"A/B testing",
	"Problem-solving",
	"Design thinking",
	"Adobe Suite",
	"Figma",
	"Stakeholder management"
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
	</div>
);