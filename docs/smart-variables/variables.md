# Variable Reference Guide

Smart variables are dynamic variables that can make your content more flexible. Each smart variable is constructed using a specific syntax called dot notation inside double mustache brackets. It's written as a hierarchy, starting with a top-level object and followed by properties of that object, `{{object.property.subProperty}}`. Notice that multiword properties use camelCase capitalization.

When you’re trying to understand what a particular smart variable might do, it can help to read them in reverse. For example:

`{{page.title}}` is "the title of the page" (that's relevant to the current page).

## Space properties

- `{{space.id}}` – the ID number that uniquely identifies a space
- `{{space.key}}` – the keyword in the URL that serves as a unique identifier of a space Example: http://confluence.atlassian.com/wiki/spaces/KEYWORD/pages
- `{{space.name}}` – the name of the space
- `{{space.type}}` – the type of the space ('global', 'collaboration', 'knowledge_base', 'personal')
- `{{space.status}}` – 'current' or 'archived'
- `{{space.createdAt}}` – space creation date and time


## Page properties

- `{{page.type}}` – identifies the type of relevant content as either a “page” or a “blogpost”
- `{{page.id}}` – the ID number that uniquely identifies a page
- `{{page.title}}` – the published title of a page

### Author

- `{{page.author.accountId}}` – accountId of the person who originally published the page
- `{{page.author.fullName}}` – the first and last name of the person who originally published the page (the “Full name” in their Atlassian account profile)
- `{{page.author.publicName}}` – the public name of the person who originally published the page (the name or handle they use in public Atlassian forums like Community)