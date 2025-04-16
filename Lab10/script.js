var imglist_url = 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=ca370d51a054836007519a00ff4ce59e&per_page=10&format=json&nojsoncallback=1';
var api_key = 'ca370d51a054836007519a00ff4ce59e';

function getimg() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', imglist_url, true);
    xhr.send();
    xhr.onload = function () {
        var data = JSON.parse(this.responseText);
        add_new_img(data.photos.photo);
    }
}

function add_new_img(dataset) {
    var gal = document.getElementById("gallery");
    gal.innerHTML = ""; // 清空舊圖片

    dataset.forEach(function (item) {
        var photo_id = item.id;
        var sizes_url = `https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=${api_key}&photo_id=${photo_id}&format=json&nojsoncallback=1`;

        var xhr = new XMLHttpRequest();
        xhr.open('GET', sizes_url, true);
        xhr.send();
        xhr.onload = function () {
            var data = JSON.parse(this.responseText);
            if (data.sizes && data.sizes.size) {
                var size = data.sizes.size.find(s => s.label === "Medium");
                if (size) {
                    var img = document.createElement("img");
                    img.setAttribute("src", size.source);
                    img.setAttribute("alt", item.title);
                    gal.appendChild(img);
                }
            }
        };
    });
}
