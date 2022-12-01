import React from "react";
import { withDesign } from "storybook-addon-designs";
import Related from "./related";

const items = [
  {
    category: {
      href: "/category/beauty-routine",
      label: "Beauty routine",
    },
    description:
      "Celtic Elements is a Welsh, Vegan, Wellness brand. We use Welsh natural ingredients from the hillsides & coast of Wales in our Skincare, Body care and Well being ranges.",
    image: "https://source.unsplash.com/random/500x300",
    slug: "creating-a-positive-day",
    title: "Creating a Positive Day",
  },
  {
    category: {
      href: "/category/beauty-routine",
      label: "Beauty routine",
    },
    description:
      "Celtic Elements is a Welsh, Vegan, Wellness brand. We use Welsh natural ingredients from the hillsides & coast of Wales in our Skincare, Body care and Well being ranges.",
    image: "https://source.unsplash.com/random/500x300",
    slug: "creating-a-positive-day",
    title: "Creating a Positive Day",
  },
  {
    category: {
      href: "/category/beauty-routine",
      label: "Beauty routine",
    },
    description:
      "Celtic Elements is a Welsh, Vegan, Wellness brand. We use Welsh natural ingredients from the hillsides & coast of Wales in our Skincare, Body care and Well being ranges.",
    image: "https://source.unsplash.com/random/500x300",
    slug: "creating-a-positive-day",
    title: "Creating a Positive Day",
  },
];
const intro = {
  cta: {
    href: "/posts",
    label: "View all posts",
    target: null,
  },
  subtitle: "Related posts",
  text: "Multi Award Winning Spa Manager Clare Pritchard shares the story of Celtic Elements.",
  title: "Continue reading our beauty insights",
};

export const postsRelated = () => <Related intro={intro} items={items} />;

postsRelated.story = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/uihfnI2u5KSj2LuAVZR7lt/Celtic-Elements?node-id=969%3A521",
    },
  },
};

export default {
  component: Related,
  decorators: [withDesign],
  title: "Organisms/Related",
};
