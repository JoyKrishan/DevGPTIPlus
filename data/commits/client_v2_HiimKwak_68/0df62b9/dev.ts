import { useSuspenseInfiniteQuery } from '@tanstack/react-query';

import { getGameList } from '@/api/game';
import { GameListParams, GameListType } from '@/types/game';

export const useGameList = ({
  sport_id,
  state,
  league_id,
  league_team_id,
  round,
}: Omit<GameListParams, 'cursor' | 'size'>) => {
  const { data, error, fetchNextPage, hasNextPage, isFetching } =
    useSuspenseInfiniteQuery({
      queryKey: [
        'game-list',
        sport_id,
        state,
        league_id,
        league_team_id,
        round,
      ],
      initialPageParam: 0,
      queryFn: ({ pageParam }) =>
        getGameList({
          sport_id,
          state,
          league_id,
          league_team_id,
          round,
          cursor: pageParam || '',
        }),
      getNextPageParam: lastPage => lastPage[lastPage.length - 1]?.id || null,
      select: data => {
        const gameMap = new Map<string, GameListType[]>();

        data.pages.flatMap(gameList => {
          gameList.forEach(game => {
            const date = game.startTime.split('T')[0];
            const existing = gameMap.get(date);

            if (existing) {
              existing.push(game);
              gameMap.set(date, existing);
            } else {
              gameMap.set(date, [game]);
            }
          });
        });

        return Array.from(gameMap, ([startTime, data]) => ({
          startTime,
          data,
        }));
      },
    });

  if (error) throw error;

  return {
    groupedGameList: data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
  };
};