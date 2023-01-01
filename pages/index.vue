<template>
  <div class="box">
    <div ref="canvas" class="canvas bd_Btm_Gray" :class="getTheme.bg">
      <div v-if="tagList.length > 0" class="textBox">
        <Tag
          v-for="(tag, index) in tagList"
          :key="index"
          :tag="tag"
          :class-name="getTheme"
          @deleteTag="deleteTag"
        />
      </div>
      <div v-else class="textBox">
        <Tag
          v-for="(tag, index) in noItem"
          :key="index"
          :type="'noItem'"
          :tag="tag"
          :class-name="getTheme"
        />
      </div>
      <div ref="noShow" v-show="false" />
      <div class="sign" :class="getTheme.ghost">
        {{ signText }}
      </div>
    </div>
    <button class="save bd_Btm_Gray" @click="downloadImage">save</button>
    <div class="tagInputBox bd_Btm_Gray">
      <input
        v-model="tagText"
        class="tagInput"
        type="text"
        placeholder="✍🏻 tag..."
        @keypress.enter="addTag"
      />
      <div class="tagButtonBox">
        <div class="typeButtonBox bd_Right_Gray bd_Left_Gray">
          <button
            v-for="(type, index) in types"
            :key="index + type"
            class="typeButton"
            :class="tagType === type ? 'bg_Black ft_White' : ''"
            @click="setType(type)"
          >
            {{ type }}
          </button>
        </div>
        <button class="addButton bg_Black ft_White" @click="addTag">✚</button>
      </div>
    </div>
    <div class="signInputBox">
      <input
        v-model="signText"
        class="signInput"
        type="text"
        placeholder="✍🏻 your name..."
      />
      <button class="save bd_Left_Gray" @click="resetTagList">reset</button>
    </div>
    <div class="themeBox bd_Top_Gray">
      <button
        v-for="(color, index) in themeList"
        :key="index + color"
        class="themeItem"
        :class="`${color.bg}`"
        @click="setTheme(color.title)"
      >
        <div class="themeFill" :class="`${color.fill}`">
          <div class="themeText Title1" :class="`${color.fill_ft}`">a</div>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
import html2canvas from 'html2canvas';
import themeList from '@/assets/data/theme.json';
import Tag from '@/components/tag/tag';

export default {
  layout: 'main',
  components: {
    Tag
  },

  data() {
    return {
      height: 0,
      signText: '',
      tagText: '',
      tagType: 'fill',
      tagList: [],
      noItem: [
        { text: 'write', type: 'fill' },
        { text: '✍🏼', type: 'fill' },
        { text: ',', type: 'ghost' },
        { text: 'add', type: 'border' },
        { text: '✚', type: 'ghost' },
        { text: 'and', type: 'ghost' },
        { text: 'ㅡ', type: 'ghost' },
        { text: 'download', type: 'fill' },
        { text: '📂', type: 'fill' },
        { text: '(', type: 'ghost' },
        { text: 'your', type: 'ghost' },
        { text: 'tags', type: 'border' },
        { text: ')', type: 'ghost' },
        { text: '🔖', type: 'ghost' }
      ],
      types: ['fill', 'border', 'ghost'],
      themeTitle: 'w_b',
      themeList: themeList.color
    };
  },

  computed: {
    getTheme() {
      const filteredTheme = this.themeList.filter(
        (item) => item.title === this.themeTitle
      );
      const theme = filteredTheme[0];
      return {
        bg: `${theme.bg}`,
        fill: `${theme.fill} ${theme.bd} ${theme.fill_ft}`,
        border: `${theme.bd} ${theme.bd_ft}`,
        ghost: `${theme.bd_ft} bd_transparent`
      };
    }
  },

  updated() {
    this.setHeight();
  },

  methods: {
    setType(type) {
      this.tagType = type;
    },

    setTheme(themeTitle) {
      this.themeTitle = themeTitle;
    },

    resetTagList() {
      this.tagList = [];
    },

    addTag() {
      const text = { text: this.tagText, type: this.tagType };
      if (!this.tagText) {
        alert('없어');
      } else {
        this.tagList.push(text);
        this.tagText = '';
      }
    },

    deleteTag(tag) {
      const index = this.tagList
        .map((item) => {
          return item.text === tag;
        })
        .indexOf(true);
      this.tagList.splice(index, 1);
    },

    setHeight() {
      const height = document.querySelector('.textBox')?.offsetHeight;
      this.height = height;
      if (this.height > 256) {
        this.tagList.pop();
        alert('끝');
      }
    },

    downloadImage() {
      html2canvas(this.$refs.canvas).then((canvas) => {
        const imageUri = canvas.toDataURL();
        this.downloadURI(imageUri, 'thumbnail.png');
      });
    },

    downloadURI(uri, name) {
      const link = document.createElement('a');
      link.download = name;
      link.href = uri;
      document.body.appendChild(link);
      link.click();
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  text-align: center;

  .title {
    padding: 0.25rem 0.5rem;
    text-align: right;
  }
  .canvas {
    position: relative;
    padding: 1.5rem;
    width: 640px;
    height: 360px;

    .textBox {
      display: flex;
      align-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
    }

    .sign {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
    }
  }

  .save {
    width: 100%;
    padding: 0.25rem 0.5rem;
    text-align: center;
    transition: 0.2s ease-in-out;

    &:hover {
      background: $Black;
      color: $White;
    }
  }

  .tagInputBox {
    @include flex-item;

    .tagInput {
      flex: 1;
      text-align: center;
    }

    .tagButtonBox {
      @include flex-item;
      flex: 1;

      .typeButtonBox {
        @include flex-item(space-between);
        flex: 1;

        .typeButton {
          flex: 1;
          padding: 0.25rem 0.5rem;
        }
      }

      .addButton {
        padding: 0.25rem 0.5rem;
      }
    }
  }

  .signInputBox {
    @include flex-item;

    .signInput {
      width: 100%;
      padding: 0.25rem 0.5rem;
      text-align: center;
    }
  }

  .themeBox {
    @include flex-item;
    .themeItem {
      flex: 1;
      padding: 0.5rem;

      .themeFill {
        padding: 0.5rem;
        border-radius: 6.25rem;

        &:hover {
          .themeText {
            animation: animate 0.8s linear;
            animation-timing-function: ease-in-out;
          }
        }

        @keyframes animate {
          0% {
            rotate: 0deg;
          }
          80% {
            rotate: 390deg;
          }
          90% {
            rotate: 340deg;
          }
          100% {
            rotate: 360deg;
          }
        }
      }
    }
  }
}
</style>
