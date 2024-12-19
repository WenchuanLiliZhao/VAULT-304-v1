import { MD } from "../../../codes/components/layout/articleComponents/_MD";
import { Page } from "../../_types/PageShapes";
import { Tags } from "../../_types/Tags";
import { AllAuthors } from "../../AllAuthors";

const Post_4: Page = {
  info: {
    slug: "post_4",
    title: "The Controversy on the Axiom of Choice",
    summary: "Aestibulum tristique metus nec ipsum pellentesque tincidunt. Etiam vulputate condimentum leo. Praesent scelerisque ante ac sem cursus dignissim.",
    pageType: "post",
  },
  
  postInfo: {
    update: [2019, 8, 5],
    cover: "",
    author: AllAuthors.Wenchuan,
    tags: [Tags.LifeStyle, Tags.Mathematics]
  },

  content: [
`
Lorem **ipsum** dolor sit amet, consectetur adipiscing elit. Vivamus tempus, enim ac fermentum malesuada, magna neque lobortis mauris, sit amet cursus neque erat vitae risus. Vestibulum commodo lectus rutrum, viverra mauris vel, iaculis urna.

$$
\\forall \\varepsilon \\exists \\delta \\forall x
$$

Sed ultricies nulla sit amet lobortis fermentum. In vitae tincidunt eros. Sed et nunc vitae mi dignissim consectetur. Sed in tortor quam. Proin sollicitudin lacinia velit, vel pretium enim lobortis sed. Nullam odio ipsum, ultricies vel elit a, dignissim placerat ante. Cras velit purus, tempus in vulputate auctor, congue nec sapien. Quisque mollis dignissim nisi sed iaculis. Quisque eleifend erat nibh, et iaculis nunc vehicula in. Integer id tortor ut justo congue feugiat.

- Fruits
  1. Apple
  2. Banana
- Vegetables
  - Carrot
  - Lettuce

Sed in $tortor$ quam. \`Proin sollicitudin\` lacinia velit, vel pretium enim lobortis sed. Nullam odio ipsum, ultricies vel elit a, dignissim placerat ante. Cras velit purus, tempus in vulputate auctor, congue nec sapien. Quisque mollis dignissim nisi sed iaculis. Quisque eleifend erat nibh, et iaculis nunc vehicula in. Integer id tortor ut justo congue feugiat.

${MD.Fig({
  img: "https://i.pinimg.com/1200x/43/fb/07/43fb0779adc4f62763cc95feb895f8c8.jpg",
  size: "full",
  caption: "Fusce a cursus erat. Etiam id nisl quis ex porttitor maximus"
})}

Maecenas a sem erat. Ut congue purus in enim consectetur feugiat. Sed pellentesque consequat augue nec lacinia. Donec ullamcorper faucibus elit, vitae molestie velit. Duis ornare dictum viverra. Pellentesque molestie sem sit amet diam interdum, vitae maximus est luctus. Phasellus ac dui sed lacus tincidunt feugiat ut sed justo. Fusce a cursus erat. Etiam id nisl quis ex porttitor maximus. Nulla scelerisque, risus ut dignissim sollicitudin, velit sem consectetur nisl, non pharetra enim leo a libero. Quisque interdum a massa ut varius. Cras sit amet mattis ipsum. Aliquam mollis enim nec sem molestie, sed convallis mi sodales.

Ut sed varius ex. Nullam iaculis, neque sed dignissim cursus, ex libero aliquam dolor, nec mollis velit massa vel lacus. Aenean varius arcu ipsum, vel volutpat justo aliquet ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut magna magna, malesuada id purus a, egestas laoreet lectus. Morbi ultrices hendrerit velit, vitae molestie enim eleifend feugiat. Ut feugiat pellentesque enim, ut tristique felis pellentesque sollicitudin. Etiam a aliquet quam, rhoncus lacinia lorem. Sed porttitor, massa dapibus mattis hendrerit, quam lacus rhoncus nulla, non varius eros ipsum et tellus.

Nam scelerisque vel ante quis imperdiet. Etiam eu metus sit amet lacus fermentum pretium. Pellentesque commodo bibendum justo, at euismod leo viverra id. Duis dignissim tristique nisl, ac ullamcorper lorem porta in. Phasellus tristique orci non cursus fringilla. Nam faucibus libero lorem, vel posuere lacus lobortis at. Fusce nec nunc a ante vestibulum pellentesque. Fusce vitae elit nec erat pretium ornare quis vitae sem. Integer vulputate nulla nec dapibus euismod. Ut in consectetur nunc. In et ullamcorper urna, eu ultrices ligula. Nulla consectetur tellus pellentesque dapibus sagittis. Nulla elementum nibh in ipsum lacinia, vel lobortis nunc lobortis. Nullam dapibus diam eu egestas ornare. Morbi a sem sit amet libero gravida interdum. Sed consequat lacinia quam, et pharetra turpis pretium eget.

Nulla facilisi. Praesent sit amet pulvinar enim, vitae tincidunt ipsum. Cras eu semper mauris. Sed tincidunt non dolor eu sodales. In hac habitasse platea dictumst. Duis eu erat tincidunt, vulputate purus at, tristique mauris. Nam commodo lobortis dui, a tempus enim tristique non. Suspendisse semper ex eget nisl facilisis consectetur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla tristique congue orci, quis luctus purus. Ut non libero faucibus, placerat lectus ut, iaculis odio. Integer sed feugiat nibh. Proin luctus massa sed ex facilisis, sit amet tristique lacus ornare.

\`\`\`scss
.article {
  max-width: var(--spacing-max-content-width);
  margin: 0 auto;

  > * {
    max-width: var(--spacing-max-para-width);
    margin: 0 auto;

    &:first-child {
      margin-top: 0px !important;
    }
  }

  font-size: 20px;
  font-family: var(--ff-serif);
  line-height: 1.5;

  p, & > ol, & > ul {
    margin-top: 1em;
    margin-bottom: 1em;
  }

  ul {
    li {
      list-style-type: disc;
    }
  }

  ol {
    li {
      list-style: decimal;
    }
  }

  li {
    margin-left: 1.5em;
  }
}
\`\`\`

Maecenas a sem erat. Ut congue purus in enim consectetur feugiat. Sed pellentesque consequat augue nec lacinia. Donec ullamcorper faucibus elit, vitae molestie velit. Duis ornare dictum viverra. Pellentesque molestie sem sit amet diam interdum, vitae maximus est luctus. Phasellus ac dui sed lacus tincidunt feugiat ut sed justo. Fusce a cursus erat. Etiam id nisl quis ex porttitor maximus. Nulla scelerisque, risus ut dignissim sollicitudin, velit sem consectetur nisl, non pharetra enim leo a libero. Quisque interdum a massa ut varius. Cras sit amet mattis ipsum. Aliquam mollis enim nec sem molestie, sed convallis mi sodales.

Ut sed varius ex. Nullam iaculis, neque sed dignissim cursus, ex libero aliquam dolor, nec mollis velit massa vel lacus. Aenean varius arcu ipsum, vel volutpat justo aliquet ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut magna magna, malesuada id purus a, egestas laoreet lectus. Morbi ultrices hendrerit velit, vitae molestie enim eleifend feugiat. Ut feugiat pellentesque enim, ut tristique felis pellentesque sollicitudin. Etiam a aliquet quam, rhoncus lacinia lorem. Sed porttitor, massa dapibus mattis hendrerit, quam lacus rhoncus nulla, non varius eros ipsum et tellus.

Nam scelerisque vel ante quis imperdiet. Etiam eu metus sit amet lacus fermentum pretium. Pellentesque commodo bibendum justo, at euismod leo viverra id. Duis dignissim tristique nisl, ac ullamcorper lorem porta in. Phasellus tristique orci non cursus fringilla. Nam faucibus libero lorem, vel posuere lacus lobortis at. Fusce nec nunc a ante vestibulum pellentesque. Fusce vitae elit nec erat pretium ornare quis vitae sem. Integer vulputate nulla nec dapibus euismod. Ut in consectetur nunc. In et ullamcorper urna, eu ultrices ligula. Nulla consectetur tellus pellentesque dapibus sagittis. Nulla elementum nibh in ipsum lacinia, vel lobortis nunc lobortis. Nullam dapibus diam eu egestas ornare. Morbi a sem sit amet libero gravida interdum. Sed consequat lacinia quam, et pharetra turpis pretium eget.

Nulla facilisi. Praesent sit amet pulvinar enim, vitae tincidunt ipsum. Cras eu semper mauris. Sed tincidunt non dolor eu sodales. In hac habitasse platea dictumst. Duis eu erat tincidunt, vulputate purus at, tristique mauris. Nam commodo lobortis dui, a tempus enim tristique non. Suspendisse semper ex eget nisl facilisis consectetur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla tristique congue orci, quis luctus purus. Ut non libero faucibus, placerat lectus ut, iaculis odio. Integer sed feugiat nibh. Proin luctus massa sed ex facilisis, sit amet tristique lacus ornare.
`
  ],
};

export default Post_4;
