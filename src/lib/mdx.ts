import { compileMDX } from "next-mdx-remote/rsc";

const components = {};

export async function renderMDX(source: string) {
  const { content } = await compileMDX({
    source,
    components,
    options: {
      parseFrontmatter: false,
    },
  });
  return content;
}
