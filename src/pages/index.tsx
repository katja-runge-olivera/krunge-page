import React from "react"
import { Header } from "../components/Header"
import { Head } from "../components/Head";
import { Hero } from "../components/Hero";
import { Skills } from "../components/Skills";
import './styles.module.scss';


// markup
const IndexPage = () => {
  return (
				<React.Fragment>
								<Head />
								<body>
											<Header />
											<Hero />
											<Skills />
								</body>
				</React.Fragment>
)};

export default IndexPage
