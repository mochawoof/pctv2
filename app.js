// Variable constants
let CONTROLS_HIDE_DELAY = 2000;

// Constant elements

let player = document.querySelector("#player");
let controls = document.querySelector("#controls");

// Utility functions
function fetch_text(url, cb) {
    let request = fetch(url);
    request.then((response) => {
        response.text().then((data) => {
            cb(data);
        })
    });
    request.catch((err) => {
        cb(null, err);
    });
}

// Player functions

function load_source(src, cb) {
    fetch_text(src, (data, err) => {
        if (!err) {
            let lines = data.split("\n");
            console.log(lines[500]);
        }
    });
}

// Controls functions

let controls_hide_timeout_id = -1;
function peek_controls() {
    clearTimeout(controls_hide_timeout_id);
    controls.style.opacity = 1;
    
    controls_hide_timeout_id = setTimeout(() => {
        controls.style.opacity = 0;
    }, CONTROLS_HIDE_DELAY);
}

window.onmousemove = peek_controls;
window.onclick = peek_controls;

load_source("https://raw.githubusercontent.com/Free-TV/IPTV/master/playlist.m3u8");