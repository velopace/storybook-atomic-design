import Intro from "./intro";

const Template = (args) => <Intro {...args} />;

export const standardIntro = Template.bind({});
standardIntro.args = {
  cta: {
    href: "/posts",
    label: "View all posts",
    target: null,
  },
  subtitle: "Related posts",
  text: "Multi Award Winning Spa Manager Clare Pritchard shares the story of Celtic Elements.",
  title: "Continue reading our beauty insights",
};

export default {
  title: "Molecules/Intro",
  component: Intro,
  argTypes: {},
};
