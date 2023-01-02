<template>
  <notifications
    position="top center"
    :width="460"
    :duration="3500"
    :max="2"
    style="margin-top: 1rem"
  >
    <template slot="body" slot-scope="{ item, close }">
      <div
        class="notification"
        :class="
          item.type === 'informative'
            ? 'informative'
            : item.type === 'positive'
              ? 'positive'
              : 'warning'
        "
      >
        <p class="title Body2">
          {{ item.title }}
        </p>
      </div>
    </template>
  </notifications>
</template>

<style lang="scss">
.vue-notification-group {
  .notification {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 1rem 1rem;
    padding: 1.3rem;
    font-size: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0px 4px 8px #E8E9EB;

    .iconTitleWrap {
      display: flex;
      align-items: center;

      .title {
        margin-left: 1rem;
      }
    }

    .close {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
    }
  }

  .closeIcon {
    cursor: pointer;
  }

  .informative {
    background: $BackGray;
    border: 1px solid $DarkGray;
  }

  .positive {
    background: $Green_10;
    border: 1px solid $Green;
  }

  .warning {
    background: $Orange_10;
    border: 1px solid $Orange;
  }
}

@media (max-width: 600px) {
  .vue-notification-group {
    width: 100% !important;
    top: 0 !important;
    left: 0 !important;

    .notification {
      padding: 0.75rem;

      .iconTitleWrap {
        .title {
          margin-left: 0.5rem;
        }
      }

      .close {
        display: none;
      }
    }

    .closeIcon {
      display: none;
    }
  }
}
</style>
