const { error } = require("console");
const fs = require("fs");
console.log("start");
fs.writeFileSync("adi.txt", "Hey , I am aditya Sharma ...");
fs.writeFile("adi2.txt", "Hey , I am Sharma Aditya...", () => {
  console.log("File is created succesfully");
  fs.readFile("adi2.txt", (error, data) => {
    console.log(error, data.toString());
    fs.writeFileSync("adi3.txt", "Hey , I am aditya Sharma file number 3 ...");
    fs.writeFile(
      "adi4.txt",
      "Hey , I am Sharma Aditya file number 4...",
      () => {
        console.log("File is created succesfully Agian");
        fs.readFile("adi4.txt", (error, data) => {
          console.log(error, data.toString());
          fs.writeFileSync("adi.txt", "Hey , I am aditya Sharma ...");
          fs.writeFile("adi2.txt", "Hey , I am Sharma Aditya...", () => {
            console.log("File is created succesfully");
            fs.readFile("adi2.txt", (error, data) => {
              console.log(error, data.toString());
              fs.writeFileSync(
                "adi3.txt",
                "Hey , I am aditya Sharma file number 3 ..."
              );
              fs.writeFile(
                "adi4.txt",
                "Hey , I am Sharma Aditya file number 4...",
                () => {
                  console.log("File is created succesfully Agian");
                  fs.readFile("adi4.txt", (error, data) => {
                    console.log(error, data.toString());
                  });
                }
              );
            });
          });
        });
      }
    );
  });
});
console.log("Ends");
