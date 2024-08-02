document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Respostas corretas
    const answers = {
        question1: 'Remo',
        question2: 'Popeye',
        question3: '37',
        question4: '1981',
        question5: 'Jorge Jesus',
        question6: '8',
        question7: '17 de novembro de 1895',
        question8: 'Zico',
        question9: 'Willian Arão',
        question10: 'Léo Pereira'
    };

    let score = 0;
    
    // Verificar respostas
    Object.keys(answers).forEach(question => {
        const selectedAnswer = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === answers[question]) {
            score++;
        }
    });

    // Exibir resultado
    const totalQuestions = Object.keys(answers).length;
    const resultMessage = `Você acertou ${score} de ${totalQuestions} perguntas.`;
    document.getElementById('result').textContent = resultMessage;
    document.getElementById('result').classList.remove('hidden');
});