const youtubeLinkRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

let userText = prompt("Введіть текст із посиланням на YouTube:");
let videoId = userText.match(youtubeLinkRegex)[1];

let embeddedVideoCode = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;

document.write(embeddedVideoCode);
