import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button, { ButtonProps } from "./Button";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

const Primary = Template.bind({}),
  Secondary = Template.bind({}),
  Accent = Template.bind({}),
  Ghost = Template.bind({}),
  Info = Template.bind({}),
  Warning = Template.bind({}),
  Success = Template.bind({}),
  Error = Template.bind({});

Primary.args = {
  children: "primary",
  variant: "primary",
};

Secondary.args = {
  children: "secondary",
  variant: "secondary",
};

Accent.args = {
  children: "accent",
  variant: "accent",
};

Ghost.args = {
  children: "ghost",
  variant: "ghost",
};

Info.args = {
  children: "info",
  variant: "info",
};

Warning.args = {
  children: "warning",
  variant: "warning",
};

Success.args = {
  children: "success",
  variant: "success",
};

Error.args = {
  children: "error",
  variant: "error",
};

export { Primary, Secondary, Accent, Ghost, Info, Warning, Success, Error };
