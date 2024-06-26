import { Component } from "@angular/core";

@Component({
    selector: "app-loader",
    template: `
    <div class="d-flex justify-content-center">
      <div class="spinner-border text-primary" role="status"></div>
      <div class="text-primary">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  `,
    standalone: true,
})
export class LoaderComponent {}
