import React, { FC } from 'react'

import "./Hamburger.scss"

export const Hamburger: FC = () => (
  <>
    <input type="checkbox" className="toggler" />
    <div className="hamburger"><div></div></div>
    <div className="overlay-nav-container">
      <div>
        <div>
          <ol className="ol">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
          </ol>
        </div>
      </div>
    </div>
  </>
)
