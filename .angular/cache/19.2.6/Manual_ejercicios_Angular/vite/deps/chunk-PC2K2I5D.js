import {
  Container,
  Graphics,
  ListAutoDispose,
  RoundedRectangle,
  isLocalEvent,
  mergeTags,
  p100
} from "./chunk-ZLEVH4FM.js";
import {
  each,
  isNumber
} from "./chunk-4PPDGZLA.js";

// node_modules/@amcharts/amcharts5/.internal/core/render/Button.js
var Button = class extends Container {
  _afterNew() {
    this._settings.themeTags = mergeTags(this._settings.themeTags, ["button"]);
    super._afterNew();
    if (!this._settings.background) {
      this.set("background", RoundedRectangle.new(this._root, {
        themeTags: mergeTags(this._settings.themeTags, ["background"])
      }));
    }
    this.setPrivate("trustBounds", true);
  }
  _prepareChildren() {
    super._prepareChildren();
    if (this.isDirty("icon")) {
      const previous = this._prevSettings.icon;
      const icon = this.get("icon");
      if (icon !== previous) {
        this._disposeProperty("icon");
        if (previous) {
          previous.dispose();
        }
        if (icon) {
          this.children.push(icon);
        }
        this._prevSettings.icon = icon;
      }
    }
    if (this.isDirty("label")) {
      const previous = this._prevSettings.label;
      const label = this.get("label");
      if (label !== previous) {
        this._disposeProperty("label");
        if (previous) {
          previous.dispose();
        }
        if (label) {
          this.children.push(label);
        }
        this._prevSettings.label = label;
      }
    }
  }
};
Object.defineProperty(Button, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Button"
});
Object.defineProperty(Button, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Container.classNames.concat([Button.className])
});

// node_modules/@amcharts/amcharts5/.internal/core/util/Draw.js
function segmentedLine(display, segments) {
  for (let s = 0, len = segments.length; s < len; s++) {
    const groups = segments[s];
    if (groups.length > 0) {
      let firstGroup = groups[0];
      if (firstGroup.length > 0) {
        let firstPoint = firstGroup[0];
        display.moveTo(firstPoint.x, firstPoint.y);
        for (let g = 0, len2 = groups.length; g < len2; g++) {
          line(display, groups[g]);
        }
      }
    }
  }
}
function line(display, points) {
  for (let p = 0, len = points.length; p < len; p++) {
    const point = points[p];
    display.lineTo(point.x, point.y);
  }
}

// node_modules/@amcharts/amcharts5/.internal/core/render/Line.js
var Line = class extends Graphics {
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("points") || this.isDirty("segments") || this._sizeDirty || this.isPrivateDirty("width") || this.isPrivateDirty("height")) {
      this._clear = true;
    }
  }
  _changed() {
    super._changed();
    if (this._clear) {
      const points = this.get("points");
      const segments = this.get("segments");
      if (points && points.length > 0) {
        let point = points[0];
        this._display.moveTo(point.x, point.y);
        segmentedLine(this._display, [[points]]);
      } else if (segments) {
        segmentedLine(this._display, segments);
      } else if (!this.get("draw")) {
        let w = this.width();
        let h = this.height();
        this._display.moveTo(0, 0);
        this._display.lineTo(w, h);
      }
    }
  }
};
Object.defineProperty(Line, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Line"
});
Object.defineProperty(Line, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Graphics.classNames.concat([Line.className])
});

// node_modules/@amcharts/amcharts5/.internal/core/render/Scrollbar.js
var Scrollbar = class extends Container {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "thumb", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this._makeThumb()
    });
    Object.defineProperty(this, "startGrip", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this._makeButton()
    });
    Object.defineProperty(this, "endGrip", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this._makeButton()
    });
    Object.defineProperty(this, "_thumbBusy", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_startDown", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_endDown", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_thumbDown", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_gripDown", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _addOrientationClass() {
    this._settings.themeTags = mergeTags(this._settings.themeTags, ["scrollbar", this._settings.orientation]);
    if (!this._settings.background) {
      this._settings.background = RoundedRectangle.new(this._root, {
        themeTags: mergeTags(this._settings.themeTags, ["main", "background"])
      });
    }
  }
  _makeButton() {
    return this.children.push(Button.new(this._root, {
      themeTags: ["resize", "button", this.get("orientation")],
      icon: Graphics.new(this._root, {
        themeTags: ["icon"]
      })
    }));
  }
  _makeThumb() {
    return this.children.push(RoundedRectangle.new(this._root, {
      themeTags: ["thumb", this.get("orientation")]
    }));
  }
  _handleAnimation(animation) {
    if (animation) {
      this._disposers.push(animation.events.on("stopped", () => {
        this.setPrivateRaw("isBusy", false);
        this._thumbBusy = false;
      }));
    }
  }
  _afterNew() {
    this._addOrientationClass();
    super._afterNew();
    const startGrip = this.startGrip;
    const endGrip = this.endGrip;
    const thumb = this.thumb;
    const background = this.get("background");
    if (background) {
      this._disposers.push(background.events.on("click", (event) => {
        this.setPrivateRaw("isBusy", true);
        const point = this._display.toLocal(event.point);
        const w = this.width();
        const h = this.height();
        const orientation = this.get("orientation");
        let newMiddle;
        if (orientation == "vertical") {
          newMiddle = (point.y - thumb.height() / 2) / h;
        } else {
          newMiddle = (point.x - thumb.width() / 2) / w;
        }
        let newCoordinate;
        let key;
        if (orientation == "vertical") {
          newCoordinate = newMiddle * h;
          key = "y";
        } else {
          newCoordinate = newMiddle * w;
          key = "x";
        }
        const duration = this.get("animationDuration", 0);
        if (duration > 0) {
          this._thumbBusy = true;
          this._handleAnimation(this.thumb.animate({
            key,
            to: newCoordinate,
            duration,
            easing: this.get("animationEasing")
          }));
        } else {
          this.thumb.set(key, newCoordinate);
          this._root.events.once("frameended", () => {
            this.setPrivateRaw("isBusy", false);
          });
        }
      }));
    }
    this._disposers.push(thumb.events.on("dblclick", (event) => {
      if (!isLocalEvent(event.originalEvent, this)) {
        return;
      }
      const duration = this.get("animationDuration", 0);
      const easing = this.get("animationEasing");
      this.animate({
        key: "start",
        to: 0,
        duration,
        easing
      });
      this.animate({
        key: "end",
        to: 1,
        duration,
        easing
      });
    }));
    this._disposers.push(startGrip.events.on("pointerdown", () => {
      this.setPrivateRaw("isBusy", true);
      this._startDown = true;
      this._gripDown = "start";
    }));
    this._disposers.push(endGrip.events.on("pointerdown", () => {
      this.setPrivateRaw("isBusy", true);
      this._endDown = true;
      this._gripDown = "end";
    }));
    this._disposers.push(thumb.events.on("pointerdown", () => {
      this.setPrivateRaw("isBusy", true);
      this._thumbDown = true;
      this._gripDown = void 0;
    }));
    this._disposers.push(startGrip.events.on("globalpointerup", () => {
      if (this._startDown) {
        this.setPrivateRaw("isBusy", false);
        this._released();
      }
      this._startDown = false;
    }));
    this._disposers.push(endGrip.events.on("globalpointerup", () => {
      if (this._endDown) {
        this.setPrivateRaw("isBusy", false);
        this._released();
      }
      this._endDown = false;
    }));
    this._disposers.push(thumb.events.on("globalpointerup", () => {
      if (this._thumbDown) {
        this.setPrivateRaw("isBusy", false);
        this._released();
      }
      this._thumbDown = false;
    }));
    this._disposers.push(startGrip.on("x", () => {
      this._updateThumb();
    }));
    this._disposers.push(endGrip.on("x", () => {
      this._updateThumb();
    }));
    this._disposers.push(startGrip.on("y", () => {
      this._updateThumb();
    }));
    this._disposers.push(endGrip.on("y", () => {
      this._updateThumb();
    }));
    this._disposers.push(thumb.events.on("positionchanged", () => {
      this._updateGripsByThumb();
    }));
    if (this.get("orientation") == "vertical") {
      startGrip.set("x", 0);
      endGrip.set("x", 0);
      this._disposers.push(thumb.adapters.add("y", (value) => {
        return Math.max(Math.min(Number(value), this.height() - thumb.height()), 0);
      }));
      this._disposers.push(thumb.adapters.add("x", (_value) => {
        return this.width() / 2;
      }));
      this._disposers.push(startGrip.adapters.add("x", (_value) => {
        return this.width() / 2;
      }));
      this._disposers.push(endGrip.adapters.add("x", (_value) => {
        return this.width() / 2;
      }));
      this._disposers.push(startGrip.adapters.add("y", (value) => {
        return Math.max(Math.min(Number(value), this.height()), 0);
      }));
      this._disposers.push(endGrip.adapters.add("y", (value) => {
        return Math.max(Math.min(Number(value), this.height()), 0);
      }));
    } else {
      startGrip.set("y", 0);
      endGrip.set("y", 0);
      this._disposers.push(thumb.adapters.add("x", (value) => {
        return Math.max(Math.min(Number(value), this.width() - thumb.width()), 0);
      }));
      this._disposers.push(thumb.adapters.add("y", (_value) => {
        return this.height() / 2;
      }));
      this._disposers.push(startGrip.adapters.add("y", (_value) => {
        return this.height() / 2;
      }));
      this._disposers.push(endGrip.adapters.add("y", (_value) => {
        return this.height() / 2;
      }));
      this._disposers.push(startGrip.adapters.add("x", (value) => {
        return Math.max(Math.min(Number(value), this.width()), 0);
      }));
      this._disposers.push(endGrip.adapters.add("x", (value) => {
        return Math.max(Math.min(Number(value), this.width()), 0);
      }));
    }
  }
  _updateChildren() {
    super._updateChildren();
    if (this.isDirty("end") || this.isDirty("start") || this._sizeDirty) {
      this.updateGrips();
    }
  }
  _changed() {
    super._changed();
    if (this.isDirty("start") || this.isDirty("end")) {
      const eventType = "rangechanged";
      if (this.events.isEnabled(eventType)) {
        this.events.dispatch(eventType, {
          type: eventType,
          target: this,
          start: this.get("start", 0),
          end: this.get("end", 1),
          grip: this._gripDown
        });
      }
    }
  }
  _released() {
    const eventType = "released";
    if (this.events.isEnabled(eventType)) {
      this.events.dispatch(eventType, {
        type: eventType,
        target: this
      });
    }
  }
  /**
   * @ignore
   */
  updateGrips() {
    const startGrip = this.startGrip;
    const endGrip = this.endGrip;
    const orientation = this.get("orientation");
    const height = this.height();
    const width = this.width();
    if (orientation == "vertical") {
      startGrip.set("y", height * this.get("start", 0));
      endGrip.set("y", height * this.get("end", 1));
    } else {
      startGrip.set("x", width * this.get("start", 0));
      endGrip.set("x", width * this.get("end", 1));
    }
    const valueFunction = this.getPrivate("positionTextFunction");
    const from = Math.round(this.get("start", 0) * 100);
    const to = Math.round(this.get("end", 0) * 100);
    let fromValue;
    let toValue;
    if (valueFunction) {
      fromValue = valueFunction.call(this, this.get("start", 0));
      toValue = valueFunction.call(this, this.get("end", 0));
    } else {
      fromValue = from + "%";
      toValue = to + "%";
    }
    startGrip.set("ariaLabel", this._t("From %1", void 0, fromValue));
    startGrip.set("ariaValueNow", "" + from);
    startGrip.set("ariaValueText", from + "%");
    startGrip.set("ariaValueMin", "0");
    startGrip.set("ariaValueMax", "100");
    endGrip.set("ariaLabel", this._t("To %1", void 0, toValue));
    endGrip.set("ariaValueNow", "" + to);
    endGrip.set("ariaValueText", to + "%");
    endGrip.set("ariaValueMin", "0");
    endGrip.set("ariaValueMax", "100");
  }
  _updateThumb() {
    const thumb = this.thumb;
    const startGrip = this.startGrip;
    const endGrip = this.endGrip;
    const height = this.height();
    const width = this.width();
    let x0 = startGrip.x();
    let x1 = endGrip.x();
    let y0 = startGrip.y();
    let y1 = endGrip.y();
    let start = 0;
    let end = 1;
    if (this.get("orientation") == "vertical") {
      if (isNumber(y0) && isNumber(y1)) {
        if (!this._thumbBusy && !thumb.isDragging()) {
          thumb.set("height", y1 - y0);
          thumb.set("y", y0);
        }
        start = y0 / height;
        end = y1 / height;
      }
    } else {
      if (isNumber(x0) && isNumber(x1)) {
        if (!this._thumbBusy && !thumb.isDragging()) {
          thumb.set("width", x1 - x0);
          thumb.set("x", x0);
        }
        start = x0 / width;
        end = x1 / width;
      }
    }
    if (this.getPrivate("isBusy") && (this.get("start") != start || this.get("end") != end)) {
      this.set("start", start);
      this.set("end", end);
    }
    const valueFunction = this.getPrivate("positionTextFunction");
    const from = Math.round(this.get("start", 0) * 100);
    const to = Math.round(this.get("end", 0) * 100);
    let fromValue;
    let toValue;
    if (valueFunction) {
      fromValue = valueFunction.call(this, this.get("start", 0));
      toValue = valueFunction.call(this, this.get("end", 0));
    } else {
      fromValue = from + "%";
      toValue = to + "%";
    }
    thumb.set("ariaLabel", this._t("From %1 to %2", void 0, fromValue, toValue));
    thumb.set("ariaValueNow", "" + from);
    thumb.set("ariaValueText", from + "%");
  }
  _updateGripsByThumb() {
    const thumb = this.thumb;
    const startGrip = this.startGrip;
    const endGrip = this.endGrip;
    if (this.get("orientation") == "vertical") {
      const thumbSize = thumb.height();
      startGrip.set("y", thumb.y());
      endGrip.set("y", thumb.y() + thumbSize);
    } else {
      const thumbSize = thumb.width();
      startGrip.set("x", thumb.x());
      endGrip.set("x", thumb.x() + thumbSize);
    }
  }
};
Object.defineProperty(Scrollbar, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Scrollbar"
});
Object.defineProperty(Scrollbar, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Container.classNames.concat([Scrollbar.className])
});

// node_modules/@amcharts/amcharts5/.internal/core/render/Chart.js
var Chart = class extends Container {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "chartContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(Container.new(this._root, {
        width: p100,
        height: p100,
        interactiveChildren: false
      }))
    });
    Object.defineProperty(this, "bulletsContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: Container.new(this._root, {
        interactiveChildren: false,
        isMeasured: false,
        position: "absolute",
        width: p100,
        height: p100
      })
    });
  }
};
Object.defineProperty(Chart, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Chart"
});
Object.defineProperty(Chart, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Container.classNames.concat([Chart.className])
});

// node_modules/@amcharts/amcharts5/.internal/core/render/SerialChart.js
var SerialChart = class extends Chart {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "seriesContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: Container.new(this._root, {
        width: p100,
        height: p100,
        isMeasured: false
      })
    });
    Object.defineProperty(this, "series", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new ListAutoDispose()
    });
  }
  _afterNew() {
    super._afterNew();
    this._disposers.push(this.series);
    const children = this.seriesContainer.children;
    this._disposers.push(this.series.events.onAll((change) => {
      if (change.type === "clear") {
        each(change.oldValues, (series) => {
          this._removeSeries(series);
        });
        const colors = this.get("colors");
        if (colors) {
          colors.reset();
        }
        const patterns = this.get("patterns");
        if (patterns) {
          patterns.reset();
        }
      } else if (change.type === "push") {
        children.moveValue(change.newValue);
        this._processSeries(change.newValue);
      } else if (change.type === "setIndex") {
        children.setIndex(change.index, change.newValue);
        this._processSeries(change.newValue);
      } else if (change.type === "insertIndex") {
        children.insertIndex(change.index, change.newValue);
        this._processSeries(change.newValue);
      } else if (change.type === "removeIndex") {
        this._removeSeries(change.oldValue);
      } else if (change.type === "moveIndex") {
        children.moveValue(change.value, change.newIndex);
        this._processSeries(change.value);
      } else {
        throw new Error("Unknown IListEvent type");
      }
    }));
  }
  _processSeries(series) {
    series.chart = this;
    series._placeBulletsContainer(this);
  }
  _removeSeries(series) {
    series._handleRemoved();
    if (!series.isDisposed()) {
      this.seriesContainer.children.removeValue(series);
      series._removeBulletsContainer();
    }
  }
};
Object.defineProperty(SerialChart, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "SerialChart"
});
Object.defineProperty(SerialChart, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Chart.classNames.concat([SerialChart.className])
});

// node_modules/@amcharts/amcharts5/.internal/core/render/Tick.js
var Tick = class extends Line {
};
Object.defineProperty(Tick, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Tick"
});
Object.defineProperty(Tick, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Line.classNames.concat([Tick.className])
});

export {
  Button,
  Line,
  Scrollbar,
  Chart,
  SerialChart,
  Tick
};
//# sourceMappingURL=chunk-PC2K2I5D.js.map
