import MenuItem from 'app/shared/layout/menus/menu-item';
import React from 'react';
import { Translate, translate } from 'react-jhipster';
import { NavLink as Link } from 'react-router-dom';
import { DropdownItem } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NavDropdown } from './menu-components';

export const ModuleEntitiesMenu = props => (
  // tslint:disable-next-line:jsx-self-close
  <NavDropdown icon="th-list" name={translate('global.menu.entities.main')} id="entity-menu">
    <MenuItem icon="asterisk" to="/modules/new-comer">
      <Translate contentKey="global.menu.entities.newComer" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/modules/city">
      <Translate contentKey="global.menu.entities.city" />
    </MenuItem>
    {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
  </NavDropdown>
);
