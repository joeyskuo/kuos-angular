import {Project} from "./project.model";

export default [
  new Project(
    '#survey-stork-server',
    'In Progress: SaaS Survey application using MongoDB, Express, React, SendGrid, and the Stripe API',
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
    }
  ),
  new Project(
    '#alexa-sketches-vui',
    'Voice user interface and online Pictionary application developed using D3.js, Express, and AWS Lambda',
    {
      "owner": "joeyskuo",
      "repo": "alexa-sketches-vui",
      "ref": "master",
      "embed": [
        {
          "type": "htmlpage",
          "label": "Sketchesgame.io",
          "url": "https://www.sketchesgame.io"
        },
        {
          "type": "js",
          "label": "Intents",
          "path": "IntentSchema.json"
        },
        {
          "type": "js",
          "label": "Alexa Skill",
          "path": "index.js"
        },
        {
          "type": "json",
          "label": "Raw Sketch Data",
          "path": "raw/airplane.ndjson",
          "owner": "joeyskuo",
          "repo": "sketch-parser",
          "ref": "master"
        }
      ]
    }
  ),
  new Project(
    '#kuos-angular',
    'Angular personal web page',
    {
      "owner": "joeyskuo",
      "repo": "kuos-angular",
      "ref": "master",
      "embed": [
        {
          "type": "html",
          "label": "resume.component",
          "path": "src/app/resume/resume.component.html"
        },
        {
          "type": "html",
          "label": "git-glass.component",
          "path": "src/app/git-glass/git-glass.component.html"
        },
        {
          "type": "ts",
          "label": "git-glass.component.ts",
          "path": "src/app/git-glass/git-glass.component.ts"
        },
        {
          "type": "ts",
          "label": "git-glass.service.ts",
          "path": "src/app/git-glass.service.ts"
        }
      ]
    }
  ),
  new Project(
    '#selenium-python',
    'Selenium WebDriver test suites developed in Java and Python',
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
  ),
  new Project(
    '#robot-amazon',
    'Robot framework test cases developed for Amazon homepage',
    {
      "owner": "joeyskuo",
      "repo": "robot-amazon",
      "ref": "master",
      "embed": [
        {
          "type": "robot",
          "label": "BannerToCart.robot",
          "path": "Tests/BannerToCart.robot"
        },
        {
          "type": "robot",
          "label": "SearchFeature.robot",
          "path": "Tests/SearchFeature.robot"
        },
        {
          "type": "robot",
          "label": "Amazon.robot",
          "path": "Resources/Amazon.robot"
        }
      ]
    }
  ),
  new Project(
    '#ali-cucumber-sauce',
    'Appium test cases created for AliExpress app',
    {
      "owner": "joeyskuo",
      "repo": "ali-cucumber-sauce",
      "ref": "master",
      "embed": [
        {
          "type": "feature",
          "label": "HomePageNav.feature",
          "path": "src/com/kuos/cucumber/features/HomePageNav.feature"
        },
        {
          "type": "java",
          "label": "HomePageTests.java",
          "path": "src/com/kuos/appium/stepdef/HomePageTests.java"
        },
        {
          "type": "java",
          "label": "HomePageMethods.java",
          "path": "src/com/kuos/appium/pagemethods/HomePageMethods.java"
        }
      ]
    }
  ),
  new Project(
    '#simple-store-api',
    'REST API developed using Flask-RESTful, SQLAlchemy, and JWT',
    {
      "owner": "joeyskuo",
      "repo": "simple-store-api",
      "ref": "master",
      "embed": [
        {
          "type": "py",
          "label": "app.py",
          "path": "app/app.py"
        },
        {
          "type": "py",
          "label": "item.py",
          "path": "app/resources/item.py"
        },
        {
          "type": "py",
          "label": "user.py",
          "path": "app/resources/user.py"
        },
        {
          "type": "py",
          "label": "ItemModel.py",
          "path": "app/models/ItemModel.py"
        },
        {
          "type": "htmlpage",
          "label": "Swagger definition",
          "url": "https://simple-store-api.herokuapp.com/docs/#/item"
        }
      ]
    }
  )
];
