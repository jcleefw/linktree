This is an app to display link like Linktr.ee

## How to run app

1. Install all needed packages
   `yarn add` or `npm install`

1. Run client app
   `yarn start` or `npm start`

## How to run test

`yarn test`

## How to modify data to test theme

Mock data are stored in `data.json` in `public` folder.

You can change the user preferences of theme by specifying the colors in `hex` value.

```
"userPreferences": {
   "backgroundColor": "#282c34",
   "textColor": "white",
   "linkBackgroundColor": "#39e09b",
   "theme": "dark"
},
```

The theme value doesn't do much except for changing the linktree logo between `light` and `dark` theme

## Completed Stories

- [x] Style overall layout according to mock
- [x] invert colors on hover for list item
- [x] Support user preference theme globally
- [x] Setup some jest test
- [x] responsive page
- [x] Create Class list
- [x] Create Music Player List
- [x] handle link items onClick toggle, and links

## TODO Stories

- [ ] setup presets theme enum for user to select instead of passing in hex value for coloring
- [ ] Create Show List using the `ExpandableLinkWrapper` component
- [ ] Setup test for all components
- [ ] Organize assets properly in one location
- [ ] error handling
