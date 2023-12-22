
var VIDEO_ASPECT_RATIO = 16.0 / 9.0;

var campanileTextStrings = [
    "Original NeRF",
    "<em>\"Make it autumn\"</em>",
    "<em>\"Make it look like the Namibian desert\"</em>",
    "<em>\"Make it midnight\"</em>",
    "<em>\"Make it look like it just snowed\"</em>",
    "<em>\"Make it stormy\"</em>",
    "<em>\"Make it sunset\"</em>",
];

var bearTextStrings = [
  "Original NeRF",
  "<em>\"Turn the bear into a grizzly bear\"</em>",
  "<em>\"Turn the bear into a polar bear\"</em>",
  "<em>\"Turn the bear into a panda\"</em>",
];

$("#campanile-video").on('loadedmetadata', function() {
    this.width = this.videoWidth;
    this.height = this.videoHeight;
    console.log(this.width, this.height);
  });

$(function() {
    current_campanile_idx = 0;
    current_bear_idx = 0;
    current_egypt_idx = 0;
    

    campanileVideo = document.getElementById('campanile-video');
    bearVideo = document.getElementById('bear-video');
    egyptVideo = document.getElementById('egypt-video');


    //campanileText = document.getElementById('campanile-text');
    //bearText = document.getElementById('bear-text');

    campanileThumbnails = [
        document.getElementById('original'),
        document.getElementById('vangogh'),
        document.getElementById('comic'),
        document.getElementById('halloween'),
        document.getElementById('snow'),
        document.getElementById('garden'),
        document.getElementById('sunset'),
      ];
      for (var i = 0; i < campanileThumbnails.length; i++) {
        campanileThumbnails[i].addEventListener('click', change_campanile_index.bind(this, i));
      }
      change_campanile_index(current_campanile_idx);


      bearThumbnails = [
        document.getElementById('original-bear'),
        document.getElementById('grizzly'),
        document.getElementById('polar'),
        document.getElementById('panda'),
      ];
      for (var i = 0; i < bearThumbnails.length; i++) {
        bearThumbnails[i].addEventListener('click', change_bear_index.bind(this, i));
      }
      change_bear_index(current_bear_idx);

      egyptThumbnails = [
        document.getElementById('original-egypt'),
        document.getElementById('sunset-egypt'),
        document.getElementById('snow-egypt'),
        document.getElementById('night-egypt'),
      ];
      for (var i = 0; i < egyptThumbnails.length; i++) {
        egyptThumbnails[i].addEventListener('click', change_egypt_index.bind(this, i));
      }
      change_egypt_index(current_egypt_idx);

  });
  
function change_campanile_index (idx) {
    campanileThumbnails[idx].classList.add("active-btn");
    if (current_campanile_idx != idx) {
        campanileThumbnails[current_campanile_idx].classList.remove("active-btn");
    }
    current_campanile_idx = idx;
    //campanileText.innerHTML = campanileTextStrings[idx];
    campanileVideo.src = "data/videos/campanile/campanile-" + campanileThumbnails[idx].id + ".mp4";
    campanileVideo.load();
}

function change_bear_index (idx) {
    bearThumbnails[idx].classList.add("active-btn");
    if (current_bear_idx != idx) {
        bearThumbnails[current_bear_idx].classList.remove("active-btn");
    }
    current_bear_idx = idx;
    //bearText.innerHTML = bearTextStrings[idx];
    bearVideo.src = "data/videos/bear/bear-" + bearThumbnails[idx].id + ".mp4";
    bearVideo.load();
}


function change_egypt_index (idx) {
  egyptThumbnails[idx].classList.add("active-btn");
  if (current_egypt_idx != idx) {
    egyptThumbnails[current_egypt_idx].classList.remove("active-btn");
  }
  current_egypt_idx = idx;
  egyptVideo.src = "data/videos/egypt/egypt-" + egyptThumbnails[idx].id + ".mp4";
  egyptVideo.load();
}