
function getFact() {
    var facts = [
        "The unicorn is the national animal of Scotland.",
        "A cat's memory is thought to be at least 200 times better than a dog's. But as any cat owner knows, felines are more selective, and remember what they think is useful to them. Short term memory for a dog is about five minutes; cats remember much longer, up to 16 hours.",
        "The rings of blue, black, yellow, red and green, which make up one of the most recognized symbols in the world, traditionally represent the five different areas of the world involved in the Olympics (North and South America are considered one area, along with Africa, Australia, Asia and Europe).",
        "Ocean water freezes just like freshwater, but at lower temperatures. Fresh water freezes at 32 degrees Fahrenheit but seawater freezes at about 28.4 degrees Fahrenheit, because of the salt in it.",
        "There are approximately 6,900 distinct languages in existence today, though there may be languages spoken in remote areas that we have yet to discover.",
        "There are approximately 19 billion chickens in the world. That's almost three per person.",
        "Muhammad Ali, original name Cassius Marcellus Clay, Jr.",
        "The sleepiest animal in the world is the koala, who sleeps 22 hours a day.",
        "Eating out is burning a hole in your pocket.",
        "To help the battery live longer and prevent it from dying at a faster rate, it's best to plug it in at 50 percent—and not to let it get to the full 100, either.",
        "Changing your desktop background can slash stress.",
        "On average, according to Harvard University researchers, potato chips are the single biggest culprit behind weight gain. They're solely responsible for nearly 2 pounds of added weight per person—per year.",
        "Cows don’t have upper front teeth.",
        "Human noses and ears keep getting bigger, even when the rest of the body’s growth has come to a halt.",
        "It only takes 15 minutes to make a first impression on a man, while it takes an hour on a woman."
    ];

    var cont=0;
    for (var i=0; i<facts.length; i++) {
        cont++;
    }

    var nrandom = Math.floor(Math.random() * cont) + 0;
    
    document.getElementById("facts").innerHTML = facts[nrandom];
}