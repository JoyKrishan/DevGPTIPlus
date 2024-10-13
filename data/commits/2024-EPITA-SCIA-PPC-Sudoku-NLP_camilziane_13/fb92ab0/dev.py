from timeit import default_timer
import numpy as np
from itertools import permutations


N = 9


if "instance" not in locals():
    instance = np.array(
        [
            [0, 0, 0, 0, 9, 4, 0, 3, 0],
            [0, 0, 0, 5, 1, 0, 0, 0, 7],
            [0, 8, 9, 0, 0, 0, 0, 4, 0],
            [0, 0, 0, 0, 0, 0, 2, 0, 8],
            [0, 6, 0, 2, 0, 1, 0, 5, 0],
            [1, 0, 2, 0, 0, 0, 0, 0, 0],
            [0, 7, 0, 0, 0, 0, 5, 2, 0],
            [9, 0, 0, 0, 6, 5, 0, 0, 0],
            [0, 4, 0, 9, 7, 0, 0, 0, 0],
        ],
        dtype=int,
    )

    instance = (
        (0, 0, 0, 4, 0, 9, 6, 7, 0),
        (0, 0, 0, 0, 7, 6, 9, 0, 0),
        (0, 0, 0, 0, 0, 0, 0, 0, 3),
        (0, 0, 0, 0, 0, 1, 7, 4, 0),
        (6, 4, 0, 0, 0, 0, 0, 1, 8),
        (0, 2, 1, 6, 0, 0, 0, 0, 0),
        (1, 0, 0, 0, 0, 0, 0, 0, 0),
        (0, 0, 4, 3, 2, 0, 0, 0, 0),
        (0, 6, 2, 9, 0, 4, 0, 0, 0),
    )
    # s = "..53.....8......2..7..1.5..4....53...1..7...6..32...8..6.5....9..4....3......97.."

    # Split the string into chunks of 9 characters
    # chunks = [s[i : i + 9] for i in range(0, len(s), 9)]

    # Convert each character into an integer, treating '.' as 0
    # instance = [[int(char) if char != "." else 0 for char in chunk] for chunk in chunks]


def init_cells() -> np.ndarray:
    cells = np.arange(N**2)
    cells = np.reshape(cells, (N, N))
    return cells


def init_constraints_to_cells_map():
    cells = init_cells()
    constraints_line_columns_map = np.vstack([cells, cells.T])
    constraint_block_map = cells.reshape(3, 3, 3, 3).transpose(0, 2, 1, 3).reshape(9, 9)
    return np.vstack([constraints_line_columns_map, constraint_block_map])


def init_cells_to_constraints_map():
    cell_line_map = np.repeat(np.arange(9), 9).T.reshape(81, 1)
    cell_column_map = np.repeat(np.arange(9, 18), 9).reshape(9, 9).T.reshape(81, 1)
    cell_block_map = (
        np.repeat(np.arange(18, 27), 9)
        .reshape(3, 3, 3, 3)
        .transpose(0, 3, 1, 2)
        .reshape(81, 1)
    )
    return np.hstack([cell_line_map, cell_column_map, cell_block_map])


class solveSudoku:
    def __init__(self, grid):
        self.grid = np.array(grid).reshape(
            81,
        )
        self.grid_lines_lookup = self.grid.reshape(9, 9)
        self.grid_columns_lookup = self.grid_lines_lookup.T
        self.grid_blocks_lookup = (
            self.grid_lines_lookup.reshape(3, 3, 3, 3)
            .transpose(0, 2, 1, 3)
            .reshape(9, 9)
        )
        self.grids_lookups = [
            self.grid_lines_lookup,
            self.grid_columns_lookup,
            self.grid_blocks_lookup,
        ]
        self.line_index = np.repeat(np.arange(9).reshape(1, 9), 9, axis=0).reshape(
            N * N
        )
        self.column_index = np.repeat(np.arange(9).reshape(9, 1), 9, axis=1).reshape(
            N * N
        )
        self.block_index = (
            np.repeat(np.arange(9), 9)
            .reshape(3, 3, 3, 3)
            .transpose(2, 0, 3, 1)
            .reshape(N * N)
        )
        self.indexes = [self.line_index, self.column_index, self.block_index]
        self.constraints_to_cell_map = init_constraints_to_cells_map()  # 27x9
        self.cells_to_constraints_map = init_cells_to_constraints_map()  # 81x3
        self.probs = np.ones((81, 9))
        self.decision_values = np.zeros([81, 9])
        self.r = np.ones((3 * N, N**2, N))
        self.q = np.ones((3 * N, N**2, N))
        self.update_probabilities()
        self.init_constraint_to_cell_messages()
        self.init_cell_to_constraint_messages()

    def update_probabilitie(self, i):
        if self.grid[i] != 0:
            self.probs[i, :] = 0
            self.probs[i, self.grid[i] - 1] = 1
            return
        constraint_coords = self.cells_to_constraints_map[i]
        for grid_lookup, constraint_coord in zip(self.grids_lookups, constraint_coords):
            lookup_values = grid_lookup[constraint_coord % 9]
            self.probs[i, lookup_values[lookup_values != 0] - 1] = 0
        self.probs[i] /= np.sum(self.probs[i])
        return

    def update_probabilities(self):
        for i in range(81):
            self.update_probabilitie(i)

    def init_constraint_to_cell_message(self, i):
        if self.grid[i] != 0:
            self.r[:, i, :] = 0
            self.r[:, i, self.grid[i] - 1] = 1
            return
        constraint_coords = self.cells_to_constraints_map[i]
        for constraint_coord in constraint_coords:
            constraint_cells = self.constraints_to_cell_map[constraint_coord]
            grid_constraint_cells = self.grid[constraint_cells]
            self.r[
                constraint_coord,
                i,
                grid_constraint_cells[grid_constraint_cells != 0] - 1,
            ] = 0

    def init_constraint_to_cell_messages(self):
        for i in range(81):
            self.init_constraint_to_cell_message(i)
        self.r /= np.sum(self.r, axis=2, keepdims=True)

    def init_cell_to_constraint_message(self, i):
        if self.grid[i] != 0:
            self.q[:, i, :] = 0
            self.q[:, i, self.grid[i] - 1] = 1
            return
        constraint_coords = self.cells_to_constraints_map[i]
        for c_view, (grid_lookup, constraint_coord) in enumerate(
            zip(self.grids_lookups, constraint_coords)
        ):
            lookup_values = grid_lookup[constraint_coord % 9]
            self.q[
                constraint_coords[(c_view + 1) % 3],
                i,
                lookup_values[lookup_values != 0] - 1,
            ] = 0
            self.q[
                constraint_coords[(c_view - 1) % 3],
                i,
                lookup_values[lookup_values != 0] - 1,
            ] = 0

    def init_cell_to_constraint_messages(self):
        for i in range(81):
            self.init_cell_to_constraint_message(i)
        self.q /= np.sum(self.q, axis=2, keepdims=True)

    def compute_permutations(
        self, cells_fixed: np.ndarray, x_cell_fixed: np.ndarray, n: int, axe: int
    ):
        cells_fixed_index = self.indexes[axe][cells_fixed]
        n_index = self.indexes[axe][n]
        cells_index_to_permute = np.array(
            [i for i in range(9) if i not in cells_fixed_index]
        )
        x_cell_to_permute = np.array([i for i in range(9) if i not in x_cell_fixed])
        permutations_list = list(
            permutations(x_cell_to_permute, len(x_cell_to_permute))
        )
        permutations_list = np.array(permutations_list)
        res = np.zeros(
            (len(permutations_list), len(x_cell_to_permute) + len(cells_fixed_index))
        )
        res[:, cells_fixed_index] = x_cell_fixed
        res[:, cells_index_to_permute] = permutations_list
        res = np.delete(res, n_index, axis=1)
        return res.astype(int)

    def update_constraint_to_cell_messages(self):
        for c in range(3 * N):
            cells = self.constraints_to_cell_map[c]
            cells_set = cells[np.isin(cells, np.argwhere(self.grid))]
            x_cell_set = self.grid[cells_set] - 1
            for n in cells:
                cells_no_n = cells[cells != n]
                cells_fixed = (
                    np.append(cells_set, n) if n not in cells_set else cells_set
                )
                x_cell_to_permute = np.array(
                    [i for i in range(9) if i not in x_cell_set]
                )
                for x in x_cell_to_permute:
                    if (self.r[c, n, x] == 1) | (self.r[c, n, x] == 0):
                        continue
                    x_cell_fixed = (
                        np.append(x_cell_set, x) if n not in cells_set else x_cell_set
                    )
                    permutations_list = self.compute_permutations(
                        cells_fixed, x_cell_fixed, n, c // 9
                    )
                    self.r[c, n, x] = np.sum(
                        np.prod(
                            self.q[c, cells_no_n][
                                np.repeat(
                                    np.arange(N - 1).reshape(1, N - 1),
                                    permutations_list.shape[0],
                                    axis=0,
                                ),
                                permutations_list,
                            ],
                            axis=1,
                        )
                    )

    def update_cell_to_constraint_messages(self):
        for c in range(3 * N):
            for i in range(N**2):
                if 1 in self.q[c, i, :]:
                    continue
                constraint_except_c = self.cells_to_constraints_map[i]
                constraint_except_c = constraint_except_c[constraint_except_c != c]
                self.q[c, i, :] = self.probs[i] * np.prod(
                    self.r[constraint_except_c, i, :], axis=0
                )

    def update_decision_values(self):
        for i in range(81):
            self.decision_values[i] = (self.probs[i]) * np.prod(
                (self.r[self.cells_to_constraints_map[i], i, :]), axis=0
            )

    def solve(self):
        max_iter = 30
        while np.count_nonzero(self.grid) < 81 and max_iter > 0:
            self.update_constraint_to_cell_messages()
            self.update_cell_to_constraint_messages()
            self.update_decision_values()
            self.probs = self.decision_values
            simplified_decision_indexes = np.argwhere(
                np.count_nonzero(self.decision_values, axis=1) == 1
            ).reshape(-1)
            number_new_decisions = len(simplified_decision_indexes) - np.count_nonzero(
                self.grid
            )
            for simplified_decision_index in simplified_decision_indexes:
                self.grid[simplified_decision_index] = (
                    np.argmax(self.decision_values[simplified_decision_index]) + 1
                )
            self.probs = np.ones((81, 9))
            self.update_probabilities()
            self.r = np.ones((3 * N, N**2, N))
            self.q = np.ones((3 * N, N**2, N))
            self.init_constraint_to_cell_messages()
            self.init_cell_to_constraint_messages()
            max_iter -= 1
        return np.count_nonzero(self.grid) == 81


start = default_timer()
solve_sudoku = solveSudoku(instance)
if solve_sudoku.solve():
    # print(solve_sudoku.grid.reshape(9, 9))
    result = solve_sudoku.grid.reshape(9, 9).astype(np.int32)
    # r = list(solve_sudoku.grid)
    ...
else:
    print(solve_sudoku.grid.reshape(9, 9))
    print("Aucune solution trouvee")

execution = default_timer() - start
print("Le temps de resolution est de : ", execution, " seconds as a floating point value")