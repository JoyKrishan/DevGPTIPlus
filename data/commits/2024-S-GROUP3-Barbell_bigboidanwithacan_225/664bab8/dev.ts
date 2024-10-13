import workoutLog from '../mock-data/workoutLog.json'
    await prisma.workoutLog.deleteMany()
    logger('delete', 'workoutLog')
    await prisma.workoutLog.createMany({
      data: workoutLog as Prisma.WorkoutLogCreateManyInput[],