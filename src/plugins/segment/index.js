/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const { min: createSnippet } = require("@segment/snippet");

const devShim = `
  (function() {
    const analytics = (window.analytics = {})
    const methods = [
      "trackSubmit", "trackClick", "trackLink", "trackForm",
      "pageview", "identify", "reset", "group", "ready",
      "alias", "debug", "page", "once", "off", "on",
    ]
    methods.forEach(
      method =>
        (analytics[method] = (...args) =>
          console.log("analytics." + method, ...args))
    )
    analytics.track = (event, properties, options, callback) => {
      console.log("analytics.track", event, properties)
      setTimeout(callback, 300)
    }
  })()
`;

module.exports = function () {
  const trackingSnippet =
    process.env.NODE_ENV === "production"
      ? createSnippet({
          host: "cdn.cdp.prismatic.io",
          ajsPath: '/b/" + key + ".js',
          apiKey: process.env.DOCUSAURUS_SEGMENT_WRITE_KEY,
          page: false,
        })
      : devShim.toString();

  return {
    name: "segment",
    getClientModules: () => [path.resolve(__dirname, "./analytics")],
    injectHtmlTags: () => ({
      headTags: [
        // NOTE: This is here because the library Segment returns following snippet execution attempts to figure out
        // what the CDN proxy name is. However, it does this by requiring you to say "analytics.js" in src which is blocked
        // by most ad blockers (since they look for that part of the path to try to identify proxied Segment calls).
        // To that end we need to avoid sending a request (since it would be blocked by the ad blocker) but also have the
        // regex target in the `src` attribute. Using a non-JS type attribute causes the block to be treated as data and not executed.
        // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-type
        {
          tagName: "script",
          attributes: {
            type: "text/plain",
            src: "https://cdn.cdp.prismatic.io/analytics.js/v1/cdp/",
          },
        },
        { tagName: "script", innerHTML: trackingSnippet },
      ],
    }),
  };
};
