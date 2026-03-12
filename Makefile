run:
	python3 -m http.server 8000

# Requires npm and nodejs to be installed. Afterwards htmllint
# can be installed with the command:
#
#   npm install
lint:
	npm run lint:html
