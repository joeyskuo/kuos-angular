import { Component, OnInit } from '@angular/core';

import * as githubEmbed from '../js/github-embed.min';

@Component({
  selector: 'app-git-glass',
  templateUrl: './git-glass.component.html',
  styleUrls: ['./git-glass.component.css']
})
export class GitGlassComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onButtonClicked() {
    githubEmbed('#git-glass', {
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
    });
  }

}
