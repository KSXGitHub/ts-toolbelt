#!/bin/bash

npm run test &&

if [ "$TRAVIS_BRANCH" = "master" ]; then
    npm publish
else
    npm publish --tag $TRAVIS_BRANCH  
fi;