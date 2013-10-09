var Downloader = {
    get: function(message, win, fail) {
		if (!fail) win = params;
		cordova.exec(win, fail, "Downloader", "get", [message]);
     }
}
module.exports = Downloader;