# Register Surplus Forms Service - Design Specification

## Page Flow

The Register Surplus Forms service follows this user journey:

1. **Start page** (`index.html`) → 
2. **Form selection** (`form-details.html`) → 
3. **Pen color** (`digital-product.html`) → 
4. **Guidance question** (`form-guidance.html` or `form-guidance-validation.html` with validation) → 
5. **Check answers** (`check-answers.html`) → 
6. **Confirmation** (`confirmation.html`)

## Data Flow

Data is collected and persisted in `req.session.data` throughout the journey:

- `formType`: Selected form type from the dropdown (captured in `form-details.html`)
- `otherForm`: Custom form name if "Other" was selected (captured in `form-details.html`)
- `formUpload`: Information about the uploaded file (captured in `form-upload.html`)
- `digitalProduct`: Color of pen not used (captured in `digital-product.html`)
- `formGuidance`: Response about reading guidance (captured in `form-guidance.html`)

All this data is displayed on the check answers page (`check-answers.html`) and can be edited by returning to the relevant page.

## Page Specifications

### 1. Start Page (index.html)

- **Page type:** Start page
- **H1:** "Register surplus forms"
- **Lead paragraph:** "Use this service to register surplus forms and documents that are no longer needed by your department."
- **Body paragraph:** "Use this service to:"
- **Bullet list:**
  - "register unused or surplus official forms"
  - "arrange collection and secure disposal of documents"
  - "get a certificate of disposal for your records"
- **Body paragraph:** "Registering takes around 5 minutes."
- **Start button:** "Start now" (links to form-details.html)
- **H2:** "Before you start"
- **Body paragraph:** "You will need:"
- **Bullet list:**
  - "your department reference number"
  - "details of the forms you want to register"
  - "information about where the forms are stored"

**Components:**
- Phase banner (Alpha)
- Button (Start now - start button variant)
- Typography (headings, body text)
- Lists (bulleted)

### 2. Form Selection Page (form-details.html)

- **Page type:** Question page
- **H1:** "Which form are you applying to apply for?"
- **Component:** Radio buttons with conditional reveal
- **Radio options with conditional reveal for 'Other':**
  - "Form A-001: Request to Begin the Request Process"
  - "Form B-19F: Retroactive Pre-Approval Form"
  - "Form C-XYZ: Confirmation of Previous Confirmations"
  - "Form D-Null: Deregistration of Redundant Documents"
  - "Other (please specify)" - with conditional reveal text input field labeled "Form name"
- **Button:** "Continue"
- **Validation:** Error summary and inline errors if no option is selected
- **Data captured:** 
  - `formType` (radio selection)
  - `otherForm` (if "Other" selected)

**Components:**
- Phase banner (Alpha)
- Back link
- Radios (with conditional reveal)
- Text input (in conditional reveal)
- Button
- Error summary (when validation fails)

### 3. Pen Color Page (digital-product.html)

- **Page type:** Question page
- **H1:** "What colour pen did you use to not fill in the form?"
- **Hint text:** "Select the colour of pen you didn't use to fill in the form"
- **Component:** Radio buttons
- **Radio options:**
  - "Blue"
  - "Black"
  - "Red"
  - "Green"
- **Button:** "Continue"
- **Data captured:** `digitalProduct` (pen color selection)

**Components:**
- Phase banner (Alpha)
- Back link
- Radios (standard)
- Button

### 4. Guidance Question Page (form-guidance.html / form-guidance-validation.html)

- **Page type:** Question page
- **H1:** "Did you read the 147-page guidance?"
- **Component:** Radio buttons
- **Radio options:**
  - "Yes"
  - "Look at it and went to get a cup of tea" / "Laughed at it" (different in validation version)
  - "Printed it twice"
- **Button:** "Continue"
- **Validation:** Error summary and inline errors if no option is selected (in validation version)
- **Data captured:** `formGuidance` (guidance reading selection)

**Components:**
- Phase banner (Alpha)
- Back link
- Radios (standard)
- Button
- Error summary (when validation fails - in validation version only)

### 5. Check Answers Page (check-answers.html)

- **Page type:** Summary page
- **H1:** "Check your answers before submitting your form"
- **Component:** Summary list with the following rows:
  - **Form type:**
    - Shows selected form type or custom form name
    - "Change" link to form-details.html
  - **Pen colour not used:**
    - Shows selected color
    - "Change" link to digital-product.html
  - **147-page guidance:**
    - Shows guidance reading response
    - "Change" link to form-guidance.html
- **H2:** "Now submit your form"
- **Body paragraph:** "By submitting this form you are confirming that, to the best of your knowledge, the details you are providing are correct."
- **Button:** "Accept and send"
- **Data displayed:** All previously collected data

**Components:**
- Phase banner (Alpha)
- Back link
- Summary list
- Typography (headings, body text)
- Button

### 6. Confirmation Page (confirmation.html)

- **Page type:** Confirmation page
- **Component:** Confirmation panel
  - **Panel title:** "Registration complete"
  - **Panel content:** "Your reference number HDJ2123F"
- **H2:** "What happens next"
- **Body paragraph:** "We've sent your registration to the Forms Management team."
- **Body paragraph:** "They will:"
- **Bullet list:**
  - "review your registration within 5 working days"
  - "contact you if they need any more information"
  - "arrange collection of your surplus forms"
  - "issue a certificate of disposal once the forms have been securely destroyed"
- **H2:** "Feedback"
- **Body paragraph:** "Your feedback helps us improve this service."
- **Body paragraph with link:** "What did you think of this service? (takes 30 seconds)"
- **Button:** "Register another form" (returns to start page)

**Components:**
- Phase banner (Alpha)
- Panel (confirmation variant)
- Typography (headings, body text)
- Lists (bulleted)
- Button
- Link