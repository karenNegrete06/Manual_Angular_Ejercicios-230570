// node_modules/@amcharts/amcharts5/.internal/core/render/MonotoneXTension.js
var MonotoneXTension = class {
  constructor(context, tension) {
    Object.defineProperty(this, "_line", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_point", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_context", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_x0", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_x1", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_y0", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_y1", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_t0", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_tension", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    this._context = context;
    this._tension = tension;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
    this._point = 0;
  }
  lineEnd() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        point(this, this._t0, slope2(this, this._t0));
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  }
  point(x, y) {
    let t1 = NaN;
    x = +x, y = +y;
    if (x === this._x1 && y === this._y1) return;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        point(this, slope2(this, t1 = slope3(this, x, y)), t1);
        break;
      default:
        point(this, this._t0, t1 = slope3(this, x, y));
        break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
    this._t0 = t1;
  }
};
function curveMonotoneXTension(tension) {
  function monotoneXTension(context) {
    return new MonotoneXTension(context, tension);
  }
  return monotoneXTension;
}
function sign(x) {
  return x < 0 ? -1 : 1;
}
function slope3(that, x2, y2) {
  let h0 = that._x1 - that._x0;
  let h1 = x2 - that._x1;
  let s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0);
  let s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0);
  let p = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}
function slope2(that, t) {
  let h = that._x1 - that._x0;
  return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}
function point(that, t0, t1) {
  let x0 = that._x0, y0 = that._y0, x1 = that._x1, y1 = that._y1, dx = (x1 - x0) / 1.5 * (1 - that._tension);
  that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
}

// node_modules/@amcharts/amcharts5/.internal/core/render/MonotoneYTension.js
var MonotoneYTension = class {
  constructor(context, tension) {
    Object.defineProperty(this, "_line", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_point", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_context", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_x0", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_x1", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_y0", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_y1", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_t0", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_tension", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    this._context = context;
    this._tension = tension;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
    this._point = 0;
  }
  lineEnd() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        point2(this, this._t0, slope22(this, this._t0));
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  }
  point(x, y) {
    [x, y] = [y, x];
    let t1 = NaN;
    x = +x, y = +y;
    if (x === this._x1 && y === this._y1) return;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(y, x) : this._context.moveTo(y, x);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        point2(this, slope22(this, t1 = slope32(this, x, y)), t1);
        break;
      default:
        point2(this, this._t0, t1 = slope32(this, x, y));
        break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
    this._t0 = t1;
  }
};
function curveMonotoneYTension(tension) {
  function monotoneYTension(context) {
    return new MonotoneYTension(context, tension);
  }
  monotoneYTension.tension = function(tension2) {
    return curveMonotoneYTension(+tension2);
  };
  return monotoneYTension;
}
function sign2(x) {
  return x < 0 ? -1 : 1;
}
function slope32(that, x2, y2) {
  let h0 = that._x1 - that._x0;
  let h1 = x2 - that._x1;
  let s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0);
  let s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0);
  let p = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign2(s0) + sign2(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}
function slope22(that, t) {
  let h = that._x1 - that._x0;
  return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}
function point2(that, t0, t1) {
  let x0 = that._x0, y0 = that._y0, x1 = that._x1, y1 = that._y1, dx = (x1 - x0) / 1.5 * (1 - that._tension);
  that._context.bezierCurveTo(y0 + dx * t0, x0 + dx, y1 - dx * t1, x1 - dx, y1, x1);
}

export {
  curveMonotoneXTension,
  curveMonotoneYTension
};
//# sourceMappingURL=chunk-SRKNHJ3H.js.map
