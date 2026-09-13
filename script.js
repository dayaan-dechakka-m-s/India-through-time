
const pages = {

    ancient: "ancient.html",

    maurya: "maurya.html",

    gupta: "gupta.html",

    rajput: "rajput.html",

    chola: "chola.html",

    vijayanagara: "vijayanagara.html",

    hampi: "vijayanagara.html",

    mughal: "mughal.html",

    maratha: "maratha.html",

    colonial: "colonial.html",

    independence: "independence.html",

    culture: "culture.html",

    architecture: "architecture.html"

};


function searchHistory() {

    const box = document.getElementById("searchBox");

    if (!box) {
        return;
    }

    const query =
        box.value
        .trim()
        .toLowerCase();

    if (!query) {
        return;
    }


    for (const key in pages) {

        if (key.includes(query)) {

            window.location.href =
                pages[key];

            return;
        }

    }


    alert(
        "Topic not found.\n\n" +
        "Try:\n" +
        "Mughal\n" +
        "Rajput\n" +
        "Chola\n" +
        "Maurya\n" +
        "Gupta\n" +
        "Vijayanagara\n" +
        "Maratha\n" +
        "Colonial\n" +
        "Independence\n" +
        "Culture\n" +
        "Architecture"
    );

}


document
    .getElementById("searchBox")
    ?.addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Enter") {

                searchHistory();

            }

        }
    );
