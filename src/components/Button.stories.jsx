import React from "react";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    label: { control: "text" },
    variant: {
      control: {
        type: "select",
        options: ["primary", "secondary", "danger", "disabled"],
      },
    },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
    onClick: { action: "clicked" },
  },
};

const Template = (args) => {
  let sizeClass = "";
  switch (args.size) {
    case "small":
      sizeClass = "px-2 py-1 text-sm";
      break;
    case "medium":
      sizeClass = "px-4 py-2 text-base";
      break;
    case "large":
      sizeClass = "px-8 py-4 text-lg";
      break;
    default:
      sizeClass = "px-4 py-2 text-base";
  }
  return <Button {...args} className={sizeClass} />;
};

// Stories
export const Primary = Template.bind({});
Primary.args = { label: "Primary", variant: "primary", size: "medium" };

export const Secondary = Template.bind({});
Secondary.args = { label: "Secondary", variant: "secondary", size: "medium" };

export const Danger = Template.bind({});
Danger.args = { label: "Danger", variant: "danger", size: "medium" };

export const Disabled = Template.bind({});
Disabled.args = { label: "Disabled", variant: "disabled", size: "medium" };
