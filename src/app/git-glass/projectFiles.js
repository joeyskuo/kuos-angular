export default {
  seleniumJava:   {
  "owner": "joeyskuo",
    "repo": "selenium-java",
    "ref": "master",
    "embed": [
      {
        "type": "xml",
        "label": "testng-amazon.xml",
        "path": "testng-amazon.xml"
      },
      {
        "type": "java",
        "label": "BannerToCartTest.java",
        "path": "src/test/java/com/kuos/tests/BannerToCartTest.java"
      },
      {
        "type": "java",
        "label": "HomePage.java",
        "path": "src/test/java/com/kuos/pageobjects/HomePage.java"
      },
      {
        "type": "xml",
        "label": "pom.xml",
        "path": "pom.xml"
      }
    ]
  },
  surveyClient:  {
  "owner": "joeyskuo",
    "repo": "survey-stork-server",
    "ref": "master",
    "embed": [
      {
        "type": "js",
        "label": "index.js",
        "path": "client/src/index.js"
      },
      {
        "type": "js",
        "label": "App.js",
        "path": "client/src/components/App.js"
      },
      {
        "type": "js",
        "label": "SurveyForm.js",
        "path": "client/src/components/surveys/SurveyForm.js"
      },
      {
        "type": "js",
        "label": "Reducers",
        "path": "client/src/reducers/index.js"
      },
      {
        "type": "js",
        "label": "Actions",
        "path": "client/src/actions/index.js"
      }
    ]
  }
}
