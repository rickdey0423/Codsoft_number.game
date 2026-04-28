#include <iostream>
#include <cstdlib> // Needed for rand()
#include <ctime>   // Needed for time()

using namespace std;

int main() {
    // This line makes the random number different every time you play
    srand(time(0)); 

    int secretNumber = rand() % 100 + 1; // Random number between 1 and 100
    int guess;

    cout << "I'm thinking of a number between 1 and 100." << endl;

    // Keep asking until the user is correct
    do {
        cout << "Enter your guess: ";
        cin >> guess;

        if (guess > secretNumber) {
            cout << "Too high! Try again." << endl;
        } 
        else if (guess < secretNumber) {
            cout << "Too low! Try again." << endl;
        } 
        else {
            cout << "You got it! The number was " << secretNumber << endl;
        }

    } while (guess != secretNumber);

    return 0;
}