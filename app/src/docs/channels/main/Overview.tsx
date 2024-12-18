import { PostFeed } from "../../../codes/components/card&feed/PostFeed";
import { SmallProjectFeed } from "../../../codes/components/card&feed/SmallProjectFeed";
import { Section } from "../../../codes/components/layout/layoutComponent/sections/Section";
import { Page } from "../../_types/PageShapes";
import { FeatureProject, PostsByDate } from "../../Sort";

const Overview: Page = {
  info: {
    slug: "", // this is home
    title: "Overview",
    summary: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos voluptas aperiam inventore eum doloremque. Quibusdam adipisci quos ea vel. Neque consectetur sunt consequatur vero delectus consequuntur deleniti commodi sit cumque!",
    pageType: "channel",
  },
  content: [
    // begin

    <Section title="Projects">
      <SmallProjectFeed projects={FeatureProject} />
    </Section>,

    <Section title="Latest Posts">
      <PostFeed posts={PostsByDate} />
    </Section>
    
    // end
  ],
};

export default Overview;
