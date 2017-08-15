import {EventEmitter} from "@angular/core";
import {Project} from "./project.model";
export class GitGlassService {

  projectSelected = new EventEmitter<Project>();
  introSelected = new EventEmitter<boolean>();

  private projects: Project[] = [
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
      '#kuos-angular',
      'Angular 4 personal web page',
      {
        "owner": "joeyskuo",
        "repo": "kuos-angular",
        "ref": "master",
        "embed": [
          {
            "type": "html",
            "label": "resume.component.html",
            "path": "src/app/resume/resume.component.html"
          },
          {
            "type": "html",
            "label": "projects.component.html",
            "path": "src/app/resume/projects-section/projects-section.component.html"
          },
          {
            "type": "html",
            "label": "git-glass.component.html",
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
            "url": "https://app.swaggerhub.com/apis/joeyskuo/Simple-Store/1.0.0"
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
    ),
    new Project(
      '#woo-commerce-pytest',
      'Pytest test cases for E-commerce REST API',
      {
        "owner": "joeyskuo",
        "repo": "data-struct-algo",
        "ref": "master",
        "embed": [
          {
            "type": "htmlpage",
            "label": "N/A",
            "url": "http://www.github.com/nosuchrepo"
          }
        ]
      }
    )  ];

  constructor(){}

  getProjects() {
    return this.projects.slice();
  }
}
