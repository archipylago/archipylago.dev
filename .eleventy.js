const filters = require("./_11ty/filters");
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("slides");

  Object.entries(filters).forEach(([name, callback]) => {
    eleventyConfig.addFilter(name, callback);
  });

  let markdownIt = require("markdown-it");
  let options = {
    html: true,
    breaks: true,
    linkify: true,
  };

  eleventyConfig.setLibrary("md", markdownIt(options));

  eleventyConfig.addPlugin(pluginRss);

  return {
    templateFormats: ["md", "njk", "html", "liquid"],

    // If your site lives in a different subdirectory, change this.
    // Leading or trailing slashes are all normalized away, so don’t worry about it.
    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for URLs (it does not affect your file structure)
    pathPrefix: "/",

    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    passthroughFileCopy: true,
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};
