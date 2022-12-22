var favicon_images = [
    "Favicon/favicon1.ico",
    "Favicon/favicon2.ico",
    "Favicon/favicon3.ico",
    "Favicon/favicon4.ico",
    "Favicon/favicon5.ico",
    "Favicon/favicon6.ico",
    "Favicon/favicon7.ico",
    "Favicon/favicon8.ico",
    "Favicon/favicon9.ico",
  ],
  image_counter = 0; // To keep track of the current image

setInterval(function () {
  // remove current favicon
  if (document.querySelector("link[rel='icon']") !== null)
    document.querySelector("link[rel='icon']").remove();
  if (document.querySelector("link[rel='shortcut icon']") !== null)
    document.querySelector("link[rel='shortcut icon']").remove();

  // add new favicon image
  document
    .querySelector("head")
    .insertAdjacentHTML(
      "beforeend",
      '<link rel="icon" href="' +
        favicon_images[image_counter] +
        '" type="image/gif">'
    );

  // If last image then goto first image
  // Else go to next image
  if (image_counter == favicon_images.length - 1) image_counter = 0;
  else image_counter++;
}, 500);

let div = document.createElement("div");
document.body.appendChild(div);



setTimeout(() => {
  div.innerHTML = 10;
  setTimeout(() => {
    div.innerHTML = 9;
    setTimeout(() => {
      div.innerHTML = 8;
      setTimeout(() => {
        div.innerHTML = 7;
        setTimeout(() => {
          div.innerHTML = 6;
          setTimeout(() => {
            div.innerHTML = 5;
            setTimeout(() => {
              div.innerHTML = 4;
              setTimeout(() => {
                div.innerHTML = 3;
                setTimeout(() => {
                  div.innerHTML = 2;
                  setTimeout(() => {
                    div.innerHTML = 1;
                    setTimeout(() => {
                      div.innerHTML = "HAPPY INDEPENDENCE DAY";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
