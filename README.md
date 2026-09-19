# Aurora Docs

These docs are pretty sparse on purpose as Aurora is intended to be invisible. Ideally, the docs should be able to be consumed in one sitting.

## Guidelines

- Docs linking to upstream documentation directly with a short summary is preferred.
- There's likely a reason why something is undocumented.

## Add a new language

Add the locale code to `i18n.locales` in `docusaurus.config.ts`, create the `i18n/<locale>/` directory, and run `npm run write-translations --locale <locale>` to generate the files to be translated. Translate the generated messages, then translate the Markdown pages in the blog and docs directories.

## Previewing your changes

You've made some changes and want to see how they look?

You can install node and run it:

```
npm run i
npm run start
```

Alternatively, you can run the container:

```
docker compose up
```

Then make sure to format all your files with Prettier!

```
npm run prettier
```
