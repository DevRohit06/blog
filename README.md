
# DevBlogs - A Blogging Website

![DevBlogs Image](https://i.ibb.co/BqKk1R3/New-Project.png)

## Introduction

Welcome to Bloggling - a modern and elegant blogging website built using [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). Bloggling offers a seamless experience for both bloggers and readers, with its intuitive user interface and responsive design. Whether you're a seasoned blogger or just starting your writing journey, Bloggling provides an ideal platform to share your thoughts with the world.

## Features

- **Fast and Efficient:** Bloggling leverages Astro's static site generation to ensure lightning-fast loading times and optimal performance.

- **Beautiful Design:** The website's design is powered by Tailwind CSS, offering a visually appealing and responsive layout across all devices.

- **User-Friendly Interface:** With a clean and intuitive user interface, Bloggling makes writing and managing blog posts a breeze.

- **Categories and Tags:** Organize your blog posts using categories and tags to help readers discover content relevant to their interests.

- **SEO Friendly:** Bloggling is designed with SEO best practices in mind, ensuring your blog posts rank well in search engines.

## Getting Started

To run Bloggling locally and start writing your blogs, follow these steps:

1. Clone the repository:
   ```
   https://github.com/DevRohit06/blog.git
   ```

2. Navigate to the project directory:
   ```
   cd blog
   ```

3. Install dependencies:
   ```
   yarn install or npm install
   ```

4. Start the development server:
   ```
   npm run dev or yarn run dev
   ```

   This will launch the website on `http://localhost:3000` by default.

## Writing Blog Posts

To write a new blog post, follow these steps:

1. Create a new `.md` file in the `src/posts` directory with your blog content. You can use Markdown syntax for formatting.

2. Add frontmatter at the top of the file to specify the title, date, category, and tags of your blog post:
   ```md
   ---
   title: My Awesome Blog Post
   date: 2023-08-01
   description: This is description
   ogImagePath: hero image
   tags: [Programming, Web Development]
   ---
   ```

3. Save the file, and the website will automatically generate the new blog post.

## Deployment

To deploy Bloggling to a static hosting service, run the following command:

```
npm run build or yarn run build
```

This will create a `build` directory containing the static assets ready for deployment.

## Contributing

We welcome contributions to make Bloggling even better! If you find a bug or have an idea for improvement, feel free to open an issue or submit a pull request on [GitHub](https://github.com/yDevRohit06/blog).

## License

Blog is open-source and released under the [MIT License](https://opensource.org/licenses/MIT).

---

We hope you enjoy using Bloggling to create and share captivating blog posts. Happy blogging!

[Live Demo](https://blog-trohit06.vercel.app) | [GitHub Repository](https://github.com/DevRohit06/blog.git)

