import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Roboto', sans-serif;
	}
	body {
		height: 3000px;
		letter-spacing: 0.12em;
	}
	@media (max-width: 1300px) {
		
	}
`;
