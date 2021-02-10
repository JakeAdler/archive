import styled from 'styled-components';
import propTypes from '@styled-system/prop-types';
import { compose, space, color, layout, background, border, position, variant, typography, flexbox } from 'styled-system';
import React from 'react';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var themed = function themed(key) {
  return function (props) {
    return props.theme[key];
  };
};

var Box = styled('div')({
  boxSizing: "border-box"
}, compose(space, color, layout, background, border, position, variant), themed('Box'));
Box.propTypes = _extends({}, propTypes.space, {}, propTypes.color, {}, propTypes.layout, {}, propTypes.background, {}, propTypes.border, {}, propTypes.position, {}, propTypes.variant);

var Button = styled(Box)({
  appearance: 'none',
  textAlign: 'center',
  lineHeight: 'inherit',
  textDecoration: 'none',
  cursor: 'pointer'
}, typography, themed('Button'));
Button.propTypes = _extends({}, propTypes.typography);
Button.defaultProps = {
  display: 'inline-block',
  p: 2,
  border: '1px solid #000'
};

var Flex = styled(Box)({
  display: 'flex'
}, flexbox, themed('Flex'));
Flex.propTypes = _extends({}, propTypes.flexbox);

var Text = styled(Box)(typography, themed('Text'));
Text.propTypes = _extends({}, propTypes.typography);

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n    border: none;\n    border-bottom: 1px solid ", ";\n    background-color: transparent;\n    display: block;\n    margin: 0 0 1em;\n    height: 1.5rem;\n    caret-color: ", ";\n    ::placeholder {\n      font-size: 1rem;\n      color: ", ";\n    }\n    &:focus {\n        outline: 0;\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Input = styled(Text).attrs(function (props) {
  return {
    type: props.type ? props.type : 'text'
  }, themed('Input');
})(_templateObject(), function (props) {
  return props.borderBottomColor ? props.borderBottomColor : '#000';
}, function (props) {
  return props.caretColor ? props.caretColor : '#000';
}, function (props) {
  return props.placeholderColor ? props.placeholderColor : '#000';
});
Input.defaultProps = {
  as: 'input'
};

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n    text-align: left;\n    list-style-type: ", ";\n    list-style-position: inside;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteralLoose(["\n\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}

var StyledList = styled(Box)(_templateObject$1());
StyledList.defaultProps = {
  as: 'ul'
};
var List = {};

List.Container = function (props) {
  var className = props.className,
      style = props.style,
      children = props.children,
      rest = _objectWithoutPropertiesLoose(props, ["className", "style", "children"]);

  var heading = React.Children.toArray(children).filter(function (child) {
    return child.displayName === 'List.Item';
  });
  return React.createElement(Box, null, heading, React.createElement(StyledList, _extends({
    className: className,
    style: style
  }, rest), children));
};

List.Container.displayName = 'List.Container';
List.Heading = styled(Text)(_templateObject2());
List.Heading.defaultProps = {
  as: 'h2'
};
List.Item = styled(Text)(_templateObject3(), function (props) {
  return props.noBullet ? 'none' : 'disc';
});
List.Item.defaultProps = {
  as: 'li',
  pl: '10px'
};

function _templateObject2$1() {
  var data = _taggedTemplateLiteralLoose(["\n    color: inherit;\n    font-size: 0.80em;\n    font-weight: 400;\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = _taggedTemplateLiteralLoose(["\n    color: inherit;\n    font-size: 1.25em;\n    font-weight: 600;\n    margin-top: 5px;\n    margin-bottom: 5px;\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var Card = styled(Box)({
  display: 'flex',
  flexDirection: 'column'
}, themed('Card'));
Card.Heading = styled(Text)(_templateObject$2());
Card.Body = styled(Text)(_templateObject2$1());
Card.defaultProps = {
  p: 3,
  border: '2px solid #000',
  display: 'inline-block',
  maxWidth: '300px',
  borderRadius: '5px;'
};

function _templateObject$3() {
  var data = _taggedTemplateLiteralLoose(["\n    cursor: default;\n    top: calc(100% + 3px);\n    left: 0;\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var Dropdown = {};
var StyledDropdownToggle = styled(Button)({
  content: function content(props) {
    return props.label ? props.label : 'test';
  },
  userSelect: 'none'
}, themed('Dropdown'));
var StyledDropdownMenu = styled(Box)(_templateObject$3());

Dropdown.Toggle = function (props) {
  var className = props.className,
      style = props.style,
      label = props.label,
      setOpen = props.setOpen,
      rest = _objectWithoutPropertiesLoose(props, ["className", "style", "label", "setOpen"]);

  return React.createElement(StyledDropdownToggle, _extends({
    className: className,
    style: style,
    setOpen: setOpen
  }, rest), label);
};

Dropdown.Menu = function (props) {
  var className = props.className,
      style = props.style,
      children = props.children,
      open = props.open,
      rest = _objectWithoutPropertiesLoose(props, ["className", "style", "children", "open"]);

  return React.createElement(StyledDropdownMenu, _extends({
    className: className,
    style: style
  }, rest, {
    open: open
  }), open ? React.createElement(React.Fragment, null, children) : React.createElement(React.Fragment, null));
};

Dropdown.Toggle.displayName = 'Dropdown.Toggle';
Dropdown.Menu.displayName = 'Dropdown.Menu';

export { Box, Button, Card, Dropdown, Flex, Input, List, Text };
//# sourceMappingURL=bundle.js.map
