// Import the React library. 
// React is necessary to define React components and use JSX syntax. 
// Even though React 17+ does not require importing React explicitly in every file 
// when using JSX, we still include it here to ensure compatibility and for educational clarity.
import React from 'react';

// Define a TypeScript interface for the props that the component will receive.
// TypeScript interfaces are used to enforce the shape and types of data passed to components.
// This interface is used to describe the structure of the props expected by the `Hello` component.
interface HelloProps {
    // The `name` prop will be of type `string`.
    // This means the `name` prop should always be a string when passed to the `Hello` component.
    name: string;  // Note: TypeScript type for string is lowercase "string", not "String"
}

// Define a functional React component called `Hello`.
// The `Hello` component is a functional component because it is defined as a function that returns JSX.
// `React.FC<HelloProps>` tells TypeScript that this is a React Functional Component
// and it will accept `HelloProps` as its props.
const Hello: React.FC<HelloProps> = ({ name }) => {
    // Return a JSX element that renders an <h1> HTML tag with a greeting message.
    // The message "Hello, {name}!" is dynamically rendered, 
    // where `{name}` is replaced with the actual `name` prop value passed to the `Hello` component.
    return <h1>Hello, {name}!</h1>;
};

// This line exports the `Hello` component so it can be imported and used in other parts of the application.
// Without this, the `Hello` component would be scoped only to this file and could not be used outside of it.
export default Hello;
