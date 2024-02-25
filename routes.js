const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    //this is for parsing request data with event listener (on())
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      // console.log(parseBody);
      const message = parseBody.split("=")[1];
      // fs.writeFileSync("message.txt", message); //this writeFileSync is for syncronous (so, next line will execute wait this line)
      fs.writeFile("message.txt", message, (err) => {
        res.status = 302;
        res.setHeader("Location", "/"); //this is for rediricting request or route
        return res.end();
      });
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my Node.js Server</h1></body>");
  res.write("</html>");
  res.end();
};

module.exports = {
  handler: requestHandler,
  someText: "Some hard coded text",
};

//this is same like above
//module.exports.handler = requestHandler
//module.exports.someText = "Some hard coded text"

//this is same like above
//exports.handler = requestHandler
//exports.someText = "Some hard coded text"
