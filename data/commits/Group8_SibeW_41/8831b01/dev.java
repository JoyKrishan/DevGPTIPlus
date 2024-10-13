package nl.tudelft.jpacman.points;
//import nl.tudelft.jpacman.level.Pellet;
import nl.tudelft.jpacman.level.Player;
import nl.tudelft.jpacman.level.PlayerFactory;
//import nl.tudelft.jpacman.sprite.EmptySprite;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;
import nl.tudelft.jpacman.sprite.PacManSprites;

public class DefaultPointCalculatorTest {

    private DefaultPointCalculator DPC = new DefaultPointCalculator();

    private static final PacManSprites SPRITE_STORE = new PacManSprites();
    private PlayerFactory Factory = new PlayerFactory(SPRITE_STORE);
    private Player ThePlayer = Factory.createPacMan();
    //private EmptySprite TheSprite = new EmptySprite();
    @Test
    void testConsumedAPellet(){
        //DPC.consumedAPellet(ThePlayer,new Pellet(1,TheSprite));
        assertThat(ThePlayer.getScore()).isEqualTo(1);
    }
}