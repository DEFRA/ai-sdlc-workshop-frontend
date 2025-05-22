# CONTEXT
There is an existing GOV.UK form flow for users to *Register surplus forms*.  

We are making two changes:  
1. Adding a new page to the flow.  
2. Updating the `Check your answers` page by adding a row to the summary list.  

A screenshots is provided for the updated `Check your answers` page.

The backend API has also been updated to include three new fields on the `POST` and `GET` endpoints:

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
Review the existing codebase to identify the patterns and files that need updating.  
Use the provided screenshots as a reference for layout and content.

# IMPLEMENTATION PHASE

## Task 1: Add new `receipt-preference` page  
- Insert this page *after* the `147 guidance` page and *before* the `Check your answers` page.  Update the routing and middleware appropriately. 
- This is a standard GDS question page using the **checkbox pattern**, with an option for **'No'**.  
- Use the exact content from the green post-its in the screenshot (`New page: receipt`). Follow GDS content and design guidelines.

### Validation  
- If the user selects **‘No’** *and* another option, show a GDS-style error summary.  
- Error message:  
  > "Select how you would like to receive your confirmation, or select 'I do not want a registration confirmation'".

## Task 2: Update `Check your answers` page  
- Add a new row to the bottom of the summary list.  
- This should reflect the user’s input from the `receipt-preference` page.  
- Use the content from the green post-its in the relevant screenshot, following GDS guidelines.

## Session and API Integration
- Add the three new fields to session data.  
- Update API requests (both GET and POST) to include the new fields.

# VERIFICATION PHASE
- A new `receipt-preference` page has been added correctly.  
- A new summary row appears on the `Check your answers` page.  
- GDS design and content guidelines are followed on both pages.  
- Session and API layers include the three new fields.

If anything is unclear, please ask for clarification before proceeding.
