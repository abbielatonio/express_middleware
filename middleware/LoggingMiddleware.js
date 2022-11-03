import { app } from "express";

app.use(function(req,res,next){
   console.log(
      JSON.stringify({
        method,
        statusCode,
        query,
        body,
      })
    );
  next();
})