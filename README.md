# A full page wrapper component that can be used as a prompt on a user action

It is very common when working on react projects to want to display a prompt or notification on a specific user action.
With this component you can accomplish just that.

### How to install

```
> npm install full-page-prompt
```

### An exmple of how to use

```
> import React from 'react'
> import FullPagePrompt from 'full-page-prompt'
>
> const Example = () => (
>   <FullPagePrompt 
>   promptDisplayClass='show' // can also be 'hide'
>   promptContent='This is the content'
>   promptBackgroundColor='#000'
>   />
>);
```

### Props

```
> promptDisplayClass // string, can be 'hide' to hide prompt or 'show' to show prompt
> promptContent // string or component, the inner content of the loader(prompt).
> promptBackgroundColor // string, the background-color of the prompt
```

### License

MIT License