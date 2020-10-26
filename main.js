async function getMeme() {
    const response = await fetch("https://api.imgflip.com/get_memes");
    const data = await response.json();
    const memeUrl = data.data.memes[Math.floor(Math.random()*99)].url;

    document.getElementById("meme-div").innerHTML = `
        <img src="${memeUrl}">
    `
}