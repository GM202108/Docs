import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

const onRouteUpdate = ({ location }) => {
  if (
    !window.analytics ||
    (typeof window.analytics.page !== "function" &&
      process.env.NODE_ENV !== "production")
  ) {
    console.warn("Unable to locate analytics.js");

    return;
  }

  window.analytics.page({ path: location.pathname });
};

/**
 * Initial page load
 */
(() => {
  if (typeof window === "undefined") {
    return;
  }

  onRouteUpdate({ location: window.location });
})();

/**
 * SPA based route changes
 */
export default (function () {
  if (!ExecutionEnvironment.canUseDOM) {
    return null;
  }

  return { onRouteUpdate };
})();
