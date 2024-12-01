// make a types .js file and here add all your zod u expect from end user
const zod= require('zod');

const createtodoSchema = zod.object({
    title: zod.string(),
    description: zod.string(),
    
})
const updatetodoSchema = zod.object({
    id: zod.string(),
    
})

module.exports = {
    createtodo: createtodoSchema,
    updatetodo: updatetodoSchema
}//used to export