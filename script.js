// DOM Elements
const workoutForm = document.getElementById('workout-form');
const exerciseInput = document.getElementById('exercise');
const setsInput = document.getElementById('sets');
const repsInput = document.getElementById('reps');
const workoutsList = document.getElementById('workouts');

// Array to store workouts (later we'll use Firebase)
let workouts = [];

// Save workout
workoutForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const newWorkout = {
    exercise: exerciseInput.value,
    sets: setsInput.value,
    reps: repsInput.value,
    id: Date.now() // Unique ID
  };

  workouts.push(newWorkout);
  renderWorkouts();
  workoutForm.reset();
});

// Display workouts
function renderWorkouts() {
  workoutsList.innerHTML = workouts.map(workout => `
    <li>
      <span><strong>${workout.exercise}</strong>: ${workout.sets} sets x ${workout.reps} reps</span>
      <button onclick="deleteWorkout(${workout.id})">Delete</button>
    </li>
  `).join('');
}

// Delete workout
function deleteWorkout(id) {
  workouts = workouts.filter(workout => workout.id !== id);
  renderWorkouts();
}