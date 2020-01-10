const _ = require("lodash");

module.exports = {
  theme: {
    extend: {
      boxShadow: {
        double: "0 0 0 5px hsla(230.9, 98.8%, 66.1%, 1)"
      },
      colors: {
        primary: "hsla(339.6, 82.2%, 51.6%, 1)",
        secondary: "hsla(35.8, 100%, 50%, 1)",
        tertiary: "hsla(336.3, 78%, 42.8%, 1)",
        link: "hsla(250, 100%, 40%, 1)",
        "primary-opacity-200": "hsla(3339.6, 82.2%, 51.6%, 0.2)",
        "secondary-opacity-200": "hsla(35.8, 100%, 50%, 0.2)",
        "tertiary-opacity-200": "hsla(336.3, 78%, 42.8%, 0.2)",
        // primary: "hsla(232.7, 20.3%, 48.2%, 1)",
        // secondary: "hsla(227, 49.7%, 39.8%, 1)",
        // tertiary: "hsla(347, 49.7%, 39.8%, 1)",
        // "primary-opacity-200": "hsla(232.7, 20.3%, 48.2%, 0.2)",
        // "secondary-opacity-200": "hsla(227, 49.7%, 39.8%, 0.2)",
        // "tertiary-opacity-200": "hsla(347, 49.7%, 39.8%, 0.2)",
        transparent: "hsla(0, 0%, 100%, 0.1)"
      },
      height: {
        "300-px": "300px"
      },
      maxWidth: {
        "300-px": "300px"
      },
      padding: {
        80: "20rem"
      },
      width: {
        "90vw": "90vw"
      }
    },
    gradients: theme => ({
      full: [
        theme("colors.tertiary"),
        theme("colors.primary"),
        theme("colors.secondary"),
        theme("colors.tertiary")
      ],
      "opacity-200": [
        theme("colors.secondary-opacity-200"),
        theme("colors.primary-opacity-200"),
        theme("colors.tertiary-opacity-200"),
        theme("colors.primary-opacity-200")
      ]
    })
  },
  variants: {},
  plugins: [
    function({ addUtilities, e, theme }) {
      const gradients = theme("gradients", {});

      const utilities = _.map(
        gradients,
        ([start, betweenStart, betweenEnd, end], name) => ({
          [`.bg-gradient-${e(name)}`]: {
            backgroundImage: `linear-gradient(-135deg, ${start}, ${betweenStart}, ${betweenEnd}, ${end})`
          }
        })
      );

      addUtilities(utilities);
    }
  ]
};
