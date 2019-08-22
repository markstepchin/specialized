import React, { useState } from "react";
import Gallery from "./Gallery";

const images = [
  "https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-dark?wid=1920&hei=640}&layer=1&src=is{Specialized/97518-32_SJ-FSR-MEN-EXPERT-CARBON-29-CKD-STRMGRY-RKTRED_HERO?wid=920&hei=600&$hybris-pdp-hero$}",
  "https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-dark-fb?wid=1920&hei=640}&layer=1&src=is{Specialized/97518-32_SJ-FSR-MEN_EXPERT-CARBON-29_STRMGRY-RKTRED_DETAIL-1?wid=1920&hei=640&$hybris-pdp-hero-exp$}",
  "https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-dark-fb?wid=1920&hei=640}&layer=1&src=is{Specialized/97518-32_SJ-FSR-MEN_EXPERT-CARBON-29_STRMGRY-RKTRED_DETAIL-2?wid=1920&hei=640&$hybris-pdp-hero-exp$}",
  "https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-dark-fb?wid=1920&hei=640}&layer=1&src=is{Specialized/97518-32_SJ-FSR-MEN_EXPERT-CARBON-29_STRMGRY-RKTRED_DETAIL-3?wid=1920&hei=640&$hybris-pdp-hero-exp$}"
];

const details = {
  title: 'Stumpjumper EVO Comp Carbon 27.5',
  price: '4,520.00',
  partNumber: '97519-5402',
}

const description = {
  intro: "Ever had a ride that felt more like an experience than just a ride? Us, too, and we've been chasing that feeling ever since. With the Stumpjumper Expert 29, we've bottled up that feeling and put into a radical new frame design that's so in-tune with the trail, the bike feels like an extension of your body. Seriously, it's going to make you rethink how a trail bike should ride.",
  description: [
    "Our design goal for the new Stumpjumper was simple—build the ultimate trail bike, one that feels telepathic. And it turns out that this feeling all comes down to stiffness. Think of it this way: when the frame's telling your hands one thing and your feet another, your brain gets confused with the imbalance and the bike feels unstable. In order to fix this, we had to get to work on dialing-in the materials, shapes, and the layout.",
    "We started by creating our own mountain-specific stiffness test, and then we looked at the layout with Finite Element Analysis (FEA) to see where we could get the biggest stiffness improvements. This led to a big discovery: The Large and X-Large frames needed more front-end stiffness while the Smalls and Mediums were just fine. We were able to create a frame design that was 20% more efficient. And in the end, this proved to be one of the lightest trail frames on the market, today.",
    "When designing the frame with the stiffness targets being a main goal, we developed a radical new sidearm design. The front-end and rear-end are connected at three points, and the sidearm helps keep all these points super stiff and connected, all while taking about 100 grams out of the rear-end. More explicitly, this minimizes frame flex when the rear suspension is active.",
    "We continued down the suspension path with a custom Rx Trail Tune on both the fork and rear shock. Suspension performance is highly dependent on frame, wheel, and rider size, so we use our Rx Tune to get each bike to land in the middle of the adjustment spectrum, and this gives you the biggest possible range to fine-tune your ride. Another focal point of the tune was matching the suspension characteristics between wheel sizes—we developed a specific Rx Tune for each platform. So, no matter what wheel size you prefer, you’ll get perfectly linear suspension.",
    "Steps were also taken to make this bike easy to live with. Threaded bottom brackets make a triumphant return, and we made room for up to a 3.0\" tire. You're also free to run whatever aftermarket rear shock you want, since we're using standard metric shocks. We revamped the SWAT™ box, too, making it sleeker, lighter, and with more volume. And customization is furthered with a Flip Chip that lets you to dial-in your Stumpy to your riding style. Switch it from High to Low and it drops your bottom bracket 6mm and slackens the head tube by half-a-degree. Little details also jump out to surprise you, like a newly designed ribbed chainstay protector that makes chain slap a thing of the past and nearly silences the drivetrain. Lastly, we seriously couldn’t make cable routing any easier on carbon models. Full tubes can be found throughout the carbon frame, so all you have to do is push the cable and it’ll come out the other end. No more lazy loop, hidden stashes of magnets, pokey spokes, or pillows to cry in.",
    "For the build, you get a solid components package with a full SRAM GX1 Eagle drivetrain, SRAM Guide R disc brakes, RockShox front and rear suspension (150/140mm of travel respectively), and Roval Traverse Carbon 29 wheels.",
  ],
  list: [
    "The Stumpjumper's asymmetrical, FACT 11m carbon fiber construction is lightweight, stiff, and ready to take on the trail. It's built off our 29 Trail Geometry, so it's just the right amount of both capable and comfortable. And with SWAT™ integration in the down tube, a threaded BB, easy cable routing, and an all new chain silencer, it's ready for anything the trail, or you, throw at it.",
    "With three different compression adjustments—open/pedal/lock—incredible damping performance, and our Rx Trail Tune, the RockShox Deluxe RT3 perfectly complements the Stumpjumper.",
    "RockShox's Pike is known for its trail performance, and the RC found here has stiff stanchions, a Charger damper, and plenty of sensitivity."
  ]
};

const specs = [
  {
    title: 'drivetrain',
    items: [
      {
        spec: 'BOTTOM BRACKET',
        item: 'SRAM GXP'
      },
      {
        spec: 'CHAIN',
        item: 'SRAM GX Eagle, 12-speed'
      },
      {
        spec: 'CRANKSET',
        item: '	Truvativ Descendant, aluminum, Boost™ 148, 170mm crankarm, 24mm spindle'
      },
      {
        spec: 'SHIFT LEVERS',
        item: '	SRAM GX Eagle, trigger, 12-speed'
      },
      {
        spec: 'CASSETTE',
        item: '	SRAM GX Eagle, 12-speed, 10-50t'
      },
      {
        spec: 'CHAINRINGS',
        item: '30T'
      },
    ]
  },
  {
    title: 'suspension',
    items: [
      {
        spec: 'FORK',
        item: 'RockShox Pike RC, DebonAir, rebound/low-speed compression adjust, tapered steerer, 51mm offset, 15mm Maxle® Stealth thru-axle, 15x110mm Boost™, 150mm of travel'
      },
      {
        spec: 'REAR SHOCK',
        item: '	RockShox Deluxe RT3, Rx Trail Tune, rebound & 3-position compression adjust, 210x50mm'
      }
    ]
  },
  {
    title: 'cockpit',
    items: [
      {
        spec: 'SADDLE',
        item: '	Body Geometry Phenom Comp, hollow Cr-Mo rails, 143mm'
      },
      {
        spec: 'SEAT BINDER',
        item: 'Specialized bolt-type, alloy, 38.6mm'
      },
      {
        spec: 'SEAT POST',
        item: '	Command Post IRcc, 16-position micro-height adjustable, two-bolt head, bottom mount cable routing, remote SRL lever, 34.9mm, S: 130mm, M/L/XL: 160mm of travel'
      },
      {
        spec: 'HANDLEBARS',
        item: '	Specialized Trail, 7050 alloy, 8-degree backsweep, 6-degree upsweep, 27mm rise, 780mm, 31.8mm clamp'
      },
      {
        spec: 'STEM',
        item: '	Specialized Trail, forged alloy, 4-bolt, 5mm rise'
      },
      {
        spec: 'GRIPS',
        item: '	Specialized Sip grip, half-waffle, S/M: regular thickness, L/XL: XL thickness'
      }
    ]
  },
  {
    title: 'wheels & tires',
    items: [
      {
        spec: 'FRONT HUB',
        item: '	Specialized, sealed cartridge bearings, 15x110mm spacing, 28h'
      },
      {
        spec: 'REAR HUB',
        item: '	Specialized, sealed cartridge bearings, 12x148mm thru-axle, 28h'
      },
      {
        spec: 'INNER TUBES',
        item: 'Standard, Presta valve'
      },
      {
        spec: 'SPOKES',
        item: '	DT Swiss Industry'
      },
      {
        spec: 'RIMS',
        item: 'Roval Traverse Carbon 29, hookless carbon, 30mm inner width, hand-built, tubeless ready, 28h'
      },
      {
        spec: 'FRONT TIRE',
        item: 'Butcher, GRID casing, GRIPTON® compound, 2Bliss Ready, 29x2.6"'
      },
      {
        spec: 'REAR TIRE',
        item: '	Purgatory, GRID casing, GRIPTON® compound, 2Bliss ready, 29 x2.6"'
      },
    ]
  },
  {
    title: 'brakes',
    items: [
      {
        spec: 'FRONT BRAKE',
        item: '	SRAM Guide R, hydraulic disc, organic pads, Guide S4 4-piston caliper, 200mm'
      },
      {
        spec: 'REAR BRAKE',
        item: 'SRAM Guide R, hydraulic disc, organic pads, Guide S4 4-piston caliper, 180mm'
      }
    ]
  },
  {
    title: 'accessories',
    items: [
      {
        spec: 'PEDALS',
        item: '	Specialized Dirt'
      }
    ]
  },
  {
    title: 'frameset',
    items: [
      {
        spec: 'FRAME',
        item: 'FACT 11m, full carbon chassis and rear-end, asymmetrical design, 29 Trail Geometry, SWAT™ Door integration, threaded BB, fully enclosed internal cable routing, 12x148mm dropouts, sealed cartridge bearing pivots, replaceable derailleur hanger, 140mm of travel'
      }
    ]
  }
]

const ProductPage = () => (
  <div id='product-page-container'>
    <Gallery images={images}/>
    <DisplayFooter details={details}/>
    <Description description={description}/>
    <TechnicalSpecs specs={specs}/>
    <Reviews />
  </div>
);

const DisplayFooter = ({ details: { title, price, partNumber } }) => (
  <section id='display-footer-container'>
    <div className='section-1'>
      <h2 className='display-title'>
        {title}
      </h2>
      <h3 className='display-price'>
        ${price}
      </h3>
      <p className='display-partNumber'>
        Part No.{' '}{partNumber}
      </p>
    </div>

    <span className='in-stock'>In Stock</span>

    <div className='section-3'>
      <button>add to cart</button>
      <button>tune my suspension</button>
      <button>find nearby</button>
    </div>
  </section>
);

const Description = ({ description: { intro, description, list } }) => {
  const [more = false, setMore] = useState(0);

  return (
    <section id='product-description-container'>
      <div className='container'>
        <p>
          {intro}
        </p>

        <p style={{ display: `${more ? 'inline' : 'none'}`}}>
          {description.map(text => <p>{text}</p>)}
        </p>
  
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button onClick={() => setMore(!more)}>
            {`read ${more ? 'less' : 'more'}`}
          </button>
        </div>
  
        <p className='bullet-points'>
          <ul>
            {list.map(text => <li>{text}</li>)}
          </ul>
        </p>
      </div>
    </section>
  );
}

const TechnicalSpecs = ({ specs }) => (
  <section id='specs-manual-container'>
    <div className='container'>
      <button>Manual Downloads</button>
      <div id='specs-container'>
        <h3>Technical Specifications</h3>

        <div className='spec-section'>
          {specs.map(section => (
            <>
              <h4>{section.title}</h4>
              {section.items.map(item => (
                <div className='individual-spec'>
                  <h5>{item.spec}</h5>
                  <p>{item.item}</p>
                </div>
              ))}
            </>
          ))}
        </div>

      </div>
    </div>
  </section>
);

const Reviews = () => (
  <section id='review-container'>
    <h1>Reviews</h1>
    <div className='star-container'>
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
      <ion-icon name="star"></ion-icon>
    </div>
    <button>Be the first to write a review!</button>
  </section>
);

export default ProductPage;
