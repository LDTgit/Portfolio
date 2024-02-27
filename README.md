This portfolio page is a single page that contains the following sections:

- A header with external links to social media accounts and an internal link to the projects section of the page
- A landing section with an avatar picture and a short bio
- A section to display your featured projects as cards in a grid fashion on a desktop and flex on a smaller device

I have used the open source library Chakra UI. The components from this library are  imported from the `@chakra-ui/react` package at the top of each corresponding file.

# Steps

Once you open the code, you need to install the *Chakra UI* and other referenced libraries by running the `npm install` command from the built-in terminal in the code lab. To toggle the built-in terminal, you need to click the View menu item, then choose the Terminal in the dropdown.

Once the terminal is open (visible), you can run the `npm install` command. This will install all the required missing dependencies.

### The `Header.js` file contains:

a) An external social media links to the header on the left side of the page.

I've used the `HStack` component to stack the links horizontally.
Each social has a `a` tag with a `href` attribute pointing to the corresponding social media page. The `a` tag has as children a `FontAwesomeIcon` component.

The `FontAwesomeIcon` component takes 2 props:
- `icon`: The `icon` prop from the `social` object.
- `size`: The size of the icon of `2x` value.

b) An internal link to the Projects section - a `a` tag that has as children the name of the section: "Projects".
When clicking on the link, the url shows the corresponding section.
Also, the click scrolls to the "Projects" section with a smooth animation.

### In the `LandingSection.js` file

I used an avatar, a greeting and a brief role description.

### The `ProjectsSection.js` component
This component is implemented using the `Card` component that it uses to display information about each project it's not.
The `ProjectsSection` component defines a `projects` array with the data for each project and that information is passed to each `Card` component as props.

### The `Card.js` component

I uses the following components from Chakra UI:
- VStack,
- Image,
- Heading,
- Text,

### Header show/hide animation

I implemented a header show/hide animation depending on the scroll direction.
The header slides up with some animation and is hidden when scrolling down the page.
When scrolling up, the header slides down and is visible.