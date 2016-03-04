var image = "http://dummyimage.com/16x16/ff00ff/ff00ff.jpg";

var images = [
	"http://www.adobe.com/content/dam/Adobe/en/devnet/flash/samples/media_2/images/image1.jpg",
	"http://www.adobe.com/content/dam/Adobe/en/devnet/flash/samples/media_2/images/image2.jpg",
	"http://www.adobe.com/content/dam/Adobe/en/devnet/flash/samples/media_2/images/image3.jpg",
	"http://www.adobe.com/content/dam/Adobe/en/devnet/flash/samples/media_2/images/image4.jpg",
	"http://www.adobe.com/content/dam/Adobe/en/devnet/flash/samples/media_2/images/image5.jpg"
];

var callback = function(details) {
	// chrome 48: "other"
	// chrome 49: "object"
	console.debug(details.type);
	return { "redirectUrl": image };
};
// with no "types" it would work
var filter = {"urls": images, "types": ["object", "other"]};
var options = ["blocking"];

chrome.webRequest.onBeforeRequest.addListener(
	callback, filter, options
);
