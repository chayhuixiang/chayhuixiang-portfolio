import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const load = async () => {
  try {
    await prisma.skill.deleteMany();
    console.log('Deleted Records in Skill Table')

    await prisma.company.deleteMany();
    console.log('Deleted Records in Company Table')

    await prisma.project.deleteMany();
    console.log('Deleted Records in Project Table')

    await prisma.achievement.deleteMany();
    console.log('Deleted Records in Achievement Table')

    await prisma.stack.deleteMany();
    console.log('Deleted Records in Stack Table')

  } catch (error) {
    console.error(error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

load();
