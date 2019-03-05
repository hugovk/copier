const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

$(document).ready(function() {
  const char = document.querySelector('span a');
  char.addEventListener('click', event => {
    copyToClipboard(char.innerHTML);
  });
});
