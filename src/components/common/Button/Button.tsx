import React, {FunctionComponent} from 'react';

import './Button.scss'

interface ButtonProps {
  fill: boolean
}

export const Button: FunctionComponent<ButtonProps> = ({children, fill}) => {
return <button 
        className={`button_component-style 
        ${fill ? 'fill' : 'border'}`}>
          {children}
      </button>
}
