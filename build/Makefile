
BUILD=java -jar plovr.jar build

OUTDIR=../build
SRCS=$(wildcard ./*.json)
COMPILATIONS=${SRCS:.json=.js} 

.SUFFIXES: .js .json

.json.js :
	@$(BUILD) $< > $*.js

build : $(COMPILATIONS)

clean :
	if [ -e *.js ]; then rm *.js; fi

serve :
	java -jar plovr.jar serve $(SRCS)
