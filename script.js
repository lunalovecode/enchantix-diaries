let prevFont = "";
function switchFont() {
	const button = document.getElementById("switch-font");
	const bodyStyle = window.getComputedStyle(document.body, null);
	const currentFont = bodyStyle.fontFamily;

	if (!currentFont.includes("sans-serif")) {
		prevFont = currentFont;
		document.body.style.fontFamily = "Arial, Helvetica, sans-serif";
		button.innerHTML = "Switch to Default Font";
	} else {
		if (prevFont.includes("Pacifico")) {
			document.body.style.fontFamily = "Pacifico";
		} else if (prevFont.includes("Gamja Flower")) {
			document.body.style.fontFamily = "Gamja Flower";
		} else if (prevFont.includes("Indie Flower")) {
			document.body.style.fontFamily = "Indie Flower";
		}
    	button.innerHTML = "Switch to Readable Font";
	}
}

const button = document.getElementById("switch-font");
button.addEventListener("click", switchFont);
const bodyStyle = window.getComputedStyle(document.body, null);
const currentFont = bodyStyle.fontFamily;

/*
const leftContent = document.getElementById("left-content");
const rightContent = document.getElementById("right-content");
const leftPage = document.getElementById("left-page");
const rightPage = document.getElementById("right-page");
const leftPageNum = document.getElementById("left-page-num");
const rightPageNum = document.getElementById("right-page-num");

let leftText = [
	"<h3>Monday, September 3</h3><p>Dear Diary,</p><p>It's my first day at Enchantix Academy! I've never met fairies other than Love Fairies like me, so this is exciting! I know this school year's gonna be great!</p>",
	"<p>I found a girl with black hair sitting by the edge of a lake. She talked to herself while she wrote in a black-and-white notebook. She might need a friend…</p><p>\"Hi!\" I greeted. (I think I startled her. She nearly dropped her notebook...) \"I'm Blossom.\"</p><p>\"Oh... Hi...\" she greeted back.</p><p>\"Are you okay?\"</p><p>\"I'm just surprised. No one talks to me.\"</p><p>\"You're Seo Hyun-mi, right?\"</p><p>\"Mhm.\"</p><p>\"What kind of powers do you have?\" I asked.</p>",
	"<p>A group of three girls teased another girl with orange hair and attacked her with dark magic. The orange-haired girl sent them blasting off with an explosion of flames.</p><p>\"You're not like them,\" I reassured her.</p><p>\"Thanks... But I better get going.\"</p><p>Hyun-mi ran off somewhere.</p><p>\"See you tomorrow!\"</p><p>I might be Hyun-mi's first friend. I can't imagine the idea of someone going without friends for that long...</p><p>Well, I can think about that later! I have homework to do. See you, Diary!</p><p class=\"signature\">Love, Blossom ❤</p>",
	"<p>Black wings grew from her shoulders.</p><p>\"You're becoming the monster you were meant to be,\" Ariadne teased.</p><p>Hyun-mi couldn't take it anymore. She gasped for air and cried until a crow her size flew around the classroom. What could I do...?</p><p>\"Heath, can you please calm her down?\" Flora asked.</p><p>Heath may be the strongest one in our class, but she's actually quite gentle. Heath grabbed Hyun-mi out of the air and hugged her.</p>",
	"<p>And she's Roxy, the <u>most powerful</u> Animal Fairy!</p><p>Hyun-mi shattered a classroom window and flew outside.</p><p>I transformed into my Charmix and flew after her in a series of sudden ascents, sharp turns, and nosedives I didn't know I could do. Out of nowhere, a beam of ice homed in on Hyun-mi. I formed a shield for her, but the ice passed through and nearly hit her. I pushed Hyun-mi out of the way and took the hit.</p>",
	"<p>I always thought of Helia as a bit aloof, but I knew she had a soft side!</p><p>\"Anyway, class is already over—\"</p><p>Someone knocked on the door. Hyun-mi answered the door to Flora and Roxy.</p><p>\"Blossom's right here.\"</p><p>Flora and Roxy followed Hyun-mi to my bed.</p><p>\"I can get up,\" I insisted.</p><p>My flowy dress got snagged on one of the bedposts. Wait a minute! I didn't <u>own</u> a flowy dress...</p>",
	"<p>\"You earned your Enchantix!\" Flora exclaimed. \"But Hyun-mi's not from Callisto, is she?\"</p><p>\"Nope,\" Hyun-mi replied. \"I'm from Earth. My fairy side is from Darkholm. Why do you ask?\"</p><p>\"We earned our Enchantix by saving people for our home world,\" Flora replied. Roxy pouted. \"How did you earn your Enchantix, Roxy?\"</p><p>\"I 'earned' it by earning my Believix,\" Roxy said.</p>",
	"<p>Dear Diary,</p><p>I got detention, and I don't regret it at all! I can talk with Hyun-mi. That's all I need.</p>",
	"<p>I couldn't hear what they were saying, but I could tell the voices belonged to Principal Stern and an angry Orchid Valentine.</p><p>\"Sorry for getting your mom involved in this,\" Hyun-mi apologized a few hours later when the shouting died down.</p><p>\"It's not your fault,\" I assured her.</p><p>\"I didn't want you to get involved. You know everyone <u>hates</u> Dark Fairies. They only have a dorm because one of the founders was one.\"</p><p>\"Then why hasn't it been taken down?\"</p>",
	"<p>Dear Diary,</p><p>The first thing I heard after I got ready was a rapid knocking at the door.</p><p>\"Blossom!\" Hyun-mi's muffled but clearly excited voice said.</p><p>I never saw her happy or excited too often, so it immediately put a smile on my face. \"What is it?\"</p><p>\"Principal Stern got fired! It turns out he got similar complaints from other parents, too. He's being replaced by someone named Port Bow.\"</p><p>\"Yay!\"</p>",
	"<p>\"Sorry that you had to get detention,\" she apologized. \"I tried to talk Principal Stern out of it, but... well...\"</p><p>\"But what?\" Hyun-mi asked.</p><p>Soleil breathed in through her teeth. \"You see, Persephone's mom is part of the school board.\"</p><p>Persephone was one of the New Trix. If one of their moms was part of the school board...</p><p>\"I can't believe Principal Stern let her do that,\" Soleil fumed. \"Good thing he's gone now. <u>Terrible</u> example of a principal... Anyway, see you in class.\"</p>",
	"<p>Hyun-mi ran to her dorm and got changed. The New Trix were out shopping like they usually were, so Hyun-mi basically had the Dark Dorm to herself.</p><p>Well, I have to go, Diary. Hyun-mi's waiting for me!</p><p class=\"signature\">Love, Blossom ❤</p>",
];
let rightText = [
	"<p>A girl with green hair waved at me.</p><p>\"Hello. What's your name?\"</p><p>\"I'm Blossom!\"</p><p>\"Bubbles?\"</p><p>\"Blossom.\"</p><p>\"Nice to meet you, Buttercup. I'm Blackthorne.\"</p><p>We shook hands.</p>",
	"<p>Hyun-mi hesitated for a moment. \"Are you sure you want to know? This is the part where everyone goes away.\"</p><p>\"Why would I go away?\"</p><p>\"Because of, well, this...\"</p><p>Hyun-mi formed a dark purple ball of shadow in her hands. I thought it was pretty, not scary!</p><p>\"You're not scared?\" Hyun-mi asked. \"That's dark magic. I—\"</p><p>\"Having dark magic doesn't make you a bad person.\"</p><p>\"I know, but people don't think that's true. Just look.\"</p>",
	"<h3>Monday, March 11</h3><p>Dear Diary,</p> <p>I'm in Flora's Biology class! Not only was Flora herself teaching, but Roxy was there, too! The New Trix are still bullying Hyun-mi, though.</p><p>\"Good morning, class!\" Flora greeted.</p><p>\"Good morning!\" everyone greeted back. Well, almost everyone.</p><p>\"For today's lesson—Are you okay, Hyun-mi?\"</p><p>A part of Hyun-mi's face turned black.</p>",
	"<p>Heath's left hand glowed with a green light when she stroked Hyun-mi's wings. Hyun-mi calmed down, but she still tried to bite the New Trix.</p><p>\"It's not working?\" Flora asked.</p><p>\"Sorry, ma'am,\" Heath apologized. \"My brother's the expert in animal magic, not me.\"</p><p>\"I'll try,\" Roxy said. A blue-green light shone from her hands as she stroked Hyun-mi's wings. She made progress, but she wasn't able to turn Hyun-mi back to normal.</p>",
	"<p>Moments later, I found myself in my bed, freezing cold.</p><p>\"Are you okay?\" a blurry black-and-white silhouette asked. Hyun-mi was back to normal!</p><p>\"Are <u>you</u> okay?\" I asked back. \"My vision's a bit blurry, but I'm fine.\"</p><p>\"I'm okay, too. But I can't believe you nearly DIED, but you're worrying about me. Heath, Roxy, and Helia helped a lot. Helia insisted on tending to you, but I told her thawing you out was enough.\"</p>",
	"<p>I looked in the mirror and saw that I wore a pale pink flowy dress that faded into hot pink at the end and white barefoot sandals that coiled around my calves. I had white gloves that almost reached my shoulders. I wore a gold tiara with a pink heart-shaped gem and a pink beaded necklace. Instead of the small red heart-shaped wings I normally had, I had a pair of pink butterfly wings with pink jewels hanging off them that made a heart when they were put together.</p><p>\"You look amazing...\" Hyun-mi marveled.</p>",
	"<p>\"...I'll go tell Bloom and the others. See you in my next class!\"</p><p>\"See you!\"</p><p>The rest of the day didn't have much going on, and I'm really grateful for that. I didn't want Hyun-mi to get into more trouble today.</p><p class=\"signature\">Love, Blossom ❤</p>",
	"<p>\"Detention?\" my mom asked. \"I'm not mad, I'm just asking you to explain yourself.\"</p><p>\"Those girls—the New Trix—tried to hurt Hyun-mi again!\"</p><p>\"Again?\"</p><p>\"I made a shield, but Principal Stern thought <u>we</u> were attacking <u>them</u>!</p><p>Mom got up and rolled her sleeves up. \"Excuse me. I'll have a quick word with Principal Stern.\"</p><p>Mom left the room. Shortly after, I heard muffled screams outside.</p>",
	"<p>\"Probably just to taunt us. But I swear, I'll become like the New Trix when the Great Dragon's power dies.\"</p><p>\"That's what I like to hear!\"</p><p>Hyun-mi and I laughed and watched the sunset from my dorm balcony.</p><p class=\"signature\">Love, Blossom ❤</p>",
	"<p>\"But aren't you moving to Royale High after this year?\"</p><p>\"Oh... Right.\"</p><p>Being fairy royalty meant that I had to switch to Royale High for 9th grade. I didn't want to leave Hyun-mi behind...</p><p>\"There you are!\"</p><p>Soleil, the class president, ran up to us, her golden hair glistening in the afternoon sunlight. Her green dress rustled in the wind.</p>",
	"<p>Soleil ran off.</p><p>\"See you tomorrow!\" I waved.</p><p>\"My respect for her just... skyrocketed,\" Hyun-mi said when Soleil wasn't in earshot. \"The other class presidents at my old schools just called me a 'troublemaker' and left it at that. Same with the teachers.\"</p><p>\"Even the principals?\" I asked.</p><p>\"Principal Stern wasn't anything new.\"</p><p>\"Oh...\"</p><p>\"...Let's not think about that. Want to swim at the Mermaid Grotto?\"</p><p>\"Sure! You can go ahead.\"</p>",
	"<p>Author's note: This is the last entry, but I'll add more stories in between :D</p>",
];

if (currentFont.includes("Gamja Flower")) {
    leftText = [
        "",
        "",
        "",
        "",
        "",
    ];
    rightText = ["",
        "",
        "",
        "",
        "",
    ];
} else if (currentFont.includes("Indie Flower")) {
    leftText = [
        "",
        "",
        "",
        "",
        "",
    ];
    rightText = [
        "",
        "",
        "",
        "",
        "",
    ];
}

let l = 1;
let r = 2;
let i = 0
function turnForward() {
	if (i < rightText.length - 1) {
        i++;
		l += 2;
        r += 2;
		leftContent.innerHTML = leftText[i];
		rightContent.innerHTML = rightText[i];
	};
    leftPageNum.innerText = l;
    rightPageNum.innerText = r;
};

function turnBack() {
    if (i > 0) {
        i--;
		l -= 2;
        r -= 2;
		leftContent.innerHTML = leftText[i];
		rightContent.innerHTML = rightText[i];
	}
    leftPageNum.innerText = l;
    rightPageNum.innerText = r;
};

leftPageNum.innerText = l;
rightPageNum.innerText = r;
leftPage.addEventListener("click", turnBack);
rightPage.addEventListener("click", turnForward);
*/