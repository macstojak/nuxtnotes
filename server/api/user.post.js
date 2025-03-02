import prisma from "~/lib/prisma";
import bcrypt from "bcryptjs";
import validator from "validator";

export default defineEventHandler(async (event) => {
    try{
        const body = await readBody(event);
        if(!validator.isEmail(body.email)){
            throw createError({
                statusCode: 400,
                message: "Email is not valid, please check your email"
            })
        };
        if(!validator.isStrongPassword(body.password,{
            minLength: 8,
            minLowercase: 0,
            minUppercase: 0,
            minNumbers: 0,
            minSymbols: 0,
        })){
            throw createError({
                statusCode: 400,
                message: "Password is not long enough, please check if it has at least 8 characters"
            });
        }  

        const salt = await bcrypt.genSalt(10);    
        const saltPassword = await bcrypt.hash(body.password, salt);
        
        await prisma.user.create({ data: {
            email: body.email,
            password: saltPassword,
            salt: String(salt)
        }});
    } catch (error) {
        if(error.code === 'P2002'){
            throw createError({
                statusCode: 409,
                message: "Email already exists"
            }) 
        }
    }
})