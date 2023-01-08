import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Customization',
    Svg: require('@site/static/img/customization.svg').default,
    description: (
      <>
       Kinetic Glass helps you to customize your UI components in very efficient way!
       you can customize the whole with a little bit effort
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/react.svg').default,
    description: (
      <>
        Kinetic Glass is compatible with all react frameworks, you can also use our components in TypeScript 
        <br></br><code>npm i @kinetic-glass-ui</code>.
      </>
    ),
  },
  {
    title: 'Theming',
    Svg: require('@site/static/img/styling.svg').default,
    description: (
      <>
        It's Theming is amazing and customizable.
        with all these amazing things you can get a glassy Effect with your component by adding just one prop
        <br></br><code>glassy</code>
      </>
    ),
  },
  {
    title: 'Implementation',
    Svg: require('@site/static/img/code.svg').default,
    description: (
      <>
        it's very easy to use you can get help with our documentation.
        We have explained how to use each component.
      </>
    ),
  },
  {
    title: 'Learning',
    Svg: require('@site/static/img/learning.svg').default,
    description: (
      <>
        You can learn how to use our library within 5 minutes.
        You can learn more about our documentation on youtube.
      </>
    ),
  },
  {
    title: 'Earning $',
    Svg: require('@site/static/img/money.svg').default,
    description: (
      <>
        you can start your Earnings by submitting your amazing work.
      <br></br>  <a href="http://">kinetic-store.com</a>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
