# tailwind-html-starter

This is a basic starter template to get one going with tailwind immediately.

1. Read `package.json` to see dependencies.
2. Read `tailwind.config.js` to check tailwind configuration.
3. On first run, run `npm install` to setup dependencies etc.
4. Without `tmux`: Watch with `nom run watch`.  Begin editing
   `public/index.html`.  View live-server updates in the browser with 
   `npm run live`. 
4. With `tmux`+`tmuxinator` (set to my personal preferences):  Open workspace
   with `tmuxinator start ./.tmuxinator.yml` which runs the relevant `npm run`
   commands in the `SERVER` pane and opens up with the editor in the `EDITOR`
   pane. Since there is no `Session.vim` yet on first run, expect that warning
   to come up. Here on, continue editing `public/index.html` while viewing the
   live-reload version of `public/index.html` that should have been
   automatically opened with `npm run live` by now. Save your editing session
   with `:mksession`(`!`) to open there directly from the next time.
5. Customize according to needs. 

:)
