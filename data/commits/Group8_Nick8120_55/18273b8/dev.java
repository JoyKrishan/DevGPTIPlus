package nl.tudelft.jpacman.board;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import nl.tudelft.jpacman.board.Board;
import nl.tudelft.jpacman.board.Square;
import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.mock;
public class borderTest {

    private final Square[][] grid = {
        { mock(Square.class), mock(Square.class) },
        { mock(Square.class), mock(Square.class) },
        { mock(Square.class), mock(Square.class) }
    };

    @Test
    void withinBorder() {
       Board test_board = new Board(grid);

        //assertTrue(test_board.withinBorders(1,1));
        assertThat(test_board.withinBorders(1, 1)).isTrue();

    }

    @Test
    void edgeBorder() {
       Board test_board = new Board(grid);

        assertThat(test_board.withinBorders(0,0)).isTrue();
        assertThat(test_board.withinBorders(2,1)).isTrue();

    }

    @Test
    void outsideBorder() {
        Board test_board = new Board(grid);

        assertFalse(test_board.withinBorders(-1, 0));
        assertFalse(test_board.withinBorders(0, -1));
        assertFalse(test_board.withinBorders(3, 0));
        assertFalse(test_board.withinBorders(0, 3));
    }

}