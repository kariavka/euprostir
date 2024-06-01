init:
	sudo docker-compose up --build euprostir
	sudo docker-compose run --rm euprostir yarn install

status:
	sudo docker ps -a --filter name=euprostir

# run:
# 	ember serve --environment="local"

run:
	sudo docker-compose run --rm --publish 4200:4200 euprostir ember serve --environment="master"

# local:
# 	ember serve --environment="local"

local:
	sudo docker-compose run --rm --publish 4200:4200 euprostir ember serve --environment="local"

# master:
# 	ember serve --environment="master"

master:
	sudo docker-compose run --rm --publish 4200:4200 euprostir ember serve --environment="master"

down:
	sudo docker-compose down

shell:
	sudo docker-compose run --rm euprostir bash

# build:
# 	ember build --environment="production"

build:
	sudo docker-compose run --rm euprostir ember build --environment="production"

deploy:
	scp -r dist/** euprostir@18.153.207.242:/home/euprostir/dist

pull:
	git checkout develop; git pull; git checkout master; git pull

push:
	git checkout develop; git push; git checkout master; git push

fix:
	sudo sed -i -e 's/_actions:/actions:/g' node_modules/ember-cli-reset-scroll/addon/index.js

refresh:
	git checkout develop
	git pull
	git checkout master
	git pull

release:
	git checkout develop
	git push
	git checkout master
	git push
