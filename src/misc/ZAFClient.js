const client = ZAFClient.init();

function setKey(key, val) {
  return client.metadata().then(function(metadata) {
    return localStorage.setItem(metadata.installationId + ":" + key, val);
  });
}

function getKey(key) {
  return client.metadata().then(function(metadata) {
    return localStorage.getItem(metadata.installationId + ":" + key);
  });
}

function removeKey(key) {
  return client.metadata().then(function(metadata) {
    return localStorage.removeItem(metadata.installationId + ":" + key);
  });
}


export default { client, getKey, removeKey, setKey };