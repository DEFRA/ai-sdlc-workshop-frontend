# GOV.UK Frontend Standards

This project uses GOV.UK Frontend for consistent styling and components. Follow these guidelines:

## Component Usage

1. Always use GOV.UK Frontend components when available
2. Follow the GOV.UK Design System patterns and components
3. Use the GOV.UK Frontend Nunjucks macros for components
4. Maintain accessibility standards as per GOV.UK guidelines

## Styling Guidelines

1. Use GOV.UK Frontend's Sass variables and mixins
2. Follow the GOV.UK Design System spacing scale
3. Use the GOV.UK Frontend grid system
4. Maintain consistent typography using GOV.UK Frontend's font stack

## Example Component Usage

```njk
{% from "govuk/components/button/macro.njk" import govukButton %}

{{ govukButton({
  text: "Continue",
  href: "/next-page"
}) }}
```

## Custom Styling

1. Only add custom styles when necessary
2. Use BEM naming convention for custom components
3. Extend GOV.UK Frontend styles rather than overriding them
4. Keep custom styles in `src/public/styles/` directory
