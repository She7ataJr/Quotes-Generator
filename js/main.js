var quotes = [
    {
        "quote":"Life isn’t about getting and having, it’s about giving and being.","author":"Kevin Kruse"},
 {
        "quote":"Whatever the mind of man can conceive and believe, it can achieve.","author":"Napoleon Hill"},
 {
        "quote":"Strive not to be a success, but rather to be of value.","author":"Albert Einstein"},
 {
        "quote":"Remember no one can make you feel inferior without your consent.","author":"Eleanor Roosevelt"},
 {
        "quote":"Life is what we make it, always has been, always will be.","author":"Grandma Moses"},
 {
        "quote":"The question isn’t who is going to let me; it’s who is going to stop me.","author":"Ayn Rand"},
 {
        "quote":"When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.","author":"Henry Ford"},
 {
        "quote":"It’s not the years in your life that count. It’s the life in your years.","author":"Abraham Lincoln"},
 {
        "quote":"Change your thoughts and you change your world.","author":"Norman Vincent Peale"},
 {
        "quote":"Either write something worth reading or do something worth writing.","author":"Benjamin Franklin"},
 {
        "quote":"Nothing is impossible, the word itself says, “I’m possible!”","author":"–Audrey Hepburn"},
 {
        "quote":"The only way to do great work is to love what you do.","author":"Steve Jobs"},
 {
        "quote":"If you can dream it, you can achieve it.","author":"Zig Ziglar"},
 { 
 'quote': "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
 'author':"― Albert Einstein"},
 { 
     'quote': "“Don't walk in front of me… I may not follow Don't walk behind me… I may not lead Walk beside me… just be my friend”",
     'author':"― Albert Camu"},
 {
         'quote': "“If you tell the truth, you don't have to remember anything.”",
         'author':"― Mark Twain"
 },
 {
         'quote':"“I have not failed. I've just found 10,000 ways that won't work.”",
         'author':" Thomas A. Edison"
 },
 {
     'quote':"“Love all, trust a few, do wrong to none.”",
     'author':"― William Shakespeare"
 },
 {
     'quote':"“Perhaps one did not want to be loved so much as to be understood.”",
     'author':"― George Orwell"
 }
]
var generatorBtn = document.getElementById("newQuote");
generatorBtn.onclick = function generateQuote() {
    var generatedQuoteLength = Math.floor(Math.random() * quotes.length);
    document.getElementById("textQuote").innerHTML = (`${quotes[generatedQuoteLength].quote} `);
    document.getElementById("Author").innerHTML = (` ${quotes[generatedQuoteLength].author} `);
}


