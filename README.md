# stimulus-tom-select

This is a wrapper around the [TomSelect](https://tom-select.js.org/) library, a modern fork of selectize.js

## Install

1. Add `tom-select` to your package.json

```
yarn add tom-select
```

2. Add the `stimulus-tom-select` module:

```
yarn add stimulus-tom-select
```

## Usage

Make sure you are running StimulusJS successfully:

```javascript
// Rails 7 + esbuild example

// usually app/javascript/controllers/application.js
import { Application } from "@hotwired/stimulus";

const application = Application.start();

// Configure Stimulus development experience
application.debug = false;
window.Stimulus = application;

export { application };

// usually app/javascript/controllers/index.js

import { application } from "./application";

import StimulusTomSelect from "stimulus-tom-select";
application.register("tom-select", StimulusTomSelect);

// your other controllers...
```

Then use as simply as:

```html
<select data-controller="tom-select" ...></select>
```

All [tom-select options](https://tom-select.js.org/docs/) are supported, just set them as a stringified JSON object in the options value.

e.g.

```html
<select
  data-controller="tom-select"
  data-tom-select-options-value="{\"create\":true}"
  ...
></select>
```

## Styling

For now, simply download the tom-select.css and serve it, or customize it per your requirements.

```bash
# e.g. for Rails 7 with sprockets for css:
cd /vendor/assets/stylesheets
wget -o tom-select.css https://cdn.jsdelivr.net/npm/tom-select@2.0.1/dist/css/tom-select.css
```

## Extension

With inheritance, it's possible to extend this controller:

```javascript
// app/javascript/controllers/my_controller.js
import StimulusTomSelect from "stimulus-tom-select";

export default class extends StimulusTomSelect {
  connect() {
    super.connect();
    console.log("hello world");
  }
}
```

## Contributing

Bug reports and pull requests are welcome on GitHub at <https://github.com/bbonamin/stimulus-tom-select>.

## License

This package is available as open source under the terms of the MIT License.
