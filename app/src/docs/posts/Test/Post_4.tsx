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
Maecenas a sem erat. Ut congue purus in enim consectetur feugiat. Sed pellentesque consequat augue nec lacinia. Donec ullamcorper faucibus elit, vitae molestie velit. Duis ornare dictum viverra. Pellentesque molestie sem sit amet diam interdum, vitae maximus est luctus. Phasellus ac dui sed lacus tincidunt feugiat ut sed justo. Fusce a cursus erat. Etiam id nisl quis ex porttitor maximus. Nulla scelerisque, risus ut dignissim sollicitudin, velit sem consectetur nisl, non pharetra enim leo a libero. Quisque interdum a massa ut varius. Cras sit amet mattis ipsum. Aliquam mollis enim nec sem molestie, sed convallis mi sodales.

## Introduction

Ut sed varius ex. Nullam iaculis, neque sed dignissim cursus, ex libero aliquam dolor, nec mollis velit massa vel lacus. Aenean varius arcu ipsum, vel volutpat justo aliquet ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut magna magna, malesuada id purus a, egestas laoreet lectus. Morbi ultrices hendrerit velit, vitae molestie enim eleifend feugiat. Ut feugiat pellentesque enim, ut tristique felis pellentesque sollicitudin. Etiam a aliquet quam, rhoncus lacinia lorem. Sed porttitor, massa dapibus mattis hendrerit, quam lacus rhoncus nulla, non varius eros ipsum et tellus.

### The Axiom Schema of Specification

Nam scelerisque vel ante quis imperdiet. Etiam eu metus sit amet lacus fermentum pretium. Pellentesque commodo bibendum justo, at euismod leo viverra id. Duis dignissim tristique nisl, ac ullamcorper lorem porta in. Phasellus tristique orci non cursus fringilla. Nam faucibus libero lorem, vel posuere lacus lobortis at. Fusce nec nunc a ante vestibulum pellentesque. Fusce vitae elit nec erat pretium ornare quis vitae sem. Integer vulputate nulla nec dapibus euismod. Ut in consectetur nunc. In et ullamcorper urna, eu ultrices ligula. Nulla consectetur tellus pellentesque dapibus sagittis. Nulla elementum nibh in ipsum lacinia, vel lobortis nunc lobortis. Nullam dapibus diam eu egestas ornare. Morbi a sem sit amet libero gravida interdum. Sed consequat lacinia quam, et pharetra turpis pretium eget.

Let $\\mathbb X = (X, \\| \\cdot \\|_{\\mathbb X})$ and let $\\mathbb Y = (Y< \\| \\cdot \\|_{\\mathbb Y})$.

## Introduction of $\\phi$

$f$ is said to be differentiable at a point $\\mathbf p \\in \\mathbb X$ iff for any $\\mathbf t \\in X \\setminus \\{ \\mathbf 0_{\\mathbb X} \\}$, there exists a linear mapping $\\phi: \\mathbb X \\to \\mathbb Y$ such that

$$
f(\\mathbf p + \\mathbf t) = f(\\mathbf p) + \\phi(\\mathbf t) + o(\\mathbf t)  \\quad \\text{as $\\mathbf t \\to \\mathbf 0_{\\mathbb X}$}.
$$

---

### Theorem: Uniqueness of $\\phi$

The linear mapping $\\phi$ is unique.

**Proof.** Suppose there exists another linear mapping $\\lambda: \\mathbb X \\to \\mathbb Y$ such that for any $\\mathbf t \\in X \\setminus \\{\\mathbf 0_{\\mathbb X}\\}$,

$$
f(\\mathbf p + \\mathbf t) = f(\\mathbf p) + \\lambda(\\mathbf t) + o_1(\\mathbf t)  \\quad \\text{as $\\mathbf t \\to \\mathbf 0_{\\mathbb X}$},
$$

there we have

$$
\\begin{aligned}
\\phi(\\mathbf{\\hat t}) - \\lambda(\\mathbf{\\hat t}) &= \\lim_{\\mathbf t \\to \\mathbf 0_{\\mathbb X}} \\frac{\\phi(\\mathbf t) - \\lambda(\\mathbf t)}{\\| \\mathbf t \\|_{\\mathbb X}} \\\\
&= \\lim_{\\mathbf t \\to \\mathbf 0_{\\mathbb X}} \\frac{o(\\mathbf t) - o_1(\\mathbf t)}{\\| \\mathbf t \\|_{\\mathbb X}} \\\\
&= \\lim_{\\mathbf t \\to \\mathbf 0_{\\mathbb X}} \\frac{\\left. o_2(\\mathbf t) \\right|_{\\text{as } \\mathbf t \\to \\mathbf 0_{\\mathbb X}}}{\\| \\mathbf t \\|_{\\mathbb X}} \\\\
&= \\mathbf 0_{\\mathbb Y}.
\\end{aligned}
$$

As $\\mathbf t$ is arbitrarily given, the set $\\left\\{ \\mathbf{\\hat t}: \\mathbf t \\in \\mathbb X \\right\\}$ contains all possible directions in $\\mathbb X$. Thus, $\\phi = \\lambda$.

$\\blacksquare$

---

### Theorem: Alternative Definitions of Differentiable Mappings

$f$ is differentiable at $\\mathbf p$ iff there exists a linear mapping $\\phi: \\mathbb X \\to \\mathbb Y$ such that for any $\\mathbf t \\in X \\setminus \\{ \\mathbf 0_{\\mathbb X}\\}$,

$$
\\lim_{\\mathbf t \\to \\mathbf 0_{\\mathbb X}} \\frac{f(\\mathbf p + \\mathbf t) - f(\\mathbf p) - \\phi(\\mathbf t)}{\\| \\mathbf t \\|_{\\mathbb X}} = \\mathbf 0_{\\mathbb Y};
$$

or, equivalently,

$$
\\lim_{\\mathbf t \\to \\mathbf 0_{\\mathbb X}} \\frac{\\|f(\\mathbf p + \\mathbf t) - f(\\mathbf p) - \\phi(\\mathbf t)\\|_{\\mathbb Y}}{\\| \\mathbf t \\|_{\\mathbb X}} = 0.
$$

Equivalently, $f$ is differentiable at $\\mathbf p$ iff there exists a linear mapping $\\phi: \\mathbb X \\to \\mathbb Y$ such that for any $t \\in \\mathbb R \\setminus \\{0\\}$ and for any $\\mathbf u \\in X \\setminus \\{\\mathbf 0_{\\mathbb X}\\}$,

$$
f(\\mathbf p + t\\mathbf u) = f(\\mathbf p) + \\lambda(t\\mathbf u) + o(t) \\quad \\text{as $t \\to 0$};
$$

or equivalently,

$$
\\lim_{ t \\to 0_{\\mathbb X}} \\frac{f(\\mathbf p + t\\mathbf u) - f(\\mathbf p) - \\phi(t\\mathbf u)}{t} = \\mathbf 0_{\\mathbb Y}.
$$

**Proof.** $f$ is differentiable iff there exists a linear mapping $\\phi: \\mathbb X \\to \\mathbb Y$ such that for any $\\mathbf t \\in X \\setminus \\{\\mathbf 0_{\\mathbb X}\\}$,

$$
\\begin{aligned}& f(\\mathbf p + \\mathbf t) = f(\\mathbf p) + \\phi(\\mathbf t) + o(\\mathbf t) \\\\\\iff & \\frac{f(\\mathbf p + \\mathbf t) - f(\\mathbf p) - \\phi(\\mathbf t)}{\\| \\mathbf t \\|_{\\mathbb X}} = \\frac{o(\\mathbf t)}{\\| \\mathbf t \\|_{\\mathbb X}} \\\\\\iff & \\lim_{\\mathbf t \\to \\mathbf 0_{\\mathbb X}} \\frac{f(\\mathbf p + \\mathbf t) - f(\\mathbf p) - \\phi(\\mathbf t)}{\\| \\mathbf t \\|_{\\mathbb X}} =\\mathbf 0_{\\mathbb Y} & \\Box \\\\
\\iff & \\lim_{\\mathbf t \\to \\mathbf 0_{\\mathbb X}} \\frac{\\|f(\\mathbf p + \\mathbf t) - f(\\mathbf p) - \\phi(\\mathbf t)\\|_{\\mathbb Y}}{\\| \\mathbf t \\|_{\\mathbb X}} = 0. &\\Box
\\end{aligned}
$$

Now, let $\\mathbf t = t\\mathbf u$ where $t \\in \\mathbb R \\setminus \\{0\\}$. Then we have

$$
f(\\mathbf p + t\\mathbf u) = f(\\mathbf p) + \\phi(t\\mathbf u) + o(t \\mathbf u) \\quad \\text{as $t \\to 0$}.
$$

As

$$
\\mathbf 0_{\\mathbb Y} = \\lim_{t \\to 0}\\frac{o(t\\mathbf u)}{\\| t\\mathbf u \\|} = \\lim_{t \\to 0} \\frac{o(t\\mathbf{\\hat u})}{t},
$$

we have $o(t \\mathbf u) = o(t)$. Thus,

$$
f(\\mathbf p + t\\mathbf u) = f(\\mathbf p) + \\phi(t\\mathbf u) + o(t) \\quad \\text{as $t \\to 0$}. \\quad \\Box
$$

Now, we have

$$
\\begin{aligned}
\\lim_{t \\to 0}\\frac{f(\\mathbf p + t\\mathbf u) - f(\\mathbf p) - \\phi(t \\mathbf u)}{t} = \\lim_{t \\to 0} \\frac{o(t)}{t} = \\mathbf 0_{\\mathbb Y}.
\\end{aligned}
$$

$\\blacksquare$

---

Footer Gose Here

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
