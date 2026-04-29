module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");

  const categoryOrder = [
    "identity", "audience", "offers", "voice",
    "proof", "market", "strategy", "frameworks",
  ];

  eleventyConfig.addCollection("wiki", (api) =>
    api
      .getFilteredByGlob("rbd/wiki/**/*.md")
      .filter((item) => !!item.data.title)
      .sort((a, b) => {
        const ai = categoryOrder.indexOf(a.data.category ?? "");
        const bi = categoryOrder.indexOf(b.data.category ?? "");
        const aN = ai === -1 ? 99 : ai;
        const bN = bi === -1 ? 99 : bi;
        if (aN !== bN) return aN - bN;
        return (a.data.title ?? "").localeCompare(b.data.title ?? "");
      })
  );

  eleventyConfig.addFilter("groupByCategory", (articles) => {
    const groups = {};
    for (const a of articles) {
      const cat = a.data.category || "other";
      (groups[cat] = groups[cat] || []).push(a);
    }
    const sorted = {};
    for (const cat of categoryOrder) if (groups[cat]) sorted[cat] = groups[cat];
    for (const cat of Object.keys(groups)) if (!sorted[cat]) sorted[cat] = groups[cat];
    return sorted;
  });

  eleventyConfig.addFilter("capitalize", (s) =>
    s ? s.charAt(0).toUpperCase() + s.slice(1) : s
  );

  eleventyConfig.addFilter("confidenceClass", (c) =>
    ({ high: "confidence-high", medium: "confidence-medium", low: "confidence-low" }[c] || "confidence-low")
  );

  eleventyConfig.addFilter("relatedArticles", (articles, category, currentUrl) =>
    (articles || []).filter((a) => a.data.category === category && a.url !== currentUrl)
  );

  eleventyConfig.addFilter("dateFormat", (date) => {
    if (!date) return "";
    const d = date instanceof Date ? date : new Date(date);
    return d.toISOString().split("T")[0];
  });

  eleventyConfig.addFilter("sourceCount", (sources) => {
    if (!sources) return 0;
    if (Array.isArray(sources)) return sources.length;
    return 1;
  });

  // Ignore content files not meant for the website
  eleventyConfig.ignores.add("rbd/CLAUDE.md");
  eleventyConfig.ignores.add("rbd/README.md");
  eleventyConfig.ignores.add("rbd/log.md");
  eleventyConfig.ignores.add("rbd/index.md");
  eleventyConfig.ignores.add("rbd/exports/**");
  eleventyConfig.ignores.add("CLAUDE.md");
  eleventyConfig.ignores.add("_site/**");
  eleventyConfig.ignores.add("node_modules/**");

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      layouts: "_includes",
    },
    markdownTemplateEngine: false,
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md"],
  };
};
