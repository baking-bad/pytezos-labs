const path = require("path")

module.exports = {
  title: "PyTezos Labs",
  description: "Interactive learning course",
  theme: "vuepress-theme-book",
  head: [
    ['link', { rel: "icon", type: "image/ico", href: "/favicon.ico"}],
  ],
  themeConfig: {
    logo: "/pytezos.png",
    searchPlaceholder: "Search...",
    lastUpdated: "Last Updated",
    docsRepo: "baking-bad/pytezos-labs",
    docsDir: "docs",
    editLinks: false,
    displayAllHeaders: true,
    nav: [
      { text: "Home", link: "/" },
      { text: "Notebooks ", link: "/tutorials/01"},
    ],
    sidebar: [
      {
        title: 'Notebooks',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          "/tutorials/01"
        ]
      },
    ]
  },
  plugins: [
    ['autometa', {
      site: {
        name: 'PyTezos Labs',
        twitter: 'TezosBakingBad',
      },
      canonical_base: 'https://pytezos.baking-bad.org',
    }],
    ['sitemap', {
      hostname: 'https://pytezos.baking-bad.org'
    }],
    ['@vuepress/google-analytics', {
        'ga': 'UA-131043773-1'
    }],
  ],
  extendMarkdown: md => {
  },
  extendPageData(pageCtx) {    
    if (!pageCtx.frontmatter.title) {
      pageCtx.frontmatter.title = `${pageCtx.title} | PyTezos Labs`;

      if (pageCtx._strippedContent) {
        pageCtx.frontmatter.summary = pageCtx._strippedContent
          .split("\n")
          .find(line => line.length > 20 && !line.startsWith("#"))
      }
    }

    pageCtx.frontmatter.image = "/og.png";
    pageCtx.frontmatter.metaTitle = pageCtx.frontmatter.title;
    pageCtx.frontmatter.description = pageCtx.frontmatter.summary
  }
}
