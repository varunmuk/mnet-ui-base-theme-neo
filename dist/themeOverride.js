"use strict";

exports.__esModule = true;
exports.themeOverride = void 0;

var _mnetIcons = require("mnet-icons");

var _utils = require("mnet-ui-base/utils");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Info = _mnetIcons.NeoComponents.Info,
    TickCircle = _mnetIcons.NeoComponents.TickCircle,
    Tick = _mnetIcons.NeoComponents.Tick,
    Up = _mnetIcons.NeoComponents.Up,
    Down = _mnetIcons.NeoComponents.Down;
Tick.notSvg = true;
var baseSpacing = 16;
var darkColors = [];
darkColors[2] = '#575F7D';
var themeOverride = {
  global: {
    focus: {
      shadow: 'none'
    },
    colors: {
      brand: 'accent-3',
      placeholder: 'dark-4',
      'status-ok': 'accent-1',
      error: '#E15151'
    }
  },
  button: {
    size: {
      small: {
        pad: {
          vertical: baseSpacing / 2.285 + "px",
          horizontal: baseSpacing / 1.6 + "px"
        }
      }
    }
  },
  checkBox: {
    check: {
      extend: function extend(props) {
        return {
          background: props.checked && (0, _utils.normalizeColor)('accent-3', props.theme),
          border: props.checked && 'unset',
          boxShadow: 'unset',
          borderRadius: '2px',
          color: 'white'
        };
      },
      justify: 'center',
      background: 'white'
    }
  },
  select: {
    control: {
      extend: function extend(_ref) {
        var disabled = _ref.disabled,
            _ref$background = _ref.background,
            background = _ref$background === void 0 ? 'white' : _ref$background;
        return {
          border: '1px solid #DEDEDE',
          input: {
            color: darkColors[3],
            fontWeight: 400,
            padding: '0px'
          },
          padding: '4px 10px',
          background: disabled ? '#f5f5f5' : background,
          borderBottomWidth: '2px'
        };
      }
    },
    icons: {
      background: 'transparent',
      margin: {
        vertical: 'small',
        right: 'small'
      },
      size: 'xlarge',
      color: 'dark-3',
      up: Up,
      down: Down
    }
  },
  textArea: {
    extend: {
      color: darkColors[2],
      fontWeight: 400
    }
  },
  multiselect: {
    container: {
      border: {
        color: 'light-3'
      },
      round: 'small'
    },
    controls: {
      label: {
        exclude: {
          color: 'error'
        }
      }
    },
    includeBtn: {
      color: 'accent-1',
      primary: false,
      style: {
        background: 'white'
      },
      showIcon: true
    },
    excludeBtn: {
      color: 'accent-5',
      primary: false,
      style: {
        background: 'white'
      },
      showIcon: true
    },
    option: {
      align: 'center'
    },
    checkbox: {
      showUnSelected: undefined,
      include: {
        check: 'add'
      },
      exclude: {
        check: 'subtract'
      },
      check: {
        extend: function extend(props) {
          return {
            background: props.checked && (0, _utils.normalizeColor)('accent-3', props.theme),
            border: props.checked && 'unset',
            boxShadow: 'unset',
            borderRadius: '2px',
            color: 'white'
          };
        },
        justify: 'center',
        background: 'white'
      },
      color: {
        dark: undefined,
        light: 'white'
      },
      label: {
        margin: {
          bottom: 'none'
        }
      }
    },
    chips: {
      wrapper: {
        pad: {
          vertical: 'medium',
          left: 'medium',
          right: 'small'
        },
        extend: function extend() {
          return {
            'border-bottom': 'none'
          };
        }
      },
      option: {
        pad: {
          vertical: 'medium'
        },
        extend: function extend(props) {
          return {
            width: props.twoColumnLayout ? '100%' : 'auto',
            margin: props.twoColumnLayout ? 0 : baseSpacing / (1.618 * 2) + "px",
            background: props.twoColumnLayout ? 'white' : '#E0E0E0',
            'justify-content': props.twoColumnLayout ? 'space-between' : 'flex-start'
          };
        }
      },
      label: {
        color: 'dark-3',
        weight: 400,
        extend: {}
      },
      clear: {
        margin: 'medium',
        border: {
          side: 'top',
          color: 'light-3'
        },
        color: 'dark-3',
        size: 'medium',
        alignSelf: 'end',
        weight: '600',
        height: "" + baseSpacing * 1.875
      },
      icon: {
        size: baseSpacing / 1.78 + "px"
      }
    },
    searchbox: {
      textWrapper: {
        flex: 'grow'
      },
      iconWrapper: {
        gap: 'medium',
        width: 'xxsmall',
        direction: 'row',
        justify: 'center'
      },
      container: {
        height: baseSpacing * 2.5 + "px",
        background: 'transparent',
        pad: 'none',
        border: {
          side: 'bottom',
          color: 'light-3'
        },
        style: {
          minHeight: baseSpacing * 2.5 + "px",
          position: 'relative'
        }
      },
      placeholder: {
        color: 'dark-4',
        weight: 400,
        size: 'medium'
      }
    },
    rightPanel: {
      border: 'light-3',
      container: {
        extend: function extend(_ref2) {
          var isEmpty = _ref2.isEmpty;
          return "\n          padding: " + (isEmpty ? '10' : '0') + "px " + (isEmpty ? '16' : '0') + "px;\n        ";
        }
      },
      incExcHeader: {
        box: {
          align: 'center',
          background: 'white',
          border: {
            color: 'light-3'
          }
        },
        text: {
          color: 'dark-3',
          size: 'medium',
          weight: '400'
        },
        count: {
          background: 'light-4',
          round: 'small',
          pad: {
            horizontal: 'small'
          }
        }
      }
    },
    custom: {
      wrapper: {
        border: {
          color: 'light-3'
        },
        round: 'small'
      },
      textAreaWrap: {
        onKeyDown: function onKeyDown(e) {
          e.stopPropagation();
        },
        border: {
          color: 'transparent'
        },
        pad: 'medium',
        height: '100%',
        extend: {
          '*': {
            height: 'auto',
            border: 'none'
          },
          textarea: {
            minHeight: '185px'
          }
        }
      },
      actions: {
        wrapper: {
          gap: '0',
          margin: '0',
          justify: 'evenly',
          align: 'center',
          border: {
            side: 'top',
            color: 'light-3'
          },
          pad: 'none',
          height: {
            min: baseSpacing * 1.875 + "px"
          }
        }
      }
    },
    icons: {
      include: {
        icon: TickCircle,
        extend: {
          color: 'accent-1',
          size: 'large'
        }
      },
      exclude: {
        icon: TickCircle,
        extend: {
          color: 'error',
          size: 'large'
        }
      }
    }
  },
  pagination: {
    border: {
      color: 'none'
    },
    button: {
      active: {
        fontWeight: 'bold',
        background: 'light-3',
        border: {
          color: 'light-3'
        },
        color: 'inherit'
      }
    }
  },
  radioButton: {
    border: {
      width: '5px'
    },
    extend: {
      marginRight: '8px'
    },
    container: {
      extend: function extend(_ref3) {
        var checked = _ref3.checked,
            theme = _ref3.theme;
        return {
          fontWeight: checked && 600,
          color: (0, _utils.normalizeColor)('dark-3', theme)
        };
      }
    }
  },
  rangeInput: {
    track: {
      color: 'dark-3',
      height: '4px',
      extend: function extend() {
        return 'border-radius: 10px';
      }
    },
    extend: function extend(_ref4) {
      var disabled = _ref4.disabled;
      return disabled && 'opacity: .3; cursor: not-allowed !important;';
    },
    thumb: {
      extend: function extend(_ref5) {
        var disabled = _ref5.disabled;
        return disabled && 'cursor: not-allowed !important;';
      }
    }
  },
  tabs: {
    // background: undefined,
    // extend: undefined,
    gap: 'large',
    header: {
      // background: undefined,
      extend: {
        'padding-left': baseSpacing * 1.2 + "px",
        'border-bottom': '1px solid #E8E7E7 '
      }
    }
  },
  textInput: {
    container: {
      extend: function extend() {
        return "\n          height: 100%;\n        ";
      }
    },
    extend: function extend(_ref6) {
      var plain = _ref6.plain,
          focus = _ref6.focus,
          reverse = _ref6.reverse,
          icon = _ref6.icon,
          theme = _ref6.theme,
          readOnly = _ref6.readOnly,
          error = _ref6.error;
      return _extends({
        paddingTop: baseSpacing / 1.78 + "px",
        paddingBottom: baseSpacing / 1.78 + "px",
        boxShadow: 'none',
        height: '100%',
        fontSize: theme.global.font.size,
        borderBottomWidth: theme.global.borderSize.small,
        fontWeight: 400,
        color: "" + (0, _utils.normalizeColor)('dark-3', theme),
        paddingLeft: !reverse && icon && baseSpacing / 0.64 + "px",
        borderColor: error ? 'transparent' : !plain && "" + (0, _utils.normalizeColor)('dark-6', theme)
      }, focus ? {
        borderColor: !readOnly && 'transparent',
        borderBottom: theme.global.borderSize.small + " solid " + (!readOnly && (0, _utils.normalizeColor)('accent-3', theme)),
        background: "" + (!readOnly && (0, _utils.normalizeColor)('background-back', theme)),
        borderBottomRightRadius: '0px',
        borderBottomLeftRadius: '0px'
      } : {});
    },
    border: {
      color: 'dark-6',
      side: 'all'
    },
    placeholder: {
      extend: {
        paddingLeft: baseSpacing * 1.125 + "px"
      }
    }
  },
  formField: {
    content: {
      plainOnFocus: true
    },
    field: {
      focus: 'border-color: white;',
      "default": {
        border: '1px solid transparent'
      }
    },
    error: {
      margin: {
        top: 'xsmall',
        bottom: 'small',
        horizontal: 'none'
      },
      style: {
        position: 'inherit',
        marginTop: '0px'
      }
    },
    info: {
      margin: {
        vertical: 'xsmall',
        left: 'medium'
      }
    },
    labelWrap: {
      margin: 'none',
      width: 'xxsmall',
      direction: 'row'
    },
    label: {
      weight: 400,
      margin: {
        bottom: 'small',
        top: 'small',
        left: 'xxsmall'
      }
    },
    postfix: {
      background: 'dark-3'
    },
    prefix: {
      background: 'dark-3'
    },
    extend: {
      button: {
        border: undefined
      },
      icon: Info,
      iconProps: {
        margin: {
          horizontal: 'small'
        },
        size: 'large'
      },
      input: {
        border: undefined
      }
    },
    tooltip: {
      extend: {
        position: 'right-end',
        background: 'white'
      },
      icon: Info,
      iconProps: {
        margin: {
          horizontal: 'small'
        },
        size: 'large'
      }
    }
  }
};
exports.themeOverride = themeOverride;