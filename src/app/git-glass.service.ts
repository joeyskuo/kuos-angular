import {EventEmitter} from "@angular/core";
import {Project} from "./project.model";
export class GitGlassService {

  projectSelected = new EventEmitter<Project>();
  introSelected = new EventEmitter<boolean>();

  private projects: Project[] = [
    new Project(
      '#flashcards-react',
      'React flashcard application with Redux',
      {
        "owner": "joeyskuo",
        "repo": "flashcards-react",
        "ref": "master",
        "embed": [
          {
            "type": "js",
            "label": "StackForm.js",
            "path": "src/components/StackForm.js"
          },
          {
            "type": "js",
            "label": "StackForm.test.js",
            "path": "src/components/StackForm.test.js"
          },
          {
            "type": "js",
            "label": "index.js",
            "path": "src/reducers/index.js"
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
      'REST API developed using Flask-RESTful and SQLAlchemy',
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
    ),
    new Project(
      '#alexa-sketches-vui',
      'Voice user interface implemented for an online pictionary game',
      {
        "owner": "joeyskuo",
        "repo": "alexa-sketches-vui",
        "ref": "master",
        "embed": [
          {
            "type": "js",
            "label": "Alexa Skill",
            "path": "index.js"
          },
          {
            "type": "htmlpage",
            "label": "Sketchesgame.io",
            "url": "https://www.sketchesgame.io"
          }
        ]
      }
    )
  ];

  constructor(){}

  getProjects() {
    return this.projects.slice();
  }
}
