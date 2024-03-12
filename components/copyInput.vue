<script setup>
import {onMounted} from 'vue';

const props = defineProps( ['inputValue'] );
const id = useId();

onMounted( () => {
  const clipboard = FlowbiteInstances.getInstance( 'CopyClipboard', 'target-' + id );
  const tooltip = FlowbiteInstances.getInstance( 'Tooltip', 'tooltip-' + id );
  const $defaultIcon = document.getElementById( 'default-icon-' + id );
  const $successIcon = document.getElementById( 'success-icon-' + id );
  const $defaultTooltipMessage = document.getElementById( 'default-tooltip-message-' + id );
  const $successTooltipMessage = document.getElementById( 'success-tooltip-message-' + id );

  clipboard?.updateOnCopyCallback( ( clipboard ) => {
    showSuccess();
    // reset to default state
    setTimeout( () => {
      resetToDefault();
    }, 2000 );
  } )

  const showSuccess = () => {
    $defaultIcon.classList.toggle( 'hidden' );
    $successIcon.classList.toggle( 'hidden' );
    $defaultTooltipMessage.classList.toggle( 'hidden' );
    $successTooltipMessage.classList.toggle( 'hidden' );
    tooltip.show();
  }

  const resetToDefault = () => {
    $defaultIcon.classList.toggle( 'hidden' );
    $successIcon.classList.toggle( 'hidden' );
    $defaultTooltipMessage.classList.toggle( 'hidden' );
    $successTooltipMessage.classList.toggle( 'hidden' );
    tooltip.hide();
  }
} )
</script>

<template>
  <div class="w-full">
    <div class="relative">
      <input :id="`target-${id}`"
             :value="inputValue"
             type="text"
             ref="target"
             readonly
             disabled
             class="copy-clipboard-input"
      >
      <button :id="`button-${id}`"
              ref="button"
              :data-copy-to-clipboard-target="`target-${id}`"
              :data-tooltip-target="`tooltip-${id}`"
              class="copy-clipboard-button"
      >
        <span :id="`default-icon-${id}`">
          <svg class="w-3.5 h-3.5"
               aria-hidden="true"
               xmlns="http://www.w3.org/2000/svg"
               fill="currentColor"
               viewBox="0 0 18 20">
            <path
                d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
          </svg>
        </span>
        <span :id="`success-icon-${id}`" class="hidden inline-flex items-center">
          <svg class="w-3.5 h-3.5 text-blue-700 dark:text-blue-500"
               aria-hidden="true"
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 16 12">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5"/>
          </svg>
        </span>
      </button>
      <div :id="`tooltip-${id}`" role="tooltip" class="copy-clipboard-tooltip tooltip invisible opacity-0">
        <span :id="`default-tooltip-message-${id}`">Скопировать</span>
        <span :id="`success-tooltip-message-${id}`" class="hidden">Скопировано!</span>
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.copy-clipboard-input{
  @apply col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm overflow-ellipsis rounded-lg
  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10;
}

.copy-clipboard-button{
  @apply absolute end-2 top-1/2 -translate-y-1/2 text-gray-500 hover:bg-gray-100 rounded-lg p-2 inline-flex
  items-center justify-center;
}

.copy-clipboard-tooltip{
  @apply absolute z-10 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300
  bg-gray-900 rounded-lg shadow-sm;
}
</style>