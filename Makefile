TMP_FOLDER=/tmp
RELEASE_FOLDER=wllbg-release

ifndef ENV
	ENV=prod
endif

help: ## Display this help menu
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

clean: ## Clear the application cache
	@rm -rf var/cache/*

install: ## Install wallabag with the latest version
	@sh scripts/install.sh $(ENV)

update: ## Update the wallabag installation to the latest version
	@sh scripts/update.sh $(ENV)

run: ## Run the wallabag built-in server
	@php bin/console server:run --env=$(ENV)

build: ## Run grunt
	@grunt

test: ## Launch wallabag testsuite
	@if [ ! -d "vendor/phpunit" ]; then composer install; fi
	@ant prepare && vendor/phpunit/phpunit/phpunit -v

release: ## Create a package. Need a VERSION parameter (eg: `make release VERSION=master`).
ifndef VERSION
	$(error VERSION is not set)
endif
	@sh scripts/release.sh $(VERSION) $(TMP_FOLDER) $(RELEASE_FOLDER) $(ENV)

travis: ## Make some stuff for Travis-CI

deploy: ## Deploy wallabag
	@bundle exec cap staging deploy

.PHONY: help clean install update build test release travis deploy

.DEFAULT_GOAL := install
