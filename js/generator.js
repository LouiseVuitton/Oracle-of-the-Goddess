// RANDOM GENERATOR
//var amethyst = [
//	{goddess: "Freyja, Goddess of Leadership", picture:"freyja_head.jpg", advice:"Think Creatively", more:"Devise amusements and improvements you love. Have fun. Give life to something that has never been. Think romantically. Style is as important as substance. Showing graciousness and displaying affection will increase your resources in the long run."},
//	{goddess:"Lakshmi, Goddess of Wisdom", picture:"lakshmi_head.jpg", advice:"Think Honestly", more:"Discover what you really believe and live by it. Be honest with yourself and others. A positive outlook attracts good fortune. An open mind enables you to see or create opportunities others would miss."},
//	{goddess:"Diviana, Goddess of Protection", picture:"diviana_head.jpg", advice:"Think of the Past", more:"Limiting habits and attitudes are formed as protective reactions to past events. Avoiding commitment results when commitment proved painful in the past. Negative events and familty interations will hinder you and your relationships now unless identified and their effects understood."},
//	{goddess:"Romi Kumu, Goddess of Willpower", picture:"romi kumu_head.jpg", advice:"Think of Yourself", more:"Do it now! Only you can take control of your life. No one can stop you unless you let them. Do not blame others. Make clear goals so you can achieve them. Stay focused on the present moment and the future will take care of itself."},
//	{goddess:"Hekat, Goddess of Mysteries", picture:"hekat_head.jpg", advice:"Think Seductively", more:"Things now are not what they seem. Motives, beliefs, and information must be kept secret. You may be the target of seduction. Passions may try and overrule logic, so beware of enticing involvements you may later regret."},
//	{goddess:"Atlantia, Goddess of the Unexpected", picture:"atlantia_head.jpg", advice:"Think Freely", more:"Resist all preconceived notions. Stir things up. Think about taking actions that go against accepted beliefs. Do not fear embarrassment or the opinions of others."},
//	{goddess:"T'ai Yuan, Goddess of Duality", picture:"tai yuan_head.jpg", advice:"Think Diplomatically", more:"Design a plan that makes the attainment of your goal benefit all concerned. Devote your energies to forming lasting partnerships. Know what you will accept and what you will not. Be prepared to walk away if a reasonable compromise cannot be agreed upon."},
//	{goddess:"Artemis, Goddess of Discernment", picture:"artemis_head.jpg", advice:"Think Realistically", more:"Clarify and smiplify your plans and communications to keep understanding to a minimum. Expect and be able to live with imperfection and occasional failure. Worry can be overcome if you focus on past successes, not past failures. Obsessive behavior is a threat to attaining your goal."},
//	{goddess:"Pasowee, Goddess of Endurance", picture:"pasowee_head.jpg", advice:"Think Unbiasedly", more:"Look beyind appearances to see thing as they really are. Do not accept cultureal egotism and prejudices as fact. Many accepted attitudes about the roles of men and women today are distorted; female and male must be equal. Root out the effects of false ideas in yourself, then point them out in the thinking of others."},
//	{goddess:"Aphrodite, Goddess of Affection", picture:"aphrodite_head.jpg", advice:"Think Affectionately", more:"Enjoy the moment. Enjoy all forms of creativity. Be charming and happy. Take a vacation from logic and worry. Enjoy the ecstasy that emanates from the meeting of two lovers. Don't worry."},
//	{goddess:"Eurzulie, Goddess of Sensitivity", picture:"eurzulie_head.jpg", advice:"Think Charitably", more:"We are all here to help each other make the most of life. Those in obvious need deserve sympathy, guidance and help. Give aid and comfort to those in need, but first examine the motives of all involved, including yourself. Focusing on the needs of others can be an escape from loneliness or your own needs."},
//	{goddess:"Brigit, Goddess of Communication", picture:"brigit_head.jpg", advice:"Think Persuasively", more:"The quickness, logic, and timing of communications is critical now. Keep information current. Be superficial in the prescence of ignorance. Use your words cleverly in lively debate. Ask questions until you see holes in another's argument, then teach the correctness of your beliefs."}
//];

// var ruby = [];

// var turquoise = [];

//************
// FUNCTIONS
//************

Array.prototype.shuffle = function () {
  var i = this.length, j, temp;
  while(--i > 0) {
    j = Math.floor(Math.random() * (i + 1));
    temp = this[j];
    this[j] = this[i];
    this[i] = temp;
  }
  return this;
};

var amethyst = ["Freyja, Goddess of Leadership", "Lakshmi, Goddess of Wisdom", "Diviana, Goddess of Protection", "Romi Kumu, Goddess of Willpower", "Hekat, Goddess of Mysteries", "Atlantia, Goddess of the Unexpected", "T'ai Yuan, Goddess of Duality", "Artemis, Goddess of Discernment", "Pasowee, Goddess of Endurance", "Aphrodite, Goddess of Affection", "Eurzulie, Goddess of Sensitivity", "Brigit, Goddess of Communication"];

var result = amethyst.shuffle();

document.getElementById("head").innerHTML = amethyst[0];