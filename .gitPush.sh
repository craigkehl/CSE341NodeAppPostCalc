#!/bin/sh

GIT=`which git`
#!REPO_DIR=/home/username/Sites/git/repo/
#!cd ${REPO_DIR}
${GIT} add --all .
${GIT} commit -m "Test commit"
${GIT} push heroku
${GIT} push github