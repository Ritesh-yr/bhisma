// const http = require("http");
// const fsFile = require("fs");

// let port = 4000;
// let path = "./"

// var mv = http.createServer((req,res)=>{
    
//     res.setHeader("Content-Type" , "text/html");

//     switch (req.url) {
//         case "/home":
//             path +="./index.html";
            
//             break;
//             case "/about":
//                 path += "";
//              break;
//         default:
//             path += "";
//             break;
//     }

//     fsFile.readFile(path,function(err , fileData){

//         if(err){
//             console.log(err);
//         }else{
//             res.write(fileData);
//         }

//         res.end();
        

//     });
// });


// mv.listen(port,"localhost",()=>{
//     console.log(`port is working 4000`);
// });






// const express = require("express");
// const fs = require("fs");

// const app = express();

// function readHTMLFile(filename, callback) {
//   fs.readFile(filename, 'utf8', function (err, data) {
//     if (err) {
//       callback(err);
//       return;
//     }
//     callback(null, data);
//   });
// }

// function readJSONFile(filename, callback) {
//   fs.readFile(filename, 'utf8', function (err, data) {
//     if (err) {
//       callback(err);
//       return;
//     }
//     try {
//       const jsonData = JSON.parse(data);
//       callback(null, jsonData);
//     } catch (exception) {
//       callback(exception);
//     }
//   });
// }

// app.get("/home", (req, res) => {
//   readHTMLFile(__dirname,'index.html', (err, content) => {
//     if (err) {
//       res.status(500).send("Error reading HTML file");
//       return;
//     }
//     res.send(content);
//   });
// });

// app.get("/data", (req, res) => {
//   readJSONFile('data.json', (err, json) => {
//     if (err) {
//       res.status(500).send("Error reading JSON file");
//       return;
//     }
//     res.json(json);
//   });
// });

// app.get("/", (req, res) => {
//   res.send("Hello");
// });

// app.get("/about", (req, res) => {
//   res.send("It is about page");
// });

// app.get("/aboutus", (req, res) => {
//   res.send("It is about page");
// });

// app.get("/contact", (req, res) => {
//   res.send("<h1>It is contact page</h1>");
// });

// app.get("/contactUs", (req, res) => {
//   res.send("<p style='color:yellow'>It is contact us page</p>");
// });

// app.get("/service", (req, res) => {
//   res.send("It is service page");
// });

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });






const express = require("express");
const fs = require("fs");
const path = require("path");
const apiRoutes =  require ("../Frotentend/routes.js");
const app = express();
const axios = require("axios")

app.use(express.static(path.join(__dirname, '../')));

function readHTMLFile(filename, callback) {
  fs.readFile(filename, 'utf8', function (err, data) {
    if (err) {
      callback(err);
      return;
    }
    callback(null, data);
  });
}

function readJSONFile(filename, callback) {
  fs.readFile(filename, 'utf8', function (err, data) {
    if (err) {
      callback(err);
      return;
    }
    try {
      const jsonData = JSON.parse(data);
      callback(null, jsonData);
    } catch (exception) {
      callback(exception);
    }
  });
}

app.get("/home", (req, res) => {
  readHTMLFile(path.join(__dirname, '../index.html'), (err, content) => {
    if (err) {
      res.status(500).send("Error reading HTML file");
      return;
    }
    res.send(content);
  });
});

app.get("/data", (req, res) => {
  readJSONFile(path.join(__dirname, '../data.json'), (err, json) => {
    if (err) {
      res.status(500).send("Error reading JSON file");
      return;
    }
    res.json(json);
  });
});

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/about", (req, res) => {
  res.send("It is about page");
});

app.get("/aboutus", (req, res) => {
  res.send("It is about page");
});

app.get("/contact", (req, res) => {
  res.send("<h1>It is contact page</h1>");
});

app.get("/contactUs", (req, res) => {
  res.send("<p style='color:yellow'>It is contact us page</p>");
});

app.get("/service", (req, res) => {
  res.send("It is service page");
});

app.get("/ipl", apiRoutes)

app.get("/programming", (req, res) => {
  res.send("<h2 style = 'color:red'>.23</h2>");
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
