import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/layout';
import '../appointments.scss';

export default class Apppointments extends React.Component {
  // eslint-disable-next-line
  constructor() {
    super();
  }
  componentDidMount() {
    const script = document.createElement('script');

    script.src =
      'https://squareup.com/appointments/buyer/widget/74e9a273-56c7-4735-a2d4-bd3ae65dd244/5CERAD4DFWQXJ.js';
    script.async = false;
    console.log(document.body.childNodes[0].firstChild);
    document.body.insertBefore(script, document.body.firstChild);
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Layout>
        <Helmet title="Book Your Microblading Appointment | Microblading Boutique">
          <html lang="en" />
          <meta
            name="description"
            content="Beautiful eyebrows done by an expert. Book your appointment online now for a professional microblading session in the Chicagoland area."
          />
        </Helmet>
      </Layout>
    );
  }
}
