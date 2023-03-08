# E-commerce Demo Website with Segment

This is a website generator that you can use as a Segment source for demos, training, testing, or however else you see fit.

## Quickstart

In `config.json`, update `ANALYTICS_WRITE_KEY` with your Segment write key then run `npm run dev` to serve your project locally at http://localhost:3000.

To run a production ready build

```
npm install
npm run build
npm start
```

## Deploying

```
git checkout -b <branch-name>
git add -A
git commit -m "<your commit message>"
git push -u origin <branch-name>
```

In GitHub, submit a pull request. This will trigger a ZEIT Now build that will serve the website with the configuration in your pull request.
