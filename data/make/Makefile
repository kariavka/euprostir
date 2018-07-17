run:
	ember s --environment="master"

local:
	ember serve --environment="local"

develop:
	ember serve --environment="development"

master:
	ember serve --environment="master"

build:
	ember b --environment="production"

deploy:
	@read -p "Are You Sure? [Y/n] " sure && case "$$sure" in [yY]) scp -r dist/** euprostir@94.130.108.105:~/dist/;; *) exit;; esac

demo:
	scp -r dist/** euprostir@94.130.108.105:~/demo/

release:
	git checkout develop; git push; git checkout master; git push

refresh:
	git checkout develop; git pull; git checkout master; git pull

fix:
	sed -i -e 's/_actions:/actions:/g' node_modules/ember-cli-reset-scroll/addon/index.js
