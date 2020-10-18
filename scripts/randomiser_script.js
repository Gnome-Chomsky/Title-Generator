
// ADD FUNCTION TO CREATE DIFFERENT KINDS OS SENTENCES
//randomiser function #
//select Chud #
//select lefty #
//select verb #
//select adjective #
//select facts/knowledge part #
//button function #


//function generateSentence() {
//  return ;
//}

function randomise(array) {

  var randomPos = Math.floor(Math.random() * array.length);

  return array[randomPos];

}

function selectChud() {
  var chudBank = ["Trump","Ben Shapiro","Don Jr.","Steven Crowder","Candace Owens","Tucker Carlson","Tomi Lahren","Kaitlin Bennett",
                  "Alex Jones","Jordan Peterson","Joe Rogan","Laura Ingraham","Gavin McInnes","Sean Hannity","Judge Jeanine",
                  "Geraldo Rivera","Dave Rubin","Mikhaila Peterson"];

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
                   "Liberal Media"];

  if ($("#inputSoyCuck").val() !=""){
    return $("#inputSoyCuck").val();
  }
  else {
    return randomise(leftyBank);
  }
}

function selectVerb() {
  var verbs = ["Annihilates","Fucks","Sodomises","Destroys","Brutalises","Rapes And Pillages","Pile-drives","Swanton-Bombs",
               "Blasts","Carpet Bombs","Debowels","Butchers","Kills","Dismantles","Maims","Guts","Hangs, Draws and Quarters","Beheads",
               "Decapitates","Wrecks","Wipes Out","Ravages","Embarasses","Napalms","Assaults","Attacks","Overwhelms","Crushes"];

  return randomise(verbs);

}

function selectAdjective() {
  var adj = ["Rock Hard","Throbbing","Pulsating","Burning Hot","Hot And Sticky","Razor Sharp","Hard","Veiny","Thick","Palpitating",
             "Spiked","Morning Star of","Sword of","Nuclear Warhead of","Scorching","Axe of","Katana of","Laser Cut"];

  return randomise(adj);
}

function selectEnding() {
  var end = ["Facts","Logic","Facts & Logic","Reason","Reasoning","Arguments","Sanity","Judgement","Analysis","Data","Wit","Rationality","Sense",
             "Thinking","Rationalism","Wisdom"];

  return randomise(end);
}
