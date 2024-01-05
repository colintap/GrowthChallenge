const catFacts = ["Did you know that cats have whiskers so they can feel the world around them?", "Cats use their long tails to balance themselves when they’re jumping or walking along narrow ledges.", "Cats walk like camels and giraffes: They move both of their right feet first, then move both of their left feet. No other animals walk this way.", "Male cats are more likely to be left-pawed, while female cats are more likely to be right-pawed.", "Though cats can notice the fast movements of their prey, it often seems to them that slow-moving objects are actually stagnant.", "Some cats are ambidextrous, but 40 percent are either left- or right-pawed.", "There are cats who have more than 18 toes. These extra-digit felines are referred to as being “polydactyl.”"];
let myIndex = 0;

const buttonClick = document.querySelector("#button");
const catFact = document.querySelector("#catFact");

buttonClick.onclick  = () => {
    catFact.textContent = catFacts[myIndex];
    myIndex = (myIndex + 1) % catFacts.length;
};

