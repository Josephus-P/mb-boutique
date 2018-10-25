import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import '../scss/appointments.scss';

export default class Apppointments extends React.Component {
  componentDidMount() {
    const script = document.createElement('script');

    script.src =
      'https://squareup.com/appointments/buyer/widget/74e9a273-56c7-4735-a2d4-bd3ae65dd244/5CERAD4DFWQXJ.js';
    script.async = false;
    document.body.insertBefore(script, document.body.firstChild);
  }

  componentWillUnmount() {
    let element = document.getElementsByTagName('IFRAME');

    if (element != null && element.length > 0)
      document.body.removeChild(element.item(0));
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
