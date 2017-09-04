export default {
  seleniumJava:
  {
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
  surveyStorkClient:
  {
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
  },
  surveyStorkServer:
  {
    "owner": "joeyskuo",
    "repo": "survey-stork-server",
    "ref": "master",
    "embed": [
      {
        "type": "js",
        "label": "index.js",
        "path": "index.js"
      },
      {
        "type": "js",
        "label": "Survey.js",
        "path": "models/Survey.js"
      },
      {
        "type": "js",
        "label": "authRoutes.js",
        "path": "routes/authRoutes.js"
      },
      {
        "type": "js",
        "label": "surveyRoutes.js",
        "path": "routes/surveyRoutes.js"
      },
      {
        "type": "js",
        "label": "passport.js",
        "path": "services/passport.js"
      }
    ]
  },
  seleniumPython:
  {
    "owner": "joeyskuo",
    "repo": "selenium-python",
    "ref": "master",
    "embed": [
    {
      "type": "py",
      "label": "test_BannerToCart.py",
      "path": "tests/test_BannerToCart.py"
    },
    {
      "type": "py",
      "label": "test_SearchFeature.py",
      "path": "tests/test_SearchFeature.py"
    },
    {
      "type": "py",
      "label": "home_page.py",
      "path": "pages/home_page.py"
    },
    {
      "type": "py",
      "label": "product_page.py",
      "path": "pages/product_page.py"
    }
  ]
  }
}
