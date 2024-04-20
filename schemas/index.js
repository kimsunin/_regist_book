import mongoose from "mongoose";

module.exports = () => {
  const connect = () => {
    if (process.env.NODE_ENV !== "production") {
      mongoose.set("debug", true);
    }
    mongoose.connect(
      "mongodb://localhost:27017/test",
      {
        dbName: "test",
      },
      (error) => {
        if (error) {
          console.log("몽고디비 연결 에러", error);
        } else {
          console.log("몽고디비 연결 성공");
        }
      }
    );
  };
  connect();
  mongoose.connection.on("error", (error) => {
    console.log("몽고디비 연결에러", error);
  });
  mongoose.connection.on("disconnected", () => {
    console.log("몽고디비 연결 끊김,연결 재시도");
    connect();
  });
  //   require("./board");
  // require("./regist");
};
