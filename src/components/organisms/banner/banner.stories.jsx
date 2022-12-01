import { withDesign } from "storybook-addon-designs";
import Banner from "./banner";

const Template = (args) => <Banner {...args} />;

export const standardBanner = Template.bind({});
standardBanner.args = {
  content:
    "Multi Award Winning Spa Manager Clare Pritchard shares the story of Celtic Elements.",
  cta: {
    title: "Lowered action",
    url: "/discount",
  },
  title: "Launch discount",
  variant: "primary",
};

standardBanner.story = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/uihfnI2u5KSj2LuAVZR7lt/Celtic-Elements?node-id=926%3A616",
    },
  },
};

export default {
  component: Banner,
  decorators: [withDesign],
  title: "Organisms/Banner",
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "dark", "light"],
    },
  },
};
