/**
 * This is the 11ty config! If you ever need to get underneath the hood of 11ty
 * to add functionality or to sort your collections, this would be the place to
 * do it! In this example however, we just copy over the `img` and `css`
 * folders over to the output.
 * (https://www.11ty.dev/docs/config/)
 */

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */

const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");
const { feedPlugin } = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
		eleventyConfig.setTemplateFormats("liquid", "njk");
		// Copy `img` and `css` folders to output
		eleventyConfig.addPassthroughCopy("img");
		eleventyConfig.addPassthroughCopy("css");
		eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
			widths: [100, "auto"], // I moved the explicit widths over from my old shortcode
			defaultAttributes: {
			  loading: 'lazy'
			}
		});
		eleventyConfig.addPlugin(feedPlugin, {
			type: "rss", // or "rss", "json"
			outputPath: "/feed.xml",
			collection: {
				name: "comic", // iterate over `collections.posts`
				limit: 10,     // 0 means no limit
			},
			metadata: {
				language: "en",
				title: "Blog Title",
				subtitle: "This is a longer description about your blog.",
				base: "https://babayagacomic.netlify.app/",
				author: {
					name: "Your Name",
					email: "", // Optional
				}
			}
		});
		
}









