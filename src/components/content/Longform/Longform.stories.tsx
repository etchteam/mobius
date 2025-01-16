import { Meta } from '@storybook/react';
import React from 'react';

import Longform from './Longform';

export default {
  title: 'Components/Content/Longform',
  component: Longform,
} as Meta;

export function Default() {
  return (
    <Longform>
      <h2>Lorem ipsum dolor sit amet</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
        tortor eget est aliquam hendrerit ac vitae lacus. Vestibulum dapibus
        feugiat lobortis. Quisque pharetra mattis dolor, sit amet dapibus augue
        interdum at. Sed eros orci, vulputate nec hendrerit varius, tempor sed
        lacus. Morbi interdum metus a nisi dictum ornare. Duis eget lectus
        volutpat, consectetur erat ac, gravida justo. Nam vitae lectus ac risus
        tristique maximus. Maecenas ante purus, venenatis eu elementum vitae,
        dignissim sit amet massa. Aenean id nibh tellus. Nullam dapibus ex vitae
        hendrerit gravida. Aliquam eleifend maximus blandit. Ut in porttitor
        elit. Aenean commodo tempus molestie. Morbi non nisl sit amet odio
        consectetur cursus. Nullam quis tincidunt lectus.
      </p>
      <h3>Ut vel purus a nisi pretium</h3>
      <p>Ut vel purus a nisi pretium suscipit sit amet mattis dui.</p>
      <p>
        Morbi felis diam, bibendum nec purus fringilla, rhoncus pharetra odio.
        Mauris iaculis quam non odio posuere efficitur. Etiam convallis mattis
        diam a sollicitudin. Sed nec erat luctus, euismod mi ac, molestie dui.
        Curabitur a mauris eget massa suscipit placerat eget ac orci. Donec eget
        ipsum rutrum, pellentesque arcu ut, accumsan tortor. Curabitur id mi
        consequat, efficitur metus a, sollicitudin dolor. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Fusce eu dui libero. Nulla ornare libero a ligula suscipit eleifend.
      </p>
      <h3>Cras quis bibendum neque</h3>
      <p>
        Cras quis bibendum neque, ut fringilla eros. Quisque laoreet lectus leo,
        quis fringilla ipsum consectetur eget. Pellentesque risus eros, aliquet
        id eleifend vitae, sodales ut erat. Donec fringilla, sem ut feugiat
        rhoncus, massa ante mattis erat, nec finibus mauris magna non dui.
        Suspendisse porttitor, ex nec blandit malesuada, elit sem vestibulum
        eros, vel efficitur mauris leo in libero. Donec risus sapien, tempus sed
        velit congue, consequat efficitur risus. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas. Etiam
        eu neque sapien. Ut a eros feugiat, elementum dui a, suscipit felis.
        Suspendisse tristique a nulla et condimentum. Duis lobortis dolor sed
        mauris mollis, ac vulputate tellus sagittis. Duis tortor erat, tincidunt
        sed varius ac, fermentum in ipsum. Praesent quis laoreet sapien. Quisque
        aliquam odio et lectus sollicitudin commodo. Curabitur eget cursus ante.
        Quisque iaculis nulla at neque scelerisque, sed euismod leo fringilla.
      </p>
      <ul>
        <li>A</li>
        <li>Bulleted list</li>
        <li>Of meaningless text</li>
      </ul>
      <p>
        Cras quis bibendum neque, ut fringilla eros. Quisque laoreet lectus leo,
        quis fringilla ipsum consectetur eget. Pellentesque risus eros, aliquet
        id eleifend vitae, sodales ut erat. Donec fringilla, sem ut feugiat
        rhoncus, massa ante mattis erat, nec finibus mauris magna non dui.
        Suspendisse porttitor, ex nec blandit malesuada, elit sem vestibulum
        eros, vel efficitur mauris leo in libero. Donec risus sapien, tempus sed
        velit congue, consequat efficitur risus. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas. Etiam
        eu neque sapien. Ut a eros feugiat, elementum dui a, suscipit felis.
        Suspendisse tristique a nulla et condimentum. Duis lobortis dolor sed
        mauris mollis, ac vulputate tellus sagittis. Duis tortor erat, tincidunt
        sed varius ac, fermentum in ipsum. Praesent quis laoreet sapien. Quisque
        aliquam odio et lectus sollicitudin commodo. Curabitur eget cursus ante.
        Quisque iaculis nulla at neque scelerisque, sed euismod leo fringilla.
      </p>
      <h2>Numbered list</h2>
      <ol>
        <li>Number 1</li>
        <li>Number 2</li>
        <li>Number 3</li>
      </ol>
    </Longform>
  );
}

Default.storyName = 'Longform';
