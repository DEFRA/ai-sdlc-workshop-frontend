# CONTEXT
There is an existing page flow for users to 'Register surplus forms' which is a GOV.UK form.

We will be adding a new page to the flow and updating the `Check your answers` page by adding a row to the summary list. I have provided you with two screenshots for these pages.

The backend API has also been updated to add 3 new fields to the POST and GET endpoints:

```javascript
    receipt_preference: {
      type: 'string',
      enum: ['email', 'phone', 'none'],
      nullable: true
    },
    email_address: {
      type: 'string',
      format: 'email',
      nullable: true
    },
    mobile_phone_number: {
      type: 'string',
      nullable: true
    }
```

# ANALYSIS PHASE
Look at the existing codebase and determine the patterns and files that need to be updated to complete the tasks detailed below.
Look at the screenshots I have provided you with and use them as reference for the task.

# IMPLEMENTATION PHASE
Please complete these 2 tasks as per the detailed instructions below:
1. Add a new page after the `147 guidance` page and before the `Check your answers` page
2. Add a row to the summary list on the `Check your answers` page

## Add new `receipt-preference` page
Add a new page called `receipt-preference` into the page flow after the `147 page guidance` page and before the `Check your answers page`
The new page is a standard question page from the GDS design system using the checkbox pattern with an option for 'No'

For the `receipt-preference` page, use the content from the screenshot showing the 'New page: receipt'. The content for the new page is on the green post-its in the screenshot. Add the content exactly as it is written on the post-its and following GDS content design guidelines. 

### Add validation to the new page
Add the following validation to the new page:
if a user selects 'No' AND another option using the GDS error message and error summary pattern. The validation message should say: "Select how you would like to receive your confirmation, or select 'I do not want a registration confirmation'".

## Update the `Check your answers` page
Update the `Check your answers` page by adding a new row at the bottom of the summary list. The new row should display the user input from the new `receipt-preference` page.

For the `Check your answers` page, use the content from the screenshot showing the `Check your answers page`. The content for the new page is on the green post-its in the screenshot. Add the content exactly as it is written on the post-its and following GDS content design guidelines.

## Session and API 
Add the 3 new fields to existing session data and the existing API calls.


Look at the existing pages and create an implementation plan before implementing.

If anything is ambiguous, ask for clarification.

# VERIFICATION PHASE
- There should be a new `receipt-preference` page and a new row on the `Check your answers page`
- The two screens cover all the functionality above and follow the GDS design system and GDS content guidelines
- The session data has been updated to include the 3 new fields
- API requests have been be updated to include the 3 new fields
