# Product Requirements (PRD)

## Context

The “Register Surplus Forms” service is a multi‑step GOV.UK prototype that allows government departments to declare and dispose of unused official forms. The journey comprises six pages, each collecting (or displaying) specific data that is ultimately posted to the backend registration API. All interface behaviour must conform to the Interface Design Specification, and all data handling, validation, session and API communications must comply with the Technical Design Specification.

## Feature 1 – Start Page (index.html)

*Purpose*: Introduce the service, outline prerequisites and begin a new registration session.

### Story 1.1 – Render start page
Given a user navigates to the root route “/”
When the page is requested
Then the content, components and copy are rendered exactly as described in the Interface Design Spec – *Start Page (index.html)*, including the Alpha phase banner, headings, bullet lists and “Start now” button.
References: Interface Design Spec – Start Page; Technical Design Spec – Session Management.

### Story 1.2 – “Start now” initialises registration
Given the Start page is displayed
When the user activates the “Start now” button
Then a new `req.session.registration` object is created (clearing any previous data), and the user is redirected to the Form Selection page.
References: Interface Design Spec – Start Page; Technical Design Spec – Session Management, Navigation Flow.

## Feature 2 – Form Selection Page (form‑details.html)

*Purpose*: Capture the form type being registered, including free‑text when “Other” is chosen.

### Story 2.1 – Display form type question
Given a user lands on “/form-type”
When the page loads
Then the question, radio options (with conditional reveal text input for “Other”) and “Continue” button render exactly per Interface Design Spec – *Form Selection Page*.
References: Interface Design Spec – Form Selection Page.

### Story 2.2 – Mandatory selection validation
Given the page is submitted without a radio option selected
When the server receives the POST
Then validation fails: the user is shown the error summary and inline error messages exactly as defined in the Interface Design Spec; no session data is mutated.
References: Interface Design Spec – Form Selection Page (validation state); Technical Design Spec – Error Handling.

### Story 2.3 – Conditional free‑text validation
Given the user selects “Other (please specify)” and leaves the text input empty
When the form is submitted
Then validation fails with the specific error messaging defined in the Interface Design Spec; the page is re‑rendered preserving previous answers.
References: Interface Design Spec – Form Selection Page (conditional reveal); Technical Design Spec – Error Handling, Data Model (`formTypeOtherText` rules).

### Story 2.4 – Persist form type and navigate
Given the user provides a valid form type (and free‑text when required)
When the form is submitted
Then the values are stored in `req.session.registration.formType` and, if applicable, `formTypeOtherText`, and the user is redirected to the Pen Colour page.
References: Technical Design Spec – Session Management, Data Model; Navigation Flow.

## Feature 3 – Pen Colour Page (digital‑product.html)

*Purpose*: Record which pen colour was *not* used to fill in the form.

### Story 3.1 – Display pen colour question
Given a user visits “/pen-colour”
When the page is rendered
Then the heading, hint text, radio options (Blue, Black, Red, Green), back link and continue button appear as per Interface Design Spec – *Pen Color Page*.
References: Interface Design Spec – Pen Color Page.

### Story 3.2 – Require selection
Given the user submits the page without selecting a colour
When the form is processed
Then validation errors display according to Interface Design Spec; no session changes occur.
References: Interface Design Spec – Pen Color Page (validation); Technical Design Spec – Error Handling.

### Story 3.3 – Persist colour and proceed
Given a valid colour is chosen
When the user presses Continue
Then `req.session.registration.penColourNotUsed` is set and the user is redirected to the Guidance Question page.
References: Technical Design Spec – Session Management, Data Model (`penColourNotUsed`); Navigation Flow.

## Feature 4 – Guidance Question Page (form‑guidance.html)

*Purpose*: Capture whether the user has read the 147‑page guidance.

### Story 4.1 – Render guidance question
Given a user navigates to “/guidance”
When the page loads
Then the radio options for Yes / Looked at it and went to get a cup of tea / Printed it twice are displayed exactly according to the Interface Design Spec – *Guidance Question Page*.
References: Interface Design Spec – Guidance Question Page.

### Story 4.2 – Validation of guidance response
Given no option is selected
When the form is submitted
Then the validation error summary and inline messages render as specified; form processing halts.
References: Interface Design Spec – Guidance Question Page (validation); Technical Design Spec – Error Handling.

### Story 4.3 – Persist response and move to Check Answers
Given a valid option is chosen
When the page is submitted
Then `req.session.registration.guidanceRead` is updated and the user is redirected to the Check Answers page.
References: Technical Design Spec – Session Management, Data Model (`guidanceRead`); Navigation Flow.

## Feature 5 – Check Answers Page (check‑answers.html)

*Purpose*: Let users verify and amend their inputs, then submit to the backend API.

### Story 5.1 – Display summary list
Given the user reaches “/check-your-answers”
When the page renders
Then a GOV.UK summary list shows Form type, Pen colour not used and 147‑page guidance values drawn from `req.session.registration`, each with Change links pointing to their respective pages, as per Interface Design Spec – *Check Answers Page*.
References: Interface Design Spec – Check Answers Page; Technical Design Spec – Session Management.

### Story 5.2 – Change links preserve state
Given the user clicks a Change link
When they are redirected to the selected step
Then previously‑entered data is pre‑populated, and upon resubmission they are returned to Check Answers with updated values.
References: Technical Design Spec – Navigation Flow, Session Management.

### Story 5.3 – Submit registration to API
Given the user selects “Accept and send”
When the POST /api/v1/registrations request succeeds
Then the API response’s `referenceNumber` and `id` are stored in session, and the user is redirected to Confirmation; on validation or 5xx errors the page re‑renders with error messaging per Technical Design Spec – Error Handling, API Integration.
References: Technical Design Spec – API Integration, Backend APIs (POST /registrations), Error Handling.

## Feature 6 – Confirmation Page (confirmation.html)

*Purpose*: Provide the reference number and next‑steps information once registration is complete.

### Story 6.1 – Render confirmation panel
Given the user is redirected from a successful submission
When the Confirmation page loads
Then the confirmation panel shows “Registration complete” and the reference number from `req.session.apiResponse.referenceNumber`, with all copy and components as per Interface Design Spec – *Confirmation Page*.
References: Interface Design Spec – Confirmation Page; Technical Design Spec – Data Model (`referenceNumber`).

### Story 6.2 – Session teardown
Given the Confirmation page has rendered
When the response is sent
Then `req.session.destroy()` is called so any subsequent visit to protected steps starts a new journey.
References: Technical Design Spec – Session Management.

### Story 6.3 – Access control
Given a user attempts to access “/confirmation” directly without a completed submission
When the route middleware runs
Then the user is redirected to the Start page in accordance with Technical Design Spec – Navigation Flow.
References: Technical Design Spec – Navigation Flow.
