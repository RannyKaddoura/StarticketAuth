import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


if (environment.production) {
  enableProdMode();
}
enableProdMode();// Angular is running in the development mode. Call enableProdMode() to enable the production mode
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
