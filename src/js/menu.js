import jQuery from 'jquery';
const $ = jQuery;

$(() => {
  const menuBtn = $('.menu__btn');
  const navBar = $('.nav-bar');

  menuBtn.click(() => {
    navBar.toggleClass('show');
  });
});
