const questions = [
    {
        section: "Extrovert (E) vs. Introvert (I)",
        questions: [
            {
                text: "In a social gathering, do you feel more energized by:",
                options: [
                    { text: "Interacting with a large group of people", value: "E" },
                    { text: "Having one-on-one conversations", value: "I" }
                ]
            },
            {
                text: "How do you typically recharge after a busy day?",
                options: [
                    { text: "Spending time with friends or engaging in social activities", value: "E" },
                    { text: "Having some alone time to relax and unwind", value: "I" }
                ]
            },
            {
                text: "When facing a challenge, do you prefer:",
                options: [
                    { text: "Brainstorming ideas with others", value: "E" },
                    { text: "Working through it independently", value: "I" }
                ]
            },
            {
                text: "In your free time, do you find yourself:",
                options: [
                    { text: "Seeking out social events and gatherings", value: "E" },
                    { text: "Enjoying quieter activities at home", value: "I" }
                ]
            },
            {
                text: "How do you feel about small talk?",
                options: [
                    { text: "Enjoy it and find it easy to engage in", value: "E" },
                    { text: "Find it somewhat awkward or draining", value: "I" }
                ]
            },
            {
                text: "When making decisions, do you:",
                options: [
                    { text: "Seek input from others", value: "E" },
                    { text: "Rely on your own instincts and feelings", value: "I" }
                ]
            },
            {
                text: "How do you handle new and unfamiliar situations?",
                options: [
                    { text: "Embrace them with enthusiasm", value: "E" },
                    { text: "Approach them with caution", value: "I" }
                ]
            },
            {
                text: "In a work or team setting, do you prefer:",
                options: [
                    { text: "Open office spaces and collaboration", value: "E" },
                    { text: "Individual workspaces", value: "I" }
                ]
            },
            {
                text: "How do you typically respond to being the focal point in a group setting?",
                options: [
                    { text: "Embrace it and feel at ease", value: "E" },
                    { text: "Prefer to avoid being the center of attention", value: "I" }
                ]
            },
            {
                text: "When planning a weekend, do you lean towards:",
                options: [
                    { text: "Social plans with friends", value: "E" },
                    { text: "Quiet time for yourself", value: "I" }
                ]
            },
            {
                text: "When meeting new people, are you more likely to:",
                options: [
                    { text: "Initiate conversations and introductions", value: "E" },
                    { text: "Wait for others to approach you", value: "I" }
                ]
            }
        ]
    },
    {
        section: "Sensing (S) vs. Intuition (N)",
        questions: [
            {
                text: "When faced with a problem, do you prefer to:",
                options: [
                    { text: "Rely on concrete facts and details", value: "S" },
                    { text: "Explore possibilities and potential meanings", value: "N" }
                ]
            },
            {
                text: "How do you approach new information or learning?",
                options: [
                    { text: "Prefer practical, hands-on experiences", value: "S" },
                    { text: "Enjoy exploring theories and concepts", value: "N" }
                ]
            },
            {
                text: "In a conversation, are you more focused on:",
                options: [
                    { text: "Present and current details", value: "S" },
                    { text: "Future possibilities and patterns", value: "N" }
                ]
            },
            {
                text: "When planning a trip, do you prefer to:",
                options: [
                    { text: "Have a detailed itinerary and clear schedule", value: "S" },
                    { text: "Leave room for spontaneous experiences and changes", value: "N" }
                ]
            },
            {
                text: "How do you make decisions?",
                options: [
                    { text: "Based on practical considerations and real-world implications", value: "S" },
                    { text: "Consider potential outcomes and future possibilities", value: "N" }
                ]
            },
            {
                text: "When working on a project, do you tend to focus on:",
                options: [
                    { text: "The specific tasks at hand", value: "S" },
                    { text: "The overall vision and goals", value: "N" }
                ]
            },
            {
                text: "In a group discussion, do you prefer to:",
                options: [
                    { text: "Stick to facts and details", value: "S" },
                    { text: "Contribute ideas and theories", value: "N" }
                ]
            },
            {
                text: "How do you handle unexpected changes or disruptions to your plans?",
                options: [
                    { text: "Prefer stability and may find changes challenging", value: "S" },
                    { text: "Adapt well to changes and enjoy the flexibility", value: "N" }
                ]
            },
            {
                text: "When recalling a past event, do you focus more on:",
                options: [
                    { text: "The specific details and occurrences", value: "S" },
                    { text: "The overall impressions and meanings", value: "N" }
                ]
            },
            {
                text: "When reading a book or watching a movie, do you pay close attention to:",
                options: [
                    { text: "The plot and events", value: "S" },
                    { text: "Deeper meanings and symbolism", value: "N" }
                ]
            },
            {
                text: "How do you prefer to receive information?",
                options: [
                    { text: "Clear and straightforward explanations", value: "S" },
                    { text: "Rich with possibilities and potential connections", value: "N" }
                ]
            },
            {
                text: "When faced with a decision, do you rely more on:",
                options: [
                    { text: "Past experiences and proven methods", value: "S" },
                    { text: "Innovative and creative solutions", value: "N" }
                ]
            },
            {
                text: "In a brainstorming session, do you tend to come up with:",
                options: [
                    { text: "Practical, actionable ideas", value: "S" },
                    { text: "Imaginative, out-of-the-box concepts", value: "N" }
                ]
            },
            {
                text: "How do you approach problem-solving?",
                options: [
                    { text: "Step-by-step and methodical approach", value: "S" },
                    { text: "Approaching with creativity and openness", value: "N" }
                ]
            }
        ]
    },
    {
        section: "Thinking (T) vs. Feeling (F)",
        questions: [
            {
                text: "When making decisions, do you prioritize:",
                options: [
                    { text: "Logical analysis and objective criteria", value: "T" },
                    { text: "Consider the impact on people and relationships", value: "F" }
                ]
            },
            {
                text: "How do you handle criticism or feedback?",
                options: [
                    { text: "Focus on the facts and seek constructive solutions", value: "T" },
                    { text: "Consider the emotional aspects and how it affects relationships", value: "F" }
                ]
            },
            {
                text: "When faced with a problem, do you rely more on:",
                options: [
                    { text: "Your head and reason", value: "T" },
                    { text: "Your heart and empathy", value: "F" }
                ]
            },
            {
                text: "How do you prioritize tasks and responsibilities?",
                options: [
                    { text: "Based on logical importance and efficiency", value: "T" },
                    { text: "Considering the values and impact on people", value: "F" }
                ]
            },
            {
                text: "In a group decision-making process, do you tend to advocate for:",
                options: [
                    { text: "The most logical and rational choice", value: "T" },
                    { text: "The one that aligns with personal values and harmony", value: "F" }
                ]
            },
            {
                text: "When giving feedback, do you focus on:",
                options: [
                    { text: "Providing objective analysis", value: "T" },
                    { text: "Considering the individual's feelings and emotional response", value: "F" }
                ]
            },
            {
                text: "How do you express your opinions in a debate or discussion?",
                options: [
                    { text: "Emphasize facts, evidence, and logical reasoning", value: "T" },
                    { text: "Consider personal values, emotions, and the impact on people", value: "F" }
                ]
            },
            {
                text: "When solving a problem, do you:",
                options: [
                    { text: "Prioritize efficiency and effectiveness, even if it means being blunt", value: "T" },
                    { text: "Consider the feelings of those involved", value: "F" }
                ]
            },
            {
                text: "In a work environment, do you value:",
                options: [
                    { text: "Objective performance metrics and results", value: "T" },
                    { text: "A positive and supportive team culture", value: "F" }
                ]
            },
            {
                text: "How do you approach conflict resolution?",
                options: [
                    { text: "Focus on finding logical solutions and compromises", value: "T" },
                    { text: "Consider the emotional needs and harmony of individuals involved", value: "F" }
                ]
            },
            {
                text: "When planning an event or project, do you prioritize:",
                options: [
                    { text: "The logical steps and timeline", value: "T" },
                    { text: "The emotional atmosphere and team dynamics", value: "F" }
                ]
            },
            {
                text: "How do you cope with stress or pressure?",
                options: [
                    { text: "Analyze the situation logically and strategize a plan", value: "T" },
                    { text: "Seek emotional support and consider the impact on relationships", value: "F" }
                ]
            },
            {
                text: "When making decisions, what holds more weight for you?",
                options: [
                    { text: "Objective data and analysis", value: "T" },
                    { text: "Personal values and the impact on people", value: "F" }
                ]
            },
            {
                text: "When providing feedback, do you prioritize:",
                options: [
                    { text: "Offering constructive criticism and improvement suggestions", value: "T" },
                    { text: "Highlighting positive aspects and encouraging the individual", value: "F" }
                ]
            }
        ]
    },
    {
        section: "Judging (J) vs. Perceiving (P)",
        questions: [
            {
                text: "How do you feel about making plans and sticking to a schedule?",
                options: [
                    { text: "Enjoy making plans and prefer a structured schedule", value: "J" },
                    { text: "Prefer flexibility and spontaneity, dislike strict schedules", value: "P" }
                ]
            },
            {
                text: "When starting a project, do you prefer to:",
                options: [
                    { text: "Have a detailed plan in place", value: "J" },
                    { text: "Explore possibilities and figure it out as you go", value: "P" }
                ]
            },
            {
                text: "How do you approach deadlines?",
                options: [
                    { text: "Work diligently to meet deadlines well in advance", value: "J" },
                    { text: "Tend to work better under pressure and close to the deadline", value: "P" }
                ]
            },
            {
                text: "In a work setting, do you prefer:",
                options: [
                    { text: "A clear and organized workspace", value: "J" },
                    { text: "A more flexible and adaptable environment", value: "P" }
                ]
            },
            {
                text: "When packing for a trip, do you:",
                options: [
                    { text: "Plan and make a checklist in advance", value: "J" },
                    { text: "Pack on the fly, throwing in what feels right", value: "P" }
                ]
            },
            {
                text: "What do you do when your plans suddenly change?",
                options: [
                    { text: "Dislike unexpected changes and prefer to stick to the original plan", value: "J" },
                    { text: "Adapt well to unexpected changes and enjoy the flexibility", value: "P" }
                ]
            },
            {
                text: "When faced with a new opportunity, do you prefer to:",
                options: [
                    { text: "Consider the advantages and disadvantages prior to deciding", value: "J" },
                    { text: "Go with the flow and see where it takes you", value: "P" }
                ]
            },
            {
                text: "How do you approach work tasks?",
                options: [
                    { text: "Like to have a set plan and follow it step by step", value: "J" },
                    { text: "Enjoy being flexible and adapting as the situation evolves", value: "P" }
                ]
            },
            {
                text: "When organizing your day, do you prefer to:",
                options: [
                    { text: "Have a to-do list with specific tasks and deadlines", value: "J" },
                    { text: "Keep it open-ended and see where the day takes you", value: "P" }
                ]
            },
            {
                text: "How do you feel about routine and predictability?",
                options: [
                    { text: "Prefer routine and find comfort in predictability", value: "J" },
                    { text: "Dislike routine and enjoy spontaneity", value: "P" }
                ]
            },
            {
                text: "In a decision-making process, do you:",
                options: [
                    { text: "Like to reach a conclusion and move on", value: "J" },
                    { text: "Prefer to keep options open and gather more information", value: "P" }
                ]
            }
        ]
    }
];


const personalityTypes = {
    ISTJ: "The Inspector: Practical, responsible, and detail-oriented.",
    ISFJ: "The Protector: Caring, loyal, and traditionalist.",
    INFJ: "The Counselor: Insightful, creative, and idealistic.",
    INTJ: "The Mastermind: Strategic, innovative, and independent.",
    ISTP: "The Craftsman: Versatile, practical, and action-oriented.",
    ISFP: "The Composer: Artistic, flexible, and sensitive.",
    INFP: "The Healer: Idealistic, compassionate, and creative.",
    INTP: "The Architect: Logical, innovative, and analytical.",
    ESTP: "The Dynamo: Energetic, practical, and spontaneous.",
    ESFP: "The Performer: Outgoing, spontaneous, and fun-loving.",
    ENFP: "The Champion: Enthusiastic, creative, and people-oriented.",
    ENTP: "The Visionary: Innovative, strategic, and outgoing.",
    ESTJ: "The Supervisor: Organized, responsible, and practical.",
    ESFJ: "The Provider: Caring, social, and organized.",
    ENFJ: "The Teacher: Charismatic, idealistic, and diplomatic.",
    ENTJ: "The Commander: Strategic, charismatic, and confident."
};

let currentSection = 0;
let currentQuestionIndex = 0;
let answers = {};

function displayQuestions() {
    const container = document.getElementById('question-container');
    container.innerHTML = '';

    const section = questions[currentSection];
    const sectionTitle = document.createElement('h2');
    sectionTitle.textContent = section.section;
    container.appendChild(sectionTitle);

    const question = section.questions[currentQuestionIndex];
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';
    questionDiv.innerHTML = `
        <p>${question.text}</p>
        ${question.options.map((option, optionIndex) => `
            <label>
                <input type="radio" name="q${currentSection}_${currentQuestionIndex}" value="${option.value}" required>
                ${option.text}
            </label>
        `).join('')}
    `;
    container.appendChild(questionDiv);

    updateProgressBar();
    updateNavigationButtons();
}

function updateProgressBar() {
    const progress = document.getElementById('progress');
    const totalQuestions = questions.reduce((sum, section) => sum + section.questions.length, 0);
    const answeredQuestions = Object.values(answers).flat().length;
    const percentage = (answeredQuestions / totalQuestions) * 100;
    progress.style.width = `${percentage}%`;
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');

    prevBtn.style.display = (currentSection > 0 || currentQuestionIndex > 0) ? 'inline-block' : 'none';
    nextBtn.style.display = (currentSection < questions.length - 1 || currentQuestionIndex < questions[currentSection].questions.length - 1) ? 'inline-block' : 'none';
    submitBtn.style.display = (currentSection === questions.length - 1 && currentQuestionIndex === questions[currentSection].questions.length - 1) ? 'inline-block' : 'none';
}

function navigatePrevious() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
    } else if (currentSection > 0) {
        currentSection--;
        currentQuestionIndex = questions[currentSection].questions.length - 1;
    }
    displayQuestions();
}

function navigateNext() {
    const selectedOption = document.querySelector(`input[name="q${currentSection}_${currentQuestionIndex}"]:checked`);
    if (!selectedOption) {
        alert('Please select an answer before proceeding.');
        return;
    }

    if (!answers[currentSection]) answers[currentSection] = [];
    answers[currentSection][currentQuestionIndex] = selectedOption.value;

    if (currentQuestionIndex < questions[currentSection].questions.length - 1) {
        currentQuestionIndex++;
    } else if (currentSection < questions.length - 1) {
        currentSection++;
        currentQuestionIndex = 0;
    }

    if (currentSection < questions.length) {
        displayQuestions();
    } else {
        showResults();
    }
}

function showResults() {
    const resultContainer = document.getElementById('result-container');
    const personalityResult = document.getElementById('personality-result');
    const personalityDescription = document.getElementById('personality-description');
    const detailedAnswers = document.getElementById('detailed-answers');

    let personalityType = '';
    Object.values(answers).forEach(section => {
        const counts = section.reduce((acc, val) => {
            acc[val] = (acc[val] || 0) + 1;
            return acc;
        }, {});
        const dominant = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
        personalityType += dominant;
    });

    personalityResult.textContent = personalityType;
    personalityDescription.textContent = personalityTypes[personalityType] || "Personality type description not available.";
    
    resultContainer.style.display = 'block';
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('navigation').style.display = 'none';

    detailedAnswers.innerHTML = '';
    questions.forEach((section, sectionIndex) => {
        detailedAnswers.innerHTML += `<h4>${section.section}</h4>`;
        section.questions.forEach((question, questionIndex) => {
            const answer = answers[sectionIndex][questionIndex];
            const selectedOption = question.options.find(opt => opt.value === answer);
            detailedAnswers.innerHTML += `
                <p><strong>Q: ${question.text}</strong><br>
                A: ${selectedOption.text} (${selectedOption.value})</p>
            `;
        });
    });
}

// Start the quiz
displayQuestions();

// Event listeners for navigation buttons
document.getElementById('prev-btn').addEventListener('click', navigatePrevious);
document.getElementById('next-btn').addEventListener('click', navigateNext);
document.getElementById('submit-btn').addEventListener('click', showResults);