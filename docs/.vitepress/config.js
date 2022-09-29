module.exports = {
  title: 'Hello VitePress',
  description: 'Just playing around.',
  base: "./",
  themeConfig: {
    sidebar: [
      {
        text: 'Section Title A',
        items: [
          { text: 'Item A', link: '/foo/one' },
          { text: 'Item B', link: '/foo/two' },
        ]
      },
      {
        text: 'Section Title B',
        items: [
          { text: 'Item C', link: '/bar/three' },
          { text: 'Item D', link: '/bar/four' },
        ]
      }
    ],
    nav: [
      { text: 'Guide', link: '/guide' },
      { text: 'Configs', link: '/configs' },
      { text: 'Changelog', link: 'https://github.com/...' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }
  }
}

