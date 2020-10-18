
// ADD FUNCTION TO CREATE DIFFERENT KINDS OS SENTENCES
//randomiser function #
//select Chud #
//select lefty #
//select verb #
//select adjective #
//select facts/knowledge part #
//button function #


function generateSentence() {
  return selectChud()+' '+selectVerb()+' '+selectLefty()+' With '+selectAdjective()+' '+selectEnding();
}

function randomise(array) {

  var randomPos = Math.floor(Math.random() * array.length);

  return array[randomPos];

}

function selectChud() {
  var chudBank = ["Trump","Ben Shapiro","Don Jr.","Steven Crowder","Candace Owens","Tucker Carlson","Tomi Lahren","Kaitlin Bennett",
                  "Alex Jones","Jordan Peterson","Joe Rogan","Laura Ingraham","Gavin McInnes","Sean Hannity","Judge Jeanine",
                  "Geraldo Rivera","Dave Rubin","Mikhaila Peterson","J.K. Rowling","Patriot","Black Guy","Sargon of Akkad","Ted Cruz",
                  "Pastor", "Greg Gutfeld","Navy SEAL","Marine","Trump Supporter","Ted Nugent","Rush Limbaugh","Jacob Rees-Mogg", "Boris Johnson",
                  "Nigel Farage"];

  if ($("#inputBasedGuy").val() !=""){
    return $("#inputBasedGuy").val();
  }
  else {
    return randomise(chudBank);
  }
}


function selectLefty() {
  var leftyBank = ["Libs","Liberals","Lefties","Cenk Uygur","ANTIFA","Democrats","Hillary Clinton","Obama","The Young Turks","TYT",
                   "Progressives","Feminists","Feminism","Lefty Beta Males","AOC","Pope Francis","Hasan Piker","Radical Lefties","Bill Maher",
                   "Chris Cuomo","Pelosi","Nancy Pelosi","Chuck Schumer","Donna Brazile","BLM","Protestors","BLM Protests","Activists",
                   "Vegans","Protests","College Students","Islam","Migrant Rights Group","Mumble Rappers","Rappers","Rap Music","CNN",
                   "Liberal Media","The Woke Crowd","Snowflakes","SJWs","Pride Month","Bernie Sanders","Biden","Civil Rights Group",
                   "Establishment Media","Safe Spaces","Hollywood","Coastal Elites","Michele Obama","Hipsters"];

  if ($("#inputSoyCuck").val() !=""){
    return $("#inputSoyCuck").val();
  }
  else {
    return randomise(leftyBank);
  }
}

function selectVerb() {
  var verbs = ["Annihilates","Fucks","Sodomises","Destroys","Brutalises","Rapes And Pillages","Pile-drives","Swanton-Bombs",
               "Blasts","Carpet Bombs","Disembowels","Butchers","Kills","Dismantles","Maims","Guts","Hangs, Draws and Quarters","Beheads",
               "Decapitates","Wrecks","Wipes Out","Ravages","Embarasses","Napalms","Assaults","Attacks","Overwhelms","Crushes","Drops Cartoon Anvil on",
               "Sacrifices", "Puts Down","Eviscerates","Blinds","Gives the ol' 1-2 to","Shreds","Obliterates","Blows Up","Blitzes","Ambushes","Calls Out"];

  return randomise(verbs);

}

function selectAdjective() {
  var adj = ["Rock Hard","Throbbing","Burning Hot","Hot And Sticky","Razor Sharp","Hard","Veiny","Thick",
             "Spiked","Morning Star of","Sword of","Nuclear Warhead of","Scorching","Axe of","Katana of","Laser Cut","Machine Gun of",
             "Chainsaw of", "Minigun of","Nail Bat of","Rusty Nail of","Lethal","F-16 Armed With","300 Jacketed Rounds of","Scientifically Backed-up",
             "Dank","Based","Sledge Hammer of", "Buzzsaw of","Orbital Laser of","B52 Packed With"];

  return randomise(adj);
}

function selectEnding() {
  var end = ["Facts","Logic","Facts & Logic","Reason","Reasoning","Arguments","Sanity","Judgement","Analysis","Data","Wit","Rationality","Sense",
             "Rational Thinking","Rationalism","Wisdom","Judeo-Christian Values","Memes"];

  return randomise(end);
}
