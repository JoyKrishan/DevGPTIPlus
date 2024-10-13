  const results = await axe.run(page.window.document.documentElement, {
    resultTypes: ['violations', 'incomplete'],
  });