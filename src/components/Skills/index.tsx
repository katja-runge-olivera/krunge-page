import React from "react";
import './styles.scss';

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
		<div className="root">
						<div className="rectangle">
								<ul className="list">
								{skillsList.map((item, index) => (
													<li className="listItem">{skillsList[index]}</li>
								))}
								</ul>
						</div>
						<h2 className="skillsTitle">Skills</h2>
		</div>
);