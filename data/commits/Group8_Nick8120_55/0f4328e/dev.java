

//ORGINAL CODE (DOCUMENTED CODE BELOW)
/*

 */

/**
 * Unit tests for the {@link Board} class, which represents the game board
 * in a Pacman game.
 *
 * These tests focus on verifying the functionality related to checking
 * whether a given position is within the borders of the game board.
 */
public class borderTest {

    // Create a grid of mock Square objects to use as the game board.
    private final Square[][] grid = {
        { mock(Square.class), mock(Square.class) },
        { mock(Square.class), mock(Square.class) },
        { mock(Square.class), mock(Square.class) }
    };

    /**
     * Test to verify that a position within the borders of the game board
     * is correctly identified as being within the borders.
     */
    @Test
    void withinBorder() {
        // Create a new Board instance with the mock grid.
        Board test_board = new Board(grid);

        // Assert that the position (1, 1) is within the borders.
        assertThat(test_board.withinBorders(1, 1)).isTrue();
    }

    /**
     * Test to verify that positions at the edge of the game board are correctly
     * identified as being within the borders.
     */
    @Test
    void edgeBorder() {
        // Create a new Board instance with the mock grid.
        Board test_board = new Board(grid);

        // Assert that positions (0, 0) and (2, 1) are within the borders.
        assertThat(test_board.withinBorders(0, 0)).isTrue();
        assertThat(test_board.withinBorders(2, 1)).isTrue();
    }

    /**
     * Test to verify that positions outside the borders of the game board
     * are correctly identified as being outside the borders.
     */
    @Test
    void outsideBorder() {
        // Create a new Board instance with the mock grid.
        Board test_board = new Board(grid);

        // Assert that positions (-1, 0), (0, -1), (3, 0), and (0, 3) are outside the borders.
        assertFalse(test_board.withinBorders(-1, 0));
        assertFalse(test_board.withinBorders(0, -1));
        assertFalse(test_board.withinBorders(3, 0));
        assertFalse(test_board.withinBorders(0, 3));
    }
}
