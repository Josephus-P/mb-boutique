import React from 'react';
import Helmet from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import Layout from '../components/layout';
import { TweenLite } from 'gsap';
import 'typeface-playfair-display';
import '../scss/policy.scss';

export default class Policy extends React.Component {
  constructor(props) {
    super(props);

    this.policy = null;
  }

  componentDidMount() {
    this.policy = document.getElementsByClassName('policy').item(0);

    TweenLite.from(this.policy, 2, { opacity: 0 });
  }

  render() {
    return (
      <Layout>
        <Helmet title="Our Policy | Microblading Boutique">
          <html lang="en" />
          <meta
            name="description"
            content="Beautiful eyebrows done by an expert. Book your appointment online now for a professional microblading session in the Chicagoland area."
          />
        </Helmet>
        <Container className="policy">
          <Row>
            <Col>
              <h1>Microblading Policy</h1>
              <p>
                Your procedure appointment date and time is reserved exclusively
                for you to ensure personalized service. A $50 non-refundable
                deposit is required for all appointments to reserve your date
                and time. The deposit is applied to your services and the
                remaining balance will be due at the time of your appointment.
                Appointments are available via online booking or feel free to
                give us a call at 773-793-3269
              </p>
              <h5>Microblading Touch-Ups</h5>
              <p>
                All Microblading procedures require two touch-up sessions 6-8
                weeks apart. This touchup is crucial for the best results. It is
                the client’s responsibility to book a follow-up appointment 6 to
                8 weeks after first treatment. Anything longer than eight weeks
                is subject to a set up tray fee of $200. No-show for second
                session appointment will automatically be forfeited. Additional
                touch-up appointments may be needed for oily, problematic skin,
                and those who do not follow after care instructions properly at
                an additional fee.
              </p>
              <h5>Existing Brow Tattoos</h5>
              <p>
                Clients that have had Permanent Makeup performed by another
                technician will need a consultation. We request that you email
                us a clear photo of your brows for approval to
                microbladingboutique@gmail.com
              </p>
              <h5>Skin Sensitivities</h5>
              <p>
                Clients with skin sensitivities or have allergic reactions to
                hair dye require a patch test. Fee $50 for (30 minute
                appointment)
              </p>

              <h5>State Laws</h5>
              <ol>
                <li>Must be at least 18 years old to receive service.</li>
                <li>A government issued photo ID must be presented.</li>
                <li>
                  Because we are a licensed tattoo establishment, NO CHILDREN OR
                  PERSONS UNDER THE AGE OF 18 ARE ALLOWED IN OUR FACILITY.
                </li>
                <li>
                  Procedure cannot be performed on skin surfaces where sunburn,
                  rash, infection, open lesions, or other questionable skin
                  lesions exist and will not be performed on any person who is
                  impaired by drugs or alcohol.
                </li>
                <li>
                  We can refuse service to any individual, at any time, and for
                  any reason.
                </li>
              </ol>
              <p>
                <strong>PLEASE NOTE:</strong> Microblading is a multiple-step
                appointment process. Healed results will vary with each
                individual client, and due to the nature of the procedure, NO
                guarantees will be made. Additional sessions (at an additional
                charge) may be required to obtain optimal desired results.
                Although we give our best efforts to provide you with quality
                service, many factors can result in a less than desired outcome
                as each client will heal differently. In order for your new
                brows to heal properly (and look their very best) following all
                Pre & Post Care Instructions is crucial! Pre Care Instructions
                are designed to limit bleeding and skin sensitivities during the
                service. Excessive bleeding during the procedure can dilute and
                expel the pigment color and lead to poor results. Brows are NOT
                meant to stay as dark as they initially appear immediately after
                procedure. Your brows are gradually and continuously getting
                lighter as your skin is always naturally regenerating and
                exfoliating itself. Yearly color boost are recommended to keep
                your brows looking their best.
              </p>
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}
