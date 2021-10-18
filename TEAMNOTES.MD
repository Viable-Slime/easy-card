# Team notes
This is for maintaining communication about your team's working meetings to "ship" the project.
10/5/2021

Characteristics of the card?
-Different colors
-Headers
-Title
-Sub titles
-card icons/images
-card content section formatted to fit content


Design characteristics?
-accessibility, able to access and know what is inside of the card
-contrast
-any html content inside of card body
-heading order (h1 > h2 > h3)


Design considerations?
-length and size of Headings
-Responsiveness


What accessibility concerns do we potentially have?
-different languages (i18n)

What security concerns do we potentially have?
-content flexibility content

What states does it have?
-hover state
-disabled
-click to show
-focus
-type of card

What will we call it?
slime-card
slime-heading
slime-icon
slime-content



## Meeting notes
These are notes to be maintained PER date that you meet. What you did and what the next steps are
### Meeting Date

#### What we did:


#### What we'll do next


## Status check ins
These are dedicated status check-ins as this is a multi-week project
## Check-in 1

#### Whole card = slime-card
- design considerations: shape size, supports the sub elements, position, type
- states: disabled, expanded, contracted


#### Top portion of card = slime-heading
- design considerations: color, font,font-size, language, margin, padding, overflow, text wrap


#### Icon part = slime-icon
- design considerations: 
- size, color, border, contrast, margin, padding
- state: hover, click, tabbed


#### Body = slime-content
- design considerations: able to contain any html content, padding, margin,overflow, text wrap, background color, text color,
- state: expanded state, contracted state


#### Next Steps:
- Assign roles 
- get working on base parts of the card header and body
- create foundation for each element

#### Roles:

- Sean Brill whole card as an element
- Michael Whang Icon element
- Neel Ghosh Header element
- Nick Hunter Body element

## Teams peer review
- Talked about the structure of the project seperating the card into different elements
- Talked about trickeling properties from the top element down to the lowest element
- Talked about importing SimpleColors
- Talked about operation observer


### Check-in 2
- Sean worked on icon and header elements that are now working together. 
- #### Slime Icon
-  Slime Icon will take a property name such as "science" and update the icon to match the specified property. At the current moment there is only a science property name which is a beaker icon. The icon also has the ability to scale to adjust for the size of the header element, and background color is set to transparent when it is used in the header so that just the icon itself is visible.
-  #### Slime Header
-  The header contains header and sub-header text that are centered to the header's dimensions. The icon element is imported to the header, and is able to be added to the page as displayed in the card demo. 
-  ####Next Steps:
-  We will be focusing next on the content element which will contain a list. Additionally, there are plans to add more property names so that the icons can be updated to show other topics rather than just science.
### Check-in 3
- 
- 
### Check-in 4
- 
- 
