#include <iostream>
#include <vector>
#include <algorithm>

// Structure to represent a task with a name, priority, and deadline.
struct Task {
    std::string name;     // Name of the task.
    int priority;        // Priority of the task (higher values indicate higher priority).
    int deadline;        // Deadline by which the task should be completed.

    // Constructor to initialize a task.
    Task(const std::string& n, int p, int d) : name(n), priority(p), deadline(d) {}
};

// Comparison function for sorting tasks by priority (higher priority first).
bool sortByPriority(const Task& a, const Task& b) {
    return a.priority > b.priority;
}

// Comparison function for sorting tasks by deadline (earlier deadline first).
bool sortByDeadline(const Task& a, const Task& b) {
    return a.deadline < b.deadline;
}

// Function to display a list of tasks, including their name, priority, and deadline.
void displayTasks(const std::vector<Task>& tasks) {
    std::cout << "Task List:\n";
    std::cout << "-------------------------------------------------------\n";
    for (const Task& task : tasks) {
        std::cout << "Name: " << task.name << " | Priority: " << task.priority << " | Deadline: " << task.deadline << "\n";
    }
    std::cout << "-------------------------------------------------------\n";
}

// Function to schedule tasks based on their priority and deadline.
void scheduleTasks(std::vector<Task>& tasks) {
    // Sort tasks by their deadlines in ascending order.
    std::sort(tasks.begin(), tasks.end(), sortByDeadline);

    std::vector<Task> scheduledTasks;  // Store the scheduled tasks.
    int currentTime = 0;

    for (const Task& task : tasks) {
        // Check if scheduling the task would meet its deadline.
        if (currentTime <= task.deadline) {
            scheduledTasks.push_back(task);
            currentTime += task.priority;
        }
    }

    displayTasks(scheduledTasks);
}

int main() {
    std::vector<Task> tasks;

    while (true) {
        std::cout << "1. Add Task\n";
        std::cout << "2. Schedule Tasks\n";
        std::cout << "3. Exit\n";
        int choice;
        std::cin >> choice;

        if (choice == 1) {
            std::string name;
            int priority, deadline;

            std::cout << "Enter Task Name: ";
            std::cin >> name;
            std::cout << "Enter Task Priority: ";
            std::cin >> priority;
            std::cout << "Enter Task Deadline: ";
            std::cin >> deadline;

            tasks.emplace_back(name, priority, deadline);
        } else if (choice == 2) {
            scheduleTasks(tasks);
        } else if (choice == 3) {
            break;
        } else {
            std::cout << "Invalid choice. Please try again.\n";
        }
    }

    return 0;
}