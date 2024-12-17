import { PostFeed } from "../../../codes/components/card&feed/PostFeed";
import { Section } from "../../../codes/components/layout/layoutComponent/sections/Section";
import { Page } from "../../_types/PageShapes";
import { PostsByDate } from "../../SortPosts";

const Overview: Page = {
  info: {
    id: "", // this is home
    title: "Overview",
    summary: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos voluptas aperiam inventore eum doloremque. Quibusdam adipisci quos ea vel. Neque consectetur sunt consequatur vero delectus consequuntur deleniti commodi sit cumque!",
    pageType: "channel",
  },
  content: [
    // begin

    <Section title="Projects">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, modi architecto sunt voluptate atque ducimus iusto facere vel cum? Illo molestias labore laboriosam, porro laudantium eos corporis iste veritatis impedit.</p>
    </Section>,

    <Section title="All Posts">
      <PostFeed posts={PostsByDate} />
    </Section>
    
    // end
  ],
};

export default Overview;
