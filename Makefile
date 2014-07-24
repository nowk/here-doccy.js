
test:
	@NODE_ENV=test ./node_modules/.bin/mocha test \
		--report spec \
		--bail

.PHONY: test
