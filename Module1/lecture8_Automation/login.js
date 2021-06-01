//const puppeteer=require("puppeteer");

//puppeteer has promisified functions
//by default headless is true


// let browserOpenPromise=puppeteer.launch({headless: false});
// console.log(browserOpenPromise);
//promise<pending>

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
//wait and click
.then(function(){
    return waitAndclick("#base-card-1-link");
})
.then(function(){
    return waitAndclick('a[data-attr1="warmup"]');

}).then(function () {
    return tab.waitForSelector(".js-track-click.challenge-list-item", {
      visible: true,
    });
  })
  .then(function () {
    // tab.$() // document.querySelector;
    return tab.$$(".js-track-click.challenge-list-item"); // it will run document.querySelectorAll in the browser and gives you array of all the elements
  })
  .then(function (allQuesArray) {
    // [<a /> , <a /> , <a /> , <a />];
    let allPendingPromises = [];
    for (let i = 0; i < allQuesArray.length; i++) {
      let oneATag = allQuesArray[i];
      let pendingPromise = tab.evaluate(function (element) { return element.getAttribute("href");}  , oneATag);
      allPendingPromises.push(pendingPromise);
    }
    // [ Promise<Pending> , Promise<Pending> , Promise<Pending> , Promise<Pending> ];
    let allPromisesCombined = Promise.all(allPendingPromises);
    // Promise<Pending>
    return allPromisesCombined;
  })
.then(function(allQuesLinks){
  console.log(allQuesLinks);
})
.catch(function(err){
    console.log(err);
});

function waitAndclick(selector){
    return new Promise(function(scb,fcb){
        let waitpromise=tab.waitForSelector(selector, {visible : true});
        waitpromise.then(function(){
            return tab.click(selector);
        })
        .then(function(){
            scb();
        })
        .catch(function(){
            fcb();
        });
    });
}

