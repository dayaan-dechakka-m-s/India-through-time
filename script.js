/* =========================================
   INDIA THROUGH TIME
   INTERACTIVE HISTORICAL EXPERIENCE
   ========================================= */

const eraResult = document.getElementById("era-result");
const eraContent = document.getElementById("era-content");


/* =========================================
   ENTER TIME MACHINE
   ========================================= */

function startJourney() {

    document.getElementById("journey").scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================================
   ERA INFORMATION
   ========================================= */

const eras = {

    ancient: {

        title: "🏺 ANCIENT INDIA",

        text:
        "Journey into ancient India — a land of early cities, scholars, mathematicians, traders and extraordinary civilizations."

    },


    medieval: {

        title: "🏰 MEDIEVAL INDIA",

        text:
        "Enter medieval India, where powerful kingdoms, bustling markets, magnificent architecture and diverse cultures shaped the subcontinent."

    },


    vijayanagara: {

        title: "🛕 VIJAYANAGARA EMPIRE",

        text:
        "Welcome to the magnificent Vijayanagara Empire. Imagine entering Hampi during the 16th century, when the city was a thriving centre of temples, markets, trade, art and royal life."

    },


    colonial: {

        title: "📜 COLONIAL INDIA",

        text:
        "Step into colonial-era India, a period of major political, economic and social change."

    }

};


/* =========================================
   SELECT ERA
   ========================================= */

function selectEra(era) {

    const selectedEra = eras[era];

    if (!selectedEra) {
        return;
    }


    /* Special experience for Vijayanagara */

    if (era === "vijayanagara") {

        eraContent.innerHTML = `

            <p class="section-label">TIME TRAVEL DESTINATION</p>

            <h3>${selectedEra.title}</h3>

            <p class="historical-intro">
                ${selectedEra.text}
            </p>


            <div class="historical-grid">

                <button onclick="showStory('hampi')">
                    🛕
                    <strong>EXPLORE HAMPI</strong>
                    <span>Walk through the ancient capital.</span>
                </button>


                <button onclick="showStory('royal')">
                    👑
                    <strong>ROYAL LIFE</strong>
                    <span>Discover the world of kings and queens.</span>
                </button>


                <button onclick="showStory('market')">
                    🛍️
                    <strong>MARKETS & TRADE</strong>
                    <span>Explore the bustling bazaars.</span>
                </button>


                <button onclick="showStory('clothing')">
                    👘
                    <strong>CLOTHING</strong>
                    <span>Discover historical fashion.</span>
                </button>


                <button onclick="showStory('food')">
                    🍚
                    <strong>FOOD</strong>
                    <span>Discover what people ate.</span>
                </button>


                <button onclick="showStory('architecture')">
                    🏗️
                    <strong>ARCHITECTURE</strong>
                    <span>Explore the engineering of the empire.</span>
                </button>

            </div>


            <div id="story-box" class="story-box">

                <h4>✨ SELECT AN EXPERIENCE</h4>

                <p>
                    Choose one of the options above to begin exploring
                    Vijayanagara.
                </p>

            </div>


            <div class="quiz-box">

                <p class="section-label">TEST YOUR KNOWLEDGE</p>

                <h4>🧠 QUICK HISTORY QUIZ</h4>

                <p>
                    Which modern location is famous for the remains
                    of the Vijayanagara capital?
                </p>

                <button onclick="checkAnswer('hampi')">
                    A. Hampi
                </button>

                <button onclick="checkAnswer('delhi')">
                    B. Delhi
                </button>

                <button onclick="checkAnswer('mumbai')">
                    C. Mumbai
                </button>

                <p id="quiz-result"></p>

            </div>

        `;

    } else {

        eraContent.innerHTML = `

            <p class="section-label">YOUR DESTINATION</p>

            <h3>${selectedEra.title}</h3>

            <p class="historical-intro">
                ${selectedEra.text}
            </p>

        `;

    }


    eraResult.classList.add("show");

    eraResult.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


/* =========================================
   HISTORICAL STORIES
   ========================================= */

function showStory(type) {

    const storyBox = document.getElementById("story-box");


    const stories = {

        hampi: {

            title: "🛕 WALK THROUGH HAMPI",

            text:
            "Imagine approaching the city through the rocky landscape of present-day Karnataka. Monumental temples, gateways, markets and royal buildings formed part of a remarkable urban landscape. Hampi today preserves the archaeological remains of this once-powerful capital."

        },


        royal: {

            title: "👑 ROYAL LIFE",

            text:
            "The Vijayanagara court was associated with kings, nobles, administrators, warriors, artists and scholars. Royal ceremonies and festivals displayed the wealth and power of the empire."

        },


        market: {

            title: "🛍️ MARKETS & TRADE",

            text:
            "Markets were an important part of life in the capital. Traders exchanged valuable goods and the city was connected to wider networks of commerce. Precious stones, textiles, spices and other commodities were among the goods associated with the region's trade."

        },


        clothing: {

            title: "👘 CLOTHING",

            text:
            "Clothing varied according to occupation, social position, wealth and occasion. Cotton and other textiles were important, while wealthy communities could use finer and more decorated fabrics and jewellery."

        },


        food: {

            title: "🍚 FOOD & DAILY LIFE",

            text:
            "Rice, pulses, vegetables, fruits and spices formed parts of South Indian diets. Food traditions varied across communities, regions and social groups."

        },


        architecture: {

            title: "🏗️ ARCHITECTURE",

            text:
            "Vijayanagara architecture is famous for monumental temple complexes, elaborate gateways, stone structures, water systems and carefully planned spaces. The surviving monuments provide clues about the engineering and artistic traditions of the period."

        }

    };


    const story = stories[type];

    if (!story) {
        return;
    }


    storyBox.innerHTML = `

        <h4>${story.title}</h4>

        <p>${story.text}</p>

    `;

}


/* =========================================
   QUIZ
   ========================================= */

function checkAnswer(answer) {

    const result = document.getElementById("quiz-result");

    if (answer === "hampi") {

        result.textContent =
            "🎉 Correct! Hampi is the famous archaeological site associated with the Vijayanagara capital.";

    } else {

        result.textContent =
            "❌ Not quite! Try again.";

    }

}
