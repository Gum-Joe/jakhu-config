ci:
	echo "name: h" >> test.yml; \
	mocha; \
	istanbul cover _mocha test/**/*.js --reporter=lcovonly -- -R spec && cat coverage/lcov.info | node_modules/.bin/coveralls
	echo Done!;
