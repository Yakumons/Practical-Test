
// Test data
const testData = {
  multipleChoice: [
    {
      question: "What is an enumeration (enum) in Java?",
      options: ["A method that enumerates all objects in memory", "A data type that contains a fixed set of constants", "A special type of loop that iterates through an array", "A method for counting elements in a collection"],
      answer: 1
    },
    {
      question: "When should enumerations be used?",
      options: ["When working with databases", "When all possibilities of values or instances are known at compile time", "Only when working with numeric constants", "When creating dynamic data structures"],
      answer: 1
    },
    {
      question: "Which method returns the position of an enum constant in its declaration?",
      options: ["position()", "index()", "ordinal()", "valueOf()"],
      answer: 2
    },
    {
      question: "What does the valueOf() static method do in an enumeration?",
      options: ["Returns the numeric value of the constant", "Converts a string parameter to an enumeration constant", "Returns the ordinal value", "Creates a new enum value"],
      answer: 1
    },
    {
      question: "What does the values() static method do in an enumeration?",
      options: ["Returns the sum of all enum constant values", "Returns an array containing all constants of the enum", "Calculates the total number of enum constants", "Returns the string values of all constants"],
      answer: 1
    },
    {
      question: "In a switch statement using enums, what is NOT required when referring to enum constants?",
      options: ["The enum type name", "The enum constant name", "The enum package name", "The keyword \"case\""],
      answer: 0
    },
    {
      question: "What is the main benefit of using enums instead of numeric or String constants?",
      options: ["Enums use less memory", "Enums make code execution faster", "It's impossible to create an invalid enum value without a compiler error", "Enums can be serialized"],
      answer: 2
    },
    {
      question: "What does the toString() method do when called on an enum constant?",
      options: ["Returns the memory address of the constant", "Returns the name of the constant as a string", "Returns the ordinal value as a string", "Returns the enum class name"],
      answer: 1
    },
    {
      question: "What does the compareTo() method return when comparing enum constants?",
      options: ["A boolean indicating if they are equal", "The distance between their ordinal values", "A negative integer, zero, or positive integer based on ordinal comparison", "A string representation of their comparison"],
      answer: 2
    },
    {
      question: "What is 'type-safe' in the context of enumerations?",
      options: ["It means the enum can be safely cast to other types", "It describes a data type that allows only appropriate behaviors", "It means the enum is protected from memory leaks", "It refers to thread safety in enum operations"],
      answer: 1
    },
    {
      question: "Which of these can be added to enum types besides constants?",
      options: ["Additional modules", "External libraries", "Methods and fields", "Other enums"],
      answer: 2
    },
    {
      question: "Which of the following is NOT a type of nested class in Java?",
      options: ["Static member class", "Non-static member class (inner class)", "Extended class", "Anonymous class"],
      answer: 2
    },
    {
      question: "What is a static member class?",
      options: ["A class that contains only static methods", "A nested class that has access to all static methods of the top-level class", "A class that cannot be instantiated", "A class that exists only at compile time"],
      answer: 1
    },
    {
      question: "What is a non-static member class (inner class)?",
      options: ["A class that contains no static methods", "A nested class that requires an instance of the outer class", "A class that is always private", "A class that cannot have constructors"],
      answer: 1
    },
    {
      question: "What is a local class in Java?",
      options: ["A class defined within a package", "A class defined within a method body", "A class that can only be used locally", "A class that has local scope variables only"],
      answer: 1
    },
    {
      question: "What is an anonymous class?",
      options: ["A class that has no access modifiers", "A special case of a local class that has no identifier", "A class that cannot be instantiated", "A class with no methods"],
      answer: 1
    },
    {
      question: "What is the primary reason for nesting a class inside another?",
      options: ["To reduce the number of source files", "Because the inner class is used only by the top-level class", "To avoid naming conflicts", "To improve performance"],
      answer: 1
    },
    {
      question: "What is true about inner classes (non-static member classes)?",
      options: ["They require an instance of the outer class", "They can only access public members of the outer class", "They cannot have constructors", "They are automatically static"],
      answer: 0
    },
    {
      question: "What is the top-level class in nested classes?",
      options: ["The class that extends all other classes", "The containing class", "The most recently created class", "The class with the most methods"],
      answer: 1
    },
    {
      question: "What is a regular expression?",
      options: ["A method for verifying data integrity", "A character or sequence of characters that represent a string or multiple strings", "A data structure for storing strings", "A special class in Java's Collection framework"],
      answer: 1
    },
    {
      question: "Which Java package contains the regular expression classes?",
      options: ["java.lang.regex", "java.regex", "java.util.regex", "java.text.regex"],
      answer: 2
    },
    {
      question: "What does the vertical bar (|) represent in regular expressions?",
      options: ["Concatenation", "OR operator", "AND operator", "Negation"],
      answer: 1
    },
    {
      question: "What do square brackets [] signify in regular expressions?",
      options: ["A mandatory grouping", "Character variability (a set of acceptable characters)", "A method call", "A range of indices"],
      answer: 1
    },
    {
      question: "What does the hyphen (-) inside square brackets represent in regular expressions?",
      options: ["Subtraction operation", "A range of characters", "A literal hyphen character", "A separator between expressions"],
      answer: 1
    },
    {
      question: "What does the dot (.) represent in regular expressions?",
      options: ["A literal period character", "The end of a statement", "Any single character (wildcard)", "A decimal point in numeric patterns"],
      answer: 2
    },
    {
      question: "What is a repetition operator in regular expressions?",
      options: ["An operator that repeats the previous command", "A symbol that indicates the number of times a specified character appears", "An operator that duplicates the pattern", "A special character that counts occurrences"],
      answer: 1
    },
    {
      question: "What does the repetition operator * mean in regular expressions?",
      options: ["One or more occurrences", "Zero or one occurrence", "Exactly one occurrence", "Zero or more occurrences"],
      answer: 3
    },
    {
      question: "What does the repetition operator ? mean in regular expressions?",
      options: ["Zero or more occurrences", "Zero or one occurrence", "One or more occurrences", "Exactly one occurrence"],
      answer: 1
    },
    {
      question: "What does the repetition operator + mean in regular expressions?",
      options: ["Zero or more occurrences", "Zero or one occurrence", "One or more occurrences", "Exactly one occurrence"],
      answer: 2
    },
    {
      question: "What does the repetition operator {x} mean in regular expressions?",
      options: ["At least x occurrences", "At most x occurrences", "Exactly x occurrences", "Between 0 and x occurrences"],
      answer: 2
    },
    {
      question: "What does the repetition operator {x,y} mean in regular expressions?",
      options: ["Either x or y occurrences", "Between x and y occurrences", "At least x and at most y characters long", "Exactly x occurrences of y"],
      answer: 1
    },
    {
      question: "What does the repetition operator {x,} mean in regular expressions?",
      options: ["Exactly x occurrences", "x or more occurrences", "Up to x occurrences", "At least x characters long"],
      answer: 1
    },
    {
      question: "Which class in Java is used to store the format of a regular expression?",
      options: ["String", "Regex", "Pattern", "Expression"],
      answer: 2
    },
    {
      question: "What method is used to compile a regular expression into a Pattern?",
      options: ["Pattern.create()", "Pattern.new()", "Pattern.compile()", "Pattern.build()"],
      answer: 2
    },
    {
      question: "Which class in Java stores a possible match between a pattern and a string?",
      options: ["Match", "Matcher", "PatternMatcher", "StringMatcher"],
      answer: 1
    },
    {
      question: "How is a Matcher initialized in Java?",
      options: ["new Matcher(string, pattern)", "Matcher.create(pattern, string)", "patternName.matcher(stringName)", "String.getMatcher(pattern)"],
      answer: 2
    },
    {
      question: "What does the matches() method in the Matcher class do?",
      options: ["Returns true for partial matches", "Checks if the entire string matches the pattern", "Returns the number of matches", "Creates a new matching algorithm"],
      answer: 1
    },
    {
      question: "What does the find() method in the Matcher class do?",
      options: ["Searches the entire string for a complete match", "Finds and returns the first character that matches", "Scans the input for the next subsequence that matches the pattern", "Returns true only if the entire string matches the pattern"],
      answer: 2
    },
    {
      question: "What does the split() method do with regular expressions?",
      options: ["Splits the regex into smaller patterns", "Splits the string around matches of the given regular expression", "Separates a Pattern from a Matcher", "Divides a match result into groups"],
      answer: 1
    },
    {
      question: "What does the replaceAll() method do in the context of regular expressions?",
      options: ["Replaces the entire string with a new one", "Replaces all occurrences of the defined regular expression with another string", "Removes all characters from the string", "Replaces only the first occurrence of the pattern"],
      answer: 1
    },
    {
      question: "What is the difference between matches() and equals() methods when comparing strings?",
      options: ["matches() is case-sensitive, equals() is not", "matches() compares to a regex pattern, equals() compares to another string exactly", "matches() is faster, equals() is more thorough", "matches() works only with numbers, equals() works with all strings"],
      answer: 1
    },
    {
      question: "What would the regular expression '[a-zA-Z]at' match?",
      options: ["Any word ending in 'at'", "Any single letter followed by 'at'", "The exact string 'a-zA-Zat'", "Any three-letter word starting with 'a' and ending with 't'"],
      answer: 1
    },
    {
      question: "What would the regular expression '.*' match?",
      options: ["Nothing", "Only the dot character followed by an asterisk", "Any number of any characters (including empty string)", "Only strings with at least one character"],
      answer: 2
    },
    {
      question: "Which regular expression would match an email format?",
      options: ["[a-zA-Z0-9]+@[a-zA-Z0-9]+\\.[a-zA-Z]+", ".+@.+", "[email]", "www\\..+\\.com"],
      answer: 0
    },
    {
      question: "What will 'cat|dog' match in regex?",
      options: ["A string with both 'cat' and 'dog'", "Either 'cat' or 'dog'", "The exact string 'cat|dog'", "A string containing 'cat' or 'dog' anywhere"],
      answer: 1
    },
    {
      question: "What will '[Cc]at' match in regex?",
      options: ["Either 'Cat' or 'cat'", "Only uppercase 'CAT'", "Either 'C' or 'c' followed by any character and 't'", "The exact string '[Cc]at'"],
      answer: 0
    },
    {
      question: "What will '[0-9]{3}-[0-9]{3}-[0-9]{4}' likely match?",
      options: ["A calendar date", "A phone number", "A credit card number", "A zip code"],
      answer: 1
    },
    {
      question: "Which of these is a valid way to declare an enumeration?",
      options: ["enum Colors = {RED, GREEN, BLUE};", "Colors enum = new enum(RED, GREEN, BLUE);", "public enum Colors {RED, GREEN, BLUE};", "enum Colors(RED, GREEN, BLUE);"],
      answer: 2
    },
    {
      question: "What happens if you try to create an invalid enum value?",
      options: ["It will be converted to null", "A compiler error occurs", "A runtime exception occurs", "The program will ignore it"],
      answer: 1
    },
    {
      question: "What is an enhanced for loop often used with enumerations?",
      options: ["A loop that automatically increments enum values", "A for loop that iterates through each value in an enumeration", "A special loop only available for enums", "A loop that enhances performance with enums"],
      answer: 1
    }
  ],
  matching: {
    columnA: [
      "Static nested class",
      "Inner class",
      "Local class",
      "Anonymous class",
      "Enum constant",
      "Regular expression",
      "Pattern class",
      "Matcher class",
      "Lambda expression",
      "Exception handling"
    ],
    columnB: [
      "Class that can be accessed without outer class instance",
      "Non-static class with access to outer class members",
      "Class defined inside a method",
      "Class without a name",
      "Fixed set of predefined values",
      "Pattern describing a set of strings",
      "Class for compiling regex patterns",
      "Class for performing match operations",
      "Concise way to implement functional interfaces",
      "Mechanism to handle runtime errors"
    ]
  }
};

let currentSection = 'welcome';
let currentQuestion = 0;
let answers = {};
let username = '';
let startTime = null;

function startTest() {
  username = document.getElementById('username').value.trim();
  if (!username) {
    showCuteAlert('Oops! 🤖', 'Please enter your name before we start!');
    return;
  }

  startTime = new Date();
  currentSection = 'multipleChoice';
  document.getElementById('welcome-screen').classList.remove('active');
  document.getElementById('test-screen').classList.add('active');
  document.getElementById('user-display').textContent = `Student: ${username}`;
  showQuestion();
  startTimer();
}

function showQuestion() {
  const container = document.getElementById('question-container');
  const question = testData.multipleChoice[currentQuestion];
  
  if (currentSection === 'multipleChoice') {
    container.innerHTML = `
      <h2>Question ${currentQuestion + 1}</h2>
      <p>${question.question}</p>
      <div class="options">
        ${question.options.map((option, index) => `
          <label class="option ${answers[currentQuestion] === index ? 
            (index === question.answer ? 'correct' : 'incorrect') : ''} 
            ${answers[currentQuestion] !== undefined && index === question.answer ? 'show-correct' : ''}">
            <input type="radio" name="answer" value="${index}" 
              ${answers[currentQuestion] === index ? 'checked' : ''}
              onchange="checkAnswer(${index}, ${question.answer})">
            ${option}
          </label>
        `).join('')}
      </div>
    `;
  } else if (currentSection === 'matching') {
    container.innerHTML = `
      <h2>Matching Type</h2>
      <div class="matching-section">
        <div class="column">
          <h3>Column A</h3>
          <div class="matching-items-container">
            ${testData.matching.columnA.map((item, index) => `
              <div class="matching-item" draggable="true" data-index="${index}">
                ${index + 1}. ${item}
              </div>
            `).join('')}
          </div>
        </div>
        <div class="column">
          <h3>Column B</h3>
          <div class="matching-items-container">
            ${testData.matching.columnB.map((item, index) => `
              <div class="matching-item drop-zone" data-letter="${String.fromCharCode(65 + index)}">
                ${String.fromCharCode(65 + index)}. ${item}
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    setTimeout(() => {
      const draggableItems = document.querySelectorAll('.matching-item[draggable="true"]');
      const dropZones = document.querySelectorAll('.drop-zone');

      draggableItems.forEach(item => {
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragend', handleDragEnd);
      });

      dropZones.forEach(zone => {
        zone.addEventListener('dragover', handleDragOver);
        zone.addEventListener('drop', handleDrop);
      });
    }, 0);
  }

  updateNavigationButtons();
  updateProgressBar();
}

function previousQuestion() {
  saveCurrentAnswer();
  if (currentQuestion > 0) {
    currentQuestion--;
  }
  showQuestion();
}

function nextQuestion() {
  saveCurrentAnswer();
  if (currentQuestion < testData.multipleChoice.length - 1) {
    currentQuestion++;
  } else if (currentSection === 'multipleChoice') {
    currentSection = 'matching';
  }
  showQuestion();
}

function saveCurrentAnswer() {
  if (currentSection === 'multipleChoice') {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (selected) {
      answers[currentQuestion] = parseInt(selected.value);
    }
  }
}

function checkAnswer(selectedIndex, correctIndex) {
  const options = document.querySelectorAll('.option');
  options.forEach((option, index) => {
    if (index === selectedIndex) {
      option.classList.add(selectedIndex === correctIndex ? 'correct' : 'incorrect');
    }
    if (index === correctIndex) {
      option.classList.add('show-correct');
    }
  });
  answers[currentQuestion] = selectedIndex;
}

function updateNavigationButtons() {
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const submitBtn = document.getElementById('submit-btn');

  prevBtn.style.display = currentQuestion === 0 ? 'none' : 'inline';
  
  if (currentSection === 'matching') {
    nextBtn.style.display = 'none';
    submitBtn.style.display = 'inline';
  } else {
    nextBtn.style.display = 'inline';
    submitBtn.style.display = 'none';
  }
}

function updateProgressBar() {
  const progressBar = document.getElementById('progress-bar');
  const progress = ((currentQuestion + 1) / testData.multipleChoice.length) * 100;
  progressBar.style.width = `${progress}%`;
}

function startTimer() {
  const timerElement = document.getElementById('timer');
  setInterval(() => {
    const now = new Date();
    const elapsed = Math.floor((now - startTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    timerElement.textContent = `Time: ${minutes}:${seconds.toString().padStart(2, '0')}`;
  }, 1000);
}

function handleDragStart(e) {
  e.target.classList.add('dragging');
  e.dataTransfer.setData('text/plain', e.target.dataset.index);
}

function handleDragEnd(e) {
  e.target.classList.remove('dragging');
}

function handleDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
}

function handleDrop(e) {
  e.preventDefault();
  const draggedIndex = e.dataTransfer.getData('text/plain');
  const dropZoneLetter = e.target.dataset.letter;

  answers[`matching-${draggedIndex}`] = dropZoneLetter;

  const draggedItem = document.querySelector(`[data-index="${draggedIndex}"]`);
  draggedItem.classList.add('matched');
  e.target.classList.add('has-match');
}

function submitTest() {
  saveCurrentAnswer();

  const endTime = new Date();
  const totalSeconds = Math.floor((endTime - startTime) / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  let correctAnswers = 0;
  let wrongAnswers = [];

  testData.multipleChoice.forEach((question, index) => {
    if (answers[index] === question.answer) {
      correctAnswers++;
    } else {
      wrongAnswers.push({
        questionNumber: index + 1,
        question: question.question,
        yourAnswer: question.options[answers[index]] || 'Not answered',
        correctAnswer: question.options[question.answer]
      });
    }
  });

  const totalQuestions = testData.multipleChoice.length;
  const scorePercentage = (correctAnswers / totalQuestions) * 100;
  const passed = scorePercentage >= 75;

  const resultsHTML = `
    <div class="results-container">
      <h2>Test Results for ${username}</h2>
      <div class="score-summary">
        <p>Time taken: ${minutes} minutes and ${seconds} seconds</p>
        <p>Score: ${correctAnswers} out of ${totalQuestions} (${scorePercentage.toFixed(2)}%)</p>
        <p class="result-status ${passed ? 'passed' : 'failed'}">
          ${passed ? 'PASSED! 🎉' : 'FAILED 😔'}
        </p>
      </div>

      ${wrongAnswers.length > 0 ? `
        <div class="wrong-answers">
          <h3>Questions that need review:</h3>
          ${wrongAnswers.map(wrong => `
            <div class="wrong-item">
              <p><strong>Question ${wrong.questionNumber}:</strong> ${wrong.question}</p>
              <p class="your-answer">Your answer: ${wrong.yourAnswer}</p>
              <p class="correct-answer">Correct answer: ${wrong.correctAnswer}</p>
            </div>
          `).join('')}
        </div>
      ` : '<p>Perfect score! Congratulations! 🎉</p>'}
      <button onclick="location.reload()" class="start-btn" style="margin-top: 20px;">Retake Test</button>
    </div>
  `;

  document.getElementById('test-screen').innerHTML = resultsHTML;
}

function showCuteAlert(title, message) {
  const alertBox = document.createElement('div');
  alertBox.className = 'cute-alert';
  alertBox.innerHTML = `
    <div class="cute-alert-content">
      <div class="cute-alert-robot">
        <div class="robot-head">
          <div class="robot-eye left"></div>
          <div class="robot-eye right"></div>
          <div class="robot-mouth sad"></div>
        </div>
      </div>
      <h3>${title}</h3>
      <p>${message}</p>
      <button onclick="this.parentElement.parentElement.remove()">OK</button>
    </div>
  `;
  document.body.appendChild(alertBox);

  setTimeout(() => {
    alertBox.classList.add('show');
  }, 10);
}
