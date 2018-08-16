const WS = new WebSocket('ws://localhost:3232');

WS.onmessage = (payload) => {
  displayMessages(payload.data);
};

WS.onopen = () => {
  displayTitle('Connected to Server');
};

function displayTitle (title) {
  document.querySelector('h2').innerText = title;
}

function displayMessages (message) {
  let h1 = document.createElement('h1');
  h1.innerText = message;
  document.querySelector('div.messages').appendChild(h1);
}

document.forms[0].onsubmit = () => {
  let input = document.getElementById('message');

  WS.send(input.value);
};

WS.onclose = () => {
  displayTitle('Disconnected to Server');
};