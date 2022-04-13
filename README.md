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

With inheritance, it's possible to extend this controller, e.g. to implement a "remote tom-select" controller:

```js
// app/javascript/controllers/remote_tom_select.js

import StimulusTomSelect from "stimulus-tom-select";

export default class extends StimulusTomSelect {
  static values = {
    value: String,
    label: String,
    path: String,
  };

  initTomSelect() {
    this.options = {
      valueField: this.valueValue,
      labelField: this.labelValue,
      searchField: this.labelValue,
      maxItems: 1,
      load: (query, callback) => {
        if (!query.length) return callback();
        $.ajax({
          url: `${this.pathValue}${encodeURIComponent(query)}`,
          type: "GET",
          error: () => callback(),
          success: (res) => callback(res),
        });
      },
      ...this.optionsValue,
    };
    super.initTomSelect();
  }
}

// app/javascript/controllers/index.js
import RemoteTomSelect from "./remote_tom_select";
application.register("remote-tom-select", RemoteTomSelect);
```

And use it like so:

```html
<input
  type="text"
  name="q[my_input_name]"
  id="q_my_input_name"
  tabindex="-1"
  data-controller="remote-tom-select"
  data-remote-tom-select-value-value="name"
  data-remote-tom-select-label-value="name"
  data-remote-tom-select-path-value="/people.json?name="
/>
```

## Contributing

Bug reports and pull requests are welcome on GitHub at <https://github.com/bbonamin/stimulus-tom-select>.

## License

This package is available as open source under the terms of the MIT License.
