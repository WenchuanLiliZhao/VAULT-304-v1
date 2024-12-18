import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Tag, Tags } from "./Tags";
import { PageLink } from "../../codes/functions/Links";
import { TAG_ROUTE_PARAMS, TAG_ROUTES } from "../../constants/routes";
import { Page } from "./PageShapes";
import { Layout } from "../../codes/components/layout/BasicLayout";

interface TagProps {
  tag: Tag;
  className?: string;
}

export const TagComponent: React.FC<TagProps> = ({ tag, className }) => {
  return (
    <PageLink
      page={`/tags/${encodeURIComponent(tag)}`}
      style={{ textDecoration: "none", color: "inherit" }}
      className={className}
    >
      <span className="tag">{tag}</span>
    </PageLink>
  );
};
// use as this:
// <TagComponent tag={Tags.Mathematics} />

export const TagPage: React.FC = () => {
  const { [TAG_ROUTE_PARAMS.TAG_NAME]: tagName } = useParams<{
    [key: string]: string;
  }>();
  // const [content, setContent] = useState<any[]>([]); // Replace `any` with your content type

  useEffect(() => {
    if (tagName && Object.values(Tags).includes(tagName as Tag)) {
      // Replace with your API call
      fetch(`/api/tags/${encodeURIComponent(tagName)}`)
        .then((response) => response.json())
        // .then((data) => setContent(data))
        .catch((error) => console.error(error));
    }
  }, [tagName]);

  if (!tagName || !Object.values(Tags).includes(tagName as Tag)) {
    return <div>Invalid Tag</div>;
  }

  const output: Page = {
    info: {
      slug: `${TAG_ROUTES}/${tagName}`,
      title: tagName,
      summary: "",
      pageType: "channel",
    },
    content: [],
  };

  return (
    <Layout page={output} />
  );
};
