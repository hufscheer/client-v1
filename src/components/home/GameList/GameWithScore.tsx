import { AllGamesResponse } from '@/types/game';
import { Game } from '@/components/common/Game';

interface GameListProps {
  data: AllGamesResponse[];
}

export default function GameList({ data }: GameListProps) {
  return (
    <ul>
      {data.map(game => (
        <Game key={game.id} id={game.id}>
          <Game.Label>{game.name}</Game.Label>
          <Game.TeamWrapper gap={2}>
            <Game.TeamLogo
              src={
                'https://lh3.googleusercontent.com/fife/AK0iWDw00Flz56mw9WMWE60nuQGciCeC5YCuqghOZikk8Rt1wvgsBPsTlDVeYEsnSksfVL7zEfQ0M950eyUSmvarnlPo-JUHwpfVY44Ovi8UG7qg0tQY3rnkzs6V2lZRsLKosRe7XYbQwe1Fmi8l1rc-Gjky3gyFCRD_6_6OaJlp4Am99IwKAaIidXY1QnsKhAFVatFuvaPxYpsGlEJVNpS-eeywWMB8S2JEkvaQTJQXeJpCYV7_9Lg77XzQc0KmISiIgMMky5jlCqB9MLlBdiE5ZH4-rjzkG93LcKFzf3wtqm9TPjohULKyfTSzfBJn-nmpHYnOX4rIVwZzSnU-Qb4RjuggpN_6YXLoi6N0IBC0VkupAPPQMUIpxbSqNY0GpOxe3S_CxJyVwM_eDZSvw9ujR3vfBVYiJZ60NoZc_nXLdpVS5WBQ4DEBRO-ujhxnL96fhg5ZJbFz4wFsRd83N-eQOWurkYG1e2RpUZ5fDX-StbSn4JvHZeb-VzQyGp-XCQqIpFL41smKZS3HcVk47lvzN8nUwllEAkY36qX_YtHGCmMuc1wmAJQJ8JRlqd-Yj1lQHMTnSZE0K_BScWDqOTlNNr9ZYKy9X_viNwFga8xPiw1tU7oTn7KhyK7wvmfCXq0fB1H-4Syd4HZGMiwdsq5HeBO3yMyWf8qgGj83xvjI1pYMXNy02li1OxwBqJbl7IP4LwHkBl7E7NSebLClvI-podr7O6i-L2lRbBGTVZf7pWF_2EQTBEq3qMLIK6hyy7t4hVHZiIhhChgZYLkIozekT5SGbfZf-Uy24Mow2AH-OjV5MkoeFqkMh3Dqya7PvvGwFieZZJ8zv_3GP6oEIk4wpn2hDCbyVcKcmjUqYhdMdLU5xlmYFRTuKWIU4fP0NwA-aubnodkdQaCPE_kV5iPpHsnu-ShvCpgeopQeTGSyfQ1Ycg4xte5U3SOfhqMFJsecoWPr6iHfG3udRGZGiR86srdxCEOqaqKfK2UkgB7_Ncn5k4aBoQrzNyUBmth0yPUcbQWByysW07KFlqmq05edSWVKKt6-6XpXoFSe5qpxSTWLiZizWfsbPEJrY8pr1wGWOQ_oKbQ3-w2phclG4E-lJGHApFmXmsqN14CeBZ95Bhc4oNQWybasjO9XkCjQzOWlJN8c3S-jXF0Rd9bpPPlPWy7HsjznAV2bFq2zlcIERl5ZBB6Q2JIc9IG1xfSKRSDVpfX0tNlXRP54DHKQtRVyq-bJgTAhPegzLtAQyWRW5bYbQvcPaURCBX91rvG0R_VLAK0uiuSDE8RvuO8NNaXIskRF0s-cvO3uSocvop9QDlziVosuAKxA48jbZNEozY7FIUJ3l-f9cC1baOu7tcqLPg6z3SWZzo4WM7_PxjqSCg2884K_TqnLbbxmdt9K9WK4XAyY6sX7hbzKxYoDxUDAjeGVg8VyCnwD7s2L5iUuoMpar-z-bdTRMArdq3RFn2TjNEtPiQ8ukH9elG1Z2H1A2txSVlg-nuf4HbXMeIZXkAZGWeAC7gkYzsZB6gjfAdF3xVDkZs-Y6gTE_84JVqZj5fY=w1920-h922'
              }
              alt={`${game.firstTeam.name} 로고`}
            />
            <Game.TeamName>{game.firstTeam.name}</Game.TeamName>
          </Game.TeamWrapper>
          <Game.Status>
            <Game.Score
              firstTeamScore={game.firstTeamScore}
              secondTeamScore={game.secondTeamScore}
            />
          </Game.Status>
          <Game.TeamWrapper reverse gap={2}>
            <Game.TeamLogo
              src={
                'https://lh3.googleusercontent.com/fife/AK0iWDw00Flz56mw9WMWE60nuQGciCeC5YCuqghOZikk8Rt1wvgsBPsTlDVeYEsnSksfVL7zEfQ0M950eyUSmvarnlPo-JUHwpfVY44Ovi8UG7qg0tQY3rnkzs6V2lZRsLKosRe7XYbQwe1Fmi8l1rc-Gjky3gyFCRD_6_6OaJlp4Am99IwKAaIidXY1QnsKhAFVatFuvaPxYpsGlEJVNpS-eeywWMB8S2JEkvaQTJQXeJpCYV7_9Lg77XzQc0KmISiIgMMky5jlCqB9MLlBdiE5ZH4-rjzkG93LcKFzf3wtqm9TPjohULKyfTSzfBJn-nmpHYnOX4rIVwZzSnU-Qb4RjuggpN_6YXLoi6N0IBC0VkupAPPQMUIpxbSqNY0GpOxe3S_CxJyVwM_eDZSvw9ujR3vfBVYiJZ60NoZc_nXLdpVS5WBQ4DEBRO-ujhxnL96fhg5ZJbFz4wFsRd83N-eQOWurkYG1e2RpUZ5fDX-StbSn4JvHZeb-VzQyGp-XCQqIpFL41smKZS3HcVk47lvzN8nUwllEAkY36qX_YtHGCmMuc1wmAJQJ8JRlqd-Yj1lQHMTnSZE0K_BScWDqOTlNNr9ZYKy9X_viNwFga8xPiw1tU7oTn7KhyK7wvmfCXq0fB1H-4Syd4HZGMiwdsq5HeBO3yMyWf8qgGj83xvjI1pYMXNy02li1OxwBqJbl7IP4LwHkBl7E7NSebLClvI-podr7O6i-L2lRbBGTVZf7pWF_2EQTBEq3qMLIK6hyy7t4hVHZiIhhChgZYLkIozekT5SGbfZf-Uy24Mow2AH-OjV5MkoeFqkMh3Dqya7PvvGwFieZZJ8zv_3GP6oEIk4wpn2hDCbyVcKcmjUqYhdMdLU5xlmYFRTuKWIU4fP0NwA-aubnodkdQaCPE_kV5iPpHsnu-ShvCpgeopQeTGSyfQ1Ycg4xte5U3SOfhqMFJsecoWPr6iHfG3udRGZGiR86srdxCEOqaqKfK2UkgB7_Ncn5k4aBoQrzNyUBmth0yPUcbQWByysW07KFlqmq05edSWVKKt6-6XpXoFSe5qpxSTWLiZizWfsbPEJrY8pr1wGWOQ_oKbQ3-w2phclG4E-lJGHApFmXmsqN14CeBZ95Bhc4oNQWybasjO9XkCjQzOWlJN8c3S-jXF0Rd9bpPPlPWy7HsjznAV2bFq2zlcIERl5ZBB6Q2JIc9IG1xfSKRSDVpfX0tNlXRP54DHKQtRVyq-bJgTAhPegzLtAQyWRW5bYbQvcPaURCBX91rvG0R_VLAK0uiuSDE8RvuO8NNaXIskRF0s-cvO3uSocvop9QDlziVosuAKxA48jbZNEozY7FIUJ3l-f9cC1baOu7tcqLPg6z3SWZzo4WM7_PxjqSCg2884K_TqnLbbxmdt9K9WK4XAyY6sX7hbzKxYoDxUDAjeGVg8VyCnwD7s2L5iUuoMpar-z-bdTRMArdq3RFn2TjNEtPiQ8ukH9elG1Z2H1A2txSVlg-nuf4HbXMeIZXkAZGWeAC7gkYzsZB6gjfAdF3xVDkZs-Y6gTE_84JVqZj5fY=w1920-h922'
              }
              alt={`${game.secondTeam.name} 로고`}
            />
            <Game.TeamName>{game.secondTeam.name}</Game.TeamName>
          </Game.TeamWrapper>
        </Game>
      ))}
    </ul>
  );
}
