
let links = document.links;
for (let i = 0, linksLength = links.length; i < linksLength; i++) {
    if (!links[i].target) {
        if (
            links[i].hostname !== window.location.hostname || 
            /\.(?!html?)([a-z]{0,3}|[a-zt]{0,4})$/.test(links[i].pathname)
        ) {
            links[i].target = '_blank';
        } 
    }
}