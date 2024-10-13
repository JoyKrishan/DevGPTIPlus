    /* */
    for (let i = 0; i < workout.length; i++) {
      await prisma.workout.create({ data: workout[i] as any });
    }
    logger('add', 'workout')


loaddb().catch((e) => console.error(e))