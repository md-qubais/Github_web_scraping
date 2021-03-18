let request=require("request")
let cheerio=require("cheerio")
let save_issue=require("./save_issue_mkdir");
let actual_name;
function issue(path,name){
    actual_name=name
    request(path,
        function cb(err,response,html){
            let ch_select=cheerio.load(html)
            let top_8=ch_select(".tabnav.px-3.mb-0")
            
            for(let i=0;i<8;i++){
                let tags=ch_select(top_8[i]).find("a")
                console.log(path)
                let actual_link=ch_select(tags[1]).attr("href")
                //console.log(actual_link)
                save_issue.get_issues(actual_link,actual_name);
            }
            
        });
}
module.exports={
    issue:issue
}