(function(document) {
  try {
    for(var i = 0, l=document.links.length; i<l; i++) {
      url = document.links[i].href;
      if (url.includes("http://t.umblr.com/redirect")) {
        var startIdx = url.indexOf('?z=') + 3;
        var endIdx = url.indexOf('&t=', startIdx);
        var realUrl = url.substring(startIdx,endIdx)
        document.links[i].href = decodeURIComponent(realUrl);
      }
    }
  } catch(err) {
    console.log(err);
    console.log("Couldn't fixup URLs.");
  }
})(document);
