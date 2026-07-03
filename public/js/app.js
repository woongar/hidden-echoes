"use strict";

fetch("/api/videos")
  .then(response => response.json())
  .then(videos => {
    console.log(videos);
  });