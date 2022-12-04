const plugins = [
	{
		"name": "vis-backup",
		"repo": "https://github.com/hucal/vis-backup",
		"path": "backup.lua",
		"description": "make backups of current files before saving"
	},
	{
		"name": "vis-bundle",
		"repo": "https://repo.or.cz/vis-bundle.git",
		"description": "install (and periodically update) vis plugins from Git repos"
	},
	{
		"name": "vis-commentary",
		"repo": "https://github.com/lutobler/vis-commentary",
		"description": "automatic block comments for most languages"
	},
	{
		"name": "vis-complete-line",
		"repo": "https://repo.or.cz/vis-complete-line.git",
		"description": "`<C-e>`, `<C-y>`, and `<C-x><C-l>`, like in vim"
	},
	{
		"name": "vis-cscope",
		"repo": "https://git.sr.ht/~emg/vis-cscope",
		"description": "cscope support similar to vim's"
	},
	{
		"name": "vis-ctags",
		"repo": "https://github.com/kupospelov/vis-ctags",
		"description": "add basic ctags support"
	},
	{
		"name": "vis-cursors",
		"repo": "https://github.com/erf/vis-cursors",
		"description": "remember last cursor position per file"
	},
	{
		"name": "vis-editorconfig",
		"repo": "https://github.com/vktec/vis-editorconfig",
		"description": "automatically parse and apply `.editorconfig` files"
	},
	{
		"name": "vis-exchange",
		"repo": "https://repo.or.cz/vis-exchange.git",
		"description": "operator for swapping a pair of ranges"
	},
	{
		"name": "vis-fenced-insert",
		"repo": "https://repo.or.cz/vis-fenced-insert.git",
		"description": "insert mode as that of traditional vi"
	},
	{
		"name": "vis-filetype-settings",
		"repo": "https://github.com/jocap/vis-filetype-settings",
		"path": "vis-filetype-settings.lua",
		"description": "set options automatically depending on filetype"
	},
	{
		"name": "vis-fzf-mru",
		"repo": "https://github.com/peaceant/vis-fzf-mru",
		"path": "fzf-mru.lua",
		"description": "open recently used files with fzf"
	},
	{
		"name": "vis-fzf-open",
		"repo": "https://git.sr.ht/~mcepl/vis-fzf-open",
		"description": "open files with fzf"
	},
	{
		"name": "vis-go",
		"repo": "https://gitlab.com/timoha/vis-go",
		"path": "vis-go.lua",
		"description": "[Go](https://golang.org) development plugin"
	},
	{
		"name": "vis-goto-file",
		"repo": "https://repo.or.cz/vis-goto-file.git",
		"description": "`gf` and `<C-w>f`, similar to vim's"
	},
	{
		"name": "vis-ins-completion",
		"repo": "https://github.com/jpaulogg/vis-ins-completion",
		"description": "basic vim-like insert mode completion."
	},
	{
		"name": "vis-highlight",
		"repo": "https://github.com/erf/vis-highlight",
		"description": "highlight multiple Lua patterns with optional style"
	},
	{
		"name": "vis-jump",
		"repo": "https://gitlab.com/mcepl/vis-jump",
		"description": "`gx` jump to the external link (with custom processor, if required), like in the vim’s netrw."
	},
	{
		"name": "vis-modelines",
		"repo": "https://github.com/lutobler/vis-modelines",
		"description": "basic support for Vim modelines"
	},
	{
		"name": "vis-motsel",
		"repo": "https://repo.or.cz/vis-motsel.git",
		"path": null,
		"description": "create selections from motions"
	},
	{
		"name": "vis-open_rej",
		"repo": "https://gitlab.com/mcepl/vis-open_rej",
		"path": null,
		"description": "open the .rej file if present for the currently opened file."
	},
	{
		"name": "vis-outdated",
		"repo": "https://github.com/erf/vis-outdated",
		"path": null,
		"description": "keep up-to-date with a list of git repos"
	},
	{
		"name": "vis-pairs",
		"repo": "https://repo.or.cz/vis-pairs.git",
		"description": "textobjects and motions for delimited blocks"
	},
	{
		"name": "vis-parkour",
		"repo": "https://repo.or.cz/vis-parkour.git",
		"description": "structured editing for Lisps"
	},
	{
		"name": "vis-plug",
		"repo": "https://github.com/erf/vis-plug",
		"description": "a minimal plugin (and theme) manager for vis"
	},
	{
		"name": "vis-quickfix",
		"repo": "https://repo.or.cz/vis-quickfix.git",
		"description": "most of vim's QuickFix commands"
	},
	{
		"name": "vis-shebang",
		"repo": "https://github.com/e-zk/vis-shebang",
		"description": "set syntax based on file [shebang](https://en.wikipedia.org/wiki/Shebang_(Unix))"
	},
	{
		"name": "vis-smart-backspace",
		"repo": "https://github.com/ingolemo/vis-smart-backspace",
		"description": "delete spaces at start of lines, like vim's softtabstop"
	},
	{
		"name": "vis-sneak",
		"repo": "https://github.com/erf/vis-sneak",
		"description": "jump to a location specified by two characters "
	},
	{
		"name": "vis-spellcheck",
		"repo": "https://gitlab.com/muhq/vis-spellcheck",
		"description": "syntax aware spellchecking"
	},
	{
		"name": "vis-super-shellout",
		"repo": "https://github.com/seifferth/vis-super-shellout",
		"path": "super-shellout.lua",
		"description": "an alternative way to insert output from arbitrary shell commands"
	},
	{
		"name": "vis-surround",
		"repo": "https://repo.or.cz/vis-surround.git",
		"description": "operators for adding/changing/deleting block delimiters"
	},
	{
		"name": "vis-title",
		"repo": "https://github.com/erf/vis-title",
		"description": "set terminal title to current file"
	},
	{
		"name": "vis-tmux-repl",
		"repo": "https://github.com/maciejjan/vis-tmux-repl",
		"path": "tmux-repl.lua",
		"description": "send text from vis to another tmux pane (e.g. a read-eval-print loop)"
	},
	{
		"name": "vis-toggler",
		"repo": "https://repo.or.cz/vis-toggler.git",
		"description": "improved `<C-a>`/`<C-x>`, `~`, `g~`, `gu`, and `gU`"
	},
	{
		"name": "vis-ultisnips",
		"repo": "https://github.com/machinedgod/vis-ultisnips",
		"description": "snippet plugin. Supports both SnipMate and UltiSnips, however has limited support for latter."
	},
	{
		"name": "vis-tasks",
		"repo": "https://github.com/mpolitzer/vis-tasks",
		"description": "a simple todo list manager"
	}
]
