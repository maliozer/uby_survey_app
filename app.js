Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    title: "SURVEYS OF CONSUMERS",
    //"progressBarType": "buttons",
    showProgressBar: "bottom",

    firstPageIsStarted: true,
    startSurveyText: "Start Survey",
    pages: [

        {
            questions: [

                {
                    type: "html",
                    html: "Yeditepe Üniversitesi UBY<br/>"
                },

              {
              "type": "boolean",
              "name": "bool",
              "title": "Please answer the question",
              "label": "Do you accept the aggrement ?",
              "isRequired": true
              }
            ]
        },
        {
          questions: [
            {
              type: "html",
              html: "<b><p>SECTION A<p> <p></b>"
            },
            {
              type: "radiogroup",
              name: "A2",
              title: "We are interested in how people are getting along financially these days. Would you say that you (and your family living there) are better off or worse off financially than you were a year ago?",
              colCount: 4,
              choices: [
                "1. BETTER NOW",
                "3. SAME",
                "5. WORSE",
                "8. DON’T KNOW"
              ]
            },
            {
              type: "comment",
              name: "A2a",
              title: "Why do you say so? (Are there any other reasons?)",
              isRequired: false

            },
            {
              type: "radiogroup",
              name: "Ab2",
              title: "Now thinking back 5 years, would you say that you (and your family living there) are better off or worse off financially now than you were 5 years ago?",
              colCount: 4,
              choices: [
                "1. BETTER NOW",
                "3. SAME",
                "5. WORSE",
                "8. DON’T KNOW"
              ]
            },
            {
              type: "radiogroup",
              name: "A3",
              title: "Now looking ahead--do you think that a year from now you (and your family living there) will be better off financially, or worse off, or just about the same as now?",
              colCount: 4,
              choices: [
                "1. WILL BE BETTER OFF",
                "3. SAME",
                "5. WILL BE WORSE OFF",
                "8. DON’T KNOW"
              ]
            },
            {
              type: "radiogroup",
              name: "A3b",
              title: "And 5 years from now, do you expect that you (and your family living there) will be better off financially, worse off, or just about the same as now?",
              colCount: 4,
              choices: [
                "1. WILL BE BETTER OFF",
                "3. SAME",
                "5. WILL BE WORSE OFF",
                "8. DON’T KNOW"
              ]
            }

            ]
          },
        {
            questions: [
                {
                    type: "checkbox",
                    name: "civilwar",
                    colCount: 4,
                    title: "And 5 years from now, do you expect that you (and your family living there) will be better off financially, worse off, or just about the same as now?",
                    choices: [
                      "1. BETTER NOW",
                      "3. SAME",
                      "5. WORSE",
                      "8. DON’T KNOW"
                    ]
                },
                {
                  type: "text",
                  name: "autocomplete1",
                  title: "Please select your car",
                  "choices": [
                    "None",
                    "Ford",
                    "Vauxhall",
                    "Volkswagen",
                    "Nissan",
                    "Audi",
                    "Mercedes-Benz",
                    "BMW",
                    "Peugeot",
                    "Toyota",
                    "Citroen"
                ]
              }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "libertyordeath",
                    title: "Who said 'Give me liberty or give me death?'",
                    choicesOrder: "random",
                    choices: [
                        "John Hancock", "James Madison", "Patrick Henry", "Samuel Adams"
                    ],
                    correctAnswer: "Patrick Henry"
                }

            ]
        }, {
            maxTimeToFinish: 15,
            questions: [
                {
                    type: "radiogroup",
                    name: "magnacarta",
                    title: "What is the Magna Carta?",
                    choicesOrder: "random",
                    choices: [
                        "The foundation of the British parliamentary system", "The Great Seal of the monarchs of England", "The French Declaration of the Rights of Man", "The charter signed by the Pilgrims on the Mayflower"
                    ],
                    correctAnswer: "The foundation of the British parliamentary system"
                }
            ]
        }
    ],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
    });

$("#surveyElement").Survey({model: survey});
