var choices = [
  {
    choices: [
      {
        routeBegins: "questionOneWrong",
        content: "Collated Sheet Styles",
        
      },
      {
        store: "blockAffection",
        routeBegins: "questionOneRight",
        content: "Casscading Style Sheets",
      },

      {
        routeBegins: "questionOneWrong",
        content: "Casscading Sheet Styles",
      },
      {
        routeBegins: "questionOneWrong",
        content: "Computed Styling Syntax"
      }
    ]
  },
  {
    choices: [
      {
        store: "blockAffection",
        routeBegins: "questionTwoRight", 
        content: "Client-side image maps"
      },
      {
        routeBegins: "questionTwoWrong", 
        content: "Server-side image maps"
      },
      {
        routeBegins: "questionTwoWrong",
        content: "Both, Server-Side and Client-Side"
      },
      {
        routeBegins: "questionTwoWrong",
        content: "none of the above"
      }
    ]
  },
  {
    choices: [
      {
        routeBegins: "questionThreeWrong",
        content: "File Syntax",
        nextIndex: 0
      },
      {
        routeBegins: "questionThreeWrong",
        content: "File Service",
        nextIndex: 0
      },
      {
        routeBegins: "questionThreeWrong",
        content: "File Store",
        nextIndex: 0
      },
      {
        store: "blockAffection",
        routeBegins: "questionThreeRight",
        content: "File System",
        nextIndex: 0
      }
    ]
  },
];

export default choices;
