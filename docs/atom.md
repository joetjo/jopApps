# What about atom
Ctrl - shift - P to start the command palette (kind of spotlight to run action)
Action from plugins are prefixed by plugin name.
and can be associated to key bindings.

## Core plugin comment
(Discover it from package menu)
To be completed ( based on atom version 1.22.0 )

## node-debugger (initial test v ... )
not tested yet

## git plugins
often need external git command launching with visual side effect (see plugin page).
Check that git is in windows path (open cmd and run git --version, that must answer)

Like for any usage of git, Make sure your gitconfig file is configured. You must configure at least the **user.email** and **user.name** variables.

Take care also that the open project folder must be the root folder (where the .git is) or plugins will not operate.

### git-plus (initial test v 7.10.0)
https://atom.io/packages/git-plus
add some convenient shortcuts in atom GUI (bottom right by default to get access)
Needed to have q quick way to fetch / pull / ... most commons git command integrated in UI.
but there is a lot of commands using key bindings (to memorize :-/)
+ command menu in packages

maybe confusing with what is integrated in core atom package and this addon.

### git-log (initial test v 0.4.1)
https://atom.io/packages/git-log
display the commit graph (avoid launching external git tool but no added value from external git tool)
recommended if next plugin is installed (git-time-machine: was at least recommended for version 1.5.9)

### git-time-machine
https://atom.io/packages/git-time-machine
Alt T to switch the panel but I don't see it working yet...

### git-status (initial test v 0.3.4)
https://atom.io/packages/git-status
add a panel for git status: when panel is visible, all file currently in edition are shown in the status panel.
Not usable for big change but can be toggle on/off.

### TODO : many other git plugins seems valuable.
