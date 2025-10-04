CREATE TABLE eshu(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    gender VARCHAR(20),
    course VARCHAR(100),
    qualityOfTeaching INT,
    facultyAvailability INT,
    library INT,
    wifi INT,
    overallRating INT,
    suggestions TEXT,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO survey_responses
(name, age, gender, course, qualityOfTeaching, facultyAvailability, library, wifi, overallRating, suggestions)
VALUES
('John Doe', 20, 'Male', 'B.Tech / CSE / 2nd Year', 5, 4, 4, 3, 5, 'More workshops on AI would be great!');
