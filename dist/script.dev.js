"use strict";

var toggle = document.getElementById('toggle');
var close = document.getElementById('close');
var open = document.getElementById('open');
var modal = document.getElementById('modal'); // Toggle navigation

toggle.addEventListener('click', function () {
  return document.body.classList.toggle('show-nav');
}); // Show modal

open.addEventListener('click', function () {
  return modal.classList.add('show-modal');
}); //Hide modal

close.addEventListener('click', function () {
  return modal.classList.remove('show-modal');
}); //Hide modal on outside click

window.addEventListener('click', function (e) {
  return e.target == modal ? modal.classList.remove('show-modal') : false;
});