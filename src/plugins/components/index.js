/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const {
  readdir,
  readFile,
  writeFile,
  writeJson,
  mkdirp,
  exists,
} = require("fs-extra");
const handlebars = require("handlebars");
const { sortBy, isEmpty, get } = require("lodash");

handlebars.registerHelper("json", (context) =>
  JSON.stringify(context, null, 2)
);

handlebars.registerHelper("sort", (context, options) => {
  const { attr } = options.hash;
  return sortBy(context, [(i) => get(i, attr)?.toLowerCase()]);
});

handlebars.registerHelper("length", (context) => {
  if (!context) {
    return 0;
  }
  return !Array.isArray(context) ? Object.keys(context).length : context.length;
});

handlebars.registerHelper("lower", (context) => context.toLowerCase());

handlebars.registerHelper("isEmpty", (context) => isEmpty(context));

const manifestDir = path.join(__dirname, "manifests");
const exampleManifestDir = path.join(__dirname, "exampleManifests");

const loadComponentManifests = async () => {
  const dir = (await exists(manifestDir)) ? manifestDir : exampleManifestDir;
  const manifestFiles = await readdir(dir);

  const manifests = {};
  for (const manifest of manifestFiles) {
    const key = path.basename(manifest, path.extname(manifest));
    const manifestPath = path.join(dir, manifest);

    const manifestContent = await readFile(manifestPath, "utf-8");
    manifests[key] = JSON.parse(manifestContent);
  }

  return manifests;
};

const generateComponentDocs = async () => {
  const manifests = await loadComponentManifests();

  await mkdirp(path.join(__dirname, "..", "..", "..", "docs", "components"));

  // Component detail pages
  const componentPageTemplate = handlebars.compile(
    await readFile(path.join(__dirname, "templates", "component.mdx.hbs"), {
      encoding: "utf-8",
    })
  );
  for (const [key, manifest] of Object.entries(manifests)) {
    const outputPath = path.join(
      __dirname,
      "..",
      "..",
      "..",
      "docs",
      "components",
      `${key}.mdx`
    );
    await writeFile(outputPath, componentPageTemplate(manifest));
  }

  // Component overview
  const componentOverviewTemplate = handlebars.compile(
    await readFile(
      path.join(__dirname, "templates", "component-catalog.mdx.hbs"),
      "utf-8"
    )
  );
  const outputPath = path.join(
    __dirname,
    "..",
    "..",
    "..",
    "docs",
    "components",
    "component-catalog.mdx"
  );
  await writeFile(outputPath, componentOverviewTemplate(manifests));

  // Sidebar
  const sidebarEntries = sortBy(Object.values(manifests), (m) =>
    m.display.label.toLowerCase()
  ).map((m) => `components/${m.key}`);
  await writeJson(
    path.join(
      __dirname,
      "..",
      "..",
      "..",
      "sidebars",
      "sidebars-component-catalog.json"
    ),
    sidebarEntries,
    { spaces: 2 }
  );
};

async function componentPlugin(context, opts) {
  return {
    name: "component",
    extendCli(cli) {
      cli
        .command("components-to-docs")
        .description(
          "Generate component documentation files for the content-doc plugin"
        )
        .action(async () => {
          await generateComponentDocs();
        });
    },
  };
}

module.exports = componentPlugin;
