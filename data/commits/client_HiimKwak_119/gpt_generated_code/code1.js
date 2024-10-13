// ... (other imports)

export default function LeagueList({ data }: { data: LeagueType[] }) {
  // ... (other code)

  const toggleModal = (leagueId: number) => {
    setSelectedLeagueId(leagueId);
    setIsModalOpen(!isModalOpen);
  };

  const deleteLeague = async (leagueId: number) => {
    console.log(leagueId);
    // mutate({ leagueId });
    setIsModalOpen(false);
  };

  const generateDeleteHandler = (leagueId: number) => {
    return () => deleteLeague(leagueId);
  };

  // ... (other code)

  return (
    <ul className="space-y-8">
      {data.map((league) => (
        <li key={league.leagueId}>
          <Card>
            <LeagueContent {...league} />
            <div className="flex w-full gap-4">
              {/* ... (other button code) */}
              <Button
                type="button"
                className="w-full rounded-lg bg-red-300 p-3 text-red-800 hover:bg-red-600 hover:text-red-300"
                onClick={() => toggleModal(league.leagueId)}
              >
                삭제하기
              </Button>
            </div>
          </Card>
          {isModalOpen && selectedLeagueId === league.leagueId && (
            <div>
              {/* ... (other modal code) */}
              <Button
                type="button"
                className="w-full rounded-lg bg-red-500 p-3 text-white"
                onClick={generateDeleteHandler(league.leagueId)}
              >
                삭제
              </Button>
              {/* ... (other modal code) */}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}