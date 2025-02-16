# COVID-19 Quiz API

This project provides a backend API for a COVID-19 related quiz system, enabling the management and retrieval of quiz questions and answers to educate users about the pandemic.

## Features

- **Quiz Management**: Create, update, and delete quiz questions.
- **Answer Evaluation**: Submit answers and receive feedback on correctness.
- **User Progress Tracking**: Monitor user performance over time.

## Entity-Relationship Diagram

The following diagram illustrates the database schema for the quiz system:

![Entity-Relationship Diagram](https://github.com/MarshallCN/covid19-api/blob/master/ERD.png)

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
- **Database**: Set up a relational database (e.g., MySQL, PostgreSQL) as per your preference.

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/MarshallCN/covid19-api.git
   cd covid19-api
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure the Database**:
   - Update the database configuration in `src/config/database.js` to match your database setup.

4. **Run Migrations**:
   ```bash
   npm run migrate
   ```

5. **Start the Server**:
   ```bash
   npm start
   ```

   The API should now be running on `http://localhost:3000/`.

## API Endpoints

- `GET /quizzes`: Retrieve a list of all quizzes.
- `POST /quizzes`: Create a new quiz.
- `GET /quizzes/:id`: Retrieve a specific quiz by ID.
- `PUT /quizzes/:id`: Update a specific quiz by ID.
- `DELETE /quizzes/:id`: Delete a specific quiz by ID.
- `POST /quizzes/:id/submit`: Submit answers for a specific quiz and receive feedback.

## Data Transformation Example

The `test.js` file demonstrates how to transform an array of question objects into a structured JSON format. Here's a brief overview of the process:

1. **Sample Data**: An array of question objects, each containing details like `id`, `question`, `option`, `opt_index`, and `correct`.

2. **Transformation**: Using the `reduce` method, the array is transformed into an object where each key is a question ID, and the value is an object containing the question text, options, correct answer, and type.

3. **Result**: The transformed data provides a structured format that's easier to work with in the application.

For detailed implementation, refer to the `test.js` file in the repository.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License.
