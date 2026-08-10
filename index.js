const path= require("node:path");
const fs = require("node:fs");
const EventEmitter= require("node:events");
const event = new EventEmitter();
const stream = fs.createReadStream(path.resolve("./data.txt"));
const writeStream =fs.createWriteStream(path.resolve("./data2.txt"),{flags:"a"});

//===============================================Q1=========================================
// function filePath() {
//     console.log(__filename)
//     console.log(__dirname);
//     ;
    
// }
// filePath();
//===============================================Q2=========================================

// function fileName(filepath){
//     return path.basename(filepath)
// }
// console.log(fileName("./index.js"));
//===============================================Q3=========================================

// function buildPath(object){
//  return path.format(object)
// }
// const pathObject = {
//     root: "C:/",
//     dir: "C:/Users/Farah Hamza/OneDrive/Desktop/JS Assignment2",
//     base: "index.js",
//     ext: ".js",
//     name: "index"
// };
// console.log(buildPath(pathObject));

//===============================================Q4=========================================

// function fileExt(filepath){
//     return path.extname(filepath)
// }
// console.log(fileExt("./index.js"));

//===============================================Q5=========================================

// function parsePath(filepath){
//     return path.parse(filepath)
// }
// console.log(parsePath("C:/Users/Farah Hamza/OneDrive/Desktop/JS Assignment2/index.js"));

//===============================================Q6=========================================

// function checkAbs(filepath){
//     return path.isAbsolute(filepath)
// }
// console.log(checkAbs("C:/Users/Farah Hamza/OneDrive/Desktop/JS Assignment2/index.js"));
// console.log(checkAbs("./index.js"));

//===============================================Q7=========================================

// function joinSeg(...segments){
// return path.join(...segments)
// }
// console.log(joinSeg("src","components", "App.js"));

//===============================================Q8=========================================

// function resolvePath(relativePath){
//  return path.resolve(relativePath)
// }
// console.log(resolvePath("./index.js"));

//===============================================Q9=========================================

// function joinPath(path1,path2){
// return path.join(path1,path2)
// }
// console.log(joinPath("/folder1", "folder2/file.txt"));

//===============================================Q10=======================================

// function deleteFile(filepath){
// fs.unlink(filepath,(err)=>{
//     if(err){
//         console.log(err);
        
//     }else{
//         console.log("The "+path.basename(filepath)+" is deleted" );
        
//     }
// })
// }
// deleteFile("./file.txt")  

//===============================================Q11=======================================

// function createFile(folderPth){
//     fs.mkdirSync(folderPth)
//     console.log("Success");
    
// }
// createFile("NewFolder");

//===============================================Q12=======================================

// event.on("start",()=>{
//     console.log("Welcome event triggered!");
    
// })
// event.emit("start")

//===============================================Q13=======================================

// event.on("login",(username)=>{
//     console.log("User logged in : "+ username);
    
// })
// event.emit("login","Farah")

//===============================================Q14=======================================
// function readFile(filepath){
// const data= fs.readFileSync(path.resolve(filepath),"utf-8")
// console.log("The file Content => "+ data);
// }
// readFile(path.resolve("./data.txt"))


//===============================================Q15=======================================
// function writeToFile(filepath,content){
// fs.writeFile(filepath ,content,(err)=>{
//     if(err){
//         console.log(err);
        
//     }
// } )
// }
// writeToFile(path.resolve("./data.txt"),"Async save")

//===============================================Q16=======================================

// function checkDirectory(dirpath){
//     return fs.existsSync(dirpath)
// }
// console.log(checkDirectory(path.resolve("../JS Assignment2")));

//===============================================Q17=======================================

//===============================================Q18=======================================

//  stream.on("data",(chunk)=>{
//     console.log(chunk);

//  })

//===============================================Q19=======================================
// stream.on("data",(chunk)=>{
//     writeStream.write(chunk)
// })

// stream.on("end", () => {
//     writeStream.end();
//     console.log("File copied using streams");
// });

//===============================================Q20=======================================
// const {createGzip}=require("node:zlib");
// const gzip=createGzip();
// const writeStream2= fs.createWriteStream("./data3.zip",{flags:"a"})
// stream.pipe(gzip).pipe(writeStream2)



//===============================================Part2=======================================

//  const http = require ("node:http");
// const server = http.createServer((req, res,next) => {
//  if (req.method == "POST" && req.url == "/user"){
// let parseData = "";
// req.on("data",(chunk)=>{
//     parseData += chunk;
// })

// req.on("end",()=>{
//    const newUser = JSON.parse(parseData);
//     const users = JSON.parse(fs.readFileSync("./users.json", "utf8"));
//     const emailExists = users.find((user)=>{
//         return user.email==newUser.email
//     });
//     if (emailExists) {
//         res.write(JSON.stringify({ message: "Email already exists" }))
//         return res.end();
//     }
//     users.push(newUser)
//     fs.writeFileSync("./users.json", JSON.stringify(users));
//     res.write(JSON.stringify({ message: "User added successfully",users }))
//     return res.end();
    
// })
//  }
//  else if (req.method == "PATCH" && req.url.startsWith("/user/")){
// let parseData = "";
// req.on("data",(chunk)=>{
//     parseData += chunk;
// })

// req.on("end",()=>{
//    const id = req.url.split("/")[2];         
//    const body = JSON.parse(parseData);         
//    const users = JSON.parse(fs.readFileSync("./users.json", "utf8"));
//    const user = users.find((user)=>{
//       return user.id == id
//    })
//     if (!user) {
//         res.write(JSON.stringify({ message: "user not exists" }))
//         return res.end();
//     }
//     user.name = body.name || user.name

//     fs.writeFileSync("./users.json", JSON.stringify(users));
//     res.write(JSON.stringify({ message: "User Updated successfully",users }))
//     return res.end();
    
// })
//  }
//   else if (req.method == "DELETE" && req.url.startsWith("/user/")){
// let parseData = "";
// req.on("data",(chunk)=>{
//     parseData += chunk;
// })

// req.on("end",()=>{
//    const id = req.url.split("/")[2];                  
//    const users = JSON.parse(fs.readFileSync("./users.json", "utf8"));
//    const index = users.findIndex((user)=>{
//       return user.id == id
//    })
//     if (index==-1) {
//         res.write(JSON.stringify({ message: "user not exists" }))
//         return res.end();
//     }
//     users.splice(index,1) 

//     fs.writeFileSync("./users.json", JSON.stringify(users));
//     res.write(JSON.stringify({ message: "User deleted successfully",users }))
//     return res.end();
    
// })
//  }
//  else if (req.method == "GET" && req.url == "/user"){

//     const users = JSON.parse(fs.readFileSync("./users.json", "utf8"));

//     res.write(JSON.stringify({ message: "Done", users }))
//     return res.end();
    
// }
// else if (req.method == "GET" && req.url.startsWith("/user/")){

//     const id = req.url.split("/")[2];
//     const users = JSON.parse(fs.readFileSync("./users.json", "utf8"));
//     const user = users.find((user)=>{
//         return user.id == id
//     })

//     if (!user) {
//         res.write(JSON.stringify({ message: "user not exists" }))
//         return res.end();
//     }

//     res.write(JSON.stringify({ message: "Done", user }))
//     return res.end();
    
// }

// })
// server.listen(3258,()=>{
//     console.log("done");
    
// })
// server.on("error",(err)=>{
//     console.log(err);
    
// })