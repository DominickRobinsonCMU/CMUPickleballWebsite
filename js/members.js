

function addMember(name, portraitPath = "", nickname = "", bestShotUrl = "") {
    var text = `<section class="member">`;

    if (portraitPath != "")
        text += `<img src="images/portraits/` + portraitPath + `" alt="` + name + `" class="member-portrait">`

    text += `<h3>` + name + `</h3>`;

    text += `<h4>"` + nickname + `"</h4>`;

    // if (bestShotUrl == "") text += `style="visibility: hidden;"`

    if (bestShotUrl) text += `<a href = "` + bestShotUrl + `" target = "_blank" class="best-shot-link" > Best highlight</a>`;

    text += `</section > `;

    document.write(text);
}