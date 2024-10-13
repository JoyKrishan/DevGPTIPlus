import { useSuspenseQuery } from '@tanstack/react-query';

import { getTeamListByLeagueIdWithAuth } from '@/api/admin/team';
import { ADMIN_QUERY_KEY } from '@/constants/admin/queryKey';

export default function useTeamListByLeagueId(leagueId: string) {
  const { data, error } = useSuspenseQuery({
    queryKey: [ADMIN_QUERY_KEY.TEAM_LIST, leagueId],
    queryFn: () => getTeamListByLeagueIdWithAuth(leagueId),
  });

  return {
    teamList: data,
    error,
  };
}