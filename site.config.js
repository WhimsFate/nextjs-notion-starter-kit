module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: 'a4a0340a0ab743d48cf0603738d69155',
  // this.rootNotionPageId: '78fc5a4b88d74b0e824e29407e9f1ec1'

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  // rootNotionSpaceId: 'b394791d04a9426db75a309da51d5fa7',

  // basic site info (required)
  name: 'whimsFate',
  domain: 'www.karsh-exia.com',
  author: 'Karsh Bang⭐️',

  // open graph metadata (optional)
  description: 'My personal Blog',
  socialImageTitle: 'Are you going to Scarborough Fair~',
  socialImageSubtitle: 'Hello World! 🚀',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  github: 'KarshBang',
  // linkedin: 'fisch2',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: 'https://avatars.githubusercontent.com/u/55270195?v=4',
  defaultPageCover: 'https://api.ixiaowai.cn/api/api.php',
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  // imageCDNHost: 'https://ssfy.io',

  // Utteranc.es comments via GitHub issue comments (optional)
  // utterancesGitHubRepo: 'transitive-bullshit/transitivebullsh.it',

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // pageUrlAdditions: {
  //   '/the-social-audio-revolution': 'c4deaf33cc924ad7a5b9f69c6ae04a01'
  // }
}
