import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

const MBAccordian = () => (
  <Accordion>
    <AccordionItem>
      <AccordionItemTitle>
        <h5 className="u-position-relative">
          Microblading + Shading
          <div className="accordion__arrow" role="presentation" />
        </h5>
      </AccordionItemTitle>
      <AccordionItemBody>
        <p>
          Adding shading to a Microblading treatment is perfect for anyone with
          thin or thick brow hair, missing spots, or previous
          micropigmentation/tattoo. It creates a fuller and more defined look.
          Shading is used to fill in pigment between Microblading strokes which
          creates a soft, powdered effect. We will not be able to tattoo over
          any blemishes, sores and moles in or around the brow area.
        </p>
      </AccordionItemBody>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemTitle>
        <h5 className="u-position-relative">
          What is the difference between microblading and standard body
          tattooing?
          <div className="accordion__arrow" role="presentation" />
        </h5>
      </AccordionItemTitle>
      <AccordionItemBody>
        <p>
          The purpose of microblading is to enhance the features with what
          appears to be undetected, natural looking eyebrows. Microblading is
          more subtle – it is meant to be a natural-looking enhancement.
          Traditional body tattoos use electric tools and ink while microblading
          procedures involve pigments and a manual hand tool.
        </p>
      </AccordionItemBody>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemTitle>
        <h5 className="u-position-relative u-margin-bottom-s">
          Who is microblading for?
          <div className="accordion__arrow" role="presentation" />
        </h5>
      </AccordionItemTitle>
      <AccordionItemBody>
        <p>
          If you want to effortlessly look your best anytime, then microblading
          is for you! If you want to look younger healthier and more vibrant,
          permanent makeup does wonders! If you’re a busy mom, business woman or
          have an active lifestyle you’ll save hours every week not having to
          stand in front of the mirror slaving over applying makeup. Not to
          mention you won’t have to worry about sweating it off during a workout
          or melting by the end of an evening out.
        </p>
      </AccordionItemBody>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemTitle>
        <h5 className="u-position-relative">
          Does it hurt?
          <div className="accordion__arrow" role="presentation" />
        </h5>
      </AccordionItemTitle>
      <AccordionItemBody>
        <p>
          Everyone has a different level of sensitivity. An anesthetic gel is
          applied for numbing during the procedure to alleviate discomfort.
          Every effort is made to ensure you remain comfortable for the duration
          of the procedure. Clients are usually pleased to discover that it is
          no more painful than having your eyebrows tweezed or threaded.{' '}
          <strong>PLEASE NOTE:</strong> Having this service performed during
          your menstrual cycle may increase discomfort during your procedure. If
          you are a frequent smoker, the topical anesthetics used during the
          treatment will not last as long. If you have been diagnosed with
          Fibromyalgia, be aware that this may affect your sensitivity tolerance
          to the procedure. We ask that you arrive 15 min prior to appointment
          time to go over Health screening.
        </p>
      </AccordionItemBody>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemTitle>
        <h5 className="u-position-relative">
          How long is the healing process?
          <div className="accordion__arrow" role="presentation" />
        </h5>
      </AccordionItemTitle>
      <AccordionItemBody>
        <p>
          It is normal to experience minimal swelling and tenderness following
          your procedure. It doesn’t take very long for it to disappear.
          Immediately following your treatment the pigment will appear darker
          than how it will appear once it has healed. Around week 2, the surface
          color naturally exfoliates to leave a softer color. During week 3 & 4
          when the skin completes healing, you will see the pigment darken a
          bit. An enhancement session visit approximately 6 weeks after your
          initial appointment is necessary in order to achieve that richness of
          color and density in the shape.
        </p>
      </AccordionItemBody>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemTitle>
        <h5 className="u-position-relative">
          Do my existing eyebrows need to be shaved off?
          <div className="accordion__arrow" role="presentation" />
        </h5>
      </AccordionItemTitle>
      <AccordionItemBody>
        <p>
          No, please do not tweeze, thread, wax or modify your eyebrows in any
          way for as long as possible, and no sooner than two weeks. Your
          regular brow maintenance of tweezing, threading, waxing and/or tinting
          may continue once the brows have healed.
        </p>
      </AccordionItemBody>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemTitle>
        <h5 className="u-position-relative">
          How long does microblading last?
          <div className="accordion__arrow" role="presentation" />
        </h5>
      </AccordionItemTitle>
      <AccordionItemBody>
        <p>
          Microblading is a permanent makeup applied to the skin. The pigment
          will fade over time and we recommend to get a touch up annually to
          keep them looking their best. There is no guarantee in how long it
          lasts as each individual's skin will respond differently. Frequency of
          touch-ups depends on a number of factors including: skin type, pigment
          selection, lifestyle (sun exposure), iron deficiency (your body
          absorbs iron-oxide as a supplement), chemical peels, etc. Please note
          that final results can not be guaranteed as each unique skin type will
          hold pigments differently and break down at different rates. We will
          re-evaluate how your skin has received the pigment at your touch-up
          appointment and make any changes necessary.
        </p>
      </AccordionItemBody>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemTitle>
        <h5 className="u-position-relative">
          How many treatments are needed?
          <div className="accordion__arrow" role="presentation" />
        </h5>
      </AccordionItemTitle>
      <AccordionItemBody>
        <p>
          For microblading, at least two appointments are needed initially at
          least 6-8 weeks apart. At the second treatment we will assess the
          color retention and make adjustments as necessary. Everyone heals
          differently and at different rates.
        </p>
      </AccordionItemBody>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemTitle>
        <h5 className="u-position-relative">
          What factors will affect microblading?
          <div className="accordion__arrow" role="presentation" />
        </h5>
      </AccordionItemTitle>
      <AccordionItemBody>
        <p>
          <strong>Sun exposure:</strong> The sun will extremely soften the look
          of your pigment, so a physical sunscreen should be used (once healed)
          to prolong your enhancement.{' '}
          <strong>The regeneration of skin cells:</strong> The longer the
          regeneration takes, the longer the pigment holds.{' '}
          <strong>The speed at which the skin absorbs the pigment:</strong> The
          slower the absorption, the longer the pigment will hold.{' '}
          <strong>The choice of pigment color:</strong> Some colors may fade
          quicker than others, e.g. a blonde pigment may fade quicker than a
          dark brunette pigment. <strong>Bleeding during the procedure:</strong>{' '}
          Any bleeding during the tattooing procedure will reduce the amount of
          pigment absorption. Caffeine, alcohol and certain medications act as
          blood-thinners and should be avoided 48 hours prior to your
          appointment.
        </p>
      </AccordionItemBody>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemTitle>
        <h5 className="u-position-relative">
          What should I do before my eyebrow procedure?
          <div className="accordion__arrow" role="presentation" />
        </h5>
      </AccordionItemTitle>
      <AccordionItemBody>
        <p>
          If you have an ideal shape and color in mind, please bring a couple of
          reference photos with you to your appointment. You may fill in your
          eyebrows as you normally would so we may take into consideration the
          shape you feel most comfortable with. If you regularly get your
          eyebrows shaped, waxed, threaded or tinted, please refrain from doing
          so within a week of your appointment. If there are any stray hairs
          that fall outside of our final shape, we can remove them. If you plan
          to go on a vacation, it is recommended to plan your trip a minimum of
          30 days after the procedure. We require our clients to avoid any blood
          thinning medication for a minimum of 48 hours prior to their
          appointment. This includes Vitamin E, Aspirin, Niacin, fish oil
          supplements, and Ibuprofen. NO Botox for 4 weeks prior to microblading
          and No Botox 4 weeks after microblading (We recommend that it's best
          to wait until after your touch up heals to get Botox, as an educated
          injector will take your new brows into consideration when choosing
          where to inject.) If you have been on prescription Accutane in the
          past, you MUST wait at least 6 months before considering this
          procedure. It is highly recommended that you avoid SUN and TANNING BED
          exposure for 30 days BEFORE and AFTER your procedure. If you show up
          for your appointment with a new tan or a sunburn, you will need to
          reschedule and will forfeit your deposit. As your skin exfoliates from
          a sunburn, it will take the pigment with it.
        </p>
      </AccordionItemBody>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemTitle>
        <h5 className="u-position-relative">
          How will I look immediately after?
          <div className="accordion__arrow" role="presentation" />
        </h5>
      </AccordionItemTitle>
      <AccordionItemBody>
        <p>
          Your brows will appear darker and more intense than expected for the
          first week or so. This will gradually lighten during the complete
          healing process. Redness and swelling is minimal. Please view our
          detailed Before &amp; Aftercare Instructions.
        </p>
      </AccordionItemBody>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemTitle>
        <h5 className="u-position-relative">
          What should I do after the procedure?
          <div className="accordion__arrow" role="presentation" />
        </h5>
      </AccordionItemTitle>
      <AccordionItemBody>
        <p>
          Please review our detailed Pre &amp; Post Care Instructions. It is
          highly beneficial to follow these instructions to ensure a comfortable
          healing process and to achieve the best possible results. DO NOT rub
          or pick the healing area as the color will peel off prematurely and
          avoid extreme heat, sweating, and contaminated bodies of water (such
          as saunas, hot tubs, steam rooms, pools, lakes, and places with hot
          humidity, etc.).
        </p>
      </AccordionItemBody>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemTitle>
        <h5 className="u-position-relative">
          What should I know about long term care?
          <div className="accordion__arrow" role="presentation" />
        </h5>
      </AccordionItemTitle>
      <AccordionItemBody>
        <p>
          The color will lighten over time. We recommend an annual touch up to
          keep brows looking their best. Fading greatly depends on your skin
          type, lifestyle, sun exposure, pigment color used, broken capillaries,
          iron deficiency and if any chemical peels were done after your
          procedure. If you are planning a chemical peel, MRI or other medical
          procedure, please inform the technician that you have had an
          iron-oxide cosmetic procedure . Careful application must be taken to
          avoid affecting the microbladed area. If you are planning to have
          laser treatments, tell your laser specialist to avoid the pigmented
          area. Laser may cause pigment to turn black.
        </p>
      </AccordionItemBody>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemTitle>
        <h5 className="u-position-relative">
          Will microblading work well for me?
          <div className="accordion__arrow" role="presentation" />
        </h5>
      </AccordionItemTitle>
      <AccordionItemBody>
        <p>
          If you have extremely oily skin, the microblading technique may NOT
          work well for you. The constant production of oil will cause the
          hairstrokes to heal with a diffused, softer look. Your end result will
          look more powdered instead of a crisp hair stroke appearance. If you
          are a frequent smoker, your pigment will fade sooner.
        </p>
      </AccordionItemBody>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemTitle>
        <h5 className="u-position-relative">
          Do you tattoo men’s eyebrows?
          <div className="accordion__arrow" role="presentation" />
        </h5>
      </AccordionItemTitle>
      <AccordionItemBody>
        <p>
          Yes!! We are happy to accommodate consultations for men interested in
          microblading.
        </p>
      </AccordionItemBody>
    </AccordionItem>
    <AccordionItem>
      <AccordionItemTitle>
        <h5 className="u-position-relative">
          How long does it take?
          <div className="accordion__arrow" role="presentation" />
        </h5>
      </AccordionItemTitle>
      <AccordionItemBody>
        <p>
          Expect to be with me for 3 hours depending on your eyebrow needs....
        </p>
      </AccordionItemBody>
    </AccordionItem>
  </Accordion>
);

export default MBAccordian;
