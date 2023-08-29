function addMemberSection(name, bestShotUrl) {
    // Create the section element
    var section = document.createElement("section");
    section.className = "member";


    // Create the h3 element
    var h3 = document.createElement("h3");
    h3.textContent = name;
    section.appendChild(h3);


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

function addMember(name, bestShotUrl = "") {
    var text = `<section class="member">`

    text += `<h3>` + name + `</h3>`

    // if (bestShotUrl == "") text += `style="visibility: hidden;"`

    text += `<a href = "` + bestShotUrl + `" target = "_blank" class="best-shot-link" `
    if (bestShotUrl == "") text += `style = "visibility: hidden;"`
    text += `> Best highlight</a> `

    text += `</section> `

    document.write(text)
}