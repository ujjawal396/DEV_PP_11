const puppeteer=require("puppeteer");

//puppeteer has promisified functions
//by default headless is true


let browserOpenPromise=puppeteer.launch({headless: false});
console.log(browserOpenPromise);
//promise<pending>

browserOpenPromise.then(function(browser){
    console.log("browser is opened !");
    return browser.pages();

})
.then(function(pages){
    let tab=pages[0];
    return tab.goto("https://www.google.com");
})
.then(function(){
    console.log("on google homepage !!");
})