<template>
  <notifications
    position="left bottom"
    :width="300"
    :duration="3500"
    :max="2"
    style="margin-top: 1rem"
  >
    <template slot="body" slot-scope="{ item }">
      <div class="notification Body1 informative">
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
    padding: 1rem;
    border-radius: 0.5rem;

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

  .informative {
    color: $White;
    background: $Black;
    /* border: 1px solid $Black; */
  }
}

// @media (max-width: 600px) {
//   .vue-notification-group {
//     width: 100% !important;
//     top: 0 !important;
//     left: 0 !important;

//     .notification {
//       padding: 0.75rem;

//       .iconTitleWrap {
//         .title {
//           margin-left: 0.5rem;
//         }
//       }

//       .close {
//         display: none;
//       }
//     }

//     .closeIcon {
//       display: none;
//     }
//   }
// }
</style>
