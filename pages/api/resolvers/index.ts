import { PrismaClient } from "@prisma/client";

export const resolvers = {
  Query: {
    skills: async (_: any, __: any, { prisma }: { prisma: PrismaClient }) => await prisma.skill.findMany({
      orderBy: {
        display_order: 'asc'
      },
      include: {
        stacks: {
          orderBy: {
            skill_name_order: 'asc'
          }
        }
      }
    }),
    skill: async (_: any, { name }: { name: string }, { prisma }: { prisma: PrismaClient }) => await prisma.skill.findUnique({
      where: {
        name
      },
      include: {
        stacks: {
          orderBy: {
            skill_name_order: 'asc'
          }
        }
      }
    }),
    stacks: async (_: any, { work }: { work: boolean }, { prisma }: { prisma: PrismaClient }) => await prisma.stack.findMany({
      where: work ? {
        skill_work_order: {
          gt: 0
        }
      } : {},
      orderBy: {
        skill_work_order: 'asc'
      }
    }),
    stack: async (_: any, { name }: { name: string }, { prisma }: { prisma: PrismaClient }) => await prisma.stack.findUnique({
      where: {
        name
      }
    }),
    companies: async (_: any, __: any, { prisma }: { prisma: PrismaClient }) => await prisma.company.findMany({
      orderBy: {
        start_date: 'asc'
      },
      include: {
        stacks: true
      }
    }),
    company: async (_: any, { name }: { name: string }, { prisma }: { prisma: PrismaClient }) => await prisma.company.findUnique({
      where: {
        name
      },
      include: {
        stacks: true
      }
    }),
    projects: async (_: any, __: any, { prisma }: { prisma: PrismaClient }) => await prisma.project.findMany({
      include: {
        stacks: true
      }
    }),
    project: async (_: any, { name }: { name: string }, { prisma }: { prisma: PrismaClient }) => await prisma.project.findUnique({
      where: {
        name
      }
    }),
    achievements: async (_: any, __: any, { prisma }: { prisma: PrismaClient }) => await prisma.achievement.findMany({
      orderBy: {
        start_date: 'asc'
      }
    }),
    achievement: async (_: any, { id }: { id: string }, { prisma }: { prisma: PrismaClient }) => await prisma.achievement.findUnique({
      where: {
        id
      }
    })
  },
};
