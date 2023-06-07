var config = {
  //Names
  serverName: "Example server name",
  serverDescription: "Example server description",
  serverVersion: "1.0",
}


function init() {
  meta();  
}

function meta() {
  document.getElementById('serverName').innerHTML = config.serverName;
  document.getElementById('serverDescription').innerHTML = config.serverDescription;
  document.getElementById('serverVersion').innerHTML = config.serverVersion;
}