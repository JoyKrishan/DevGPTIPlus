import { ChatType, User } from '@prisma/client'
   *  IF not exist, create one
    .input(
      z.object({
        id: z.number().int(),
        type: z.nativeEnum(ChatType),
        user1Id: z.number().int(),
        user2Id: z.number().int(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const { prisma } = ctx

      const users = await prisma.user.findMany({
        where: {
          id: {
            in: [input.user1Id, input.user2Id],
          },
        },
      })

      const chat = await prisma.chat.upsert({
        where: {
          type: input.type,
          id: input.id,
        },
        select: {
          id: true,
          users: true,
        },
        create: {
          type: input.type,
          createdByUserId: input.user1Id,
          users: {
            connect: users.map((user: User) => ({ id: user.id })),
          },
        },
        update: {},
      })

      if (chat == undefined) {
        return []
      }

      return prisma.message.findMany({
        where: {
          chatId: chat.id,
        },
        orderBy: {
          createdAt: 'asc',
        },
      })
    }),

  /**
   * @remarks
   * This returns all of the messages in order from oldest to newest within any chat type
   * This one assume it already exists
   *
   * @param id - the id of the chat
   * @param type - the chat type (DIRECT or GROUP)
   * @returns an array of message objects
   */
  getMessagesFromChatIdAndChatType2: publicProcedure
    .input(
      z.object({
        chatId: z.number().int(),
        userId: z.number().int(),
        type: z.nativeEnum(ChatType),
      }),
    )