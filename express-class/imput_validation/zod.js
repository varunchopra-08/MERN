//zod - schema validation 

const express = require("express");
const { PassThrough } = require("stream");
const app = express();
const zod = require("zod");
const schema = zod.array(zod.number());


const schema1 = zod.object({
    email : zod.string(),
    password : zod.string(),
    country: zod.literal("IN").or(zod.literal("US")),
    kidneys: zod.array(zod.number())

    
})


app.use(express.json());
app.post("/health-checkup" , function (req,res) {
    const kidneys  = req.body.kidneys;
    const response = schema.safeParse(kidneys)
    if (response.success) {
    // If validation passes, return the validated data
    res.status(200).send({
      message: "Validation successful!",
      data: response.data,
    });
    } else {
    // If validation fails, return the validation errors with a 400 status
    res.status(400).send({
      message: "Validation failed!",
      errors: response.error.errors,
    })
    }
    

       
});


app.listen(3001);
//if you wan to be lean with validation u can use coercion
/* const schema = z.coerce.string();
schema.parse("tune")
schema.parse(12) (convert)=> "12" */