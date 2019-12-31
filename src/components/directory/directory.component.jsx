import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Ducks',
          imageUrl: 'https://media.mnn.com/assets/images/2016/02/ducks-king-eider%20copy.jpg.838x0_q80.jpg',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'Chicks',
          imageUrl: 'https://media.mnn.com/assets/images/2016/02/ducks-long-tailed.jpg.838x0_q80.jpg',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'Eggs',
          imageUrl: 'https://images.unsplash.com/photo-1557495310-580cb7deebad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'Hens',
          imageUrl: 'https://media.mnn.com/assets/images/2016/02/ducks-merganser.jpg.838x0_q80.jpg',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'Drakes',
          imageUrl: 'https://media.mnn.com/assets/images/2016/02/ducks-surf-scoter.jpg.838x0_q80.jpg',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ]
    }
  }

  render() {
    return (
      <div className='directory-menu'>
        {
          this.state.sections.map(({title, imageUrl, id, size}) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))
      }
      </div>
    );
  }
}

export default Directory;
