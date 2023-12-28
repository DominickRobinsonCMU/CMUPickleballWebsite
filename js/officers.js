

function addOfficer(name, position = "", portraitPath = "", quote = "") {
    var text = `<section class="member">`;

    text = `
    <div class="officer">
    `
    if (portraitPath != "")
        text += `<img src="images/portraits/` + portraitPath + `" alt="` + name + `" class="officer-portrait">`

    text += `<p class="name">` + name + `</p>`

    text += `<p class="position">` + position + `</p>`

    if (quote != "")
        text += `<p class="quote" >"` + quote + `"</p>`

    text += `</div >`

    document.write(text);
}







function addOfficerTest(name, position = "", portraitPath = "", quote = "") {
    var text = `<section class="member">`;

    text = `
    <div class="officer">
    <img src="images/portraits/25/dom.jfif" alt="Officer 1" class="officer-portrait">
    <p class="name">Name</p>
    <p class="position">President</p>
    <p class="quote">"Pickleball is more than just a game; it's a way of life."</p>
</div>`

    document.write(text);
}