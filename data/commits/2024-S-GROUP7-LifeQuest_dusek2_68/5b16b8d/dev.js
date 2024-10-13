  test("renders Home component when navigating to '/home'", () => {
    render(
      <MemoryRouter initialEntries={["/home"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("LifeQuest")).toBeInTheDocument();
  });

  test("renders Settings component when navigating to '/settings'", () => {
    render(
      <MemoryRouter initialEntries={["/settings"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("Settings Page")).toBeInTheDocument();
  });

  test("renders Quests component when navigating to '/quests'", () => {
    render(
      <MemoryRouter initialEntries={["/quests"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("Quests Page")).toBeInTheDocument();
  });

  test("renders Quiz component when navigating to '/quiz'", () => {
    render(
      <MemoryRouter initialEntries={["/quiz"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("Strongly Agree")).toBeInTheDocument();
  });
