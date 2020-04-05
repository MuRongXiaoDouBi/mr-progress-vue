<template>
  <div class="progress">
    <div
      :style="{ height: width + 'px', width: width + 'px' }"
      class="progress_circle"
      v-if="type === 'circle'"
    >
      <svg viewBox="0 0 100 100">
        <path
          :d="getPathD"
          fill="none"
          :stroke="strokeBgColor"
          :stroke-width="relativeStrokeWidth"
          :style="bgPathStyle"
        />
        <path
          :d="getPathD"
          fill="none"
          :stroke="stroke"
          :stroke-linecap="strokeLinecap"
          transform="rotate(90,50,50)"
          :stroke-width="relativeStrokeWidth"
          :style="circlePathStyle"
        />
      </svg>
      <div
        class="circle_text"
        :style="{ height: width + 'px', width: width + 'px' }"
      >
        <slot></slot>
      </div>
    </div>
    <div class="progress_line" v-else>
      <div class="progress_line_wrapper">
        <div class="line_outer" :style="lineOuterStyle">
          <span
            class="line_inner_text"
            :style="{
              lineHeight: `${strokeWidth}px`,
              left: `${strokeWidth / 5}px`
            }"
            v-show="percentage === 0"
            v-if="textInside"
          >
            {{ percentage }}%
          </span>
        </div>
        <div class="line_inner" :style="lineInnerStyle">
          <span
            class="line_inner_text"
            :style="{
              lineHeight: `${strokeWidth}px`,
              right: `${strokeWidth / 5}px`
            }"
            v-if="textInside"
            >{{ percentage }}%
          </span>
        </div>
      </div>
      <div style="margin-left: 10px;">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mrProgress",
  props: {
    // circle line
    type: {
      type: String,
      default: "line",
      validator: val => ["circle", "line"].indexOf(val) > -1
    },
    // 容器宽度 px
    width: {
      type: Number,
      default: 300
    },
    // 进度条宽度 px
    strokeWidth: {
      type: Number,
      default: 20
    },
    // 进度条颜色
    strokeColor: {
      type: [String, Array],
      default: "#6f7ad3"
    },
    // 背景进度条颜色
    strokeBgColor: {
      type: String,
      default: "#e5e9f2"
    },
    // 进度
    percentage: {
      type: Number,
      default: 0
    },
    // 进度条样式
    // round square
    // 详见svg stroke-linecap
    strokeLinecap: {
      type: String,
      default: "round",
      validator: val => ["round", "butt"].indexOf(val) > -1
    },
    // 百分比内显
    textInside: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    // line进度条背景样式
    lineOuterStyle() {
      return {
        width: `${this.width}px`,
        backgroundColor: this.strokeBgColor,
        borderRadius: this.getLineRadius,
        height: `${this.strokeWidth}px`
      };
    },
    // line进度条样式
    lineInnerStyle() {
      return {
        backgroundColor: this.stroke,
        borderRadius: this.getLineRadius,
        height: `${this.strokeWidth}px`,
        width: `${(this.width / 100) * this.percentage}px`,
        transition: "width 0.6s ease 0s, background-color 0.6s ease"
      };
    },
    getLineRadius() {
      const linecap = this.strokeLinecap;
      return linecap === "round" ? "100px" : "0px";
    },
    isStrokeColorString() {
      return typeof this.strokeColor === "string" ? true : false;
    },
    // 颜色
    stroke() {
      if (this.percentage === 0) return this.strokeBgColor;
      if (this.isStrokeColorString) {
        return this.strokeColor;
      } else {
        return this.getCurrentColor(this.percentage);
      }
    },
    // 路径
    getPathD() {
      const radius = this.radius;
      return `
        M 50 50
        m -${radius} 0
        a ${radius} ${radius} 0 1 0 ${radius * 2} 0
        a ${radius} ${radius} 0 1 0 -${radius * 2} 0
      `;
    },
    // 半径
    radius() {
      return this.type === "circle"
        ? parseInt(50 - parseFloat(this.relativeStrokeWidth) / 2, 10)
        : 0;
    },
    // 周长
    perimeter() {
      return 2 * Math.PI * this.radius;
    },
    // 进度条实际宽度
    relativeStrokeWidth() {
      return ((this.strokeWidth / this.width) * 100).toFixed(1);
    },
    // 偏移量
    strokeDashoffset() {
      const offset = -this.perimeter * 2;
      return `${offset}px`;
    },
    // 背景进度条样式
    bgPathStyle() {
      return {
        strokeDasharray: `${this.perimeter}px, ${this.perimeter}px`,
        strokeDashoffset: this.strokeDashoffset
      };
    },
    // 实际进度条样式
    // strokeDasharray: 'x, y' x:虚线长 y:间距
    circlePathStyle() {
      return {
        strokeDasharray: `${this.perimeter * (this.percentage / 100)}px, ${
          this.perimeter
        }px`,
        strokeDashoffset: this.strokeDashoffset,
        transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease"
      };
    }
  },
  methods: {
    getCurrentColor(percentage) {
      if (typeof this.strokeColor === "string") {
        return this.strokeColor;
      } else {
        return this.getLevelColor(percentage);
      }
    },
    getLevelColor(percentage) {
      // 避免无限更新循环，简单拷贝数组
      const strokeColor = [...this.strokeColor];
      const colorArray = strokeColor.sort(
        (a, b) => a.percentage - b.percentage
      );
      for (let i = 0; i < colorArray.length; i++) {
        if (colorArray[i].percentage > percentage) {
          return colorArray[i].color;
        }
      }
      return colorArray[colorArray.length - 1].color;
    }
  }
};
</script>

<style scoped>
.progress {
  padding: 5px 0;
  box-sizing: border-box;
}
.progress_circle {
  position: relative;
}
.circle_text {
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.progress_line {
  display: flex;
  align-items: center;
}
.progress_line_wrapper {
  position: relative;
}

.line_inner {
  position: absolute;
  left: 0;
  top: 0;
}
.line_outer {
  position: relative;
}
.line_inner_text {
  position: absolute;
  color: #ffffff;
  font-size: 14px;
}
</style>
