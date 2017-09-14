import React from 'react';

export default class AboutUs extends React.Component {
  render () {
    return (
      <div>
          <div id='About'>
            <div className='Para1'>
              <h4 style={{color: 'red', fontWeight: '600', textShadow: '1px 1px 2px black'}}>About Us</h4>
                <p>Gary Wolfelt, long time Lafayette resident, opened Wolfelt Security in _____.
                After several years as President of the company,
                Gary took on three partners and began All -Star Electronic Security Systems in _____.
                </p>

                <p>All-Star adopted a team approach to doing business and developed a market based on this teamwork in the likeness of a baseball team.
                Advertisements were developed around this theme.
                </p>

                <p>In _____, Gary made the decision to ease into retirement. The business was acquired by Casey Ratcliff,
                the current President of All-Star Electronic Security Systems, Inc.
                Casey had been a part of the business since ______ as an installer, sales and as a partner.
                Casey prides himself on providing professional, customized security services for the greater Lafayette, West Lafayette, and surrounding communities.
                As a longtime resident of Lafayette, Casey firmly stands by his commitment to quality customer service and to our community.
                He is a member of several business associations including the Builders Association of Greater Lafayette (BAGL).
                He also is a supporter of community organizations including the Columbian Park Zoo, …
                </p>
            </div>
            <div className='Para2'>
                  <h4 style={{color: 'red', fontWeight: '600', textShadow: '1px 1px 2px black'}}>Services</h4>

                  <p>All-Star Electronic Security Systems, Inc. provides personal attention to our Customer.
                  Our phones are answered 24 hours daily by an employee of the company not a computer or an operator providing a unique customer service oriented solution to security issues.
                  We provide both commercial and residential security solutions including fire panels, video surveillance, access control and monitoring services.
                  </p>

                  //Will need photos + bios by week three
                  <h4>Our Team (photos and self-written bios)</h4>

                  <h4 style={{color: 'red', fontWeight: '600', textShadow: '1px 1px 2px black'}}>Contact Us</h4>
                  We are located in the heart of downtown Lafayette at
                  812 Main Street
                  Lafayette, IN 47901
                  (map) (photo)
                  Phone: 765-742-2222
                  Our phones are answered 24 hours a day, 7 days a week.
                  Email: info@allstarsecurity.biz
                  Follow us on Facebook!
                  For Alarm assistance call our Central Monitoring Station direct at: 1-800-932-3822

                  // Base Layout for an input form for contacting via email

                  Contact form:
                  Name
                  Company Name (optional)
                  Phone
                  Email Address
                  Request

                  // Whole sheet? Lots of text....?

                  What to Do in Case of Alarm
                  Info from “What to Do” sheet

                  Products

                  Our services are limited to technological security solutions allowing us to be fully committed to your safety.
                  Bosch
                  Interlogix
                  Truvision
                  AES
            </div>
        </div>
      </div>
    )
  }
}
