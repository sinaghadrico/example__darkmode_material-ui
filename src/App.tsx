import React from 'react';
import Login from "./Login";
import {StateContext, StateProvider} from "./state";
import {darkTheme, lightTheme} from "./theme";
import {ThemeProvider} from '@material-ui/styles';
import "./App.css";

function App() {
  const initialState = {
    theme: 'light'
}

const reducer = (state:any, action:any) => {
    switch (action.type) {
        case 'changeTheme':
            return {
                ...state,
                theme: action.theme
            };

        default:
            return state;
    }
};


return (
    <StateProvider initialState={initialState} reducer={reducer}>
        <StateContext.Consumer>
            {(value: { theme: any; }[])=> {
                const theme=value[0].theme

                return (
                    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                        <Login/>
                    </ThemeProvider>
                )
            }
            }
        </StateContext.Consumer>
    </StateProvider>
);
}

export default App;
