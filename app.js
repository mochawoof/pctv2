let player = document.getElementById("player");

function get_text(url, cb) {
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

function load_source(src, cb) {
    get_text(src, (data, err) => {
        if (!err) {
            let lines = data.split("\n");
            console.log(lines);
        }
    });
}

load_source("https://raw.githubusercontent.com/Free-TV/IPTV/master/playlist.m3u8");