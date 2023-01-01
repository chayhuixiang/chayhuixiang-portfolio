import { PrismaClient } from "@prisma/client";
import { companies } from "./data/company";
import { projects } from "./data/project";
import { skills } from "./data/skill";
import { achievements } from "./data/achievement";
import { stacks } from "./data/stack";

const prisma = new PrismaClient();

const load = async () => {
  try {
    await prisma.skill.deleteMany();
    console.log('Deleted Records in Skill Table')

    await prisma.skill.createMany({
      data: skills
    })
    console.log('Added Skill Data')

    await prisma.company.deleteMany();
    console.log('Deleted Records in Company Table')

    await prisma.company.createMany({
      data: companies
    })
    console.log('Added Company Data')

    await prisma.project.deleteMany();
    console.log('Deleted Records in Project Table')

    await prisma.project.createMany({
      data: projects
    })
    console.log('Added Project Data')

    await prisma.achievement.deleteMany();
    console.log('Deleted Records in Achievement Table')

    await prisma.achievement.createMany({
      data: achievements
    })
    console.log('Added Achievement Data')

    await prisma.stack.deleteMany();
    console.log('Deleted Records in Stack Table')

    // await prisma.stack.createMany({
    //   data: stacks
    // })
    stacks.forEach(async (stack) => {
      await prisma.stack.create({
        data: stack
      })
    })
    console.log('Added Stack Data')

  } catch (error) {
    console.error(error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

load();
