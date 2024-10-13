const selectToggle = (eid: number) => {
  setSelect((prevState) => ({
    prevState,
    [eid]: !prevState[eid],
  }));
};