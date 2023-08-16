function addMemberSection(name, portraitPath, websiteUrl, bestShotUrl) {
    // Create the section element
    var section = document.createElement("section");
    section.className = "member";

    // Create the img element
    var img = document.createElement("img");
    img.src = portraitPath;
    img.alt = name;
    img.className = "member-portrait";
    section.appendChild(img);

    // Create the h3 element
    var h3 = document.createElement("h3");
    h3.textContent = name;
    section.appendChild(h3);

    // Create the first link (Website)
    var websiteLink = document.createElement("a");
    websiteLink.href = websiteUrl;
    websiteLink.target = "_blank";
    websiteLink.textContent = "Website";
    websiteLink.className = "member-link";
    section.appendChild(websiteLink);

    // Create the second link (Best shot)
    var bestShotLink = document.createElement("a");
    bestShotLink.href = bestShotUrl;
    bestShotLink.target = "_blank";
    bestShotLink.textContent = "Best shot";
    bestShotLink.className = "best-shot-link";
    section.appendChild(bestShotLink);

    // Append the section to the document body
    document.body.appendChild(section);
}

function addMember(name, portraitPath = "", websiteUrl = "", bestShotUrl = "") {
    var text = `<section class="member">`

    if (portraitPath != "")
        text += `<img src="` + portraitPath + `" alt="` + name + `" class="member-portrait">`

    text += `<h3>` + name + `</h3>`

    text += `<a href = "` + websiteUrl + `" target = "_blank" class="member-link"`
    if (bestShotUrl == "") text += `style="visibility: hidden;"`
    text += `> Website</a> `


    text += `<a href = "` + bestShotUrl + `" target = "_blank" class="best-shot-link" `
    if (bestShotUrl == "") text += `style = "visibility: hidden;"`
    text += `> Best highlight</a> `

    text += `</section> `

    document.write(text)
}