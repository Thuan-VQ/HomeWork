const TestData = {
    "response_code": 0,
    "score" : 0,
    "results": [
      { 
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Who won the 2015 Formula 1 World Championship?",
        "correct_answer": "Lewis Hamilton",
        "incorrect_answers": [
          "Nico Rosberg",
          "Sebastian Vettel",
          "Jenson Button"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "How many points did LeBron James score in his first NBA game?",
        "correct_answer": "25",
        "incorrect_answers": [
          "19",
          "69",
          "41"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "In Baseball, how many times does the ball have to be pitched outside of the strike zone before the batter is walked?",
        "correct_answer": "4",
        "incorrect_answers": [
          "1",
          "2",
          "3"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Who won the 2016 Formula 1 World Driver&#039;s Championship?",
        "correct_answer": "Nico Rosberg",
        "incorrect_answers": [
          "Lewis Hamilton",
          "Max Verstappen",
          "Kimi Raikkonen"
        ]
      },
      {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "The Los Angeles Dodgers were originally from what U.S. city?",
        "correct_answer": "Brooklyn",
        "incorrect_answers": [
          "Las Vegas",
          "Boston",
          "Seattle"
        ]
      }
    ]
}

export function getAllData(){
    return TestData.results;
}



