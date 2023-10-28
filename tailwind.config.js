/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        White: "hsl(0, 0%, 100%)",
        LightGrey: "hsl(217, 12%, 63%)",
        MediumGrey: "hsl(216, 12%, 54%)",
        DarkBlue: "hsl(213, 19%, 18%)",
        VeryDarkBlue: "hsl(216, 12%, 8%)",
        Orange: "hsl(25, 97%, 53%)"
      },
      maxWidth: {
        small: "250px"
      },
      fontSize: {
        required: "18px"
      },
      width: {
        lower: "72%",
        mid: "33%",
        maybe: "36%",
        justfit: "75.3%",
      },
      margin: {
        please: "18.1rem",
      }

    },
    fontFamily: {
      Opensans: ('OpenSans'),
      LexendDeca: ('LexendDeca'),
      bigshoulder: ('bigshoulder')
    },


  },
  plugins: [],
}

