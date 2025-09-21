import Button from "../components/Button";

export default {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
    primary: { control: "boolean" },
  },
};

export const Primary = {
  args: {
    label: "Primary Button",
    primary: true,
  },
};

export const Secondary = {
  args: {
    label: "Secondary Button",
    primary: false,
  },
};
