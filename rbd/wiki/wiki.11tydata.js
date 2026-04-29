module.exports = {
  layout: "article.njk",
  eleventyComputed: {
    permalink: (data) => {
      // data.page.filePathStem = "/rbd/wiki/identity/positioning"
      const stem = data.page.filePathStem;
      const match = stem.match(/\/rbd\/wiki\/(.*)/);
      return match ? `/wiki/${match[1]}/` : false;
    },
  },
};
