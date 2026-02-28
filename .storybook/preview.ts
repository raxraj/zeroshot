import type { Preview } from "@storybook/react";
import React from "react";
import "../src/styles.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      // Set dark mode as default
      current: "dark",
      // Override the default dark theme
      dark: { appBg: "#0f172a", appContentBg: "#1e293b", barBg: "#1e293b" },
      // Override the default light theme
      light: { appBg: "#ffffff", appContentBg: "#f8fafc", barBg: "#f8fafc" },
      darkClass: "dark",
      lightClass: "light",
      stylePreview: true,
    },
    backgrounds: {
      disable: true, // Disable default backgrounds since we use dark mode addon
    },
    a11y: {
      config: {
        rules: [
          {
            // Disable color-contrast rule for now (can be enabled later)
            id: "color-contrast",
            enabled: false,
          },
        ],
      },
    },
  },
  decorators: [
    (Story) => {
      return React.createElement('div', { className: 'dark' },
        React.createElement('div', { className: 'bg-background text-foreground min-h-screen p-8' },
          React.createElement(Story)
        )
      );
    },
  ],
};

export default preview;
