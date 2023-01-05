import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const load = async () => {
  try {
    const response: any[] = await prisma.company.findMany({
      orderBy: {
        start_date: 'asc'
      },
      include: {
        stacks: {
          include: {
            stack: true
          }
        }
      }
    });
    console.log(response[0].stacks)
    console.log('Test Complete')

  } catch (error) {
    console.error(error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

load();
