//const puppeteer=require("puppeteer");

//puppeteer has promisified functions
//by default headless is true


// let browserOpenPromise=puppeteer.launch({headless: false});
// console.log(browserOpenPromise);
// //promise<pending>

// browserOpenPromise.then(function(browser){
//     console.log("browser is opened !");
//     return browser.pages();

// })
// .then(function(pages){
//     let tab=pages[0];
//     return tab.goto("https://www.google.com");
// })
// .then(function(){
//     console.log("on google homepage !!");
// })

//puppeteer has promisified functions
//by default headless is true

//hackerank automation

const puppeteer=require("puppeteer");

const id="dopeso7116@edmondpt.com";
const pw="123456";
let tab;

let browserOpenPromise=puppeteer.launch({
    headless:false,
    defaultViewport:null,
    args:["--start-maximized"],
});

browserOpenPromise.then(function(browser){
    console.log("browser is opened !");
    return browser.pages();

})
.then(function(pages){
    tab=pages[0];
    return tab.goto("https://www.hackerrank.com/auth/login");

})
.then(function(){
    return tab.type("#input-1",id);

})
.then(function(){
    return tab.type("#input-2",pw);
})
.then(function(){
    return tab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
})
.then(function(){
    console.log("logged in");
})









