import Intro from "./intro";

const Template = (args) => <Intro {...args} />;

export const standardIntro = Template.bind({});
standardIntro.args = {
  subtitle: "related posts",
  title: "continue Reading Our Beauty Insights",
  text: "Multi Award Winning Spa Manager Clare Pritchard shares the story of Celtic Elements",
  cta: {
    href: "https://domain.com",
    label: "View All Posts",
    target: "_blank",
  },
};

export default {
  title: "Molecules/Intro",
  component: Intro,
  argTypes: {},
};
