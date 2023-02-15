<script>
export default {
  name: 'TsBanner'
};
</script>
<script setup>
import { computed } from '@vue/runtime-dom';
import Button from './Button.vue'

const props = defineProps({
  // info, warning, error, success
	type: {
		type: String,
		required: true,
		default: 'info'
	},
	showButtons: {
		type: Boolean,
    default: false
	}
});

const iconName = computed(() => {
	switch (props.type) {
		case 'warning':
			return 'io-warning';

		case 'error':
			return 'md-error';

		case 'success':
			return 'bi-check-circle-fill';

		default:
			return 'md-info';
	}
});

const iconFill = computed(() => {
	switch (props.type) {
		case 'warning':
			return '#C75100';

		case 'error':
			return '#CC3123';

		case 'success':
			return '#008700';

		default:
			return '#2C75DD';
	}
});
</script>

<template>
  <div :class="`ts-banner banner-bg-${ type } banner-border-${ type }`">
    <div class="ts-banner__icon">
      <v-icon
        :name="iconName" 
        :fill="iconFill" 
        height="24" 
        width="24"
      />
    </div>

    <div class="col">
      <div class="row">
        <b>
          <slot name="title"/>
        </b>
      </div>
      <div class="row">
        <div>
          <slot name="content"/>
        </div>
      </div>
      <div v-if="showButtons" class="ts-banner__actions">
        <TsButton 
          class="ts-banner__actions-secondary" 
          btn-type="secondary" 
          text="Action"
          :color-state="type"
        />
        <TsButton 
          btn-type="primary" 
          text="Action" 
          :color-state="type"
        />
      </div>
    </div>


  </div>
</template>

<style lang="scss" scoped>
.ts-banner {
  display: flex;
  flex-wrap: wrap;
  width: 720px;
  border-radius: 4px;
  padding: 24px;

  &__icon {
    margin-right: 10px;
  }

  &__actions {
    display: flex;
    margin-top: 20px;
  }

  &__actions-secondary {
    margin-right: 10px;
  }
}

.banner-border-info {  
  border: 1px solid $info;
}
.banner-border-error {  
  border: 1px solid $error;
}
.banner-border-warning {  
  border: 1px solid $warning;
}
.banner-border-success {  
  border: 1px solid $success;
}
</style>