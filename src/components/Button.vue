<script>
export default {
	name: 'TsButton'
};
</script>
<script setup>
import { computed } from '@vue/runtime-dom';

const props = defineProps({
  // primary or secondary
	btnType: {
		type: String,
    default: "primary",
		required: true
	},
  // info, warning, error, success
	colorState: {
		type: String,
    default: null
	},
	text: {
		type: String,
    default: ''
	},
  // Icon left OR Icon only
	icon: {
		type: Boolean,
    default: false
	},
	iconRight: {
		type: Boolean,
    default: false
	},
});

const leftIcon = computed(() => {
	return props.btnType === 'primary' ? 'black-arrow-right' : 'caret-left';
});

const rightIcon = computed(() => {
	return props.btnType === 'primary' ? 'black-arrow-right' : 'orange-arrow-right';
});

const btnClasses = computed(() => {
  if (props.btnType === 'primary') {
    if (props.colorState) {      
      return props.colorState !== 'info' ? `text-white bg-${props.colorState}` : `bg-primary`;
    } else {
      return `bg-primary`;
    }
  } else if (props.btnType === 'secondary') {
    if (props.colorState) {      
      return `ts-secondary ts-secondary-${props.colorState}`;
    } else {
      return `ts-secondary ts-secondary-info`;
    }
  }

});

</script>

<template>  
  <button :class="`ts-button ts-primary ${ btnClasses }`">
    <img v-if="icon"
      :src="`src/assets/${ leftIcon }.svg`" 
      height="24" 
      width="24" 
    />

    <span :style="`${ icon ? `margin-left: 4px` : iconRight ? `margin-right: 4px` : ``}`">
      {{ props.text }}
    </span>

    <img v-if="iconRight"
      :src="`src/assets/${ rightIcon }.svg`" 
      height="24" 
      width="24" 
    />
  </button>
</template>

<style lang="scss" scoped>
.ts-button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 12px;
  border-radius: 8px;
}

.ts-primary {
  border: none;
}
.ts-secondary {
  background: white;
}
.ts-secondary-info {
  border: 2px solid $warning;
  color: $warning;
}
.ts-secondary-warning {
  border: 2px solid $warning;
  color: $warning;
}
.ts-secondary-error {
  border: 2px solid $error;
  color: $error;
}
.ts-secondary-success {
  border: 2px solid $success;
  color: $success;
}
</style>