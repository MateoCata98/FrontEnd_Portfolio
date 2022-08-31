import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styles:[`
  .tamaño {
  width: 600px;
}
  `]
})
export class HabilidadesComponent implements OnInit {
  html: number =0;
  css: number =0;
  js: number =0;
  ts: number =0;
  angular: number =0;
  mysql: number =0;
  mongodb: number =0;
  java: number =0;
  node: number =0;
  spring: number =0;
  hb: number =0;

  ngOnInit() {
    let interval = setInterval(() => {
       
        this.mongodb = this.mongodb + Math.floor(Math.random() * 10) + 1;
        if (this.mongodb >= 30) {
            this.mongodb = 30;
        }
        this.node = this.node + Math.floor(Math.random() * 10) + 1;
        if (this.node >= 30) {
            this.node = 30;
        }
        this.css = this.css + Math.floor(Math.random() * 10) + 1;
        if (this.css >= 55) {
            this.css = 55;
        }
        this.mysql = this.mysql + Math.floor(Math.random() * 10) + 1;
        if (this.mysql >= 55) {
            this.mysql = 55;
        }
        this.spring = this.spring + Math.floor(Math.random() * 10) + 1;
        if (this.spring >= 55) {
            this.spring = 55;
        }
        this.java = this.java + Math.floor(Math.random() * 10) + 1;
        if (this.java >= 60) {
            this.java = 60;
        }
        this.js = this.js + Math.floor(Math.random() * 10) + 1;
        if (this.js >= 60) {
            this.js = 60;
        }
        this.ts = this.ts + Math.floor(Math.random() * 10) + 1;
        if (this.ts >= 75) {
            this.ts = 75;
        }
        this.html = this.html + Math.floor(Math.random() * 10) + 1;
        if (this.html >= 65) {
            this.html = 65;
        }
        this.angular = this.angular + Math.floor(Math.random() * 10) + 1;
        if (this.angular >= 75) {
            this.angular = 75;
        }
        this.hb = this.hb + Math.floor(Math.random() * 10) + 1;
        if (this.hb >= 75) {
            this.hb = 75;
            clearInterval(interval);
        }
    }, 750);
}

}
