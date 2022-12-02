module.exports = {
  outputDir: __dirname,
  catalogues: [
    {
      name: 'github',
      domainNames: [
        {
          name: 'github.com',
          description: 'home page',
        },
        'collector.github.com',
        'api.github.com',
        'spotlights-feed.github.com',
        'events-feed.github.com',
        'gist.github.com',
        'central.github.com',
        'assets-cdn.github.com',
        'codeload.github.com',
        'raw.github.com',
        {
          name: 'github.io',
          description: 'github pages',
        },
        {
          name: 'github.dev',
          description: 'web editor',
        },
        {
          name: 'github.githubassets.com',
          description: 'assets',
        },
        {
          name: 'avatars.githubusercontent.com',
          description: 'avatars',
        },
        'avatars0.githubusercontent.com',
        'avatars1.githubusercontent.com',
        'avatars2.githubusercontent.com',
        'avatars3.githubusercontent.com',
        'avatars4.githubusercontent.com',
        'avatars5.githubusercontent.com',
        'favicons.githubusercontent.com',
        'user-images.githubusercontent.com',
        'raw.githubusercontent.com',
        'marketplace-screenshots.githubusercontent.com',
        'desktop.githubusercontent.com',
        'camo.githubusercontent.com',
        'media.githubusercontent.com',
        'objects.githubusercontent.com',
        'copilot-proxy.githubusercontent.com',
        // 这里可以补充 github 缺少的域名
      ],
    },
    // 后续可以补充其他类型的域名类型分类及域名列表
  ],
  timezone: 'Asia/Shanghai',
}
