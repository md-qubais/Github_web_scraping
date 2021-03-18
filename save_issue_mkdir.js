let request=require("request")
let cheerio=require("cheerio")
let fs=require("fs")
let path=require("path")
const mkdirsSync = function(dirname) {
    if (fs.existsSync(dirname)) {
        console.log(dirname+" "+" directory exists")
      return true;
    }
    if (mkdirsSync(path.dirname(dirname))) {
        console.log(dirname+" crated sucessfully")
      fs.mkdirSync(dirname);
      return true;
    }
   }
function get_issues(path){
    console.log(path)
    //let cwd=process.cwd();
   // cwd=cwd+"\\"+name
   // mkdirsSync(cwd)
}


module.exports={
    get_issues:get_issues
}