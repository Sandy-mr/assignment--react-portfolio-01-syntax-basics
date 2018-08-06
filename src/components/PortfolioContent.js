import React from 'react'
import header from './header'
import Summary from './Summary'
import ContactInfo from './ContactInfo'

class folioContent extends React.Component{
  render() {
    return (
      <div className="portfolio-content">
        <header />
        <Summary />
        <ContactInfo />
      </div>
    );
  }
}

export default folioContent;
