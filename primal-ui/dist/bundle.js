import styled from 'styled-components';
import { compose, space, layout, typography, color, border, position, flexbox } from 'styled-system';

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n    display: block;\n    box-sizing: border-box;\n    font-family: Arial, system-ui, Helvetica, sans-serif;\n    font-size: 0.8rem;\n    margin: 0;\n    ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Box = styled.div(_templateObject(), compose(space, layout, typography, color, border, position));

function _templateObject$1() {
  var data = _taggedTemplateLiteralLoose(["\n    color: ", ";\n    border: ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    background-color: ", ";\n    display: ", ";\n    cursor: pointer;\n    padding: ", ";\n    &:focus {\n        outline: 0;\n    };\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var Button = styled(Box)(_templateObject$1(), function (props) {
  return props.color ? props.color : props.theme.button ? props.theme.button.color : '#000';
}, function (props) {
  return props.noBorder || props.borderBottom || props.borderLeft || props.borderRight || props.borderTop ? 'none' : props.border ? props.border : '1px solid black';
}, function (props) {
  return props.borderBottom ? "border-bottom: " + props.borderBottom : "";
}, function (props) {
  return props.borderLeft ? "border-left: " + props.borderLeft : "";
}, function (props) {
  return props.borderRight ? "border-right: " + props.borderRight : "";
}, function (props) {
  return props.borderTop ? "border-top: " + props.borderTop : "";
}, function (props) {
  return props.bg ? props.bg : '#fff';
}, function (props) {
  return props.display ? props.display : 'inline-block';
}, function (props) {
  return props.p || props.pr || props.pl || props.py || props.px ? props.p || props.pr || props.pl || props.py || props.px : '4px';
});
Button.defaultProps = {
  border: '1px solid #000',
  borderRadius: '3px'
  /** @component */

};

function _templateObject$2() {
  var data = _taggedTemplateLiteralLoose(["\n    display: flex;\n    ", ";\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var Flex = styled(Box)(_templateObject$2(), flexbox);

function _templateObject$3() {
  var data = _taggedTemplateLiteralLoose(["\n    display: inline-flex;\n    ", ";\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
/**
 * @visibleName Input Group
 */

var InputGroup = styled(Box)(_templateObject$3(), flexbox);

function _templateObject$4() {
  var data = _taggedTemplateLiteralLoose(["\n    margin: 0;\n    box-sizing: border-box;\n    font-family: Arial, system-ui, Helvetica, sans-serif;\n    font-size: 0.8rem;\n    ", ";\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var Text = styled.p(_templateObject$4(), compose(space, layout, typography, color));

function _templateObject$5() {
  var data = _taggedTemplateLiteralLoose(["\n    cursor: text;\n    vertical-align: top;\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var Label = styled(Text).attrs(function (props) {
  return {
    as: 'label',
    htmlFor: props["for"]
  };
})(_templateObject$5());

function _templateObject$6() {
  var data = _taggedTemplateLiteralLoose(["\n    display: inline-block;\n    cursor: pointer;\n    appearance: none;\n    vertical-align: text-top;\n    height: 15px;\n    width: 15px;\n    line-height: 15px;\n    background-color: ", ";\n    border: ", ";\n    border-radius: 50%;\n    margin-right: ", ";\n    &:focus {\n        outline: none;\n    }\n    &:checked {\n        background: ", "\n    }\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var Radio = styled(Box).attrs(function (props) {
  return {
    as: 'input',
    type: 'radio',
    name: props.name
  };
})(_templateObject$6(), function (props) {
  return props.bg ? props.bg : 'transparent';
}, function (props) {
  return props.border ? props.border : '1px solid #000';
}, function (props) {
  return props.mr ? props.mr : '4px';
}, function (props) {
  if (props.fillBg && props.dotColor) {
    return props.fillBg + " center url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='" + props.dotColor + "' width='15' height='15'><circle cx='7.5' cy='7.5' r='3.25' /></svg>\") no-repeat border-box";
  } else if (props.fillBg) {
    return props.fillBg + " center url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='white' width='15' height='15'><circle cx='7.5' cy='7.5' r='3.25' /></svg>\") no-repeat border-box";
  } else if (props.dotColor) {
    return "blue center url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='" + props.dotColor + "' width='15' height='15'><circle cx='7.5' cy='7.5' r='3.25' /></svg>\") no-repeat border-box";
  } else {
    return "blue center url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='white' width='15' height='15'><circle cx='7.5' cy='7.5' r='3.25' /></svg>\") no-repeat border-box";
  }
});

function _templateObject$7() {
  var data = _taggedTemplateLiteralLoose(["\n    cursor: pointer !important;\n    background-color: ", ";\n    border: ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    color: ", ";\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    padding: .2em 1.7em .2em .2em;\n    background-image: url(", ");\n    background-repeat: no-repeat, repeat;\n    background-position: right .7em top 50%, 0 0;\n    background-size: .65em auto, 100%;\n    &:focus {\n        outline: 0;\n    }\n"]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}
var downArrow = "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Ctitle%3Edown-arrow%3C%2Ftitle%3E%3Cg%20fill%3D%22%23000000%22%3E%3Cpath%20d%3D%22M10.293%2C3.293%2C6%2C7.586%2C1.707%2C3.293A1%2C1%2C0%2C0%2C0%2C.293%2C4.707l5%2C5a1%2C1%2C0%2C0%2C0%2C1.414%2C0l5-5a1%2C1%2C0%2C1%2C0-1.414-1.414Z%22%20fill%3D%22%23000000%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E";
var Select = styled(Box).attrs(function (props) {
  return {
    as: 'select'
  };
})(_templateObject$7(), function (props) {
  return props.bg ? props.bg : '#fff';
}, function (props) {
  return props.noBorder || props.borderBottom || props.borderLeft || props.borderRight || props.borderTop ? 'none' : props.border ? props.border : '1px solid black';
}, function (props) {
  return props.borderBottom ? "border-bottom: " + props.borderBottom : "";
}, function (props) {
  return props.borderLeft ? "border-left: " + props.borderLeft : "";
}, function (props) {
  return props.borderRight ? "border-right: " + props.borderRight : "";
}, function (props) {
  return props.borderTop ? "border-top: " + props.borderTop : "";
}, function (props) {
  return props.color ? props.color : '#000';
}, downArrow);
Select.defaultProps = {
  border: '1px solid #000'
  /** @component */

};

function _templateObject$8() {
  var data = _taggedTemplateLiteralLoose(["\nborder: ", ";\n", ";\n", ";\n", ";\n", ";\n&:focus {\n    outline: 0;\n}\n"]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}
var TextArea = styled(Box).attrs(function (props) {
  return {
    as: 'textarea',
    placeholder: props.placeholder + " + " + function (props) {
      return props.required ? '*' : '';
    }
  };
})(_templateObject$8(), function (props) {
  return props.border ? props.border : props.noBorder ? 'none' : '1px solid #000';
}, function (props) {
  return props.borderBottom ? "border-bottom: " + props.borderBottom : "";
}, function (props) {
  return props.borderLeft ? "border-left: " + props.borderLeft : "";
}, function (props) {
  return props.borderRight ? "border-right: " + props.borderRight : "";
}, function (props) {
  return props.borderTop ? "border-top: " + props.borderTop : "";
});
TextArea.defaultProps = {
  borderRadius: '3px'
  /** @component */

};

function _templateObject$9() {
  var data = _taggedTemplateLiteralLoose(["\n    border: ", ";\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n    background-color: ", ";\n    padding: ", ";\n    cursor: text;\n    &:focus {\n        outline: 0;\n    }\n"]);

  _templateObject$9 = function _templateObject() {
    return data;
  };

  return data;
}
var TextField = styled(Box).attrs(function (props) {
  return {
    as: 'input',
    type: 'text',
    placeholder: "" + props.placeholder + function (props) {
      return props.required ? '*' : '';
    }
  };
})(_templateObject$9(), function (props) {
  return props.noBorder || props.borderBottom || props.borderLeft || props.borderRight || props.borderTop ? 'none' : props.border ? props.border : '1px solid black';
}, function (props) {
  return props.borderBottom ? "border-bottom: " + props.borderBottom : "";
}, function (props) {
  return props.borderLeft ? "border-left: " + props.borderLeft : "";
}, function (props) {
  return props.borderRight ? "border-right: " + props.borderRight : "";
}, function (props) {
  return props.borderTop ? "border-top: " + props.borderTop : "";
}, function (props) {
  return props.bg ? props.bg : '#fff';
}, function (props) {
  return props.p ? props.p : '3px 3px 3px 5px';
});
TextField.defaultProps = {
  borderRadius: '3px'
  /** @component */

};

export { Box, Button, Flex, InputGroup, Label, Radio, Select, Text, TextArea, TextField };
//# sourceMappingURL=bundle.js.map
