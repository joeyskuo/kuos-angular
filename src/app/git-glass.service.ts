import {EventEmitter} from "@angular/core";
import {Project} from "./project.model";
export class GitGlassService {

  projectSelected = new EventEmitter<Project>();

  private projects: Project[] = [
    new Project(
      '#selenium-python',
      'Selenium WebDriver test suites developed in Java and Python',
      {
        "owner": "joeyskuo",
        "repo": "alexa-sketches-vui",
        "ref": "master",
        "embed": [
          {
            "type": "js",
            "label": "Webpack config",
            "path": "index.js"
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
            "label": "BannerToCart",
            "path": "Tests/BannerToCart.robot"
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
            "label": "Feature file",
            "path": "src/com/kuos/cucumber/features/HomePageNav.feature"
          }
        ]
      }
    ),
    new Project(
      '#kuos-angular',
      'Angular 4 personal web page',
      {
        "owner": "joeyskuo",
        "repo": "ali-cucumber-sauce",
        "ref": "master",
        "embed": [
          {
            "type": "feature",
            "label": "Feature file",
            "path": "src/com/kuos/cucumber/features/HomePageNav.feature"
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
            "type": "py",
            "label": "Swagger definition",
            "path": "Balanced Parentheses Check .ipynb"
          }
        ]
      }
    )  ];

  constructor(){}

  getProjects() {
    return this.projects.slice();
  }
}
