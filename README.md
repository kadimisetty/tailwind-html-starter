# tailwind-html-starter

This is a basic starter template to get one going with tailwind immediately.

1. Read `package.json` to check dependencies.
2. Read `tailwind.config.js` to check tailwind configuration.
3. On first run, do `npm install` to setup dependencies etc.
4. Without `tmux`: Watch with `npm run watch`.  Begin editing
   `public/index.html` while viewing live-server updates in the browser with
   `npm run live`. 
4. With `tmux`+`tmuxinator` (set to author's personal preferences):  Open workspace
   with `tmuxinator start ./.tmuxinator.yml` which runs the relevant `npm run watch` and `npm run live`
   commands in the `SERVER` pane and opens up with the editor in the `EDITOR`
   pane. Since there is no `Session.vim` yet on first run, expect that warning
   to come up. Here on, continue editing `public/index.html` while viewing the
   live-reload version of `public/index.html` which should have been
   automatically opened with `npm run live` by now. Save editing session
   with `:mksession`(`!`) to open `tmux` there directly next time onwards.
5. Customize to need. 

:)
