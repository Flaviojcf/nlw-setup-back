import Fastfy from "fastify";
import { prisma } from "./database/Prisma";
import cors from "@fastify/cors"

const app = Fastfy()

app.register(cors)


app.get("/hello", async (request,respose)=>{
    const habits = await prisma.habit.findMany({})

    return habits
    
})

app.listen({
    port: 3333,
}).then(()=>{
    console.log("Server is running")
})