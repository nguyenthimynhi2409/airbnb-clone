/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-essentials", // gồm actions, controls, docs, backgrounds, viewport...
  ],
};
export default config;
