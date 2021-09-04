import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Roboto', sans-serif;
	}
	body {
		letter-spacing: 0.12em;
	}
	img {
		max-width: 100%;
		
	}

	@media (max-width: 1300px) {
		
	}
`;
