  const [selectedLeagueId, setSelectedLeagueId] = useState<number | null>(null);
  const toggleModal = (leagueId: number) => {
    setSelectedLeagueId(leagueId);

                onClick={() => toggleModal(league.leagueId)}
          {isModalOpen && selectedLeagueId === league.leagueId && (
                  <span className="text-2xl font-bold">{league.name}</span>
                    onClick={() => setIsModalOpen(false)}