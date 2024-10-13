import random

def random_chromosome(size):
    """
    Generate a random chromosome representing a placement of queens on the chessboard.

    Parameters:
    - size (int): The number of queens and the size of the chessboard.
    """
    return [random.randint(1, size) for _ in range(size)]

def fitness(chromosome):
    """
    Calculate the fitness score of a given chromosome.

    Parameters:
    - chromosome (list): A list representing the placement of queens on the chessboard.
    """
    horizontal_collisions = sum([chromosome.count(queen)-1 for queen in chromosome])/2
    diagonal_collisions = 0

    n = len(chromosome)
    left_diagonal = [0] * (2 * n)
    right_diagonal = [0] * (2 * n)
    
    for i in range(n):
        left_diagonal[i + chromosome[i] - 1] += 1
        right_diagonal[len(chromosome) - i + chromosome[i] - 2] += 1

    for i in range(2 * n - 1):
        counter = 0
        if left_diagonal[i] > 1:
            counter += left_diagonal[i] - 1
        if right_diagonal[i] > 1:
            counter += right_diagonal[i] - 1
        diagonal_collisions += counter / (n - abs(i - n + 1))
    
    return int(maxFitness - (horizontal_collisions + diagonal_collisions))

def probability(chromosome, fitness):
    """
    Calculate the probability of selecting a chromosome for reproduction based on its fitness.

    Parameters:
    - chromosome (list): A list representing the placement of queens on the chessboard.
    - fitness (function): The fitness function used to evaluate the chromosome.
    """
    return fitness(chromosome) / maxFitness

def random_pick(population, probabilities):
    """
    Select a chromosome from the population based on probabilities.

    Parameters:
    - population (list): A list of chromosomes.
    - probabilities (list): A list of probabilities corresponding to each chromosome in the population.
    """
    population_with_probability = zip(population, probabilities)
    total = sum(w for c, w in population_with_probability)
    r = random.uniform(0, total)
    upto = 0
    for c, w in zip(population, probabilities):
        if upto + w >= r:
            return c
        upto += w
    assert False, "Shouldn't get here"

def reproduce(x, y):
    """
    Perform crossover between two chromosomes to create a new chromosome.

    Parameters:
    - x (list): The first parent chromosome.
    - y (list): The second parent chromosome.
    """
    n = len(x)
    crossover_point = random.randint(0, n - 1)
    return x[0:crossover_point] + y[crossover_point:n]

def mutate(x):
    """
    Randomly change the value of a random index of a chromosome.

    Parameters:
    - x (list): The chromosome to mutate.
    """
    n = len(x)
    index_to_mutate = random.randint(0, n - 1)
    new_value = random.randint(1, n)
    x[index_to_mutate] = new_value
    return x

def genetic_queen(population, fitness):
    """
    Perform one iteration of the genetic algorithm for the N-Queens problem.

    Parameters:
    - population (list): A list of chromosomes representing the current population.
    - fitness (function): The fitness function used to evaluate chromosomes.
    """
    mutation_probability = 0.03
    new_population = []
    probabilities = [probability(n, fitness) for n in population]
    
    for _ in range(len(population)):
        x = random_pick(population, probabilities)
        y = random_pick(population, probabilities)
        child = reproduce(x, y)
        
        if random.random() < mutation_probability:
            child = mutate(child)
        
        print_chromosome(child)
        new_population.append(child)
        
        if fitness(child) == maxFitness:
            break
    
    return new_population

def print_chromosome(chrom):
    """
    Print the chromosome and its fitness score.

    Parameters:
    - chrom (list): The chromosome to print.
    """
    print("Chromosome = {},  Fitness = {}".format(str(chrom), fitness(chrom)))

if __name__ == "__main__":
    nq = int(input("Enter Number of Queens: "))
    maxFitness = (nq * (nq - 1)) / 2
    population = [random_chromosome(nq) for _ in range(100)]
    generation = 1

    while not maxFitness in [fitness(chrom) for chrom in population]:
        print("=== Generation {} ===".format(generation))
        population = genetic_queen(population, fitness)
        print("")
        print("Maximum Fitness = {}".format(max([fitness(n) for n in population])))
        generation += 1

    chrom_out = []
    print("Solved in Generation {}!".format(generation - 1))
    
    for chrom in population:
        if fitness(chrom) == maxFitness:
            print("")
            print("One of the solutions: ")
            chrom_out = chrom
            print_chromosome(chrom)
            
    board = []

    for _ in range(nq):
        board.append(["x"] * nq)

    for i in range(nq):
        board[nq - chrom_out[i]][i] = "Q"

    def print_board(board):
        """
        Print the chessboard with queens placed based on the solution.

        Parameters:
        - board (list): A list representing the chessboard.
        """
        for row in board:
            print(" ".join(row))

    print()
    print_board(board)