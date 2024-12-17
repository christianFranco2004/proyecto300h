import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';



import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';//revisar


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes),
  provideClientHydration(withEventReplay()),//revisar
  provideHttpClient(),
  provideToastr({
    timeOut: 3000,
    positionClass: "toast-bottom-left",
    preventDuplicates: true,
    easeTime: 0,
    progressBar: true
  }),
  ]
};
