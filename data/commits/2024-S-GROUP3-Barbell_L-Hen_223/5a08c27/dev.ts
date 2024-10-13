      return prisma.workoutLog.findMany({
          workout: {
            include: {
              exercises: true
            }
          }