// script.js

// References to container
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const container = document.querySelector('.container');

// Apology Message to display at the end
const apologyMessage = `
    <h2>"My love, I just want to take a moment to tell you how truly sorry I am for everything that happened last night. I know I hurt you, and it pains me to think that I made you feel anything less than loved. You mean the world to me, and nothing is more important than your happiness. I never want to be the cause of your sadness, and I deeply regret the way things went. Please know that my love for you is constant and unwavering. I’m not perfect, but I promise to always do my best to make things right between us. I will always cherish you, and I’ll work harder to communicate better and listen more. I never want you to feel like you’re alone in this. We’re a team, and I’ll stand by you, no matter what. You are my heart, my everything, and I never want to lose the warmth and joy that your love brings into my life. I love you endlessly, and I’m so sorry for causing you pain. Please forgive me, and let’s move forward together, stronger than before."

 💖</h2>
    <p>Will you forgive me? I promise to be better, because you deserve the best of me. 🌹</p>
    <button id="finalButton">I Forgive You 💕</button>
`;

// Updated Questions Array without GIFs
const questions = [
    { 
        question: "Do you love me baby ? 💖", 
        cheerUpMessage: "You know I love you more than words can say! 🥰",
        yesMessage: "Aww, I’m so happy you do! You make my heart melt every day. ❤️"
    },
    { 
        question: "Are you okay, my love? 🥰", 
        cheerUpMessage: "Oh, don’t worry, my love! I’m here for you always. 💕",
        yesMessage: "I’m glad you’re okay! You deserve all the happiness in the world. 😊"
    },
    { 
        question: "Did you smile today? 😊", 
        cheerUpMessage: "Let me see that beautiful smile! You light up my world! 🌞",
        yesMessage: "Your smile makes my day brighter! Keep smiling, my love. 🌸"
    },
    { 
        question: "Is there anything on your mind? 💭", 
        cheerUpMessage: "I’m always here to listen if you want to share. 🤗",
        yesMessage: "I'm always here for you, love. Whatever it is, we'll face it together. 💪💖"
    },
    { 
        question: "Have you had enough rest lately? 🌙", 
        cheerUpMessage: "Sorry Baby about Lastnight but You deserve all the rest in the world. Relax and feel my love! 😴💖",
        yesMessage: "You deserve all the peace and rest. Take care of yourself, my love. 💤"
    },
    { 
        question: "Would you like to plan a special day together? 🌸", 
        cheerUpMessage: "Let’s plan a cozy day when you’re ready. Just you and me! 💕",
        yesMessage: "A special day with you sounds perfect. Let’s make it unforgettable! 🌟"
    },
    { 
        question: "Do you know how amazing you are? 💖", 
        cheerUpMessage: "You’re truly amazing, even if you don’t feel it today! 💫",
        yesMessage: "You are beyond amazing, and I’m so lucky to have you mwaa! 💖"
    }
];

let currentQuestion = 0;

// Function to display each question with "Yes" and "No" options
function askNextQuestion() {
    if (currentQuestion < questions.length) {
        const { question, cheerUpMessage, yesMessage } = questions[currentQuestion];
        container.innerHTML = `
            <h2>${question}</h2>
            <button id="yesOption">Yes 😊</button>
            <button id="noOption">No 🙁</button>
        `;

        // Event listener for "Yes" button
        document.getElementById('yesOption').addEventListener('click', () => {
            container.innerHTML = `
                <h2>${yesMessage}</h2>
                <button id="continueButton">Continue ❤️</button>
            `;
            document.getElementById('continueButton').addEventListener('click', () => {
                currentQuestion++;
                askNextQuestion();
            });
        });

        // Event listener for "No" button with animation for moving the button
        document.getElementById('noOption').addEventListener('click', () => {
            if (question === "Do you love me baby ? 💖") {
                moveButton();
            } else {
                container.innerHTML = `
                    <h2>${cheerUpMessage}</h2>
                    <button id="continueButton">Continue ❤️</button>
                `;
                document.getElementById('continueButton').addEventListener('click', () => {
                    currentQuestion++;
                    askNextQuestion();
                });
            }
        });
    } else {
        // Final message before the apology
        container.innerHTML = `
            <h2>You’re my everything, and I’ll always be here for you. Love you forever, I love you so much baby mwaa ! 💖</h2>
            <button id="showApologyButton">I have something more to say...</button>
        `;
        
        // Display apology message after final button is clicked
        document.getElementById('showApologyButton').addEventListener('click', () => {
            showApologyMessage();
        });
    }
}

// Function to make the "No" button move around the screen
function moveButton() {
    const button = document.getElementById('noOption');
    const randomX = Math.floor(Math.random() * 80) + 10; // Random position between 10% and 90% of screen width
    const randomY = Math.floor(Math.random() * 80) + 10; // Random position between 10% and 90% of screen height

    button.style.position = 'absolute';
    button.style.left = `${randomX}%`;
    button.style.top = `${randomY}%`;
}

// Function to display the apology message
function showApologyMessage() {
    container.innerHTML = apologyMessage;
    document.getElementById('finalButton').addEventListener('click', () => {
        container.innerHTML = `<h2>Thank you, my love! You mean the world to me. 💖</h2>`;
    });
}

// Initial display of the first question
askNextQuestion();
