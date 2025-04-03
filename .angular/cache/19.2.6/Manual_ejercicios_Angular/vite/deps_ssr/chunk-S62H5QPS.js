import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  Color,
  Entity,
  Graphics,
  Percent,
  RADIANS,
  arc_default,
  cos,
  sin
} from "./chunk-BCSJAZE6.js";
import {
  each,
  isNumber
} from "./chunk-4KYZEBD2.js";

// node_modules/@amcharts/amcharts5/.internal/core/render/Circle.js
var Circle = class extends Graphics {
  _afterNew() {
    super._afterNew();
    this._display.isMeasured = true;
    this.setPrivateRaw("trustBounds", true);
  }
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("radius")) {
      this._clear = true;
    }
  }
  _changed() {
    super._changed();
    if (this._clear) {
      this._display.drawCircle(0, 0, Math.abs(this.get("radius", 10)));
    }
  }
};
Object.defineProperty(Circle, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Circle"
});
Object.defineProperty(Circle, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Graphics.classNames.concat([Circle.className])
});

// node_modules/@amcharts/amcharts5/.internal/core/render/gradients/Gradient.js
var Gradient = class extends Entity {
  _afterNew() {
    super._afterNewApplyThemes();
  }
  /**
   * @ignore
   */
  getFill(_target) {
    return {
      addColorStop: (_offset, _color) => {
      }
    };
  }
  _changed() {
    super._changed();
  }
  /**
   * @ignore
   */
  getBounds(target) {
    const gradientTarget = this.get("target");
    if (gradientTarget) {
      let bounds = gradientTarget.globalBounds();
      const p0 = target.toLocal({
        x: bounds.left,
        y: bounds.top
      });
      const p1 = target.toLocal({
        x: bounds.right,
        y: bounds.top
      });
      const p2 = target.toLocal({
        x: bounds.right,
        y: bounds.bottom
      });
      const p3 = target.toLocal({
        x: bounds.left,
        y: bounds.bottom
      });
      return {
        left: Math.min(p0.x, p1.x, p2.x, p3.x),
        top: Math.min(p0.y, p1.y, p2.y, p3.y),
        right: Math.max(p0.x, p1.x, p2.x, p3.x),
        bottom: Math.max(p0.y, p1.y, p2.y, p3.y)
      };
    }
    return target._display.getLocalBounds();
  }
};
Object.defineProperty(Gradient, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Gradient"
});
Object.defineProperty(Gradient, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Entity.classNames.concat([Gradient.className])
});

// node_modules/@amcharts/amcharts5/.internal/core/render/gradients/LinearGradient.js
var LinearGradient = class extends Gradient {
  /**
   * @ignore
   */
  getFill(target) {
    const rotation = this.get("rotation", 0);
    let bounds = this.getBounds(target);
    let l = bounds.left || 0;
    let r = bounds.right || 0;
    let t = bounds.top || 0;
    let b = bounds.bottom || 0;
    let cos2 = cos(rotation);
    let sin2 = sin(rotation);
    let w = cos2 * (r - l);
    let h = sin2 * (b - t);
    if (w == 0) {
      w = 1;
    }
    if (h == 0) {
      h = 1;
    }
    let longer = Math.max(w, h);
    const gradient = this._root._renderer.createLinearGradient(l, t, l + longer * cos2, t + longer * sin2);
    const stops = this.get("stops");
    if (stops) {
      let i = 0;
      each(stops, (stop) => {
        let offset = stop.offset;
        if (!isNumber(offset)) {
          offset = i / (stops.length - 1);
        }
        let opacity = stop.opacity;
        if (!isNumber(opacity)) {
          opacity = 1;
        }
        let color = stop.color;
        if (color) {
          const lighten = stop.lighten;
          if (lighten) {
            color = Color.lighten(color, lighten);
          }
          const brighten = stop.brighten;
          if (brighten) {
            color = Color.brighten(color, brighten);
          }
          gradient.addColorStop(offset, "rgba(" + color.r + "," + color.g + "," + color.b + "," + opacity + ")");
        }
        i++;
      });
    }
    return gradient;
  }
};
Object.defineProperty(LinearGradient, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "LinearGradient"
});
Object.defineProperty(LinearGradient, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Gradient.classNames.concat([LinearGradient.className])
});

// node_modules/@amcharts/amcharts5/.internal/core/render/Slice.js
var Slice = class extends Graphics {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "ix", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "iy", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_generator", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: arc_default()
    });
  }
  _getTooltipPoint() {
    let tooltipX = this.get("tooltipX");
    let tooltipY = this.get("tooltipY");
    let x = 0;
    let y = 0;
    if (isNumber(tooltipX)) {
      x = tooltipX;
    }
    if (isNumber(tooltipY)) {
      y = tooltipY;
    }
    let radius = this.get("radius", 0);
    let innerRadius = this.get("innerRadius", 0);
    let dRadius = this.get("dRadius", 0);
    let dInnerRadius = this.get("dInnerRadius", 0);
    radius += dRadius;
    innerRadius += dInnerRadius;
    if (innerRadius < 0) {
      innerRadius = radius + innerRadius;
    }
    if (tooltipX instanceof Percent) {
      x = this.ix * (innerRadius + (radius - innerRadius) * tooltipX.value);
    }
    if (tooltipY instanceof Percent) {
      y = this.iy * (innerRadius + (radius - innerRadius) * tooltipY.value);
    }
    if (this.get("arc") >= 360 && innerRadius == 0) {
      x = 0;
      y = 0;
    }
    return {
      x,
      y
    };
  }
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("radius") || this.isDirty("arc") || this.isDirty("innerRadius") || this.isDirty("startAngle") || this.isDirty("dRadius") || this.isDirty("dInnerRadius") || this.isDirty("cornerRadius") || this.isDirty("shiftRadius")) {
      this._clear = true;
    }
  }
  _changed() {
    super._changed();
    if (this._clear) {
      let startAngle = this.get("startAngle", 0);
      let arc = this.get("arc", 0);
      const generator = this._generator;
      if (arc < 0) {
        startAngle = startAngle + arc;
        arc = arc * -1;
      }
      if (arc > 0.1) {
        generator.cornerRadius(this.get("cornerRadius", 0));
      }
      generator.context(this._display);
      let radius = this.get("radius", 0);
      let innerRadius = this.get("innerRadius", 0);
      let dRadius = this.get("dRadius", 0);
      let dInnerRadius = this.get("dInnerRadius", 0);
      radius += dRadius;
      innerRadius += dInnerRadius;
      if (innerRadius < 0) {
        innerRadius = radius + innerRadius;
      }
      generator({
        innerRadius,
        outerRadius: radius,
        startAngle: (startAngle + 90) * RADIANS,
        endAngle: (startAngle + arc + 90) * RADIANS
      });
      let middleAngle = startAngle + arc / 2;
      this.ix = cos(middleAngle);
      this.iy = sin(middleAngle);
      const shiftRadius = this.get("shiftRadius", 0);
      this.setRaw("dx", this.ix * shiftRadius);
      this.setRaw("dy", this.iy * shiftRadius);
      this.markDirtyPosition();
    }
  }
};
Object.defineProperty(Slice, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Slice"
});
Object.defineProperty(Slice, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Graphics.classNames.concat([Slice.className])
});

export {
  Circle,
  Gradient,
  LinearGradient,
  Slice
};
//# sourceMappingURL=chunk-S62H5QPS.js.map
