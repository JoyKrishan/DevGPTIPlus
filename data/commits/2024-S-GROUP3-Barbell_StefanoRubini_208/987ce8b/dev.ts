      // return await prisma.user.create({
      //   data: {
      //     clerkId: input.clerkId,
      //     username: input.username,
      //     name: input.name,
      //   },
      // })

      return await prisma.user.upsert({
        where: { clerkId: input.clerkId },
        update: {
          username: input.username,
          name: input.name,
        },
        create: {