import GameList from './_components/GameList';
import { section, statusButton, statusCheckbox } from './page.css';
        errorFallback={GameList.PlayingErrorFallback}
        loadingFallback={<Loader />}
      >
        <GameList state="playing" />
      </AsyncBoundary>
      <AsyncBoundary
        errorFallback={GameList.ScheduledErrorFallback}
        loadingFallback={<Loader />}
      >
        <GameList state="scheduled" />
      </AsyncBoundary>
      <AsyncBoundary
        errorFallback={GameList.FinishedErrorFallback}
        <GameList state="finished" />