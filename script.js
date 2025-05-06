// Test data
const testData = {
  multipleChoice: [
    {
      question: "What is the science of collecting, organizing, analyzing, presenting, and interpreting data called?",
      options: ["Data Science", "Mathematics", "Statistics or Data Management", "Analytical Science"],
      answer: 2
    },
    {
      question: "What are 'data' in the context of statistics?",
      options: ["Only numerical information", "Facts and figures that are collected, analyzed, and summarized", "Only categorical information", "Only information from experiments"],
      answer: 1
    },
    {
      question: "Which period does the pre-finals review cover according to the module?",
      options: ["September 24 - October 18, 2024", "October 24 - November 18, 2024", "November 24 - December 18, 2024", "December 24 - January 18, 2025"],
      answer: 1
    },
    {
      question: "Which branch of statistics deals with the collection, presentation, and description of data?",
      options: ["Inferential Statistics", "Descriptive Statistics", "Sampling Statistics", "Experimental Statistics"],
      answer: 1
    },
    {
      question: "Which branch of statistics interprets values from sample data to draw conclusions and make judgments about a population?",
      options: ["Descriptive Statistics", "Inferential Statistics", "Experimental Statistics", "Observational Statistics"],
      answer: 1
    },
    {
      question: "Which of the following is NOT a measure of central tendency?",
      options: ["Mean", "Median", "Mode", "Range"],
      answer: 3
    },
    {
      question: "Which of the following is a measure of variability?",
      options: ["Mean", "Median", "Standard Deviation", "Mode"],
      answer: 2
    },
    {
      question: "In which field would descriptive statistics be used to analyze patient satisfaction scores across departments?",
      options: ["Marketing Research", "Educational Research", "Survey Demographics", "Healthcare Research"],
      answer: 3
    },
    {
      question: "What are 'data' in the context of statistics?",
      options: ["Only numerical information", "Facts and figures that are collected, analyzed, and summarized", "Only categorical information", "Only information from experiments"],
      answer: 1
    },
    {
      question: "Which period does the pre-finals review cover according to the module?",
      options: ["September 24 - October 18, 2024", "October 24 - November 18, 2024", "November 24 - December 18, 2024", "December 24 - January 18, 2025"],
      answer: 1
    },
    {
      question: "Which branch of statistics deals with the collection, presentation, and description of data?",
      options: ["Inferential Statistics", "Descriptive Statistics", "Sampling Statistics", "Experimental Statistics"],
      answer: 1
    },
    {
      question: "Which branch of statistics interprets values from sample data to draw conclusions and make judgments about a population?",
      options: ["Descriptive Statistics", "Inferential Statistics", "Experimental Statistics", "Observational Statistics"],
      answer: 1
    },
    {
      question: "Which of the following is NOT a measure of central tendency?",
      options: ["Mean", "Median", "Mode", "Range"],
      answer: 3
    },
    {
      question: "Which of the following is a measure of variability?",
      options: ["Mean", "Median", "Standard Deviation", "Mode"],
      answer: 2
    },
    {
      question: "What are 'data' in the context of statistics?",
      options: ["Only numerical information", "Facts and figures that are collected, analyzed, and summarized", "Only categorical information", "Only information from experiments"],
      answer: 1
    },
    {
      question: "Which period does the pre-finals review cover according to the module?",
      options: ["September 24 - October 18, 2024", "October 24 - November 18, 2024", "November 24 - December 18, 2024", "December 24 - January 18, 2025"],
      answer: 1
    },
    {
      question: "Which branch of statistics deals with the collection, presentation, and description of data?",
      options: ["Inferential Statistics", "Descriptive Statistics", "Sampling Statistics", "Experimental Statistics"],
      answer: 1
    },
    {
      question: "Which branch of statistics interprets values from sample data to draw conclusions and make judgments about a population?",
      options: ["Descriptive Statistics", "Inferential Statistics", "Experimental Statistics", "Observational Statistics"],
      answer: 1
    },
    {
      question: "Which statistical method reveals that each additional study hour raises exam scores by 2.5 points with strong confidence (95%)?",
      options: ["ANOVA", "Chi-Square Test", "Regression Analysis", "t-Test"],
      answer: 2
    },
    {
      question: "What statistical test would be appropriate to investigate the effects of three different diets on weight loss?",
      options: ["Chi-Square Test", "Regression Analysis", "ANOVA (Analysis of Variance)", "z-Test"],
      answer: 2
    },
    {
      question: "Which test was used to analyze the relationship between smoking status and lung cancer incidence in the module example?",
      options: ["ANOVA", "Chi-Square Test", "Regression Analysis", "t-Test"],
      answer: 1
    },
    {
      question: "What type of data measurement scale has order but no true zero point?",
      options: ["Nominal", "Ordinal", "Interval", "Ratio"],
      answer: 2
    },
    {
      question: "Which of the following is an example of nominal data?",
      options: ["Rankings of students based on GPA", "Temperature measured in Celsius", "Hair color categories", "Height measured in centimeters"],
      answer: 2
    },
    {
      question: "What type of data are rankings of students based on GPA?",
      options: ["Nominal", "Ordinal", "Interval", "Ratio"],
      answer: 1
    },
    {
      question: "Which of the following is an example of ratio data?",
      options: ["Temperature in Celsius", "Likert scale ratings (1-5)", "Weight in kilograms", "Student ID numbers"],
      answer: 2
    },
    {
      question: "Which level of measurement has categorical data with ranking?",
      options: ["Nominal", "Ordinal", "Interval", "Ratio"],
      answer: 1
    },
    {
      question: "When analyzing student performance across districts, which type of statistics would be most appropriate?",
      options: ["Inferential Statistics only", "Descriptive Statistics only", "Both Descriptive and Inferential Statistics", "Neither Descriptive nor Inferential Statistics"],
      answer: 2
    },
    {
      question: "What method in inferential statistics tests an assumption regarding a population parameter?",
      options: ["Regression Analysis", "Hypothesis Testing", "Descriptive Analysis", "Visual Representation"],
      answer: 1
    },
    {
      question: "Which sampling method divides the population into subgroups before sampling?",
      options: ["Simple Random Sampling", "Systematic Sampling", "Stratified Sampling", "Convenience Sampling"],
      answer: 2
    },
    {
      question: "What is the primary purpose of descriptive statistics?",
      options: ["To make predictions", "To test hypotheses", "To summarize and describe data", "To draw conclusions about populations"],
      answer: 2
    },
    {
      question: "Which level of measurement has a true zero point?",
      options: ["Nominal", "Ordinal", "Interval", "Ratio"],
      answer: 3
    },
    {
      question: "Which test was used to analyze the relationship between smoking status and lung cancer incidence in the module example?",
      options: ["ANOVA", "Chi-Square Test", "Regression Analysis", "t-Test"],
      answer: 1
    },
    // Adding all 70 multiple choice questions from the test
    // First adding questions 1-13 from the test document
    {
      question: "What are 'data' in the context of statistics?",
      options: ["Only numerical information", "Facts and figures that are collected, analyzed, and summarized", "Only categorical information", "Only information from experiments"],
      answer: 1
    },
    {
      question: "Which period does the pre-finals review cover according to the module?",
      options: ["September 24 - October 18, 2024", "October 24 - November 18, 2024", "November 24 - December 18, 2024", "December 24 - January 18, 2025"],
      answer: 1
    },
    {
      question: "Which branch of statistics deals with the collection, presentation, and description of data?",
      options: ["Inferential Statistics", "Descriptive Statistics", "Sampling Statistics", "Experimental Statistics"],
      answer: 1
    },
    // Adding questions 5-70 from the test document
    {
      question: "Which branch of statistics interprets values from sample data to draw conclusions and make judgments about a population?",
      options: ["Descriptive Statistics", "Inferential Statistics", "Experimental Statistics", "Observational Statistics"],
      answer: 1
    },
    {
      question: "Which of the following is NOT a measure of central tendency?",
      options: ["Mean", "Median", "Mode", "Range"],
      answer: 3
    },
    {
      question: "Which of the following is a measure of variability?",
      options: ["Mean", "Median", "Standard Deviation", "Mode"],
      answer: 2
    },
    {
      question: "In which field would descriptive statistics be used to analyze patient satisfaction scores across departments?",
      options: ["Marketing Research", "Educational Research", "Survey Demographics", "Healthcare Research"],
      answer: 3
    },
    {
      question: "When analyzing student performance across districts, which type of statistics would be most appropriate?",
      options: ["Inferential Statistics only", "Descriptive Statistics only", "Both Descriptive and Inferential Statistics", "Neither Descriptive nor Inferential Statistics"],
      answer: 2
    },
    {
      question: "What method in inferential statistics tests an assumption regarding a population parameter?",
      options: ["Regression Analysis", "Hypothesis Testing", "Descriptive Analysis", "Visual Representation"],
      answer: 1
    },
    {
      question: "What is the most appropriate measure of central tendency for ordinal data?",
      options: ["Mean", "Median", "Mode", "Range"],
      answer: 1
    },
    {
      question: "Which sampling method divides the population into subgroups before sampling?",
      options: ["Simple Random Sampling", "Systematic Sampling", "Stratified Sampling", "Convenience Sampling"],
      answer: 2
    },
    {
      question: "What is the primary purpose of descriptive statistics?",
      options: ["To make predictions", "To test hypotheses", "To summarize and describe data", "To draw conclusions about populations"],
      answer: 2
    },
    {
      question: "Which level of measurement has a true zero point?",
      options: ["Nominal", "Ordinal", "Interval", "Ratio"],
      answer: 3
    },
    {
      question: "What type of graph is most appropriate for displaying categorical data?",
      options: ["Scatter Plot", "Bar Chart", "Line Graph", "Box Plot"],
      answer: 1
    },
    {
      question: "Which measure of central tendency is most affected by extreme values?",
      options: ["Mean", "Median", "Mode", "Range"],
      answer: 0
    },
    {
      question: "What is the term for a value that appears most frequently in a dataset?",
      options: ["Mean", "Median", "Mode", "Range"],
      answer: 2
    },
    {
      question: "In a normal distribution, what percentage of data falls within one standard deviation of the mean?",
      options: ["50%", "68%", "95%", "99%"],
      answer: 1
    },
    {
      question: "What is the purpose of sampling in statistics?",
      options: ["To make data collection easier", "To save time and resources while maintaining representativeness", "To avoid studying the entire population", "To complicate the research process"],
      answer: 1
    },
    {
      question: "Which measure of dispersion is most commonly used?",
      options: ["Range", "Variance", "Standard Deviation", "Interquartile Range"],
      answer: 2
    },
    {
      question: "What does the symbol 'H₀' represent in hypothesis testing?",
      options: ["Alternative Hypothesis", "Null Hypothesis", "Test Statistic", "Critical Value"],
      answer: 1
    },
    {
      question: "What does the symbol 'H₁' represent in hypothesis testing?",
      options: ["Alternative Hypothesis", "Null Hypothesis", "Test Statistic", "Critical Value"],
      answer: 0
    },
    {
      question: "When we say 'There is a significant relationship between variables' in hypothesis testing, we are referring to:",
      options: ["H₀ (Null Hypothesis)", "H₁ (Alternative Hypothesis)", "Neither hypothesis", "Both hypotheses"],
      answer: 1
    },
    {
      question: "In Chi-Square analysis, what does the symbol 'O' represent in the formula?",
      options: ["Observed frequency", "Expected frequency", "Outlier value", "Statistical error"],
      answer: 0
    },
    {
      question: "In Chi-Square analysis, what does the symbol 'E' represent in the formula?",
      options: ["Error term", "Expected frequency", "Experimental value", "External factor"],
      answer: 1
    },
    {
      question: "Which of the following is the correct formula for calculating Chi-Square value?",
      options: ["χ² = Σ(O + E)/E", "χ² = Σ(O - E)/E", "χ² = Σ[(O - E)²/E]", "χ² = Σ(O × E)/E"],
      answer: 2
    },
    {
      question: "Which statistical test would you use to compare means between two independent groups?",
      options: ["Chi-square test", "T-test", "ANOVA", "Correlation"],
      answer: 1
    },
    {
      question: "What is the main purpose of a confidence interval?",
      options: ["To estimate population parameters", "To test hypotheses", "To measure correlation", "To calculate probability"],
      answer: 0
    },
    {
      question: "What does a p-value of 0.05 indicate?",
      options: ["5% chance of Type I error", "95% confidence level", "50% probability", "No significance"],
      answer: 0
    },
    {
      question: "Which type of data is categorical?",
      options: ["Height", "Weight", "Eye color", "Temperature"],
      answer: 2
    },
    {
      question: "What is the purpose of standardization in statistics?",
      options: ["To make data collection easier", "To compare different datasets", "To eliminate outliers", "To simplify calculations"],
      answer: 1
    },
    {
      question: "What is a Type I error?",
      options: ["Rejecting a true null hypothesis", "Failing to reject a false null hypothesis", "Accepting the alternative hypothesis", "Making no decision"],
      answer: 0
    },
    {
      question: "What is the central limit theorem?",
      options: ["A law about normal distributions", "A theorem about sample means", "A rule about probability", "A theory about correlation"],
      answer: 1
    },
    {
      question: "Which correlation coefficient indicates a perfect positive correlation?",
      options: ["-1", "0", "+1", "0.5"],
      answer: 2
    },
    {
      question: "Which data collection method involves gathering information from all units in the population?",
      options: ["Experiment", "Simulation", "Census", "Survey"],
      answer: 2
    },
    {
      question: "A method in which one or more variables are consciously manipulated and the outcome or effect of the manipulation on other variables is observed is called:",
      options: ["Observation", "Experimentation", "Simulation", "Survey"],
      answer: 1
    },
    {
      question: "Which of the following is a way to gather data by watching people, events, or physical characteristics in their natural settings?",
      options: ["Observation", "Experimentation", "Interview", "Survey"],
      answer: 0
    },
    {
      question: "What technique reproduces actual events and processes under test conditions?",
      options: ["Observation", "Experimentation", "Simulation", "Survey"],
      answer: 2
    },
    {
      question: "Which data collection method involves interviewing the same group of people on two or more occasions?",
      options: ["Survey", "Panel Method/Focus Group", "Census", "Observation"],
      answer: 1
    },
    {
      question: "Which of the following interview types follows a rigid procedure with a set of predetermined questions?",
      options: ["Structured Interview", "Semi-structured Interview", "Unstructured Interview", "Panel Interview"],
      answer: 0
    },
    {
      question: "In the context of statistical research, what is a 'sample'?",
      options: ["A small portion taken to represent the whole", "The entire group being studied", "A statistical test", "A survey instrument"],
      answer: 0
    },
    {
      question: "Which sampling method is based on the researcher's judgment to select a sample which they believe will provide the data they need?",
      options: ["Convenience Sampling", "Purposive Sampling", "Quota Sampling", "Snowball Sampling"],
      answer: 1
    },
    {
      question: "In which type of sampling does each member of the target population have an equal chance of being selected?",
      options: ["Non-probability Sampling", "Probability Sampling", "Convenience Sampling", "Purposive Sampling"],
      answer: 1
    },
    {
      question: "A process of selecting nth element in the population until the desired number of subjects or respondents is attained describes which sampling method?",
      options: ["Simple Random Sampling", "Systematic Sampling", "Stratified Sampling", "Cluster Sampling"],
      answer: 1
    },
    {
      question: "Which sampling method involves subdividing the population into subgroups called strata and drawing members at random from each subgroup?",
      options: ["Simple Random Sampling", "Systematic Sampling", "Stratified Sampling", "Cluster Sampling"],
      answer: 2
    },
    {
      question: "If a human resource director interviews qualified applicants for a supervisory position, which non-probability sampling method is being used?",
      options: ["Convenience Sampling", "Purposive Sampling", "Quota Sampling", "Snowball Sampling"],
      answer: 1
    },
    {
      question: "In which type of sampling method would a researcher interview victims of human trafficking in the Middle East?",
      options: ["Simple Random Sampling", "Systematic Sampling", "Snowball Sampling", "Cluster Sampling"],
      answer: 2
    },
    {
      question: "If the names of 25 employees are chosen out of a hat from a company of 250 employees, which probability sampling method is being used?",
      options: ["Simple Random Sampling", "Systematic Sampling", "Stratified Sampling", "Cluster Sampling"],
      answer: 0
    },
    {
      question: "To survey students about on-campus housing quality, 20 respondents from each dorm are selected. This is an example of:",
      options: ["Simple Random Sampling", "Systematic Sampling", "Stratified Sampling", "Cluster Sampling"],
      answer: 2
    },
    {
      question: "When selecting every 20th student in a class until 30 responses are collected, which sampling method is being used?",
      options: ["Simple Random Sampling", "Systematic Sampling", "Stratified Sampling", "Cluster Sampling"],
      answer: 1
    },
    {
      question: "Which sampling method collects information from an assigned number of individuals from several sample units fulfilling certain prescribed criteria?",
      options: ["Convenience Sampling", "Purposive Sampling", "Quota Sampling", "Snowball Sampling"],
      answer: 2
    },
    {
      question: "Which is NOT a characteristic of a well-designed survey?",
      options: ["It must be representative of the population", "It incorporates chance", "Questions must favor one outcome", "Errors and biases should be controlled"],
      answer: 2
    },
    {
      question: "What is a 'control group' in an experiment?",
      options: ["The group that receives no treatment", "The group that receives all treatments", "The group that conducts the experiment", "The group that analyzes the data"],
      answer: 0
    },
    {
      question: "What is 'random assignment' in an experiment?",
      options: ["Selecting participants randomly", "Allocating treatments to units randomly", "Analyzing data in random order", "Collecting data at random times"],
      answer: 1
    },
    {
      question: "The arranging of experimental units in groups that are similar to one another is called:",
      options: ["Randomization", "Blocking", "Replication", "Stratification"],
      answer: 1
    },
    {
      question: "What is a 'placebo' in an experiment?",
      options: ["A real treatment with minimal effects", "An imitation treatment without active ingredients", "A highly effective treatment", "A treatment with known side effects"],
      answer: 1
    },
    {
      question: "Which chi-square test is used to determine the difference between observed and expected frequencies of one variable?",
      options: ["Chi-Square Test of Independence", "Chi-Square Goodness of Fit Test", "Chi-Square Correlation Test", "Chi-Square ANOVA Test"],
      answer: 1
    },
    {
      question: "Which chi-square test is used to determine the relationship of two or more categorical variables?",
      options: ["Chi-Square Test of Independence", "Chi-Square Goodness of Fit Test", "Chi-Square Correlation Test", "Chi-Square ANOVA Test"],
      answer: 0
    },
    {
      question: "How is the degrees of freedom (df) calculated for a Chi-Square Goodness of Fit Test?",
      options: ["df = sample size - 1", "df = (number of rows - 1) × (number of columns - 1)", "df = number of categories - 1", "df = total observations - 2"],
      answer: 2
    },
    {
      question: "How is the degrees of freedom (df) calculated for a Chi-Square Test of Independence?",
      options: ["df = sample size - 1", "df = (number of rows - 1) × (number of columns - 1)", "df = number of categories - 1", "df = total observations - 2"],
      answer: 1
    }
  ],
  computational: [
    {
      question: `A researcher surveyed 200 college students about their preferred study location. Previous research suggests that students typically prefer studying in the following locations: Library (40%), Home (30%), Coffee Shop (20%), and Other (10%). The observed frequencies from the survey were:

      Location | Observed Frequency
      Library | 70
      Home | 65
      Coffee Shop | 45
      Other | 20

      At α = 0.05, determine if there is a significant difference between the observed frequencies and the expected frequencies based on previous research.`,
      guide: `
        Chi-Square Goodness of Fit Test Guide:
        1. Calculate expected frequencies (E):
           E = (total sample size × expected proportion)
        2. Use formula: χ² = Σ[(O - E)²/E]
        3. Find degrees of freedom: df = number of categories - 1
        4. Compare χ² value with critical value at α = 0.05
        
        Step by step:
        1. Expected frequencies:
           Library: 200 × 0.40 = 80
           Home: 200 × 0.30 = 60
           Coffee Shop: 200 × 0.20 = 40
           Other: 200 × 0.10 = 20
        
        2. χ² = (70-80)²/80 + (65-60)²/60 + (45-40)²/40 + (20-20)²/20
        `,
      answerBox: true
    },
    {
      question: `A researcher wants to determine if there is a relationship between gender and choice of college major. The following data was collected:

      | | Science | Humanities | Business |
      |--------|---------|-----------|----------|
      | Male | 45 | 25 | 30 |
      | Female | 35 | 40 | 25 |

      At α = 0.05, test whether gender and choice of college major are independent.`,
      answerBox: true
    }
  ],
  matching: {
    columnA: [
      "Interval data",
      "Ratio data",
      "Descriptive statistics",
      "Inferential statistics",
      "H₀",
      "H₁",
      "Simple Random Sampling",
      "Stratified Sampling",
      "Regression Analysis",
      "ANOVA"
    ],
    columnB: [
      "Temperature in Celsius",
      "Weight in kilograms",
      "Mean, median, mode",
      "Null hypothesis",
      "Alternative hypothesis",
      "Names chosen out of a hat",
      "Subdividing population into subgroups",
      "Prediction method to express relationships",
      "Analysis of Variance",
      "Hypothesis testing"
    ]
  }
};

let currentSection = 'welcome';
let currentQuestion = 0;
let answers = {};
let username = '';
let startTime = null;

function switchSection(section, questionNum) {
  // Keep function but make it empty as it might be referenced elsewhere
}

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
  let content = '';

  if (currentSection === 'multipleChoice') {
    const question = testData.multipleChoice[currentQuestion];
    content = `
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
  } else if (currentSection === 'computational') {
    const problem = testData.computational[currentQuestion];
    content = `
      <h2>Computational Problem ${currentQuestion + 1}</h2>
      <div class="computational-problem">
        <p><em>Note: This computational section is optional and can be skipped.</em></p>
        <p>${problem.question}</p>
        <textarea class="answer-box" rows="5">${answers[currentQuestion] || ''}</textarea>
      </div>
    `;
  } else if (currentSection === 'matching') {
    content = `
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

    // Add drag and drop event listeners after content is added
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

  container.innerHTML = content;
  updateNavigationButtons();
}

function previousQuestion() {
  saveCurrentAnswer();
  if (currentQuestion > 0) {
    currentQuestion--;
  } else if (currentSection === 'computational') {
    currentSection = 'multipleChoice';
    currentQuestion = testData.multipleChoice.length - 1;
  } else if (currentSection === 'matching') {
    currentSection = 'computational';
    currentQuestion = testData.computational.length - 1;
  }
  showQuestion();
}

function nextQuestion() {
  if (currentSection === 'multipleChoice') {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (!selected) {
      showCuteAlert('Oops! 🤖', 'Please select an answer before proceeding.');
      return;
    }
  }
  
  saveCurrentAnswer();
  if (currentSection === 'multipleChoice' && currentQuestion < testData.multipleChoice.length - 1) {
    currentQuestion++;
  } else if (currentSection === 'multipleChoice') {
    currentSection = 'computational';
    currentQuestion = 0;
  } else if (currentSection === 'computational' && currentQuestion < testData.computational.length - 1) {
    currentQuestion++;
  } else if (currentSection === 'computational') {
    currentSection = 'matching';
    currentQuestion = 0;
  }
  showQuestion();
  updateProgressBar();
}

function updateProgressBar() {
  const progressBar = document.getElementById('progress-bar');
  const totalQuestions = testData.multipleChoice.length + testData.computational.length + 1; // +1 for matching
  let currentProgress = currentQuestion;
  if (currentSection === 'computational') {
    currentProgress += testData.multipleChoice.length;
  } else if (currentSection === 'matching') {
    currentProgress += testData.multipleChoice.length + testData.computational.length;
  }
  const progress = (currentProgress / totalQuestions) * 100;
  progressBar.style.width = `${progress}%`;
}

function saveCurrentAnswer() {
  if (currentSection === 'multipleChoice') {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (selected) {
      answers[currentQuestion] = parseInt(selected.value);
    }
  } else if (currentSection === 'computational') {
    const answerBox = document.querySelector('.answer-box');
    if (answerBox) {
      answers[currentQuestion] = answerBox.value;
    }
  } else if (currentSection === 'matching') {
    document.querySelectorAll('.matching-answer').forEach(input => {
      const index = input.dataset.index;
      answers[`matching-${index}`] = input.value.toUpperCase();
    });
  }
}

function updateNavigationButtons() {
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const submitBtn = document.getElementById('submit-btn');

  prevBtn.style.display = (currentSection === 'multipleChoice' && currentQuestion === 0) ? 'none' : 'inline';

  if (currentSection === 'matching') {
    nextBtn.style.display = 'none';
    submitBtn.style.display = 'inline';
  } else {
    nextBtn.style.display = 'inline';
    submitBtn.style.display = 'none';
  }
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

// Drag and Drop handlers
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

  // Save the match in answers
  answers[`matching-${draggedIndex}`] = dropZoneLetter;

  // Visual feedback
  const draggedItem = document.querySelector(`[data-index="${draggedIndex}"]`);
  draggedItem.classList.add('matched');
  e.target.classList.add('has-match');
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

function submitTest() {
  saveCurrentAnswer();

  // Calculate total time
  const endTime = new Date();
  const totalSeconds = Math.floor((endTime - startTime) / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  // Calculate score for multiple choice
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
  const passed = scorePercentage >= 75; // 75% passing score

  // Create results HTML
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

  // Clear the test screen and show results
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