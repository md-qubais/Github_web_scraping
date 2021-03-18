let request=require("request")
let cheerio=require("cheerio")
let issue=require("./get_issues")
let len;
//https://github.com/topics


request("https://github.com/topics",cb);
function cb(err,response,html){
    let ch_select=cheerio.load(html)
    let topics=ch_select(".topic-box");
    n=topics.length;
    /*   for(let i=0;i<topics.length;i++){
        let name=ch_select(topics[i]).find("p")
        let str=ch_select(name[0]).text();
        str=str.trim()
        console.log("the name of the topic is-->"+str)
        let link=ch_select(".topic-box a").attr("href");
        link="https://github.com"+link
        issue.issue(link,str)
    }*/
    
    get(0,ch_select,topics);
}
function get(i,ch,top){
    if(i==3){
        return;
    }
        let ch_select=ch;
        let topics=top
        let name=ch_select(topics[i]).find("p")
        let str=ch_select(name[0]).text();
        str=str.trim()
        console.log("the name of the topic is-->"+str)
        let link=ch_select(".topic-box a").attr("href");
        link="https://github.com"+link
        issue.issue(link,str)
        get(i+1,ch_select,topics)
}