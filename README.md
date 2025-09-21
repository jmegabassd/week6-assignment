# Reflection

> Please also provide an assignment reflection in your project README.md file.

## Required

### 🎯 What requirements did you achieve?

> useState was used to manage thumbnails clicked
>
> useEffect was uysed to call the API
>
> I split the JSX files for buttons mainImage and Thumbnails
>
> .map() was used for the thumbnails
>
> When clicked on the thumbnail apples to fullscreen
>
> All images have the alt text pulled from API and can be shown when the main image is clicked on
>
> I enabled basic keyboard nav for the thumbnails, can tab through them and select with enter or space

### 🎯 Were there any requirements or goals that you were unable to achieve?

> I felt I met all the requiremnents

## Optional

🏹 Feel free to add any other reflections you would like to share about your submission, for example:

## What useful external sources helped you complete the assignment (e.g Youtube tutorials)?

> (https://nightwatchjs.org/api/isSelected.html)
>
> (https://stackoverflow.com/questions/66076214/how-do-i-make-the-slideshow-buttons-scroll-through-the-images)
>
> (https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values)
>
> (https://react.dev/reference/react/forwardRef)
>
> (https://react.dev/blog/2024/12/05/react-19#ref-as-a-prop)
>
> (https://www.w3schools.com/react/showreact.asp?filename=demo_react_forwardref)
>
> (https://www.w3schools.com/react/react_forward_ref.asp)
>
> (https://www.w3schools.com/howto/howto_css_media_query_breakpoints.asp)
>
> (https://www.w3schools.com/css/css3_mediaqueries_ex.asp)
>
> (https://www.w3schools.com/howto/howto_css_next_prev.asp)
>
> (https://toolstud.io/web/charmap.php?encoded=rsaquo)
>
> (https://cookie-script.com/how-to-block-third-party-cookies.html)

## What errors or bugs did you encounter while completing your assignment? How did you solve them?

> I had a lot of trouble adding the button functionallity and the logic to keep the thumbnail images currently selected in view in the container, after spending several hours trying to figure this on on Sat and asking for help in discord with no one helping I used AI to point me in the right direction, I have set myself some personal tasks to fully understand this logic and will make my own project to understand it better.
>
> One of the images pulls through third party cookies, I started looking into this to block them but didn't fully understand the process. I have set some links as favoutites and will do more reading, and help with this would be appriciated.

## What went really well and what could have gone better?

> Went a bit crazy putting logic into the Thumnails component, in the end I thought I would make more sense to move this all into App and remove the Thumbnails component as this seemed in my head to add another layer which was unnecessary.
>
> Initially used "import { forwardRef } from 'react';" upon reading up discovered this was now available as a prop so removed the import and set ref in ThumbnailImage({ item, onClick, isSelected, ref }).
>
> Decided against using Grid! for once... Although this felt a bit odd as a grid addict I felt this simple page layout didn't require grid which would add unnecessary complexitry to the page especially when using @media.
>
> Render setup went really well, took a couple of minutes!
