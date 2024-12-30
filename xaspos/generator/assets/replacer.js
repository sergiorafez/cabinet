//
// Copyright (C) 2025 The BBJProjeK Organization
//

const qs = document.querySelector.bind(document);
const copied = document.querySelector('#copied');
const delay = ms => new Promise(res => setTimeout(res, ms));

function ifEmpty(input, fb) {
    return input ? `${input}` : fb;
}

function doReplace() {
  const title = qs('#title').value;
  const previous_title = qs('#previous_title').value;
  const date = qs('#date').value;
  const author = qs('#author').value;
  const content = qs('#content').value;
  const content_link = ifEmpty(qs('#content_link').value, '/');

  qs('#output').value =
  template.replace(/##TITLE##/g, title)
  .replace(/##PREVIOUS_TITLE##/g, previous_title)
  .replace(/##DATE##/g, date)
  .replace(/##AUTHOR_EMAIL##/g, author)
  .replace(/##CONTENT##/g, content)
  .replace(/##CONTENT_LINK##/g, content_link)
  .replace(/@@/g, '\n')
}

qs('#form').addEventListener('submit', (event) => {
  event.preventDefault();
  doReplace();
  copied.style.opacity = 1;
  document.getElementById('output').select();
  document.execCommand('copy');
  document.getElementById('copied').innerHTML = 'Copied';
  delay(2000).then(() => {
    copied.style.opacity = 0;
  });
});
