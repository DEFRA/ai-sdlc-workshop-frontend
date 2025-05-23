# Nunjucks Template Standards

## Template Structure

1. Use layout templates for consistent page structure
2. Break down complex templates into smaller, reusable components
3. Use includes for common elements
4. Follow a consistent template hierarchy

## Template Organization

```
src/views/
├── layouts/
│   └── main.njk
├── components/
│   └── common/
├── pages/
│   └── [page].njk
└── macros/
    └── [component].njk
```

## Best Practices

1. Use GOV.UK Frontend components and macros
2. Keep templates DRY (Don't Repeat Yourself)
3. Use meaningful variable names in templates
4. Implement proper error handling in templates
5. Use template inheritance effectively
6. Keep business logic out of templates

## Example Template Structure

```njk
{% extends "layouts/main.njk" %}

{% block content %}
  {% from "govuk/components/header/macro.njk" import govukHeader %}
  
  {{ govukHeader({
    serviceName: "Service Name",
    serviceUrl: "/"
  }) }}

  <div class="govuk-width-container">
    {% block main %}
      <!-- Page content here -->
    {% endblock %}
  </div>
{% endblock %}
```

## Accessibility

1. Use semantic HTML elements
2. Include proper ARIA attributes
3. Ensure proper heading hierarchy
4. Maintain GOV.UK accessibility standards
