//Named export , has many as you need
const msg="hello world"

//default export - has no name you only have one

const sad="yousseff"


const getGreeting =(name)=>{
    return `welcome ya ${name}`
}
export{
    msg,
    getGreeting,
    sad as default
}