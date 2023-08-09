import { readAll } from "./markdoc/read";
import { blog } from "./markdoc/frontmatter.schema";

const posts = await readAll({
    directory: "blog",
    frontmatterSchema: blog,

});
console.log(posts);