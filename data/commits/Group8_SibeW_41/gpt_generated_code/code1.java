package nl.tudelft.jpacman.points;

import nl.tudelft.jpacman.level.Pellet;
import nl.tudelft.jpacman.level.Player;
import nl.tudelft.jpacman.level.PlayerFactory;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;
import nl.tudelft.jpacman.sprite.PacManSprites;
import nl.tudelft.jpacman.sprite.EmptySprite;

public class DefaultPointCalculatorTest {

    private DefaultPointCalculator defaultPointCalculator;
    private PlayerFactory playerFactory;
    private Player player;

    @BeforeEach
    void setUp() {
        PacManSprites spriteStore = new PacManSprites();
        defaultPointCalculator = new DefaultPointCalculator();
        playerFactory = new PlayerFactory(spriteStore);
        player = playerFactory.createPacMan();
    }

    @Test
    void testConsumedAPellet() {
        Pellet pellet = new Pellet(1, new EmptySprite());
        defaultPointCalculator.consumedAPellet(player, pellet);
        assertThat(player.getScore()).isEqualTo(1);
    }
}