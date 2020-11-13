// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
import 'bootstrap';
import { initUpdateNavbarOnScroll } from '../components/navbar';
import { loadDynamicBannerText } from '../components/banner';
import { initSelect2 } from '../components/init_select2';
// below related to select2 have been added----------
// import $ from 'jquery';
// import 'select2';
// import 'select2-bootstrap';
// --------------------------------------------------

document.addEventListener('turbolinks:load', () => {
  // Call your JS functions here
  console.log("hello");
  initUpdateNavbarOnScroll();
  if (document.querySelector("#banner-typed-text")) {
    console.log("here");
    loadDynamicBannerText();
  }
  if (document.querySelector(".select2")) {
    initSelect2();
  }
});

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
