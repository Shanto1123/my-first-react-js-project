import MyComponent from "../All-topic-reuseable/passing-props"; // Import the component

const App = () => {
  return (
    <div>
      {/* Pass props to MyComponent */}
      <MyComponent name="Alice" age={30} />

      <div>
        Props (properties) in React are incredibly versatile and serve various
        use cases. Here are some common scenarios where props are used:
        Customization: Props allow you to customize the appearance and behavior
        of a component. For example, you can pass different colors, styles, or
        text content to a component to customize its appearance based on the
        context in which it's used. Data Passing: Props are often used to pass
        data from a parent component to a child component. This is useful for
        sharing data between different parts of your application and ensuring
        that components are decoupled and reusable. Configuration: Props can be
        used to configure the behavior of a component. For instance, you can
        pass configuration settings such as whether to show or hide certain
        elements, what data to fetch from an API, or what actions to perform
        when an event occurs. Conditional Rendering: Props can determine which
        parts of a component should be rendered based on certain conditions.
        This allows for dynamic rendering logic, where different UI elements are
        displayed based on the values of props. Event Handling: Props can be
        used to pass callback functions as props to child components, allowing
        child components to communicate with their parent components. This
        enables parent components to respond to events triggered by child
        components, such as button clicks or form submissions. Composition:
        Props enable component composition, where smaller, reusable components
        are combined to create larger, more complex components. Props allow you
        to pass children components as props to other components, enabling
        flexible and composable UI designs. Localization and
        Internationalization: Props can be used to pass language or
        locale-specific data to components, allowing them to adapt their content
        based on the user's preferred language or region. Routing and
        Navigation: Props can be used to pass route parameters or navigation
        state to components, allowing them to react to changes in the URL and
        display different content based on the current route. These are just a
        few examples of how props are commonly used in React applications. Props
        are a powerful mechanism for building reusable, composable, and dynamic
        user interfaces in React, and understanding how to effectively use props
        is essential for developing React applications.
      </div>
    </div>
  );
};

export default App;
