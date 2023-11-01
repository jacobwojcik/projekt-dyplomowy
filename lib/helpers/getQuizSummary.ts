export const quizSummary = (score: number) => {
    if (score < 4) {
      return 'Musisz się jeszcze trochę nauczyć. Spróbuj ponownie!';
    }
  
    if (score < 8) {
      return 'Dobrze ci poszło, ale możesz zrobić to lepiej!';
    }
  
    if (score < 10) {
      return 'Świetnie! Jesteś blisko perfekcji!';
    }
  
    return 'Brawo! Świetnie Ci poszło! ';
  };