package nl.tudelft.jpacman.points;

import nl.tudelft.jpacman.level.Pellet;
import nl.tudelft.jpacman.level.Player;
import nl.tudelft.jpacman.level.PlayerFactory;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;
import nl.tudelft.jpacman.sprite.PacManSprites;
import nl.tudelft.jpacman.sprite.EmptySprite;

/**
 * Unit tests for DefaultPointCalculator class.
 */
public class DefaultPointCalculatorTest {

    private DefaultPointCalculator defaultPointCalculator;
    private PlayerFactory playerFactory;
    private Player player;

    /**
     * Setting up the necessary objects for testing.
     */
    @BeforeEach
    void setUp() {
        // Creating PacManSprites object for sprite storage
        PacManSprites spriteStore = new PacManSprites();
        // Instantiating DefaultPointCalculator
        defaultPointCalculator = new DefaultPointCalculator();
        // Instantiating PlayerFactory
        playerFactory = new PlayerFactory(spriteStore);
        // Creating a PacMan player
        player = playerFactory.createPacMan();
    }

    /**
     * Test case to verify the consumedAPellet method of DefaultPointCalculator.
     * It checks if the player's score increases by 1 after consuming a pellet.
     */
    @Test
    void testConsumedAPellet() {
        // Creating a pellet with a score value of 1
        Pellet pellet = new Pellet(1, new EmptySprite());
        // Invoking consumedAPellet method to simulate pellet consumption by the player
        defaultPointCalculator.consumedAPellet(player, pellet);
        // Asserting that the player's score is incremented by 1
        assertThat(player.getScore()).isEqualTo(1);
    }
}