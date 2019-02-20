#!/bin/bash

ENV=$1
ZATBIN="$(which zat)"

SOUND_BASE_PATH=""
WEBRTC_CDN=""



if [ "${ZATBIN}" == "" ] 
then
  echo "You must install the Zendesk SDK ZAT, in order to proceed."
  exit 1;
fi

if [ $ENV != "staging" ] && [ "$ENV" != "production" ] 
then
  echo "You must the environment."
  exit 1;
fi


if [ "$ENV" == "staging" ] 
then
  SOUND_BASE_PATH="https://cdn.teravoz.com.br/sounds"
  WEBRTC_CDN="https://cdn-staging.teravoz.com.br/webrtc/v1/teravoz-webrtc.js"
fi

if [ "$ENV" == "production" ] 
then
  SOUND_BASE_PATH="https://cdn.teravoz.com.br/sounds"
  WEBRTC_CDN="https://cdn.teravoz.com.br/webrtc/v1/teravoz-webrtc.js"
fi

echo "ENVIRONMENT ---> $ENV"
echo "Zendesk SDK ---> ${ZATBIN}"

echo "Writting env file for $ENV..."

echo "SOUND_BASE_PATH: $SOUND_BASE_PATH"
echo "WEBRTC_CDN: $WEBRTC_CDN"

[ -e .env ] && rm .env
touch .env
echo $SOUND_BASE_PATH >> .env
echo $WEBRTC_CDN >> .env

echo "Packaging the Teravoz Webphone APP for the Zendesk Platform..."
sleep 5

cd app
zat package
cd -

echo "Finished packaging app."


echo "

Don't forget to bump the package.json version and tag the last commit!!!


:)))))))))))))))))


"