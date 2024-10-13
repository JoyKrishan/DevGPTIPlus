  const [selectWorkout, setSelect] = useState<{ [wid: number]: boolean }>({})
        {filteredList?.map((workout: any) => (
                style={{ backgroundColor: selectWorkout[workout.id] ? '#303030' : '#1E1E1E' }}