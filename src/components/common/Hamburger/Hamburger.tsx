import React, { FC } from 'react'
import { TOGGLER } from '../../../constants'

import "./Hamburger.scss"

export const Hamburger: FC = () => {


  const handleOnclick = () => {
    const toggler: HTMLInputElement = document.querySelector(TOGGLER);
    toggler.checked = false
  }

  return (
    <>
      <input type="checkbox" className="toggler" />
      <div className="hamburger"><div></div></div>
      <div className="overlay-nav-container" onClick={handleOnclick}>
        <div>
          <div>
            <ol className="ol">
              <li><a href="/#work">Work</a></li>
              <li><a href="/#skills">Skills</a></li>
              <li><a href="/#projects">Projects</a></li>
              <li><a href="/#contact">Contact</a></li>
            </ol>
          </div>
        </div>
      </div>
    </>
  )
}
