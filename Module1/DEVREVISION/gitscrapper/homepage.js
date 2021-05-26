const cheerio=require("cheerio");
const request=require("request");

request("https://github.com/topics",function(err,res,data){
    processdata(data);
})

let githubTopics=[];


function processdata(html){

   let myDocument=cheerio.load(html);
  let allTopicsDiv=myDocument(".topic-box");

  //cosnole.log(allTopicsDiv)
  for(let i=0;i<allTopicsDiv.length;i++){
      let topicAtag=myDocument(allTopicsDiv[i]).find("a");
     let topicLink = "https://www.github.com"+topicAtag.attr("href");
     let topicName = topicAtag.find(".f3").text().split("\n")[1].trim();

     githubTopics.push( {TopicName : topicName, Link : topicLink} );

    }
console.log(githubTopics);
}