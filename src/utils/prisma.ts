import { onDeleteArgs, PrismaDelete } from '@paljs/plugins'
import { PrismaClient } from '@prisma/client'

const remove = async (
  prisma: PrismaClient,
  args: onDeleteArgs
): Promise<void | { count: number }> =>
  await new PrismaDelete(prisma).onDelete(args)

const Pal = { remove }

export { Pal }
