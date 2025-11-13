import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
	globalCss: {
		"html, body": {
			margin: 0,
			padding: 0,
		},
	},
	theme: {
		tokens: {
			colors: {
				primary: { value: "#1A202C" },
				secondary: { value: "#2D3748" },
				accent: { value: "#F6AD55" },
				text: { value: "#FFFFFF" },
				muted: { value: "#A0AEC0" },
				brand: {
					"500": { value: "tomato" },
				},
			},
		},
	},
});

export const system = createSystem(defaultConfig, config);
