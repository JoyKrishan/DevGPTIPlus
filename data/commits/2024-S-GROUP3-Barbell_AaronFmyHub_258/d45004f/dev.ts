// import users from '../mock-data/user.json'
// import workoutLog from '../mock-data/workoutLog.json'
// import workout from '../mock-data/workoutTemplate.json'
    // for (let i = 0; i < workout.length; i++) {
    //   await prisma.workoutTemplate.createMany({
    //     data: workout[i] as Prisma.WorkoutTemplateCreateManyInput[],
    //   })
    // }
    await prisma.workoutTemplate.createMany({
      data: workoutTemplate as Prisma.WorkoutTemplateCreateManyInput[],
    })
    await prisma.workoutLog.createMany({
      data: workoutLog as Prisma.WorkoutLogCreateManyInput[],
    })
    logger('add', 'workoutLog')
