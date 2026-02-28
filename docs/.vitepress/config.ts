// Use a plain object export to avoid requiring the ESM-only `vitepress` package
export default {
  title: 'ZeroShot UI',
  description: 'Documentation for the ZeroShot React component library',
  ignoreDeadLinks: true,
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/' },
      { text: 'Storybook', link: '/storybook/' }
    ],
    sidebar: [
      { text: 'Introduction', link: '/' }
    ]
  }
} as any
